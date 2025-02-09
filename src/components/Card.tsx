"use client"

import { useInView } from "react-intersection-observer"


export default function ({ children }) {
  const { inView, ref } = useInView({ threshold: 0.3, triggerOnce: false })
  return (
    <div ref={ref} className={`transition-all duration-[2s] translate-y-10 opacity-0 ${inView ? "!translate-y-0 opacity-100" : ""} bg-white [#products_&]:bg-black/10 dark:bg-black/40 p-6 shadow-lg dark:shadow-none rounded-md`}>
      {children}
    </div>
  )
}