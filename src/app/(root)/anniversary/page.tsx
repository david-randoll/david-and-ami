import Footer from "@/components/anniversary/Footer";
import Hero from "@/components/anniversary/Hero";
import MemoriesGallery from "@/components/anniversary/MemoriesGallery";
import React from "react";

const AnniversaryPage: React.FC = () => {
    return (
        <>
            <Hero />
            <MemoriesGallery />
            <Footer />
        </>
    );
};

export default AnniversaryPage;
