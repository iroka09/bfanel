import { React } from "react";
import type { Metadata } from "next";
import "./globals.css";
/*
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

export function generateMetadata(): Metadata {
  return {
    title: "B-Fanel Industries",
    description: "B-Fanel Industries specializes in the production of top-quality plumbing and electrical conduit pipes. Our mission is to deliver durable, innovative, and environmentally friendly piping solutions while ensuring customer satisfaction. Our vision is to be a global leader in the piping industry through excellence and innovation.",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="p-0 m-0 dark:bg-slate-900/95 dark:text-white/90"
      >
        {children}
      </body>
    </html>
  );
}
