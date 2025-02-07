import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: "Putra's Portfolio",
  description: "Welcome to my portfolio! I'm a software developer, gamer, graphic designer, and writer.",
};

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}