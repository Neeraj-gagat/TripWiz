import { create } from "zustand";

export type Hotel = {
  hotelId: number;
  hotelName: string;
  starRating: number;
  reviewScore: number;
  reviewCount: number;
  currency: string;
  dailyRate: number;
  crossedOutRate?: number;
  discountPercentage?: number;
  imageURL: string;
  landingURL: string;
  includeBreakfast: boolean;
  freeWifi: boolean;
};

type SearchMeta = {
  city: string;
    checkInDate: string;
    checkOutDate: string;
    adults?: number;
  children?: number;
};

type HotelStore = {
  hotels: Hotel[];
  searchMeta: SearchMeta | null;

  setResults: (hotels: Hotel[], meta: SearchMeta) => void;
  clearResults: () => void;
};

export const useHotelStore = create<HotelStore>((set) => ({
  hotels: [],
  searchMeta: null,

  setResults: (hotels, meta) =>
    set({
      hotels,
      searchMeta: meta,
    }),

  clearResults: () =>
    set({
      hotels: [],
      searchMeta: null,
    }),
}));
