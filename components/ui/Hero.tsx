import { MessageThreadFull } from "../tambo/message-thread-full";

export const Hero = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center pt-10">
            <h1 className="text-5xl font-bold text-gray-800 mb-4 pb-2">Discover Your Next Adventure</h1>
            <MessageThreadFull className="bg-transparent" />
            <div className="bg-transparent bg-opacity-50 p-8 rounded text-center">
                <p className="text-base text-gray-800 mb-6 font-medium">Plan your perfect trip with <b className="text-[#E31B54]">TripWiz</b> - your ultimate travel companion.</p>
                <button className="px-8 py-2 bg-gray-800 text-white font-semibold text-sm rounded hover:bg-[#E31B54] transition duration-300">Explore Hotels</button>
            </div>
        </div>
    );
}