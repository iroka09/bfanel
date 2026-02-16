import React, { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script"
import InfoIcon from "@mui/icons-material/Info";
import Events from "@/components/Events"
import Header from "@/components/Header"
import GoogleLogin from "@/components/GoogleLogin"
import { lora, lato, openSans } from "@/utils/fonts"
//import { HeroUIProvider } from "@heroui/react";
import "./globals.css";
import "./custom.css";



const isDev = process.env.NODE_ENV === "development"



const title = "B-Fanel Industries Limited"
const description = "B-Fanel Industries specializes in the production of top-quality plumbing and electrical conduit pipes. Our mission is to deliver durable, innovative, and environmentally friendly piping solutions while ensuring customer satisfaction. Our vision is to be a global leader in the piping industry through excellence and innovation."


export function generateMetadata(): Metadata {
  return {
    title,
    description,
    keywords: ["Pipes production", "Plumbing pipes", "Conduit pipes", "Pipes supply"],
    authors: [
      {
        name: "Iroka Ntomchukwu Chisom",
        url: "https://iroka09.github.io"
      }
    ],
    openGraph: {
      title,
      description,
      url: "https://bfanel.vercel.app",
      siteName: title,
      images: [
        {
          url: "/logo_high.png",
          alt: "website's logo"
        }
      ],
      type: "website"
    },
    verification: {
      google: "ZulafKF0UqLIJLvCzrwmpvV1iD93LFrJZocTxwY_mas"
    }
  }
}



export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${lato.variable} ${openSans.variable}`}>
      <body className="font-sans p-0 m-0 dark:bg-slate-900 dark:text-white/90 ">
        <div className="flex gap-3 w-fit max-w-[80%] my-2 mx-auto rounded-md border border-red-500 text-red-500 p-3 text-sm font-bold skeleton-wave">
          <InfoIcon className="rotate-180" />
          <span>This is not the official BFanel website.</span>
        </div>
        <Header />
        {children}
        <Events />
        {globalThis.window && <GoogleLogin />}
        {isDev && (
          <Script
            src="/eruda.js"
            strategy="beforeInteractive"
          />
        )}
      </body>
    </html>
  );
}
