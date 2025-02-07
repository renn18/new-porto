import React from 'react'
import { FeaturesSectionDemo } from '../../components/ui/feature-section';

function page() {
    return (
        <div className='flex flex-col gap-5 justify-center min-h-screen py-2 px-3 bg-slate-50 dark:bg-black'>
            <FeaturesSectionDemo />
        </div>
    )
}

export default page