import React from "react";
import Image from "next/image";

const images = [
    {
        url: "https://source.unsplash.com/random/800x600?couple",
        alt: "Couple enjoying sunset",
    },
    {
        url: "https://source.unsplash.com/random/800x600?love",
        alt: "Heart in nature",
    },
    {
        url: "https://source.unsplash.com/random/800x600?adventure",
        alt: "Adventure together",
    },
];

const MemoriesGallery = () => {
    return (
        <section className="py-20 bg-white">
            <h2 className="text-4xl text-center font-bold mb-12">Our Memories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
                {images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src={image.url}
                            alt={image.alt}
                            width={800}
                            height={600}
                            className="w-full h-auto transition-transform transform hover:scale-105 duration-300"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MemoriesGallery;
