"use client";
import React from "react";
import { InfiniteMovingImages } from "@/components/ui/infinite-moving-cards";

function shuffle(array: Array<{ src: string; alt: string }>) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}

const OurMemories = () => {
    const imagesRight = Array.from({ length: 30 }, (_, index) => ({
        src: `/first_anniversary/image${index + 1}.jpg`,
        alt: `Image ${index + 1}`,
    }));

    const imagesLeft = Array.from({ length: 30 }, (_, index) => ({
        src: `/first_anniversary/image${index + 31}.jpg`,
        alt: `Image ${index + 31}`,
    }));

    shuffle(imagesRight);
    shuffle(imagesLeft);

    return (
        <section className="py-20 bg-white">
            <h2 className="text-4xl text-center font-bold mb-12">Our Memories</h2>
            <div className="h-auto rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingImages items={imagesRight} direction="right" speed={`${imagesRight.length * 3}s`} />
                <InfiniteMovingImages items={imagesLeft} direction="left" speed={`${imagesLeft.length * 3}s`} />
            </div>
        </section>
    );
};

export default OurMemories;
