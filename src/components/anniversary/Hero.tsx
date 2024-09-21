import React from "react";
import { SparklesCore } from "../ui/sparkles";

const Hero = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700">
            <section className="relative flex items-center justify-center h-screen bg-cover bg-center">
                {/* Dark overlay to enhance sparkles visibility */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* Content */}
                <div className="relative z-10 text-center text-white p-8 rounded-lg">
                    <h1 className="text-5xl font-extrabold mb-4">Happy 1 Year Anniversary!</h1>
                    <p className="text-xl">A year of love, laughter, and endless memories.</p>
                </div>

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
