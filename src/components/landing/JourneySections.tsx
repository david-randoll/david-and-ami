import Image from "next/image";
import React from "react";

const JourneySections = () => {
    return (
        <div id="journey" className="pt-24 pb-32">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-24">OUR JOURNEY</h2>

                {/* Anniversary Section */}
                <div className="mb-40">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-5 lg:col-start-2">
                            <div className="h-96 md:h-[36rem] relative overflow-hidden">
                                <Image
                                    src="/wedding/image1.jpg"
                                    alt="Our Anniversary"
                                    layout="fill"
                                    objectFit="cover"
                                    className="hover:scale-105 transition duration-700"
                                />
                            </div>
                            <div className="text-center mt-4">
                                <span className="text-pink-500 font-medium">September 25, 2024</span>
                            </div>
                        </div>
                        <div className="lg:col-span-4 flex flex-col justify-center">
                            <span className="text-pink-500 font-medium mb-3">01 / CELEBRATION</span>
                            <h3 className="text-3xl font-bold mb-6">Our One Year Anniversary</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Celebrating 365 days of love, laughter, and growth together. Join us as we reminisce
                                about our first year as a couple and all the beautiful memories we've created.
                            </p>
                            <a
                                href="/anniversary"
                                target="_blank"
                                className="group flex items-center text-lg font-medium">
                                <span className="mr-4 relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-pink-500 group-hover:after:w-full after:transition-all after:duration-300">
                                    View Anniversary
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

                {/* First Countdown Section */}
                <div className="mb-40">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-4 lg:col-start-2 flex flex-col justify-center order-2 lg:order-1">
                            <span className="text-purple-500 font-medium mb-3">02 / ANTICIPATION</span>
                            <h3 className="text-3xl font-bold mb-6">Counting Down Until We Meet</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Every second brings us closer to our next embrace. Follow our countdown as we eagerly
                                await the moment we're together again.
                            </p>
                            <a
                                href="/count-down"
                                target="_blank"
                                className="group flex items-center text-lg font-medium">
                                <span className="mr-4 relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300">
                                    View Countdown
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
                        <div className="lg:col-span-5 order-1 lg:order-2">
                            <div className="h-96 md:h-[36rem] relative overflow-hidden">
                                <Image
                                    src="/wedding/image2.jpg"
                                    alt="Countdown to Meeting"
                                    layout="fill"
                                    objectFit="cover"
                                    className="hover:scale-105 transition duration-700"
                                />
                            </div>
                            <div className="text-center mt-4">
                                <span className="text-purple-500 font-medium">February 9, 2025</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wedding Video Section - Moved to third position */}
                <div className="mb-40">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-5 lg:col-start-2">
                            <div className="h-96 md:h-[36rem] relative overflow-hidden">
                                {/* YouTube Embed */}
                                <div className="absolute inset-0 w-full h-full">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/v0gs1FfCZtA?si=kemVME4ovaDfUlUt"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <span className="text-teal-500 font-medium">February 26, 2025</span>
                            </div>
                        </div>
                        <div className="lg:col-span-4 flex flex-col justify-center">
                            <span className="text-teal-500 font-medium mb-3">03 / CELEBRATION</span>
                            <h3 className="text-3xl font-bold mb-6">Our Wedding Ceremony</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Relive the magical day when we said "I do" and began our journey as husband and wife.
                                Watch our wedding ceremony video to experience all the joy, emotion, and love we shared
                                on that special day.
                            </p>
                            <a href="/ceremony" target="_blank" className="group flex items-center text-lg font-medium">
                                <span className="mr-4 relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-teal-500 group-hover:after:w-full after:transition-all after:duration-300">
                                    Watch Wedding Video
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

                {/* Second Meeting Section - Moved to fourth position */}
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-4 lg:col-start-2 flex flex-col justify-center order-2 lg:order-1">
                            <span className="text-blue-500 font-medium mb-3">04 / REUNION</span>
                            <h3 className="text-3xl font-bold mb-6">Our Second Meeting</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                The anticipation builds as we count down to our second meeting. Each day brings new
                                excitement as we prepare to create more beautiful memories together.
                            </p>
                            <a
                                href="/count-down-two"
                                target="_blank"
                                className="group flex items-center text-lg font-medium">
                                <span className="mr-4 relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-500 group-hover:after:w-full after:transition-all after:duration-300">
                                    Second Countdown
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
                        <div className="lg:col-span-5 order-1 lg:order-2">
                            <div className="h-96 md:h-[36rem] relative overflow-hidden">
                                <Image
                                    src="/wedding/image1.jpg"
                                    alt="Second Meeting"
                                    layout="fill"
                                    objectFit="cover"
                                    className="hover:scale-105 transition duration-700"
                                />
                            </div>
                            <div className="text-center mt-4">
                                <span className="text-blue-500 font-medium">May 25, 2025</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JourneySections;