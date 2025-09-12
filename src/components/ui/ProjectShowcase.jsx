"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Komponen ini akan menerima 'props' berupa array dari URL gambar
export default function ProjectShowcase({ images }) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    // Mengubah array string URL menjadi format yang dibutuhkan oleh Lightbox
    const slides = images.map(src => ({ src }));

    const handleImageClick = (imageIndex) => {
        setIndex(imageIndex);
        setOpen(true);
    };

    return (
        <>
            {images.map((src, idx) => (
                <div key={idx} onClick={() => handleImageClick(idx)} style={{ cursor: 'pointer' }}>
                    <Image
                        src={src}
                        alt={`Project preview ${idx + 1}`}
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            ))}

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                index={index}
            />
        </>
    );
}