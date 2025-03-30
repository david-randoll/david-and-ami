import React from "react";

const Navigation = () => {
    return (
        <nav className="sticky top-0 bg-black/80 backdrop-blur-sm z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="#" className="text-xl font-bold">
                    D&I
                </a>
                <div className="flex space-x-8">
                    <a href="/anniversary" target="_blank" className="hover:text-pink-400 transition">
                        ANNIVERSARY
                    </a>
                    <a href="/count-down" target="_blank" className="hover:text-pink-400 transition">
                        COUNTDOWN
                    </a>
                    <a href="/ceremony" target="_blank" className="hover:text-pink-400 transition">
                        WEDDING
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
