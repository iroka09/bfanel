"use client"

import { useState } from "react"
import Collapse from "@mui/material/Collapse"
import Menu from "@mui/icons-material/Menu"
import Close from "@mui/icons-material/Close"

export default function () {
  const [inCollapse, setInCollapse] = useState(false)
  return (<>
    <header className="container bg-primary pt-3 text-white/80 flex justify-between items-center gap-2 min-w-full">
      <a href="/"><h1 className="text-2xl font-bold">B-Fanel</h1></a>
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

function Nav() {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row md:space-x-5 spsce-y-5">
        {"About Us, Products, Services, Contact".split(/,\s*/).map((x, i) => (
          <li key={i}>
            <a
              href={`#${x.split(/\s+/)[0].toLowerCase()}`}
              className="block hover:[.mobile_&]:bg-black/10 text-slate-900 text-center px-0 [.mobile_&]:font-bold [.mobile_&]:py-3 [.mobile_&]:px-2 text-xl"
            >
              {x}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}