import NoteForYou from "@/components/anniversary/NoteForYou";
import Hero from "@/components/anniversary/Hero";
import OurMemories from "@/components/anniversary/OurMemories";
import React from "react";

const AnniversaryPage: React.FC = () => {
    return (
        <>
            <Hero />
            <OurMemories />
            <NoteForYou />
        </>
    );
};

export default AnniversaryPage;
