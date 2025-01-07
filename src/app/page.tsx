import { Button } from '@/components/ui/moving-border';
import ThemeToggle from '../components/ThemeToggle';
import FlipWords from '../components/ui/flip-words';
import Link from 'next/link';

export default function Home() {
  const words = ["Software Dev", "Gamer", "Graphic Design", "Writer"];
  return (
    <div className="flex flex-col gap-5 justify-center min-h-screen py-2 px-3 bg-slate-50 dark:bg-black">
      <ThemeToggle/>
      <div className="text-2xl mx-auto font-medium text-neutral-600 dark:text-neutral-300">
        I'm a
        <FlipWords words={words} /> <br />
        <span className='hover:text-sky-500 cursor-default'>minimalist</span>, <span className='hover:text-rose-500 cursor-default'>stylish</span>, <span className='hover:text-indigo-500 cursor-default'>elegant.</span> 
      </div>

      <div className='flex justify-center gap-5'>

    <Link href={'/about'}>
      <Button
        borderRadius="1rem"
        className=" bg-gray-200 dark:bg-slate-900 text-indigo-400 hover:text-slate-700 dark:text-sky-400 hover:dark:text-sky-600 border-neutral-200 dark:border-slate-800"
      >
        Learn More
      </Button>
      </Link>

      <Link href={'/contact'}>
      <button className="p-[4px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg" />
        <div className="px-4 py-[9px]  dark:bg-black bg-slate-100 rounded-lg  relative group transition duration-200 dark:text-white text-indigo-500 hover:bg-transparent dark:hover:bg-transparent hover:text-white dark:hover:text-white">
          Get in Touch
        </div>
      </button>
      </Link>
      </div>
      
    </div>
  );
}
