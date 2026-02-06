

export const Appbar = () => {
    return (
        <div className="w-full h-18 bg-transparent backdrop-blur-[0.2] text-black flex items-center justify-between px-20 ">
            <img src="TripWiz.png" className="h-14" alt="logo" />
            <div className="space-x-4 text-sm font-[500] text-gray-800">
                <button className="hover:text-[#E31B54] transition duration-300 px-3 py-1 rounded">Home</button>
                <button className="hover:text-[#E31B54] transition duration-300 px-3 py-1 rounded">About</button>
                <button className="hover:text-[#E31B54] transition duration-300 px-3 py-1 rounded">Contact</button>
            </div>
        </div>
    );
}