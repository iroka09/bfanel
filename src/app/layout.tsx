import { ReactNode } from "react";
import { Assistant } from "next/font/google"
import type { Metadata } from "next";
import Script from "next/script"
import InfoIcon from "@mui/icons-material/Info";
import Events from "@/components/Events"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "./globals.css";



const isProd = process.env.NODE_ENV === "production"


const assistant = Assistant({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "700"]
});


export function generateMetadata(): Metadata {
  return {
    title: "B-Fanel Industries",
    description: "B-Fanel Industries specializes in the production of top-quality plumbing and electrical conduit pipes. Our mission is to deliver durable, innovative, and environmentally friendly piping solutions while ensuring customer satisfaction. Our vision is to be a global leader in the piping industry through excellence and innovation.",
    keywords: ["Pipes production", "Plumbing pipes", "Conduit pipes", "Pipes supply"],
    authors: [
      {
        name: "Iroka Ntomchukwu Chisom",
        url: "https://iroka09.github.io"
      }
    ],
    openGraph: {
      images: [
        {
          url: "/bfanel.jpg",
          alt: "website's logo"
        }
      ],
      type: "website"
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${assistant.className}`}>
      <body className="font-sans p-0 m-0 dark:bg-slate-900/90 dark:text-white/90">
        <div className="flex gap-3 w-fit max-w-[80%] my-2 mx-auto rounded-md border border-red-500 text-red-700 p-3 text-sm font-bold skeleton-wave">
          <InfoIcon className="rotate-180" />
          <span>This is not the official BFanel website.</span>
        </div>
        <Header />
        {children}
        <Footer />
        <Events />
        {isProd || (
          <Script
            src="/eruda.js"
            strategy="beforeInteractive"
          />
        )}
      </body>
    </html>
  );
}
