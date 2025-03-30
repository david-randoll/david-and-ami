import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-gray-800">
            <div className="container mx-auto px-4 text-center">
                <p className="text-3xl font-bold mb-8">D & I</p>
                <p className="text-gray-500">David & Ishwari © {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;
