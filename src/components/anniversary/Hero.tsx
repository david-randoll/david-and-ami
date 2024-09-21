import React from "react";
import { SparklesCore } from "../ui/sparkles";

const Hero = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-100 to-indigo-300">
            <section
                className="flex items-center justify-center h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900?romantic')" }}>
                <div className="text-center text-white bg-opacity-60 backdrop-blur-md p-8 rounded-lg">
                    <h1 className="text-5xl font-extrabold mb-4">Happy 1 Year Anniversary!</h1>
                    <p className="text-xl">A year of love, laughter, and endless memories.</p>
                </div>
                <div className="w-full absolute inset-0 h-screen">
                    <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                </div>
            </section>
        </div>
    );
};

export default Hero;
