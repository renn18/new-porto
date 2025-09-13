"use client";

import Carousel from "@/components/ui/carousel";
import ProjectShowcase from "@/components/ui/ProjectShowcase";
import { useState } from "react";

export function CarouselDemo() {
    const [selectedProjectImages, setSelectedProjectImages] = useState<string[] | null>(null);

    const slideData = [
        {
            title: "Random Poster #1",
            button: "Preview",
            src: "https://catatansibipolar.com/image/38.jpg",
            images: [
                "https://catatansibipolar.com/image/38.jpg",
            ],
        },
        {
            title: "T-Shirt Design #1",
            button: "Preview",
            src: "https://catatansibipolar.com/image/39.png",
            images: [
                "https://catatansibipolar.com/image/39.png",
            ],
        },
        {
            title: "Random Poster #2",
            button: "Preview",
            src: "https://catatansibipolar.com/image/40.png",
            images: [
                "https://catatansibipolar.com/image/40.png",
            ],
        },
        {
            title: "Random Poster#3",
            button: "Preview",
            src: "https://catatansibipolar.com/image/41.png",
            images: [
                "https://catatansibipolar.com/image/41.png",
            ],
        },
    ];

    const handlePreviewClick = (images: string[]) => {
        setSelectedProjectImages(images);
    };

    const slidesForCarousel = slideData.map(project => ({
        ...project,
        onButtonClick: () => handlePreviewClick(project.images),
    }));

    return (
        <div className="relative overflow-hidden w-full h-full py-20">
            {
                // Jika ada gambar yang dipilih, tampilkan ProjectShowcase
                selectedProjectImages ? (
                    <div className="w-full max-w-4xl mx-auto">
                        <div className="flex justify-between">
                            <button
                                onClick={() => setSelectedProjectImages(null)} // Tombol untuk kembali ke carousel
                                className="mb-6 px-4  py-2 w-auto bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors"
                            >
                                &larr; Back
                            </button>
                            <p className="text-center text-white">Click the picture for better view</p>
                        </div>
                        <ProjectShowcase images={selectedProjectImages} />
                    </div>
                ) : (
                    // Jika tidak, tampilkan Carousel
                    <Carousel slides={slidesForCarousel} />
                )
            }
        </div>
    );
}
