
import { Metadata } from "next"
import Image from "next/image"
import Card from "@/components/Card"
//import InfoIcon from "@mui/icons-material/Info"; // About Us


export const metadata: Metadata = {
  title: "About"
}


export default function About() {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <AboutCard
        imageSrc="/ADMIN_BLOCK.jpg"
        title="About Us"
        body="B-Fanel Industries specializes in the production of top-quality plumbing and electrical conduit pipes. Our mission is to deliver durable, innovative, and environmentally friendly piping solutions while ensuring customer satisfaction. Our vision is to be a global leader in the piping industry through excellence and innovation."
      />

      <AboutCard
        imageSrc="/bfanel.jpg"
        title="Our Expertise"
        body="With years of experience in the industry, we specialize in a wide range of sizes and specifications to accommodate various requirements. Our team of skilled professionals works tirelessly to innovate and improve our manufacturing processes, ensuring that our customers receive the best products available on the market."
      />
    </div>
  )
}


function AboutCard({ imageSrc, title, body, className = "" }) {
  return (
    <Card noPadding>
      <div className={"bg-white dark:bg-slate-900 overflow-hidden" + className}>
        <h2 className="font-bold text-xl py-5 uppercase text-center">{title}</h2>
        <div className="w-full h-[250px] relative border-y dark:border-y-0">
          <Image
            src={imageSrc}
            //  src={"/logo_high.png"}
            className="w-full h-full object-cover"
            alt={title + " picture"}
            fill
          />
        </div>
        <div className="py-1 text-center py-3 px-5">
          <p>{body}</p>
        </div>
      </div>
    </Card>
  )
}