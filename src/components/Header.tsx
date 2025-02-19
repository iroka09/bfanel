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
      <div className="hidden md:block">
        <Nav />
      </div>
      <div className="md:hidden flex gap-3">
        <ThemeButton />
        <button className="*:text-4xl" onClick={() => setInCollapse(x => !x)}>
          {inCollapse ? <Close /> : <Menu />}
        </button>
      </div>
    </header>
    <Collapse in={inCollapse} unmountOnExit className="bg-cyan-500">
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

type ThemeValues = "light" | "dark" | "system"

function ThemeButton() {
  const [theme, setTheme] = useState<ThemeValues>("system")
  const [show, setShow] = useState(false)
  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme")
    if (savedTheme === "light") {
      setTheme("light")
    } else if (savedTheme === "dark") {
      setTheme("dark")
    } else {
      setTheme("system")
    }
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
    <div className="relative md:w-fit md:fixed md:top-0 md:right-3">
      <button onClick={() => setShow(true)}>
        <PaletteIcon className="text-4xl" />
      </button>
      {show &&
        <ClickAwayListener onClickAway={() => setShow(false)}>
          <ul className="absolute top-0 md:top-[initial] md:bottom-0 right-0 z-1 rounded-md bg-slate-100 dark:bg-slate-600 *:relative *:pl-4 *:pr-14 *:py-3 text-primary *:whitespace-nowrap *:flex *:gap-3 hover:*:bg-slate-200/80 dark:hover:*:bg-slate-500/50">
            <li onClick={() => setTheme("light")}>
              <LightModeIcon /> <span>Light mode</span> {theme === "light" && <CheckIcon className="text-green-400 ml-auto absolute top-[50%] right-3 translate-y-[-50%]" />}
            </li>
            <li onClick={() => setTheme("dark")}>
              <DarkModeIcon /> <span>Dark mode</span> {theme === "dark" && <CheckIcon className="text-green-400 ml-auto absolute top-[50%] right-3 translate-y-[-50%]" />}
            </li>
            <li onClick={() => setTheme("system")}>
              <AppSettingsAltIcon /> <span>System theme</span> {theme === "system" && <CheckIcon className="text-green-400 ml-auto absolute top-[50%] right-3 translate-y-[-50%]" />}
            </li>
          </ul>
        </ClickAwayListener>
      }
    </div >
  </>)
}