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

const flipWords = ["", "My Love", "My Forever Girl", "My Whole Future"];

const Hero = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700">
            <section className="relative flex items-center justify-center h-screen bg-cover bg-center">
                {/* Dark overlay to enhance sparkles visibility */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                    <div className="relative z-10 text-center text-white p-8 rounded-lg">
                        <div className="flex flex-col items-center justify-center">
                            <TypewriterEffectSmooth words={typeWriterWords} />
                            <FlipWords
                                className="text-[#FF69B4] text-xl lg:text:3xl xl:text-5xl font-bold"
                                words={flipWords}
                            />
                        </div>
                        <p className="text-sm sm:text-xl mt-6">A year of love, laughter, and endless memories.</p>
                    </div>
                </BackgroundLines>

                {/* Sparkles */}
                <div className="w-full absolute inset-0 h-screen">
                    <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#FF69B4" // Use a bright, gold color for sparkles
                    />
                </div>
            </section>
        </div>
    );
};

export default Hero;
