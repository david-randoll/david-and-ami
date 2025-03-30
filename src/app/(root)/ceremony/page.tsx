"use client";
import { useEffect } from "react";
import Head from "next/head";

export default function CeremonyRedirectPage() {
    const youtubeUrl = "https://youtu.be/v0gs1FfCZtA?si=HyXiIecH9sB-aJoj";

    useEffect(() => {
        // Use window.location for immediate redirect
        window.location.href = youtubeUrl;
    }, []);

    return (
        <>
            <Head>
                <title>Redirecting to YouTube</title>
                <meta name="robots" content="noindex, nofollow" />
                {/* Meta refresh as fallback if JavaScript is disabled */}
                <meta httpEquiv="refresh" content={`0;url=${youtubeUrl}`} />
            </Head>
            <div className="flex items-center justify-center min-h-screen bg-black text-white">
                <p>Redirecting to YouTube video...</p>
            </div>
        </>
    );
}
