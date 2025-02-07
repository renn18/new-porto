import React from 'react'
import { StickyScroll } from '../../components/ui/sticky-scroll-reveal'
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact | Putra's Portfolio",
  description: "Hi there, I'm Putra. I'm an Software Dev who loves designing user interfaces and tinkering with code. ",
};

const content = [
  {
    title: "Biography",
    description:
      <>
        Hi there, I'm Putra. I'm an Software Dev who loves designing user interfaces and tinkering with code. When I'm not behind a screen, you can find me blogging or exploring the Pinterest. I'm always looking for new opportunities to learn and grow, so feel free to reach out if you'd like to chat.<br />
        <button className="mt-3 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-white dark:border-white dark:text-white text-white rounded-lg font-medium transform hover:-translate-y-1 transition duration-400">
          See CV
        </button>
      </>
    ,
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Biography
      </div>
    ),
  },
  {
    title: "Education",
    description: (
      <>
        <span className='font-bold'>High School: </span> SMAN 4 Luwu, South of Sulawesi, Indonesia. <br />
        <span className='font-bold'>Bachelor's Degree: </span>Engineering Technology Science, University Negeri Makassar, South of Sulawesi, Indonesia. GPA 3.5/4.0
      </>
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        Education
      </div>
    ),
  },
  {
    title: "Experience",
    description:
      <>

        <span className='font-bold'>Content Creator & Writer (Freelance)</span> at <span className='font-bold'>Fiverr</span> (2019-2019) <br />

        <span className='font-bold'>Software Developer Internship</span> at <span className='font-bold'>PT. Gamelab Indonesia</span> (2021-2021) <br />

        <span className='font-bold'>UI Design</span> at <span className='font-bold'>Vi Art Studio</span> (2022-2022) <br />

        <span className='font-bold'>Web Dev (Freelance)</span> at <span className='font-bold'>Upwork</span> (2024-present) <br />
      </>,
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Experience
      </div>
    ),
  },
  {
    title: "Find Me",
    description:
      <>
        Let&apos;s connect! You can find me on the following platforms:<br />
        <div className='flex gap-5 cursor-pointer'>
          <Link href={'https://github.com/renn18'} target='_blank'><i className="bi bi-github hover:text-black" style={{ fontSize: 25, opacity: 0.4 }}></i></Link>
          <Link href={'https://instagram.com/_iamrenn'} target='_blank'><i className="bi bi-instagram hover:text-indigo-500" style={{ fontSize: 25, opacity: 0.4 }}></i></Link>
          <Link href={'https://id.pinterest.com/ppskdos/'} target='_blank'><i className="bi bi-pinterest hover:text-red-500" style={{ fontSize: 25, opacity: 0.4 }}></i></Link>
          <Link href={'https://x.com/renn_tutorial'} target='_blank'><i className="bi bi-twitter-x hover:text-black" style={{ fontSize: 25, opacity: 0.4 }}></i></Link>
        </div>
      </>,
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Find Me
      </div>
    ),
  },
];

const contact = () => {
  return (
    <div className="flex flex-col gap-5 justify-center min-h-screen py-2 px-3 bg-slate-50 dark:bg-black">
      <ThemeToggle />
      <StickyScroll content={content} />
    </div>
  )
}

export default contact