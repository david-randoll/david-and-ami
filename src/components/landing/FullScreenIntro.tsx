import Image from "next/image";
import React from "react";
import { RiArrowDownWideLine } from "react-icons/ri";

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
                <RiArrowDownWideLine className="text-5xl" />
            </div>
        </div>
    );
};

export default FullScreenIntro;
