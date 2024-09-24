import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { FlipWords } from "@/components/ui/flip-words";

const typeWriterWords = [
    {
        text: "Happy",
        className: "text-white",
    },
    {
        text: "1",
        className: "text-white",
    },
    {
        text: "Year",
        className: "text-white",
    },
    {
        text: "Anniversary!",
        className: "text-white",
    },
];

const flipWords = [
    "My Love",
    "My Forever Girl",
    "Lilawattie Momma",
    "Mother of my 25 kids",
    "My Entire Future",
    "My Everything",
];

const ScrollIndicator = () => {
    return (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce text-white">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
};

const Hero = () => {
    return (
        <div className="max-h-[calc(100dvh)] bg-gradient-to-b from-gray-900 to-gray-700">
            <section className="relative flex items-center justify-center bg-cover bg-center h-[calc(100dvh)]">
                {/* Dark overlay to enhance sparkles visibility */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                    <div className="relative z-10 text-center text-white p-8 rounded-lg">
                        <div className="flex flex-col items-center justify-center">
                            <TypewriterEffectSmooth words={typeWriterWords} />
                            <FlipWords
                                duration={1000}
                                delay={3000}
                                className="text-[#FF69B4] text-xl lg:text:2xl xl:text-3xl font-bold place-self-end"
                                words={flipWords}
                            />
                        </div>
                        <p className="text-sm sm:text-xl mt-6">A year of love, laughter, and endless memories.</p>
                    </div>
                </BackgroundLines>

                {/* Sparkles */}
                <div className="w-full absolute inset-0 h-[calc(100dvh)]">
                    <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={300}
                        className="w-full h-full"
                        particleColor="#FF69B4" // Use a bright, gold color for sparkles
                    />
                </div>

                <ScrollIndicator />
            </section>
        </div>
    );
};

export default Hero;
