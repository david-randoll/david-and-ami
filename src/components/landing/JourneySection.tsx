import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export interface JourneySectionItem {
    id: string;
    type: string;
    title: string;
    date: string;
    description: string;
    linkText: string;
    linkUrl: string;
    imageSrc: string;
    accentColor: string;
    isYouTube?: boolean;
    youtubeEmbedId?: string;
}

export interface JourneySectionsProp {
    section: JourneySectionItem;
    index: number;
}
const JourneySection = ({ section, index }: JourneySectionsProp) => {
    const colorMap: any = {
        pink: {
            text: "text-pink-500",
            bg: "bg-pink-100",
            afterBg: "after:bg-pink-500",
            afterText: "after:text-pink-500",
        },
        purple: {
            text: "text-purple-500",
            bg: "bg-purple-100",
            afterBg: "after:bg-purple-500",
            afterText: "after:text-purple-500",
        },
        blue: {
            text: "text-blue-500",
            bg: "bg-blue-100",
            afterBg: "after:bg-blue-500",
            afterText: "after:text-blue-500",
        },
        teal: {
            text: "text-teal-500",
            bg: "bg-teal-100",
            afterBg: "after:bg-teal-500",
            afterText: "after:text-teal-500",
        },
        orange: {
            text: "text-orange-500",
            bg: "bg-orange-100",
            afterBg: "after:bg-orange-500",
            afterText: "after:text-orange-500",
        },
        green: {
            text: "text-green-500",
            bg: "bg-green-100",
            afterBg: "after:bg-green-500",
            afterText: "after:text-green-500",
        },
        red: {
            text: "text-red-500",
            bg: "bg-red-100",
            afterBg: "after:bg-red-500",
            afterText: "after:text-red-500",
        },
        yellow: {
            text: "text-yellow-500",
            bg: "bg-yellow-100",
            afterBg: "after:bg-yellow-500",
            afterText: "after:text-yellow-500",
        },
        gray: {
            text: "text-gray-500",
            bg: "bg-gray-100",
            afterBg: "after:bg-gray-500",
            afterText: "after:text-gray-500",
        },
        black: {
            text: "text-black",
            bg: "bg-gray-100",
            afterBg: "after:bg-black",
            afterText: "after:text-black",
        },
        white: {
            text: "text-white",
            bg: "bg-gray-100",
            afterBg: "after:bg-white",
            afterText: "after:text-white",
        },
    };

    const isReverse = index % 2 === 1;
    const isVideo = section.isYouTube && section.youtubeEmbedId;
    const youtubeEmbedId = section.youtubeEmbedId ? section.youtubeEmbedId : null;
    const textColorClass = colorMap[section.accentColor].text;
    const afterBgColorClass = colorMap[section.accentColor].afterBg;

    return (
        <div className="mb-40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Image/Video Section */}
                <div className={`lg:col-span-5 ${isReverse ? "order-1 lg:order-2" : "lg:col-start-2"}`}>
                    <div className="h-96 md:h-[36rem] relative overflow-hidden">
                        {isVideo ? (
                            <div className="absolute inset-0 w-full h-full">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${youtubeEmbedId}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen></iframe>
                            </div>
                        ) : (
                            <Image
                                src={section.imageSrc}
                                alt={section.title}
                                layout="fill"
                                objectFit="cover"
                                className="hover:scale-105 transition duration-700"
                            />
                        )}
                    </div>
                    <div className="text-center mt-4">
                        <span className={`${textColorClass} font-medium`}>{section.date}</span>
                    </div>
                </div>

                {/* Text Section */}
                <div
                    className={`lg:col-span-4 flex flex-col justify-center mb-10 ${
                        isReverse ? "order-2 lg:order-1 lg:col-start-2" : ""
                    }`}>
                    <span className={`${textColorClass} font-medium mb-3`}>
                        {`${String(index + 1).padStart(2, "0")} / ${section.type}`}
                    </span>
                    <h3 className="text-3xl font-bold mb-6">{section.title}</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">{section.description}</p>
                    <a href={section.linkUrl} target="_blank" className="group flex items-center text-lg font-medium">
                        <span
                            className={`mr-4 relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 ${afterBgColorClass} group-hover:after:w-full after:transition-all after:duration-300`}>
                            {section.linkText}
                        </span>
                        <FaArrowRight />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default JourneySection;
