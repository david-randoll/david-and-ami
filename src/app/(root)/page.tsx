export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-gray-900">Welcome to Our Special Journey</h1>
            <p className="text-lg text-gray-600 mt-2">Celebrate our love and countdown to our first meeting!</p>

            <div className="mt-6 flex space-x-4">
                <a
                    href="/anniversary"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
                    Anniversary Page
                </a>
                <a
                    href="/count-down"
                    className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition">
                    Countdown Page
                </a>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                <img src="/wedding/image1.jpg" alt="Wedding Photo 1" className="rounded-lg shadow-md w-full" />
                <img src="/wedding/image2.jpg" alt="Wedding Photo 2" className="rounded-lg shadow-md w-full" />
            </div>
        </div>
    );
}
