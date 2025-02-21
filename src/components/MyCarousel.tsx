"use client";

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
    const slideData = [
        {
            title: "Random Poster #1",
            button: "Explore Component",
            src: "https://catatansibipolar.com/image/38.jpg",
        },
        {
            title: "T-Shirt Design #1",
            button: "Explore Component",
            src: "https://catatansibipolar.com/image/39.png",
        },
        {
            title: "Random Poster #2",
            button: "Explore Component",
            src: "https://catatansibipolar.com/image/40.png",
        },
        {
            title: "Random Poster#3",
            button: "Explore Component",
            src: "https://catatansibipolar.com/image/41.png",
        },
    ];
    return (
        <div className="relative overflow-hidden w-full h-full py-20">
            <Carousel slides={slideData} />
        </div>
    );
}
