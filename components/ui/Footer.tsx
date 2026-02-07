
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a2b48] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-gradient-to-br from-[#e91e63] to-[#ff4081] rounded-2xl shadow-2xl">
                <img src="TripWiz-w.png" className="h-7" alt="logo" />
            </div>
              <span className="text-xl font-bold">TripWiz</span>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Redefining the travel planning experience with generative AI. Your adventure starts with a simple &quot;Hello&quot;.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-[#e91e63]">Destinations</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Bali, Indonesia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tokyo, Japan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Paris, France</a></li>
              <li><a href="#" className="hover:text-white transition-colors">See all</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-[#e91e63]">Product</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-[#e91e63]">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">info@tripwiz.ai</a></li>
              <li><a href="#" className="hover:text-white transition-colors">+91 9876543210</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; 2026 TripWiz AI. All rights reserved. Powered by Tambo SDK.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
