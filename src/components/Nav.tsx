import { ReactNode } from "react"
import Link from "next/link"

export default function Nav(): ReactNode {
  return (
    <nav>
      <ul className="flex p-5 flex-col md:flex-row md:space-x-5 [.mobile_&]:divide-y [.mobile_&]:divide-black/20  [.mobile_&]:dark:divide-white/20">
        {"About Us, Products, Services, FAQs, Contact".split(/,\s*/).map((x, i) => (
          <li key={i}>
            <Link
              href={`/#${x.split(/\s+/)[0].toLowerCase()}`}
              className="block hover:[.mobile_&]:bg-black/10 dark:hover:[.mobile_&]:bg-white/10 text-center [.mobile_&]:font-bold [.mobile_&]:py-3 [.mobile_&]:text-lg "
            >
              {x}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}