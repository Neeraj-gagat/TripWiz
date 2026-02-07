import { MessageThreadFull } from "../tambo/message-thread-full";

export const Hero = () => {
    return (
        <div className="relative w-full flex flex-col items-center justify-center pt-30">
            <div className="bg-dots "></div>
            <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-[120px] animate-blob pointer-events-none"></div>
            <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-[130px] animate-blob animation-delay-2000 pointer-events-none"></div>
            <div className="absolute top-[40%] right-[15%] w-[400px] h-[400px] bg-emerald-100/20 rounded-full blur-[110px] animate-blob animation-delay-4000 pointer-events-none"></div>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/40 border border-white/60 backdrop-blur-md mb-10 shadow-sm transition-all hover:bg-white/60 cursor-default">
            <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e91e63] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#e91e63]"></span>
            </span>
            <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-[0.2em]">Next-Gen Travel AI</span>
            </div>
            <h1 className="relative text-5xl font-bold text-[#1a2b48] mb-4 pb-2">Discover Your <b className="text-transparent bg-clip-text bg-gradient-to-r from-[#e91e63] via-[#ff4081] to-indigo-500">Next Adventure</b> </h1>
            <div className="rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-200 pt-2">
               <MessageThreadFull className="bg-zinc-50 -mt-2 rounded-xl" />
            </div>
            <div className="bg-transparent bg-opacity-50 p-8 rounded text-center">
                <p className="text-base text-gray-500 mb-6 font-medium">Plan your perfect trip with <b className="text-[#e91e63] underline underline-offset-4">TripWiz</b> - your ultimate travel companion.</p>
                <button className="px-8 py-2 bg-[#1a2b48] text-white font-semibold text-sm rounded hover:bg-[#e91e63] transition duration-300">Explore Hotels</button>
            </div>
        </div>
    );
}