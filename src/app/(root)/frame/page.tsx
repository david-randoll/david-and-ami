import Image from "next/image";
import React from "react";

const HelloAmisha = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <div className="bg-white p-8 rounded-lg shadow-xl text-center border-4 border-gray-300">
                <div className="relative inline-block">
                    <Image
                        src="/bubu-dudu.jpg"
                        alt="Cute cats"
                        className="mx-auto mb-4 w-36 h-36 rounded-full border-4 border-yellow-500"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="text-3xl font-bold text-gray-900 italic font-sans">David & Amisha</div>
            </div>
        </div>
    );
};

export default HelloAmisha;
