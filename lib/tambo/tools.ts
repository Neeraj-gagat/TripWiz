import { HotelSearchInputSchema, HotelSearchOutputSchema } from "./schema";

export const searchHotelsTool = {
  name: "searchHotels",
  description:
    "Search hotels using real Agoda data. Use this whenever the user asks for hotels, prices, or accommodation.",
    
  tool: async (params: any) => {
    console.log("MCP searchHotelsTool called with params:", params);
    const {
      cityId,
      checkInDate,
      checkOutDate,
      minPrice = 0,
      maxPrice = 100000,
      adults,
      children = 0,
      minStarRating,
      minReviewScore,
      discountOnly = false,
    } = params;

    const payload = {
      checkInDate,
      checkOutDate,
      cityId,
      additional: {
        currency: "EUR",
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      throw new Error("Hotel search failed");
    }

    return await response.json();
  },

  inputSchema: HotelSearchInputSchema,
  outputSchema: HotelSearchOutputSchema,
};
