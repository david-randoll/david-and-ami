"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

const MemoriesGallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const images = Array.from({ length: 61 }, (_, index) => `/first_anniversary/image${index + 1}.jpg`);

    const closeModal = () => setSelectedImage(null);

    return (
        <div className="overflow-y-auto min-w-full bg-pink-50">
            <div className="max-h-[calc(100dvh)] p-4 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            className="relative w-full h-48 overflow-hidden rounded-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedImage(src)} // Set the clicked image as the selected image
                        >
                            <motion.img
                                src={src}
                                alt={`Memory ${index + 1}`}
                                className="w-full h-full object-cover"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            />
                        </motion.div>
                    ))}
                </div>

                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                        onClick={closeModal}>
                        <motion.img
                            src={selectedImage}
                            alt="Expanded Memory"
                            className="max-w-full max-h-full object-contain"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <button className="absolute top-4 right-4 text-white text-xl" onClick={closeModal}>
                            ✕
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MemoriesGallery;
