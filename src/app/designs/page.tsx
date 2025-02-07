import { CarouselDemo } from '@/components/MyCarousel'
import React from 'react'

const page = () => {
    return (
        <div className="flex flex-col gap-5 justify-center min-h-screen py-2 px-3 bg-slate-50 dark:bg-black">
            <CarouselDemo />
        </div>
    )
}

export default page