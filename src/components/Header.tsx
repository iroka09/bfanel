"use client"

import { useState, useEffect, type ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import Collapse from "@mui/material/Collapse"
import Menu from "@mui/icons-material/Menu"
import Close from "@mui/icons-material/Close"
import PaletteIcon from "@mui/icons-material/Palette"
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt"
import LightModeIcon from "@mui/icons-material/LightMode"
import CheckIcon from "@mui/icons-material/Check"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import ClickAwayListener from "@mui/material/ClickAwayListener"
import { useHeadroom } from "@mantine/hooks"
import { Spin as Hamburger } from 'hamburger-react'



export default function App(): ReactNode {
  const [inCollapse, setInCollapse] = useState(false)
  const pinned = useHeadroom({ fixedAt: 120 })
  return (<>
    <header className={`sticky top-0 inset-x-0 pr-2 py-1 flex justify-between items-center gap-2 min-w-full border-y border-slate-900/20 z-50 transition-transform duration-300 bg-white/50 dark:bg-black/30 backdrop-blur-md ${pinned ? "translate-y-0" : "-translate-y-full"}`}>
      <Link href="/" className="flex items-center">
        <Image src="/logo_low.png" width={60} height={20} alt="logo" />
        <h1 className="font-bold">B-Fanel Industries</h1>
      </Link>
      <div className="hidden md:block ml-auto">
        <Nav />
      </div>
      <div className="flex gap-4 items-center">
        <ThemeButton />
        {/*<button className="md:hidden *:text-4xl" onClick={() => setInCollapse(x => !x)}>
          {inCollapse ? <Close className="!text-3xl" /> : <Menu className="icon !text-3xl" />}
        </button>*/}
         <Hamburger toggled={inCollapse} toggle={setInCollapse} />
      </div>
    </header>
    <div className="md:hidden mobile">
      <Collapse in={inCollapse} unmountOnExit className="bg-cyan-500">
        <Nav />
      </Collapse>
    </div>
  </>)
}

function Nav(): ReactNode {
  return (
    <nav>
      <ul className="flex p-5 flex-col md:flex-row md:space-x-5">
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



type ThemeValuesType = "light" | "dark" | "system"
const themeButtons: { key: ThemeValuesType, title: string, icon: ReactNode }[] = [
  {
    key: "light",
    title: "Light Mode",
    icon: LightModeIcon
  },
  {
    key: "dark",
    title: "Dark Mode",
    icon: DarkModeIcon
  },
  {
    key: "system",
    title: "System Theme",
    icon: AppSettingsAltIcon
  },
]

function ThemeButton() {
  const [theme, setTheme] = useState<ThemeValuesType>("system")
  const [show, setShow] = useState(false)
  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme")
    if (savedTheme === "light") setTheme("light")
    else if (savedTheme === "dark") setTheme("dark")
    else setTheme("system")
  }, [])
  useEffect(() => {
    try {
      switch (theme) {
        case "light":
          document.documentElement.classList.remove("dark");
          break;
        case "dark":
          document.documentElement.classList.add("dark")
          break;
        case "system":
          const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
          function mediaQueryFn() {
            if (darkModeMediaQuery.matches) {
              document.documentElement.classList.add("dark")
            }
            else {
              document.documentElement.classList.remove("dark")
            }
          }
          mediaQueryFn()
          darkModeMediaQuery.addEventListener("change", mediaQueryFn);
          return () => darkModeMediaQuery.removeEventListener("change", mediaQueryFn);
        default:
      }
    }
    finally {
      window.localStorage.setItem("theme", theme)
    }
  }, [theme])
  return (<>
    <div className="relative md:fixed md:bottom-10 md:left-3 md:z-10 md:bg-black/50 md:rounded-md md:p-2 md:shadow-lg">
      <button onClick={() => setShow(true)}>
        <PaletteIcon className="icon text-2xl" />
      </button>
      {show &&
        <ClickAwayListener onClickAway={() => setShow(false)}>
          <ul className="absolute top-0 right-0 md:top-[initial] md:right-[initial] md:bottom-0 md:left-0 z-1 rounded-md overflow-hidden bg-slate-100 dark:bg-slate-600 *:relative *:pl-4 *:pr-14 *:py-3 text-primary *:whitespace-nowrap *:flex *:gap-3 hover:*:bg-slate-200/80 dark:hover:*:bg-slate-500/50">
            {themeButtons.map((obj, i) => (
              <li
                key={i}
                onClick={() => {
                  setTheme(obj.key)
                }}
              >
                {<obj.icon />} <span>{obj.title}</span> {theme === obj.key && <CheckIcon className="text-green-400 ml-auto absolute top-[50%] right-3 translate-y-[-50%]" />}
              </li>
            ))}
          </ul>
        </ClickAwayListener>
      }
    </div >
  </>)
}