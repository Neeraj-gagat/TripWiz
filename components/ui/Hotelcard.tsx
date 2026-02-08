
// import React from 'react';

// type HotelCardProps = {
//   hotelId: number;
//   hotelName: string;
//   starRating: number;
//   reviewScore: number;
//   reviewCount: number;
//   currency: string;
//   dailyRate: number;
//   crossedOutRate?: number;
//   discountPercentage?: number;
//   imageURL: string;
//   landingURL: string;
//   includeBreakfast: boolean;
//   freeWifi: boolean;
// };

// export  const HotelCard: React.FC<{ hotel: HotelCardProps }> = ({ hotel }) => (
//   <div className="group bg-white/70 backdrop-blur-xl border border-slate-200/60 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500 hover:-translate-y-2 relative">
//     <div className="relative h-64 overflow-hidden">
//       <img 
//         src={hotel.imageURL} 
//         alt={hotel.hotelName} 
//         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//       />
//       <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
//         <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
//         <span className="text-sm font-bold text-slate-800">{hotel.reviewScore}</span>
//       </div>
//     </div>
    
//     <div className="p-8">
//       <div className="flex justify-between items-start mb-4">
//         <div>
//           <h3 className="text-2xl font-black text-[#1a2b48] tracking-tight group-hover:text-[#e91e63] transition-colors">{hotel.hotelName}</h3>
//           <div className="flex items-center gap-1 text-slate-400 mt-1">
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
//             <span className="text-sm font-semibold">{hotel.hotelName}</span>
//           </div>
//         </div>
//         <div className="text-right">
//           <div className="text-2xl font-black text-[#1a2b48]">{hotel.dailyRate}</div>
//           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">per night</div>
//         </div>
//       </div>
// {/* 
//       <div className="flex flex-wrap gap-2 mb-8">
//         {hotel.tags.map(tag => (
//           <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-[10px] font-bold uppercase tracking-wider border border-slate-100">
//             {tag}
//           </span>
//         ))}
//       </div> */}

//       <button className="w-full bg-[#1a2b48] text-white py-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-[#e91e63] transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-slate-200">
//         Reserve Now
//       </button>
//     </div>
//   </div>
// );

"use client";
import React from "react";

type HotelCardProps = {
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
    <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white/70 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10">
      
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={hotel.imageURL}
          alt={hotel.hotelName}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Review badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-md shadow-sm">
          <svg className="h-4 w-4 fill-yellow-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm font-bold text-slate-800">
            {hotel.reviewScore}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-black tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
              {hotel.hotelName}
            </h3>

            {/* Stars */}
            <div className="mt-1 flex items-center gap-1 text-yellow-500 text-sm">
              {"★".repeat(Math.floor(hotel.starRating))}
              <span className="ml-1 text-xs text-slate-500">
                ({hotel.reviewCount} reviews)
              </span>
            </div>

            {/* Amenities */}
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
              {hotel.freeWifi && (
                <span className="rounded-full bg-green-100 px-3 py-1 text-green-700">
                  Free Wifi
                </span>
              )}
              {hotel.includeBreakfast && (
                <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">
                  Breakfast Included
                </span>
              )}
            </div>
          </div>

          {/* Price */}
          <div className="text-right">
            {hotel.crossedOutRate && hotel.crossedOutRate > hotel.dailyRate && (
              <div className="text-sm text-slate-400 line-through">
                {hotel.currency} {hotel.crossedOutRate.toFixed(0)}
              </div>
            )}
            <div className="text-2xl font-black text-slate-900">
              {hotel.currency} {hotel.dailyRate.toFixed(0)}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400">
              per night
            </div>

            {hotel.discountPercentage && hotel.discountPercentage > 0 && (
              <div className="mt-1 text-xs font-bold text-red-600">
                {hotel.discountPercentage}% off
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <a
          href={hotel.landingURL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-2xl bg-slate-900 py-4 text-center text-sm font-black uppercase tracking-[0.25em] text-white transition-all hover:bg-indigo-600 active:scale-95"
        >
          View Deal
        </a>
      </div>
    </div>
  );
};
