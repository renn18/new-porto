import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import LayoutClient from "./LayoutClient";

export const metadata: Metadata = {
  title: "Putra's Portfolio",
  description: "Welcome to my portfolio! I'm a software developer, gamer, graphic designer, and writer.",
};

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}