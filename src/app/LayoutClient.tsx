"use client";

import Navbar from "@/components/Navbar";
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Loader } from "@/components/Loader";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 700);
        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <>
            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent dark:bg-black">
                    <Loader />
                </div>
            )}
            <ThemeProvider attribute="class">
                <Navbar />
                {!loading && children}
            </ThemeProvider>
        </>
    );
}