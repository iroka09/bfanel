

import { AboutUs } from "@/components/LearnMore"
import Footer from "@/components/Footer"
import Image from "next/image"


export default function About() {
  return (
    <>
      <div className="p-5 mb-5">
        <Image src="/logo_high.png" alt="bfanel logo" height="200" width="300" className="object-contain mb-4" />
        <AboutUs />
      </div>
      <Footer />
    </>)
}