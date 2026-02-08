"use client";
import { HotelCard } from "@/components/ui/Hotelcard";
import { useHotelStore } from "@/lib/store/useHotelStore";

export default function HotelsPage() {
    const { hotels, searchMeta } = useHotelStore();

  if (!hotels.length) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500">
        Ask <span className="font-bold text-[#e91e63] ml-1">TripWiz</span> to find hotels to see results here ✨
      </div>
    );
  }

  return (
    <div className="relative pt-32 pb-24 min-h-screen">
      <div className="dot-pattern opacity-40"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Generative UI Summary Card */}
        <div className="glass rounded-[3rem] p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-10 border-white/60">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-pink-50 text-[#e91e63] rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-pink-100/50 shadow-sm">
               <span className="w-1.5 h-1.5 rounded-full bg-[#e91e63] animate-pulse"></span>
               AI Optimized View
            </span>
            <h1 className="text-xl md:text-3xl font-black text-[#1a2b48] tracking-tighter leading-tight">
              Best Stays in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e91e63] to-purple-600">{searchMeta?.city ?? "Unknown Location"}</span>
            </h1>
            <p className="text-slate-500 font-medium text-base mt-4 max-w-xl">
              We&apos;ve synthesized 4,200 data points to find these family-friendly beachfront retreats for your dates.
            </p>
          </div>

          <div className="flex gap-4 p-2 bg-slate-50/50 rounded-[2rem] border border-slate-200/50 backdrop-blur-sm">
            <div className="px-6 py-3 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Dates</div>
              <div className="text-sm font-bold text-[#1a2b48]">{searchMeta?.checkInDate} - {searchMeta?.checkOutDate}</div>
            </div>
            <div className="px-6 py-3 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Guests</div>
              <div className="text-[10px] font-bold text-[#1a2b48]">2 Adults, 2 Kids</div>
            </div>
            <button className="p-4 bg-white text-slate-800 rounded-2xl hover:bg-[#e91e63] hover:text-white transition-all shadow-sm group">
              <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
            </button>
          </div>
        </div>

        {/* Filters Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
          <div className="flex gap-3">
            {['Lowest Price', 'Top Rated', 'Distance'].map(filter => (
              <button key={filter} className="px-6 py-3 bg-white/50 backdrop-blur-md rounded-full text-xs font-bold text-slate-600 border border-slate-200 hover:border-[#e91e63] hover:text-[#e91e63] transition-all">
                {filter}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 text-slate-400 font-bold text-xs uppercase tracking-widest">
            <span>Showing 4 Results</span>
            <div className="w-px h-4 bg-slate-300"></div>
            <button className="flex items-center gap-2 hover:text-[#1a2b48] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              Filter
            </button>
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {hotels.map(hotel => (
            <HotelCard key={hotel.hotelId} hotel={hotel} />
          ))}
        </div>

        {/* Generative Interaction Prompt */}
        <div className="mt-20 flex justify-center">
            <div className="bg-[#1a2b48] text-white rounded-[2.5rem] p-8 md:p-12 w-full max-w-4xl shadow-2xl shadow-indigo-200 overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-[80px] group-hover:bg-pink-500/30 transition-all duration-700"></div>
                <div className="relative z-10">
                    <h4 className="text-pink-400 font-bold mono text-sm mb-4 tracking-widest uppercase">&gt; Refine with AI...</h4>
                    <p className="text-2xl font-bold mb-8 max-w-lg">Don&apos;t see what you need? Tell me to change the results (e.g., &quot;Find something closer to the airport&quot;).</p>
                    <div className="flex bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2">
                        <input 
                            type="text" 
                            placeholder="Type an adjustment..." 
                            className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-slate-400 px-4"
                        />
                        <button className="bg-[#e91e63] text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#e91e63] transition-all">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
