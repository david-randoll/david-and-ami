import React from "react";

const Hero = () => {
    return (
        <section
            className="flex items-center justify-center h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900?romantic')" }}>
            <div className="text-center text-white bg-opacity-60 backdrop-blur-md p-8 rounded-lg">
                <h1 className="text-5xl font-extrabold mb-4">Happy 1 Year Anniversary!</h1>
                <p className="text-xl">A year of love, laughter, and endless memories.</p>
            </div>
        </section>
    );
};

export default Hero;
