
import React from 'react';

const features = [
  {
    title: "Generative UI Engine",
    description: "Interfaces that build themselves in real-time. Whether it's a flight grid or a hotel gallery, the SDK renders exactly what your search requires.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    accent: "bg-blue-500"
  },
  {
    title: "Contextual Intelligence",
    description: "TripWiz doesn't just search; it understands. It synthesizes weather, budget, and local vibes to present a cohesive travel story.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    accent: "bg-pink-500"
  },
  {
    title: "Atomic Interaction",
    description: "Every UI element is an interactive micro-app. Drag an itinerary item to your calendar or tap a hotel to explore its street-view instantly.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    accent: "bg-indigo-500"
  }
];

const FeatureCard: React.FC<{ feature: typeof features[0] }> = ({ feature }) => (
  <div className="group relative p-9 rounded-[3rem] bg-white border border-slate-100 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-3 overflow-hidden">
    {/* Animated Background Highlight */}
    <div className={`absolute -right-20 -top-20 w-60 h-40 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-3xl ${feature.accent}`}></div>
    
    <div className="relative z-10">
      {/* Icon with scaling micro-interaction */}
      <div className={`w-10 h-10 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-400 mb-10 transition-all duration-500 group-hover:bg-[#e91e63] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-pink-200`}>
        {feature.icon}
      </div>
      
      <h3 className="text-[21px] font-[800] mb-5 text-[#1a2b48] tracking-tight transition-colors group-hover:text-[#e91e63]">
        {feature.title}
      </h3>
      
      <p className="text-slate-500 leading-relaxed font-medium text-[15px]">
        {feature.description}
      </p>

      {/* Discover link micro-interaction */}
      <div className="mt-8 flex items-center gap-2 text-[#e91e63] font-bold text-sm opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
        <span>Learn more</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#fafafa] relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100/20 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-[70rem] mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-pink-50 text-[#e91e63] rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-pink-100/50 shadow-sm">
               <span className="w-1.5 h-1.5 rounded-full bg-[#e91e63] animate-pulse"></span>
               Capabilities
            </span>
            <h2 className="text-3xl md:text-[50px] font-[900] text-[#1a2b48] mb-8 tracking-tighter leading-tight lg:leading-[1]">
              Travel Planning <br />
              <span className="text-slate-400">Reimagined.</span>
            </h2>
          </div>
          <div className="lg:max-w-[300px] pb-10">
            <p className="text-slate-500 text-md font-medium leading-relaxed">
              Powered by the <span className="text-[#1a2b48] font-bold">Tambo SDK</span>, TripWiz is the world&apos;s first truly generative travel platform.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>

        {/* Dynamic Proof/Summary Bar */}
        <div className="mt-24 p-1 rounded-[2.5rem] bg-gradient-to-r from-pink-100 via-slate-100 to-indigo-100 shadow-inner">
            <div className="bg-white/60 backdrop-blur-md rounded-[2.3rem] py-10 px-10 flex flex-col md:flex-row items-center justify-around gap-8">
                <div className="text-center md:text-left">
                    <div className="text-4xl font-black text-[#1a2b48]">99.8%</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Accuracy in Prediction</div>
                </div>
                <div className="h-px w-20 bg-slate-200 hidden md:block"></div>
                <div className="text-center md:text-left">
                    <div className="text-4xl font-black text-[#1a2b48]">0.4s</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">UI Generation Speed</div>
                </div>
                <div className="h-px w-20 bg-slate-200 hidden md:block"></div>
                <div className="text-center md:text-left">
                    <div className="text-4xl font-black text-[#1a2b48]">5M+</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Dynamic Routes Built</div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
