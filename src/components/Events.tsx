"use client"

import { useEffect } from "react"

export default function App() {
  useEffect(() => {
    window.eruda?.init()
  }, [])
}