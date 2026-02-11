"use client";
import React from "react";

export type HotelCardProps = {
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

export const HotelCard: React.FC<{ hotel: HotelCardProps }> = ({ hotel }) => {
  return (
    <div className="group bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-[2rem] overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full">
      
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={hotel.imageURL}
          alt={hotel.hotelName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
        />

        {/* Star Rating */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm border border-slate-100">
          <svg className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-xs font-black text-slate-800">
            {hotel.starRating}
          </span>
        </div>

        {/* Price */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-[#1a2b48]/90 text-white px-3 py-1.5 rounded-xl backdrop-blur-md shadow-lg border border-white/10">
            <span className="text-sm font-black">
              {hotel.currency} {hotel.dailyRate}
            </span>
            <span className="text-[9px] font-bold text-slate-300 uppercase tracking-tighter ml-1">
              / nt
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="text-lg font-extrabold text-[#1a2b48] leading-tight group-hover:text-[#e91e63] transition-colors line-clamp-1">
            {hotel.hotelName}
          </h3>

          {/* Reviews */}
          <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 mt-1">
            <span className="bg-slate-100 px-2 py-0.5 rounded-md">
              {hotel.reviewScore}/10
            </span>
            <span>({hotel.reviewCount} reviews)</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
          {hotel.includeBreakfast && (
            <span className="px-2.5 py-0.5 bg-slate-50 text-slate-500 rounded-lg text-[9px] font-black uppercase tracking-wider border border-slate-100">
              Breakfast Included
            </span>
          )}

          {hotel.freeWifi && (
            <span className="px-2.5 py-0.5 bg-slate-50 text-slate-500 rounded-lg text-[9px] font-black uppercase tracking-wider border border-slate-100">
              Free Wi-Fi
            </span>
          )}
        </div>

        {/* CTA */}
        <a
          href={hotel.landingURL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center bg-[#1a2b48] text-white py-3 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#e91e63] transition-all transform hover:scale-[1.03] active:scale-95 shadow-md hover:shadow-pink-200"
        >
          View Deal
        </a>
      </div>
    </div>
  );
};

