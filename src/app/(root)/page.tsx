import CTABanner from "@/components/landing/CTABanner";
import Footer from "@/components/landing/Footer";
import FullScreenIntro from "@/components/landing/FullScreenIntro";
import JourneySections from "@/components/landing/JourneySections";
import Navigation from "@/components/landing/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "David & Ishwari | A Love Story",
    keywords: ["love story", "journey", "David", "Ishwari", "Amisha"],
    description: "A love story between David and Ishwari, celebrating their journey together.",
};

export default function Home() {
    return (
        <div className="min-h-screen  bg-black text-white font-sans">
            {/* Full-screen intro */}
            <FullScreenIntro />

            {/* Navigation */}
            <Navigation />

            {/* Journey Sections */}
            <JourneySections />

            {/* CTA Banner */}
            <CTABanner />

            {/* Footer */}
            <Footer />
        </div>
    );
}
