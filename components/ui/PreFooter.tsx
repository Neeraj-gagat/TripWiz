
export const PreFooter: React.FC = () => {
    return (
        <section className="py-20 md:py-32 px-6 bg-[#fdf2f0] overflow-hidden relative border-y border-pink-100">
            <div className="absolute top-0 left-0 w-full h-full dot-pattern opacity-20 pointer-events-none"></div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-[52px] font-extrabold text-[#1a2b48] mb-6 tracking-tighter">Ready to see the world?</h2>
                <p className="text-slate-500 text-lg mb-12 font-medium max-w-xl mx-auto">Join the new era of travel where your interface understands your soul&apos;s desire for adventure.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-[#e91e63] text-white px-10 h-16 rounded-full font-extrabold text-base hover:shadow-2xl hover:shadow-pink-200 transition-all hover:-translate-y-1">Start Exploring Now</button>
                    <button className="bg-white text-[#1a2b48] border border-slate-200 px-10 h-16 rounded-full font-extrabold text-base hover:border-[#1a2b48] transition-all">Watch Demo</button>
                </div>
            </div>
        </section>
    )
}