"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import CountDownTimer from "@/components/count-down/CountDownTimer";

const CountdownPage = () => {
    return (
        <div className="flex items-center justify-center h-[calc(100dvh)] bg-gradient-to-b from-gray-900 to-gray-700">
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
        </div>
    );
};

export default CountdownPage;
