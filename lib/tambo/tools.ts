"use client"
import cities from "./cities.json";
import { HotelSearchInputSchema, HotelSearchOutputSchema } from "./schema";

type CityEntry = {
  cityId: string;
  cityName: string;
};

// Build lookup once
function normalizeCityName(name: string) {
  return name
    .toLowerCase()
    .replace(/\(.*?\)/g, "") // remove (NY), (CA), etc
    .replace(/[^a-z\s]/g, "") // remove punctuation
    .trim();
}

const cityLookup: Record<string, number> = Object.fromEntries(
  (cities as CityEntry[]).map((city) => [
    normalizeCityName(city.cityName),
    Number(city.cityId),
  ])
);


export const searchHotelsTool = {
  name: "searchHotels",

  description: `
Search hotels using Agoda data.

Rules:
- City name is enough (e.g. "Delhi")
- Tool automatically resolves city name to internal cityId
- "$50" always means per night
- "this week" or "next week" should be auto-resolved
- Do NOT ask follow-up questions if city + budget are known
- Call the tool immediately when intent is clear

Never ask the user for cityId.
Return results directly.
`,

  tool: async (params: any) => {
    console.log("MCP searchHotelsTool called with params:", params);

    const {
      city,                 // 👈 STRING, not cityId
      checkInDate,
      checkOutDate,
      minPrice = 0,
      maxPrice = 100000,
      adults = 1,
      children = 0,
      minStarRating,
      minReviewScore,
      discountOnly = false,
    } = params;

    if (!city) {
      throw new Error("City is required");
    }

    const normalizedCity = normalizeCityName(city);
let resolvedCityId = cityLookup[normalizedCity];

// Fallback: partial match (optional but powerful)
if (!resolvedCityId) {
  const match = Object.entries(cityLookup).find(([key]) =>
    key.includes(normalizedCity) || normalizedCity.includes(key)
  );
  if (match) {
    resolvedCityId = match[1];
  }
}

if (!resolvedCityId) {
  throw new Error(`City not supported: ${city}`);
}


    const payload = {
      checkInDate,
      checkOutDate,
      cityId:resolvedCityId,
      additional: {
        currency: "USD",
        language: "en-us",
        maxResult: 30,
        sortBy: "PriceAsc",
        discount: discountOnly,
        minimumStarRating: minStarRating,
        minimumReviewScore: minReviewScore,
        dailyRate: {
          minimum: minPrice,
          maximum: maxPrice,
        },
        occupancy: {
          numberOfAdult: adults,
          numberOfChildren: children,
        },
      },
    };

    const response = await fetch(
      "https://backend.affoda.com/api/v1/search/hotel-result",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      throw new Error("Hotel search failed");
    }

    const data = await response.json();
    return {
            meta: {
              city,
              normalizedCity,
              cityId: resolvedCityId,
              checkInDate,
              checkOutDate,
              adults,
              children,
              minPrice,
              maxPrice,
            },
            results: data.results,
            };
  },

  inputSchema: HotelSearchInputSchema,
  outputSchema: HotelSearchOutputSchema,
};
