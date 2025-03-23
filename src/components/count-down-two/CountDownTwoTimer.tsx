"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const CountdownPage = () => {
    const departDate = new Date("2025-05-25T22:30:00");
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // This will only execute on the client side
        setIsClient(true);

        // Set initial window size
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        // Handle window resize
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Set up event listener
        window.addEventListener("resize", handleResize);

        // Clean up
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Initial heart positions - create a stable array that doesn't depend on window
    const initialHeartPositions = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        // These will be updated with real values on the client
        x: i * 100,
        y: 1000,
        scale: 0.3 + i * 0.02,
        rotate: i * 5,
        duration: 15 + i * 0.5,
        delay: i * 1,
    }));

    return (
        <div className="relative h-[calc(100dvh)] w-full overflow-hidden bg-gradient-to-b from-sky-400 to-emerald-500">
            {/* Sun */}
            <div className="absolute -top-10 sm:-top-20 right-6 sm:right-10 md:right-20 w-28 sm:w-40 h-28 sm:h-40 md:w-64 md:h-64 rounded-full bg-yellow-300 opacity-80 blur-sm"></div>

            <div className="absolute inset-0 overflow-hidden">
                {/* Hearts - only rendered client-side */}
                {isClient &&
                    initialHeartPositions.slice(0, windowSize.width < 640 ? 10 : 15).map((heart) => (
                        <motion.div
                            key={`heart-${heart.id}`}
                            initial={{
                                x: Math.random() * windowSize.width,
                                y: windowSize.height + 100,
                                scale:
                                    Math.random() * (windowSize.width < 640 ? 0.2 : 0.3) +
                                    (windowSize.width < 640 ? 0.2 : 0.3),
                                rotate: Math.random() * 30 - 15,
                            }}
                            animate={{
                                y: -100,
                                rotate: Math.random() * 60 - 30,
                            }}
                            transition={{
                                duration: Math.random() * 10 + (windowSize.width < 640 ? 10 : 15),
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 10,
                            }}
                            className="absolute text-pink-400 opacity-80">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                            </svg>
                        </motion.div>
                    ))}
            </div>

            {/* Water waves at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32">
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

            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-6">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mb-6 sm:mb-8 text-center">
                    <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-md">
                        Counting Down
                    </h1>
                    <p className="text-white text-base sm:text-xl md:text-xl mt-2 opacity-90">
                        Until We're Together Again
                    </p>
                </motion.div>

                <CountdownTimer targetDate={departDate} isMobile={isClient ? windowSize.width < 640 : false} />

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-8 sm:mt-12 bg-white bg-opacity-20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white shadow-lg text-sm sm:text-base">
                    {departDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} at{" "}
                    {departDate.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}
                </motion.div>
            </div>
        </div>
    );
};

const CountdownTimer = ({ targetDate, isMobile }: { targetDate: Date; isMobile: boolean }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
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
    }, [targetDate]);

    return (
        <div className="grid grid-cols-4 md:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-8">
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
                    <div
                        className={`
                        w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 
                        rounded-xl sm:rounded-2xl 
                        bg-white bg-opacity-20 backdrop-blur-md 
                        border border-white border-opacity-30 
                        flex items-center justify-center 
                        shadow-lg relative overflow-hidden
                    `}>
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-green-400 opacity-30"></div>
                        <span className="text-3xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                            {String(item.value).padStart(2, "0")}
                        </span>
                    </div>
                    <p className="mt-1 sm:mt-2 text-white text-sm xs:text-base sm:text-lg md:text-xl font-medium">
                        {item.label}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

export default CountdownPage;
