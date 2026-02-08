import { z } from "zod";

export const HotelSearchSchema = z.object({
  checkInDate: z.string(),
  checkOutDate: z.string(),
  cityId: z.number().int(),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
  adults: z.number().int(),
  children: z.number().int().optional(),
  minStarRating: z.number().optional(),
  minReviewScore: z.number().optional(),
  discountOnly: z.boolean().optional(),
});


export const HotelSearchInputSchema = z.object({
  city: z
    .string()
    .describe("City name like Delhi, Mumbai, Dublin"),

  checkInDate: z.string().describe("YYYY-MM-DD"),
  checkOutDate: z.string().describe("YYYY-MM-DD"),

  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),

  adults: z.number().optional().default(1),
  children: z.number().optional().default(0),

  minStarRating: z.number().optional(),
  minReviewScore: z.number().optional(),

  discountOnly: z.boolean().optional(),
});

export const HotelSearchOutputSchema = z.any(); // Agoda response (OK for now)
