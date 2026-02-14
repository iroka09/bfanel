import React, { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script"
import InfoIcon from "@mui/icons-material/Info";
import Events from "@/components/Events"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GoogleLogin from "@/components/GoogleLogin"
import { montserrat } from "@/utils/fonts"
//import { HeroUIProvider } from "@heroui/react";
import "./globals.css";
import "./custom.css";



const isDev = process.env.NODE_ENV === "development"



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


const HeroUIProvider = ({ children }) => <>{children}</>

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.className}`}>
      <body className="font-sans p-0 m-0 dark:bg-slate-900 dark:text-white/90 text-lg">
        <HeroUIProvider>
          <div className="flex gap-3 w-fit max-w-[80%] my-2 mx-auto rounded-md border border-red-500 text-red-500 p-3 text-sm font-bold skeleton-wave">
            <InfoIcon className="rotate-180" />
            <span>This is not the official BFanel website.</span>
          </div>
          <Header />
          {children}
          <Footer />
          <Events />
          {globalThis.window && <GoogleLogin />}
          {isDev && (
            <Script
              src="/eruda.js"
              strategy="beforeInteractive"
            />
          )}
        </HeroUIProvider>
      </body>
    </html>
  );
}
