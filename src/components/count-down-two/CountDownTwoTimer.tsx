"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";

export const CountdownTwoPage = () => {
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

            <CountDownTwoTimer />

            {/* Target Date Display */}
            <div className="absolute bottom-6 text-white text-lg font-semibold">
                {departDate.toDateString()} - {returnDate.toDateString()}
            </div>
        </div>
    );
};

const CountDownTwoTimer = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date("2025-02-09T23:45:00");
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center text-white p-8 m-4 rounded-lg shadow-lg bg-black bg-opacity-50 overflow-hidden">
            <h1 className="text-4xl font-bold mb-6">Till we Meet</h1>
            <div className="flex space-x-6 justify-center">
                {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => {
                    const key = label.toLowerCase() as keyof typeof timeLeft;
                    return (
                        <div key={label} className="text-center">
                            <motion.div
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.3 }} // Staggered delay for each number
                                className="text-5xl sm:text-6xl font-bold">
                                {timeLeft[key]}
                            </motion.div>
                            <p className="text-sm mt-2">{label}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CountDownTwoTimer;
