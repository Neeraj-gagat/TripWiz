"use client"
import React, { useState, useEffect } from 'react';

export const Appbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-2 px-4' : 'py-6 px-4'}`}>
      <div className={`flex justify-between items-center max-w-[70rem] mx-auto rounded-full px-6 py-2 transition-all duration-500 ${isScrolled ? 'glass shadow-2xl shadow-black/5 border-white/40 backdrop-blur-[10px]' : 'bg-transparent'}`}>
        <a href='./' className="flex justify-center items-center gap-2 ">
            <div className="p-2 bg-gradient-to-br from-[#e91e63] to-[#ff4081] rounded-2xl shadow-2xl shadow-[#e91e63]/60">
                <img src="TripWiz-w.png" className="h-7" alt="logo" />
            </div>
            <div className="flex justify-center items-center text-[20px] ">
                <p className=" bg-[#e91e63] bg-clip-text text-transparent font-bold tracking-tighter">Trip</p>
                <p className="text-[#1a2b48] font-bold tracking-tighter">Wiz</p>
            </div>
            </a>           
            <div className="space-x-4 text-sm font-[500] text-gray-800 flex items-center">
                <button className="hidden sm:block text-slate-600 font-bold text-[12px] px-4 py-2 transition duration-300 hover:text-[#e91e63]">Login</button>
            <button className="bg-[#1a2b48] text-white px-5 py-2.5 rounded-full text-[12px] font-bold shadow-lg shadow-slate-200 hover:bg-black hover:-translate-y-0.5 transition-all">
              Join Free
            </button>
            </div>
      </div>
    </nav>
  );
};
