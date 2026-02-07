 
export const PoweredBy = () => {
    return (
        <section className="py-20 relative bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-[#1a2b48]/80 text-[10px] font-black uppercase tracking-[0.4em] mb-14">
              Our Data Sources & Partners
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-20 grayscale hover:opacity-50 transition-opacity duration-700">
              <span className="text-2xl font-black text-slate-900 tracking-tighter italic">EXPEDIA</span>
              <span className="text-2xl font-black text-slate-900 tracking-tighter">airbnb</span>
              <span className="text-2xl font-black text-slate-900 tracking-tighter">BOOKING</span>
              <span className="text-2xl font-black text-slate-900 tracking-tighter italic">KAYAK</span>
              <span className="text-2xl font-black text-slate-900 tracking-tighter">Agoda</span>
            </div>
          </div>
        </section>
    )
}