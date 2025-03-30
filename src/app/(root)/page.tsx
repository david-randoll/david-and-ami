import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen  bg-black text-white font-sans">
            {/* Full-screen intro */}
            <div className="h-[calc(100dvh)] relative overflow-hidden flex items-center justify-center">
                {/* Animated overlay/gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/70 via-black/50 to-pink-900/70 z-10"></div>

                {/* Background image with scrim */}
                <Image
                    src="/wedding/image1.jpg"
                    alt="David and Ishwari"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-40"
                />

                <div className="relative z-20 text-center px-4">
                    <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-6">D & I</h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
                    <p className="text-2xl md:text-3xl font-light tracking-wide mb-12">DAVID & ISHWARI</p>
                    <a
                        href="#journey"
                        className="inline-block border border-white px-10 py-3 text-lg tracking-wider hover:bg-white hover:text-black transition duration-300">
                        OUR STORY
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 5V19M12 19L5 12M12 19L19 12"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 bg-black/80 backdrop-blur-sm z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="#" className="text-xl font-bold">
                        D&I
                    </a>
                    <div className="flex space-x-8">
                        <a href="/anniversary" target="_blank" className="hover:text-pink-400 transition">
                            ANNIVERSARY
                        </a>
                        <a href="/count-down" target="_blank" className="hover:text-pink-400 transition">
                            COUNTDOWN
                        </a>
                        <a href="/ceremony" target="_blank" className="hover:text-pink-400 transition">
                            WEDDING
                        </a>
                    </div>
                </div>
            </nav>

            {/* Journey Sections */}
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
                                    Every second brings us closer to our next embrace. Follow our countdown as we
                                    eagerly await the moment we're together again.
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
                            </div>
                        </div>
                    </div>

                    {/* Second Countdown Section */}
                    <div className="mb-40">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-5 lg:col-start-2">
                                <div className="h-96 md:h-[36rem] relative overflow-hidden">
                                    <Image
                                        src="/wedding/image1.jpg"
                                        alt="Second Meeting"
                                        layout="fill"
                                        objectFit="cover"
                                        className="hover:scale-105 transition duration-700"
                                    />
                                </div>
                            </div>
                            <div className="lg:col-span-4 flex flex-col justify-center">
                                <span className="text-blue-500 font-medium mb-3">03 / REUNION</span>
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
                        </div>
                    </div>

                    {/* Wedding Video Section - Updated with YouTube Embed */}
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-4 lg:col-start-2 flex flex-col justify-center order-2 lg:order-1">
                                <span className="text-teal-500 font-medium mb-3">04 / CELEBRATION</span>
                                <h3 className="text-3xl font-bold mb-6">Our Wedding Ceremony</h3>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    Relive the magical day when we said "I do" and began our journey as husband and
                                    wife. Watch our wedding ceremony video to experience all the joy, emotion, and love
                                    we shared on that special day.
                                </p>
                                <a
                                    href="/ceremony"
                                    target="_blank"
                                    className="group flex items-center text-lg font-medium">
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
                            <div className="lg:col-span-5 order-1 lg:order-2">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Banner */}
            <div className="bg-gradient-to-r from-purple-900 to-pink-800 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-3xl font-bold mb-6">Explore Our Journey</h3>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10">
                        Discover all the special moments we've shared together and the exciting adventures that await
                        us.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/anniversary"
                            target="_blank"
                            className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition">
                            Anniversary
                        </a>
                        <a
                            href="/count-down"
                            target="_blank"
                            className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition">
                            First Countdown
                        </a>
                        <a
                            href="/count-down-two"
                            target="_blank"
                            className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition">
                            Second Countdown
                        </a>
                        <a
                            href="/ceremony"
                            target="_blank"
                            className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition">
                            Wedding Video
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-black py-12 border-t border-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-3xl font-bold mb-8">D & I</p>
                    <p className="text-gray-500">David & Ishwari © {new Date().getFullYear()}</p>
                </div>
            </footer>
        </div>
    );
}
