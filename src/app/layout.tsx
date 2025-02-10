import { ReactNode } from "react";
import { Assistant } from "next/font/google"
import type { Metadata } from "next";
import Script from "next/script"
import Events from "@/components/Events"
import "./globals.css";


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
      type: "article"
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
      <body className="font-sans p-0 m-0 dark:bg-slate-900/90 dark:text-white/90"   >
        {children}
        <Events />
        {process.env.NODE_ENV === "development" && (
          <Script
            src="/eruda.js"
            strategy="beforeInteractive"
          />
        )}
      </body>
    </html>
  );
}
