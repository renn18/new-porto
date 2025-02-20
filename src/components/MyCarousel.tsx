"use client";
import Image1 from '../assets/img/38.jpg'
import Image2 from '../assets/img/39.png'
import Image3 from '../assets/img/40.png'
import Image4 from '../assets/img/41.png'

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
    const slideData = [
        {
            title: "Random Poster #1",
            button: "Explore Component",
            src: Image1,
        },
        {
            title: "T-Shirt Design #1",
            button: "Explore Component",
            src: Image2,
        },
        {
            title: "Random Poster #2",
            button: "Explore Component",
            src: Image3,
        },
        {
            title: "Random Poster#3",
            button: "Explore Component",
            src: Image4,
        },
    ];
    return (
        <div className="relative overflow-hidden w-full h-full py-20">
            <Carousel slides={slideData} />
        </div>
    );
}
