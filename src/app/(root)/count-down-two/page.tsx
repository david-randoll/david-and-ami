import React from "react";
import { CountdownTwoPage } from "@/components/count-down-two/CountDownTwoTimer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Countdown Timer Two",
    description: "A second countdown timer with sparkles",
};

const CountdownTwoPagePage = () => {
    return <CountdownTwoPage />;
};

export default CountdownTwoPagePage;
