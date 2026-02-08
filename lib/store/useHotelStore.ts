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

export  type SearchMeta = {
  city: string;
    checkInDate: string;
    checkOutDate: string;
    adults?: number;
  children?: number;
};

type HotelStore = {
  hotels: Hotel[];
  searchMeta: SearchMeta | null;

    hasRedirected: boolean;
  setHasRedirected: (value: boolean) => void;

  setResults: (hotels: Hotel[], meta: SearchMeta) => void;
  clearResults: () => void;
};

export const useHotelStore = create<HotelStore>((set) => ({
  hotels: [],
  searchMeta: null,

   hasRedirected: false,
  setHasRedirected: (value) =>
    set({ hasRedirected: value }),

  setResults: (hotels, meta) =>
    set({
      hotels,
      searchMeta: meta,
      hasRedirected: false,
    }),

  clearResults: () =>
    set({
      hotels: [],
      searchMeta: null,
      hasRedirected: false,
    }),
}));
