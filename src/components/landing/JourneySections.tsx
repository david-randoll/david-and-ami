import React from "react";
import JourneySection from "./JourneySection";

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
            imageSrc: "/wedding/image5.jpg",
            accentColor: "purple",
        },
        {
            id: "wedding-video",
            type: "CELEBRATION",
            title: "Our Wedding Ceremony",
            date: "February 26, 2025",
            description:
                'Relive the magical day when we said "I do" and began our journey as husband and wife. Watch our wedding ceremony video to experience all the joy, emotion, and love we shared on that special day.',
            linkText: "Watch Wedding Video",
            linkUrl: "/ceremony",
            imageSrc: "",
            accentColor: "teal",
            isYouTube: true,
            youtubeEmbedId: "v0gs1FfCZtA?si=kemVME4ovaDfUlUt",
        },
        {
            id: "second-countdown",
            type: "REUNION",
            title: "Our Second Meeting",
            date: "May 25, 2025",
            description:
                "The anticipation builds as we count down to our second meeting. Each day brings new excitement as we prepare to create more beautiful memories together.",
            linkText: "Second Countdown",
            linkUrl: "/count-down-two",
            imageSrc: "/wedding/image3.jpg",
            accentColor: "blue",
        },
    ],
};

const JourneySections = () => {
    return (
        <div id="journey" className="pt-24 pb-32">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-24">{journeyConfig.title}</h2>
                {journeyConfig.sections.map((section, index) => (
                    <JourneySection key={section.id} section={section} index={index} />
                ))}
            </div>
        </div>
    );
};

export default JourneySections;
