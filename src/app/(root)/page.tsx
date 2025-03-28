import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 to-blue-200 p-6 text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-lg">David & Ishwari's Love Story</h1>
            <p className="text-xl text-gray-700 mt-3">
                Welcome to our digital garden—a space where we share our love story, our journey, and our memories.
            </p>

            <div className="mt-8 flex space-x-6">
                <a
                    href="/anniversary"
                    className="px-8 py-4 bg-pink-500 text-white rounded-2xl shadow-lg hover:bg-pink-600 transition text-lg font-semibold">
                    Anniversary Page
                </a>
                <a
                    href="/count-down"
                    className="px-8 py-4 bg-purple-500 text-white rounded-2xl shadow-lg hover:bg-purple-600 transition text-lg font-semibold">
                    Countdown Page
                </a>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                <div className="relative">
                    <Image src="/wedding/image1.jpg" alt="Wedding Photo 1" className="rounded-2xl shadow-xl w-full" width={500} height={500} />
                </div>
                <div className="relative">
                    <Image src="/wedding/image2.jpg" alt="Wedding Photo 2" className="rounded-2xl shadow-xl w-full" width={500} height={500} />
                </div>
            </div>
        </div>
    );
}
