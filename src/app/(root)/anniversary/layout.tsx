import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Happy Anniversary, Amisha",
    description: "Happy Anniversary, Amisha! Here's to many more years of love and happiness.",
};

export default function AnniversaryLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>{children}</div>;
}
