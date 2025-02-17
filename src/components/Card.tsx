"use client"

import { forwardRef } from "react"
import { useInView } from "react-intersection-observer"


export default forwardRef(({ children, className = "" }, _ref) => {
  const { inView, ref } = useInView({ threshold: 0.3, triggerOnce: false })
  return (
    <div
      ref={ref}
      className={`transition-all duration-[1s] translate-y-10 opacity-0 ${inView ? "!translate-y-0 opacity-100" : ""} bg-white [:is(#products,#faqs)_&]:bg-black/10 dark:bg-black/20 p-6 shadow-lg dark:shadow-none rounded-md ${className}`}
    >
      <div ref={_ref}>
        {children}
      </div>
    </div>
  )
})