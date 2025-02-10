"use client"

import { useState, ReactNode } from "react"
import Link from "next/link"
import Collapse from "@mui/material/Collapse"
import Menu from "@mui/icons-material/Menu"
import Close from "@mui/icons-material/Close"

export default function App(): ReactNode {
  const [inCollapse, setInCollapse] = useState(false)
  return (<>
    <header className="container bg-primary py-4 text-white/80 flex justify-between items-center gap-2 min-w-full">
      <Link href="/"><h1 className="text-3xl font-bold">B-Fanel</h1></Link>
      <div className="hidden md:block">
        <Nav />
      </div>
      <div className="md:hidden">
        <button className="*:text-5xl" onClick={() => setInCollapse(x => !x)}>
          {inCollapse ? <Close /> : <Menu />}
        </button>
      </div>
    </header>
    <Collapse in={inCollapse} unmountOnExit className="bg-cyan-400">
      <div className="md:hidden mobile p-5">
        <Nav />
      </div>
    </Collapse>
  </>)
}

function Nav(): ReactNode {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row md:space-x-5">
        {"About Us, Products, Services, FAQs, Contact".split(/,\s*/).map((x, i) => (
          <li key={i}>
            <Link
              href={`#${x.split(/\s+/)[0].toLowerCase()}`}
              className="block hover:[.mobile_&]:bg-black/10 [.mobile_&]:text-slate-900 text-center [.mobile_&]:font-bold [.mobile_&]:py-3 [.mobile_&]:text-xl"
            >
              {x}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}