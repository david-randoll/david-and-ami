import React from "react";

const CTABanner = () => {
    return (
        <div className="bg-gradient-to-r from-purple-900 to-pink-800 py-20">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-3xl font-bold mb-6">Explore Our Journey</h3>
                <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10">
                    Discover all the special moments we've shared together and the exciting adventures that await us.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="/anniversary"
                        target="_blank"
                        className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition">
                        Anniversary
                    </a>
                    <a
                        href="/count-down"
                        target="_blank"
                        className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition">
                        First Countdown
                    </a>
                    <a
                        href="/count-down-two"
                        target="_blank"
                        className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition">
                        Second Countdown
                    </a>
                    <a
                        href="/ceremony"
                        target="_blank"
                        className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition">
                        Wedding Video
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CTABanner;
