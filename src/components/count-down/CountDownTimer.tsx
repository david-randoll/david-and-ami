import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const CountDownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date("2025-02-10T14:00:00");
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
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-center text-white p-8 rounded-lg shadow-lg bg-black bg-opacity-50">
            <h1 className="text-4xl font-bold mb-6">Countdown to Our Special Day</h1>
            <div className="flex space-x-6">
                {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => {
                    const key = label.toLowerCase() as keyof typeof timeLeft;
                    return (
                        <div key={label} className="text-center">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.5 }} 
                                animate={{ opacity: 1, scale: 1 }} 
                                transition={{ delay: index * 0.2 }} 
                                className="text-6xl font-bold">
                                {timeLeft[key]}
                            </motion.div>
                            <p className="text-sm mt-2">{label}</p>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default CountDownTimer;
