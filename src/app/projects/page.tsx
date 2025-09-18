"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import ProjectShowcase from "@/components/ui/ProjectShowcase";


export default function page() {
    const data = [
        {
            title: "2025",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        <p className="hover:text-teal-500 text-sm md:text-xl">Pro-PTSP (Android)</p><br />
                        is a single government service application that aims to facilitate the public in obtaining information and services related to licensing and non-licensing.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <ProjectShowcase
                            images={[
                                "https://catatansibipolar.com/image/42.jpg",
                                "https://catatansibipolar.com/image/43.jpg",
                                "https://catatansibipolar.com/image/44.jpg",
                                "https://catatansibipolar.com/image/45.jpg",
                            ]}
                        />
                    </div>


                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 mt-12">
                        <p className="hover:text-teal-500 text-sm md:text-xl">E-rapor Darul As&apos;adiyah (Laravel)</p><br />
                        A nice little website application for parents to check their children&apos;s report cards. Click the title for visit the app.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <ProjectShowcase
                            images={[
                                "https://catatansibipolar.com/image/1.png",
                                "https://catatansibipolar.com/image/2.png",
                                "https://catatansibipolar.com/image/3.png",
                                "https://catatansibipolar.com/image/4.png",
                            ]}
                        />
                    </div>


                </div >
            ),
        },
        {
            title: "2024",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        <p className="hover:text-teal-500 text-sm md:text-lg">Ship Data Services (Laravel)</p><br />
                        A simple website for a shipping company. Click the title for visit the app.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <ProjectShowcase
                            images={[
                                "https://catatansibipolar.com/image/9.png",
                                "https://catatansibipolar.com/image/10.png",
                                "https://catatansibipolar.com/image/11.png",
                                "https://catatansibipolar.com/image/12.png",
                            ]}
                        />
                    </div>

                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 mt-12">
                        <p className="hover:text-teal-500 text-sm md:text-lg">Toko Secilla Grosir (Native-PHP)</p><br />
                        A simple website for a grocery store. Click the title for visit the app.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <ProjectShowcase
                            images={[
                                "https://catatansibipolar.com/image/16.png",
                                "https://catatansibipolar.com/image/13.png",
                                "https://catatansibipolar.com/image/14.png",
                                "https://catatansibipolar.com/image/15.png",
                            ]}
                        />
                    </div>


                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 mt-14">
                        <p className="hover:text-teal-500 text-sm md:text-lg">Inventory System Management (CodeIgniter)</p><br />
                        A simple website for inventory management. Click the title for visit the app.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <ProjectShowcase
                            images={[
                                "https://catatansibipolar.com/image/17.png",
                                "https://catatansibipolar.com/image/19.png",
                                "https://catatansibipolar.com/image/20.png",
                                "https://catatansibipolar.com/image/21.png",
                            ]}
                        />
                    </div>



                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        <p className="hover:text-teal-500 text-sm md:text-lg">E-repo (React)</p><br />
                        A simple website for create and manage report cards. Click the title for visit the app.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <ProjectShowcase
                            images={[
                                "https://catatansibipolar.com/image/26.png",
                                "https://catatansibipolar.com/image/27.png",
                                "https://catatansibipolar.com/image/28.png",
                                "https://catatansibipolar.com/image/29.png",
                            ]}
                        />
                    </div>

                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 mt-14">
                        <p className="hover:text-teal-500 text-sm md:text-lg">Portofolio (HTML)</p><br />
                        Old version of my portfolio website. Click the title for visit the app.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <ProjectShowcase
                            images={[
                                "https://catatansibipolar.com/image/30.png",
                                "https://catatansibipolar.com/image/31.png",
                                "https://catatansibipolar.com/image/32.png",
                                "https://catatansibipolar.com/image/33.png",
                            ]}
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        <p className="hover:text-teal-500 text-sm md:text-lg">Renn Blog (React)</p><br />
                        A simple blog website that I made using React. Click the title for visit the app.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <ProjectShowcase
                            images={[
                                "https://catatansibipolar.com/image/5.png",
                                "https://catatansibipolar.com/image/6.png",
                                "https://catatansibipolar.com/image/7.png",
                                "https://catatansibipolar.com/image/8.png",
                            ]}
                        />
                    </div>

                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 mt-14">
                        <p className="hover:text-teal-500 text-sm md:text-lg">Renn Games (React Vite)</p><br />
                        A simple website for a game store. Click the title for visit the app.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <ProjectShowcase
                            images={[
                                "https://catatansibipolar.com/image/22.png",
                                "https://catatansibipolar.com/image/23.png",
                                "https://catatansibipolar.com/image/24.png",
                                "https://catatansibipolar.com/image/25.png",
                            ]}
                        />
                    </div>

                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 mt-12">
                        <p className="hover:text-teal-500 text-sm md:text-lg">Portofolio (React)</p><br />
                        Old version of my portfolio website. Click the title for visit the app.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <ProjectShowcase
                            images={[
                                "https://catatansibipolar.com/image/34.png",
                                "https://catatansibipolar.com/image/35.png",
                                "https://catatansibipolar.com/image/36.png",
                                "https://catatansibipolar.com/image/37.png",
                            ]}
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Career Trajectory",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        I&apos;m excited to embark on my new career path in programming
                    </p>
                    <div className="mb-2 lg:mb-32">
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Basic Logic & Algorithm
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ HTML, CSS, JS
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Basic Command (CLI/Terminal)
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ PHP & MySQL
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Basic Java & OOP
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Framework CSS (Tailwindcss, Bootstrap)
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Framework JS (Nextjs, Vue, Angular, React)
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Version Control System (Git)
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Github, Docker
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Node.js
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ React Native (Expo)
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ UI (Figma, Adobe Photoshop)
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Basic Operating System (Linux)
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ RESTful APIs
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Authentication (JWT, OAuth)
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Basic AWS Services
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Deployment (Hosting, VPS, Vercel, Netlify, Heroku)
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Built a Projects
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Keep Learning
                        </div>

                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full bg-white dark:bg-black md:px-10">
            <Timeline data={data} />
        </div>
    );
}
