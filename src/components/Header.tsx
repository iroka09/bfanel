"use client"

import { useState, useEffect, type ReactNode } from "react"
import Link from "next/link"
import Collapse from "@mui/material/Collapse"
import Menu from "@mui/icons-material/Menu"
import Close from "@mui/icons-material/Close"
import PaletteIcon from "@mui/icons-material/Palette"
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt"
import LightModeIcon from "@mui/icons-material/LightMode"
import CheckIcon from "@mui/icons-material/Check"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import ClickAwayListener from "@mui/material/ClickAwayListener"

export default function App(): ReactNode {
  const [inCollapse, setInCollapse] = useState(false)
  return (<>
    <header className="container bg-primary py-2 text-white/80 flex justify-between items-center gap-2 min-w-full">
      <Link href="/">
        <h1 className="text-3xl font-bold">B-Fanel</h1>
      </Link>
      <div className="hidden md:block ml-auto">
        <Nav />
      </div>
      <div className="flex gap-3">
        <ThemeButton />
        <button className="md:hidden *:text-4xl" onClick={() => setInCollapse(x => !x)}>
          {inCollapse ? <Close /> : <Menu />}
        </button>
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
        <PaletteIcon className="icon text-4xl" />
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