import { create } from "zustand";

type Hotel = {
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

type HotelStore = {
  hotels: Hotel[];
  setHotels: (hotels: Hotel[]) => void;
};

export const useHotelStore = create<HotelStore>((set) => ({
  hotels: [],
  setHotels: (hotels) => set({ hotels }),
}));
