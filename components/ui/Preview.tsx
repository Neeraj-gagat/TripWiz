

export const Preview = () => {
  return (
    <section id="preview" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-1">
          <div className="flex-1 text-left">
            <h2 className="text-3xl md:text-[41px] font-extrabold text-[#1a2b48] mb-6 tracking-tight">Personalized UI for every traveler.</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-base font-medium leading-tight">
              We don&apos;t believe in one-size-fits-all. TripWiz uses generative technology to create the tools you need in the moment. 
            </p>
            <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="font-bold text-[#e91e63] text-lg mb-1">10k+</div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Hotels Analyzed</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="font-bold text-[#e91e63] text-lg mb-1">24/7</div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">AI Support</div>
                </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-[40rem]">
            <div className="rounded-3xl overflow-hidden border-8 border-gray-100 bg-[#1a2b48] shadow-2xl p-8 text-white relative">
                <div className="absolute top-4 right-6 flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <h4 className="text-indigo-300 font-bold mb-4 mono text-xs">&gt; Initializing Travel AI...</h4>
                <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                        <div className="w-7 h-7 rounded-full bg-indigo-500 flex-shrink-0 flex items-center justify-center text-[10px] font-bold">U</div>
                        <div className="bg-slate-700/50 p-3 rounded-2xl text-xs border border-slate-600">I need a family-friendly resort in Bali with a waterpark.</div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="w-7 h-7 rounded-full bg-[#e91e63] flex-shrink-0 flex items-center justify-center text-[10px] font-bold">TW</div>
                        <div className="bg-slate-700/80 p-3 rounded-2xl text-xs border border-indigo-500/30">
                           <p className="mb-2">Searching top resorts... Generating comparison view:</p>
                           <div className="bg-white/10 p-2 rounded-lg border border-white/20">
                                <div className="h-4 w-3/4 bg-white/20 rounded mb-2"></div>
                                <div className="h-24 w-full bg-white/10 rounded flex items-center justify-center italic text-xs text-white/40">Resort Card Preview</div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
