
import Link from "next/link"



const subject = "INQUIRY ABOUT YOUR PRODUCTS"
const body = `
Dear Sales Team,

I hope this message finds you well.

I am writing to inquire about your products at Bfanel Industries Limited, specifically regarding your quality PVC pipes and plastics.

Could you please provide me with the following information?

Availability of the PVC pipes and plastics
Pricing details
Shipping options and timelines
Any additional specifications or features.

Thank you for your assistance. I look forward to your prompt response so that I can make an informed decision.

Best regards. 
`

const shopNowLink = `mailto: info@bfanelindustries.com?subject=${subject}&body=${encodeURIComponent(body)}`

export default function HeroButtons() {
  console.log(shopNowLink)
  return (
    <div className="space-y-3">
      <Link
        href={shopNowLink}
        className="inline-block px-5 py-2 text-xl bg-primary dark:bg-white text-white dark:text-slate-900 shadow-md rounded-full hover:opacity-80 transition active:translate-y-[5px] w-full"
      >
        Shop Now
      </Link>
      <Link
        href="/#about"
        className="inline-block px-5 py-2 text-xl border border-primary dark:border-white text-primary dark:text-white rounded-full hover:opacity-80 transition active:translate-y-[5px] w-full"
      >
        Learn More
      </Link>
    </div>
  )
}