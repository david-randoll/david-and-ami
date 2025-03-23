"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const CountdownPage = () => {
    const departDate = new Date("2025-05-25T16:00:00");

    return (
        <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-sky-400 to-emerald-500">
            {/* Sun */}
            <div className="absolute -top-20 right-10 md:right-20 w-40 h-40 md:w-64 md:h-64 rounded-full bg-yellow-300 opacity-80 blur-sm"></div>

            {/* Animated leaves */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            x: Math.random() * 100,
                            y: -50,
                            rotate: Math.random() * 360,
                        }}
                        animate={{
                            x: [
                                Math.random() * window.innerWidth,
                                Math.random() * window.innerWidth,
                                Math.random() * window.innerWidth,
                            ],
                            y: window.innerHeight + 50,
                            rotate: Math.random() * 360 + 360,
                        }}
                        transition={{
                            duration: Math.random() * 15 + 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute w-8 h-8 text-green-600 opacity-70"
                        style={{ left: `${Math.random() * 100}%` }}>
                        {/* Simple leaf shape */}
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.5,12C17.5,8.96,15.04,6.5,12,6.5C8.96,6.5,6.5,8.96,6.5,12H17.5Z" />
                            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
                        </svg>
                    </motion.div>
                ))}
            </div>

            {/* Water waves at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32">
                <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".15"
                        fill="#0077b6"></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".3"
                        fill="#0077b6"></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        opacity=".5"
                        fill="#0077b6"></path>
                </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mb-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">Counting Down</h1>
                    <p className="text-white text-lg md:text-xl mt-2 opacity-90">Until We're Together Again</p>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
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
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 flex items-center justify-center shadow-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-green-400 opacity-30"></div>
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
