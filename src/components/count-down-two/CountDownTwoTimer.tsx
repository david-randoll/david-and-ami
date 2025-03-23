"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const CountdownPage = () => {
    const departDate = new Date("2025-05-25T16:00:00");

    return (
        <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-indigo-500 via-purple-400 to-pink-400">
            {/* Animated hearts */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(18)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: window.innerHeight + 100,
                            scale: Math.random() * 0.5 + 0.5,
                            rotate: Math.random() * 30 - 15,
                        }}
                        animate={{
                            y: -100,
                            rotate: Math.random() * 60 - 30,
                        }}
                        transition={{
                            duration: Math.random() * 20 + 15,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 10,
                        }}
                        className="absolute text-white opacity-30">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                        </svg>
                    </motion.div>
                ))}
            </div>

            {/* Subtle light rays */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-full bg-white opacity-20 blur-3xl"></div>
                <div className="absolute top-0 left-1/4 w-1/5 h-full bg-white opacity-10 blur-3xl"></div>
                <div className="absolute top-0 right-1/4 w-1/5 h-full bg-white opacity-10 blur-3xl"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mb-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">Counting Down</h1>
                    <p className="text-white text-xl md:text-2xl mt-3 opacity-90">Until We're Together Again</p>
                </motion.div>

                <CountdownTimer />

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-12 bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full text-white shadow-lg">
                    {departDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} at{" "}
                    {departDate.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}
                </motion.div>
            </div>
        </div>
    );
};

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date("2025-05-25T16:00:00");

        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return false;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            });

            return true;
        };

        calculateTimeLeft();
        const interval = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
                <motion.div
                    key={item.label}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    className="flex flex-col items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 flex items-center justify-center shadow-lg relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500 opacity-30 group-hover:opacity-40 transition-opacity"></div>
                        <span className="text-4xl md:text-5xl font-bold text-white">
                            {String(item.value).padStart(2, "0")}
                        </span>
                    </div>
                    <p className="mt-2 text-white text-lg md:text-xl font-medium">{item.label}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default CountdownTimer;
