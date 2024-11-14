"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import CountDownTimer from "@/components/count-down/CountDownTimer";

const CountdownPage = () => {
    const departDate = new Date("2025-02-09T00:00:00");
    const returnDate = new Date("2025-03-07T00:00:00");
    return (
        <div className="relative flex items-center justify-center h-[calc(100dvh)] bg-gradient-to-b from-pink-900 to-gray-700">
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

            <CountDownTimer />

            {/* Target Date Display */}
            <div className="absolute bottom-6 text-white text-lg font-semibold">
                {departDate.toDateString()} - {returnDate.toDateString()}
            </div>
        </div>
    );
};

export default CountdownPage;
