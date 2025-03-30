import Image from "next/image";
import React from "react";

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
    reverseLayout?: boolean;
}

export interface JourneySectionsProp {
    title: string;
    sections: JourneySectionItem[];
}
const JourneySection = ({ title, sections }: JourneySectionsProp) => {
    return (
        <div id="journey" className="pt-24 pb-32">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-24">{title}</h2>

                {sections.map((section, index) => (
                    <div key={section.id} className="mb-40">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Image/Video Section */}
                            <div
                                className={`lg:col-span-5 ${
                                    section.reverseLayout ? "order-1 lg:order-2" : "lg:col-start-2"
                                }`}>
                                <div className="h-96 md:h-[36rem] relative overflow-hidden">
                                    {section.isYouTube && section.youtubeEmbedId ? (
                                        <div className="absolute inset-0 w-full h-full">
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={`https://www.youtube.com/embed/${section.youtubeEmbedId}`}
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
                                    <span className={`text-${section.accentColor}-500 font-medium`}>
                                        {section.date}
                                    </span>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div
                                className={`lg:col-span-4 flex flex-col justify-center mb-10 ${
                                    section.reverseLayout ? "order-2 lg:order-1 lg:col-start-2" : ""
                                }`}>
                                <span className={`text-${section.accentColor}-500 font-medium mb-3`}>
                                    {`${String(index + 1).padStart(2, "0")} / ${section.type}`}
                                </span>
                                <h3 className="text-3xl font-bold mb-6">{section.title}</h3>
                                <p className="text-gray-400 mb-8 leading-relaxed">{section.description}</p>
                                <a
                                    href={section.linkUrl}
                                    target="_blank"
                                    className="group flex items-center text-lg font-medium">
                                    <span
                                        className={`mr-4 relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-${section.accentColor}-500 group-hover:after:w-full after:transition-all after:duration-300`}>
                                        {section.linkText}
                                    </span>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.16666 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JourneySection;
