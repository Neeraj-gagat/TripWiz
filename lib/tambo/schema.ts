import { z } from "zod";

// export const HotelSearchSchema = z.object({
//   checkInDate: z.string().min(1, "checkInDate is required"), // Format: YYYY-MM-DD
//   checkOutDate: z.string().min(1, "checkOutDate is required"),
//   cityId: z.number().int().min(1, "cityId must be a valid number"),
//   additional: z.object({
//     currency: z.string().min(1),
//     language: z.string().min(1),
//     maxResult: z.number().int().min(1),
//     sortBy: z.string().min(1),
//     discount: z.boolean().optional(),
//     minimumStarRating: z.number().int().min(0).optional(),
//     minimumReviewScore: z.number().int().min(0).optional(),
//     dailyRate: z.object({
//       minimum: z.number().int(),
//       maximum: z.number().int()
//     }),
//     occupancy: z.object({
//       numberOfAdult: z.number().int().min(1),
//       numberOfChildren: z.number().int().min(0),
//     }),
//   }),
// });

// export const HotelSearchSchema = z.object({
//   cityId: z.number().int().min(1),
//   checkInDate: z.string().min(1),
//   checkOutDate: z.string().min(1),
//   minPrice: z.number().int().optional(),
//   maxPrice: z.number().int().optional(),
//   adults: z.number().int().min(1),
//   children: z.number().int().min(0).optional(),
//   minStarRating: z.number().int().min(0).optional(),
//   minReviewScore: z.number().int().min(0).optional(),
//   discountOnly: z.boolean().optional(),
// });

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
  cityId: z.number().int(),
  checkInDate: z.string(),
  checkOutDate: z.string(),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
  adults: z.number().int(),
  children: z.number().int().optional(),
  minStarRating: z.number().optional(),
  minReviewScore: z.number().optional(),
  discountOnly: z.boolean().optional(),
});

export const HotelSearchOutputSchema = z.any(); // Agoda response (OK for now)
