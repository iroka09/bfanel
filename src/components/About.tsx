
import { Metadata } from "next"
//import InfoIcon from "@mui/icons-material/Info"; // About Us


export const metadata: Metadata = {
  title: "About"
}


export default function About() {
  return (
    <div className="[&_h2]:font-bold [&_h2]:text-xl [&_h2]:py-3 [&_p]:py-0 space-y-5 mb-8">
      <div>
        <h2>About Us</h2>
        <p>
          B-Fanel Industries specializes in the production of top-quality plumbing and electrical conduit pipes. Our mission is to deliver durable, innovative, and environmentally friendly piping solutions while ensuring customer satisfaction. Our vision is to be a global leader in the piping industry through excellence and innovation.
        </p>
      </div>
      <div>
        <h2 >Our Expertise</h2>
        <p>
          With years of experience in the industry, we specialize in a wide range of sizes and specifications to accommodate various requirements. Our team of skilled professionals works tirelessly to innovate and improve our manufacturing processes, ensuring that our customers receive the best products available on the market.
        </p>
      </div>
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