import Image from "next/image";
import React from "react";

// Define types for our journey section items
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

export const JourneySection: React.FC<JourneySectionsProp> = ({ title, sections }) => {
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

// This could be imported from a JSON file or fetched from an API
const journeyConfig = {
    title: "OUR JOURNEY",
    sections: [
        {
            id: "anniversary",
            type: "CELEBRATION",
            title: "Our One Year Anniversary",
            date: "September 25, 2024",
            description:
                "Celebrating 365 days of love, laughter, and growth together. Join us as we reminisce about our first year as a couple and all the beautiful memories we've created.",
            linkText: "View Anniversary",
            linkUrl: "/anniversary",
            imageSrc: "/wedding/image1.jpg",
            accentColor: "pink",
            reverseLayout: false,
        },
        {
            id: "first-countdown",
            type: "ANTICIPATION",
            title: "Counting Down Until We Meet",
            date: "February 9, 2025",
            description:
                "Every second brings us closer to our next embrace. Follow our countdown as we eagerly await the moment we're together again.",
            linkText: "View Countdown",
            linkUrl: "/count-down",
            imageSrc: "/wedding/image2.jpg",
            accentColor: "purple",
            reverseLayout: true,
        },
        {
            id: "second-countdown",
            type: "REUNION",
            title: "Our Second Meeting",
            date: "February 26, 2025",
            description:
                "The anticipation builds as we count down to our second meeting. Each day brings new excitement as we prepare to create more beautiful memories together.",
            linkText: "Second Countdown",
            linkUrl: "/count-down-two",
            imageSrc: "/wedding/image1.jpg",
            accentColor: "blue",
            reverseLayout: false,
        },
        {
            id: "wedding-video",
            type: "CELEBRATION",
            title: "Our Wedding Ceremony",
            date: "May 25, 2025",
            description:
                'Relive the magical day when we said "I do" and began our journey as husband and wife. Watch our wedding ceremony video to experience all the joy, emotion, and love we shared on that special day.',
            linkText: "Watch Wedding Video",
            linkUrl: "/ceremony",
            imageSrc: "",
            accentColor: "teal",
            reverseLayout: true,
            isYouTube: true,
            youtubeEmbedId: "v0gs1FfCZtA?si=kemVME4ovaDfUlUt",
        },
    ],
};

const JourneySections = () => {
    return (
        <div>
            {/* Other components */}
            <JourneySection title={journeyConfig.title} sections={journeyConfig.sections} />
            {/* Other components */}
        </div>
    );
};

export default JourneySections;
