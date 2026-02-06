

export const Appbar = () => {
    return (
        <div className="w-full h-16 bg-[#F6F0D7] backdrop-blur-[0.2] text-black flex items-center justify-between px-20 ">
            <div className="text-xl font-bold text-[#26CCC2]">TripWiz</div>
            <div className="space-x-4 text-md font-[500] text-gray-600">
                <button className="hover:bg-gray-700 px-3 py-1 rounded">Home</button>
                <button className="hover:bg-gray-700 px-3 py-1 rounded">About</button>
                <button className="hover:bg-gray-700 px-3 py-1 rounded">Contact</button>
            </div>
        </div>
    );
}