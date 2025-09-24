"use client";
import { Button } from '@/components/ui/moving-border';
import ThemeToggle from '../components/ThemeToggle';
import FlipWords from '../components/ui/flip-words';
import Link from 'next/link';
import { Modal1 } from '@/components/Modal';
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const words = ["Software Dev", "Gamer", "Graphic Design", "Writer"];
  return (
    <div className="flex flex-col gap-5 justify-center min-h-screen py-2 px-3 bg-slate-50 dark:bg-black">
      <ThemeToggle />
      <div className="text-2xl mx-auto font-medium text-neutral-600 dark:text-neutral-300">
        I'm a
        <FlipWords words={words} /> <br />
        <span className='hover:text-sky-500 cursor-default'>minimalist</span>, <span className='hover:text-rose-500 cursor-default'>stylish</span>, <span className='hover:text-indigo-500 cursor-default'>elegant.</span>
      </div>

      <div className='flex justify-center gap-5'>
        <Link href={'/about'}>
          <Button
            borderRadius="1rem"
            className="bg-gray-200 dark:bg-slate-900 text-indigo-400 hover:text-slate-700 dark:text-sky-400 hover:dark:text-sky-600 border-neutral-200 dark:border-slate-800"
          >
            Learn More
          </Button>
        </Link>

        {/* <Link href={'/contact'}>
          <button className="p-[4px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg" />
            <div className="px-4 py-[9px] dark:bg-black bg-slate-100 rounded-lg relative group transition duration-200 dark:text-white text-indigo-500 hover:bg-transparent dark:hover:bg-transparent hover:text-white dark:hover:text-white">
              Get in Touch
            </div>
          </button>
        </Link> */}

        <Modal1 onClose={() => setIsModalOpen(false)} />
      </div>

      <div className="hidden md:flex justify-center items-center my-10 overflow-x-auto relative z-20 no-visible-scrollbar" style={{ scrollbarWidth: 'none' }}>
        <div className="flex items-center space-x-2 mr-4">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:h-10 md:w-10 h-4 w-4 text-neutral-500 hover:text-white flex-shrink-0 stroke-1">
              <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
              <path d="M15 12v-3"></path>
            </svg>
          </span>
          <span className="text-sm font-semibold text-neutral-500 flex-shrink-0 hover:text-white">Next.js</span>
        </div>
        <div className="flex items-center space-x-2 mr-4">
          <span>
            <svg fill="currentColor" width="30" height="30" viewBox="0 0 32 32" className='text-neutral-500 hover:text-yellow-300' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.188 20.896l3.151-20.281c0.104-0.688 1.031-0.844 1.354-0.229l3.391 6.359zM27.578 25.818l-3-18.667c-0.099-0.578-0.807-0.802-1.224-0.391l-18.932 19.057 10.474 5.906c0.656 0.37 1.458 0.37 2.115 0zM19.068 9.531l-2.427-4.646c-0.271-0.516-1.010-0.516-1.281 0l-10.651 19.094z"></path> </g></svg>
          </span>
          <span className="text-sm font-semibold text-neutral-500 flex-shrink-0 hover:text-yellow-300">Firebase</span>
        </div>
        <div className="flex items-center space-x-2 mr-4">
          <span>
            <svg stroke="currentColor" width="24" height="24" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="md:h-10 md:w-10 h-4 w-4 text-neutral-500 hover:text-sky-400" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
            </svg>
          </span>
          <span className="text-sm font-semibold text-neutral-500 flex-shrink-0 hover:text-sky-400">TailwindCSS</span>
        </div>
        <div className="flex items-center space-x-2 mr-4">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:h-10 md:w-10 h-4 w-4 text-neutral-500 hover:text-yellow-400 flex-shrink-0 stroke-1">
              <path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path>
              <path d="M20 12l-8 8l-4 -4"></path>
            </svg>
          </span>
          <span className="text-sm font-semibold text-neutral-500 hover:text-yellow-400 flex-shrink-0">Framer Motion</span>
        </div>
      </div>
    </div>
  );
}
