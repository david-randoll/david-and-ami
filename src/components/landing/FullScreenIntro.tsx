import Image from "next/image";
import React from "react";

const FullScreenIntro = () => {
    return (
        <div className="h-[calc(100dvh)] relative overflow-hidden flex items-center justify-center">
            {/* Animated overlay/gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/70 via-black/50 to-pink-900/70 z-10"></div>

            {/* Background image with scrim */}
            <Image
                src="/wedding/image1.jpg"
                alt="David and Ishwari"
                layout="fill"
                objectFit="cover"
                className="opacity-40"
            />

            <div className="relative z-20 text-center px-4">
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-6">D & I</h1>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
                <p className="text-2xl md:text-3xl font-light tracking-wide mb-12">DAVID & ISHWARI</p>
                <a
                    href="#journey"
                    className="inline-block border border-white px-10 py-3 text-lg tracking-wider hover:bg-white hover:text-black transition duration-300">
                    OUR STORY
                </a>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 5V19M12 19L5 12M12 19L19 12"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
};

export default FullScreenIntro;
