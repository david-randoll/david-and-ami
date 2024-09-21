import Footer from "@/components/anniversary/Footer";
import Hero from "@/components/anniversary/Hero";
import MemoriesGallery from "@/components/anniversary/MemoriesGallery";
import React from "react";

const AnniversaryPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-100 to-indigo-300">
            <Hero />
            <MemoriesGallery />
            <Footer />
        </div>
    );
};

export default AnniversaryPage;
