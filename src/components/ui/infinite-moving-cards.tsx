"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingImages = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        src: string;
        alt: string;
    }[];
    direction?: "left" | "right";
    speed?: string;
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                "--animation-direction",
                direction === "left" ? "forwards" : "reverse"
            );
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            containerRef.current.style.setProperty("--animation-duration", speed);
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}>
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap items-center justify-center",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}>
                {items.map((item, idx) => (
                    <li className="w-[100px]  relative rounded-2xl flex-shrink-0 overflow-hidden" key={item.alt}>
                        <Image src={item.src} alt={item.alt} className="object-cover" width={500} height={500} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
