
import { Metadata } from "next"
import Image from "next/image"
//import InfoIcon from "@mui/icons-material/Info"; // About Us


export const metadata: Metadata = {
  title: "About"
}


export default function About() {
  return (
    <div>
      <Card
        imageSrc="/images/about.jpg"
        title="About Us"
        body="B-Fanel Industries specializes in the production of top-quality plumbing and electrical conduit pipes. Our mission is to deliver durable, innovative, and environmentally friendly piping solutions while ensuring customer satisfaction. Our vision is to be a global leader in the piping industry through excellence and innovation."
      />

      <Card
        imageSrc="/images/expertise.jpg"
        title="Our Expertise"
        body="With years of experience in the industry, we specialize in a wide range of sizes and specifications to accommodate various requirements. Our team of skilled professionals works tirelessly to innovate and improve our manufacturing processes, ensuring that our customers receive the best products available on the market."
      />
      <div>
        <h2>Our Values</h2>
        <ul className="list-inside list-disc [&_strong]:pr-2">
          <li>
            <strong>Quality:</strong> We prioritize the highest standards in every aspect of our production.
          </li>
          <li>
            <strong>Integrity:</strong> Honesty and transparency guide our interactions with customers and partners.
          </li>
          <li>
            <strong>Innovation:</strong> We embrace change and continuously seek new ways to enhance our products and services.
          </li>
          <li>
            <strong>Customer Focus:</strong> Your satisfaction is our priority, and we are dedicated to meeting your needs with personalized service.
          </li>
        </ul>
      </div>
    </div>
  )
}


function Card({ imageSrc, title, body, className = "" }) {
  return (
    <div className={"container rounded-md bg-white my-4" + className}>
      <div className="w-full h-[200px] relative">
        <Image
          // src={imageSrc}
          src={"/logo_high.png"}
          alt={title + " picture"}
          fill
        />
      </div>
      <div className="py-1">
        <h2 className="font-bold text-xl py-3">{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  )
}