"use client";
import React from "react";
import Image from "next/image";
import { InfiniteMovingImages } from "@/components/ui/infinite-moving-cards";

const MemoriesGallery = () => {
    const images = Array.from({ length: 11 }, (_, index) => ({
        src: `/first_anniversary/image${index + 1}.jpg`,
        alt: `Image ${index + 1}`,
    }));

    return (
        <section className="py-20 bg-white">
            <h2 className="text-4xl text-center font-bold mb-12">Our Memories</h2>
            <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingImages items={images} direction="right" speed={`${images.length * 10}s`} />
            </div>
        </section>
    );
};

export default MemoriesGallery;
