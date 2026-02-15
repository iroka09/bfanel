"use client"

import { useState } from "react"
import Link from "next/link"

export default function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  })
  const handleInput = (key: string, setFn: Function, val: string) => {
    setFn(val)
    setTouched(x => ({
      ...x,
      [key]: false
    }))
  }
  const handleSubmit = () => {
    window.location.href = `mailto: info@bfanelindustries.com?subject=${name.trim()}&email=${email}&body=${encodeURIComponent(message)}`
  }
  return (
    <div className="container [&_strong]:text-primary [&_label]:text-primary [&_p_:not(strong)]:text-sm">
      <h2 className="text-2xl font-bold text-primary mb-6 uppercase">Contact Us</h2>
      <p className="mb-4">
        <strong>Location:</strong> <span>At NO.16 Kilometer 10 Orlu-Ihiala road, Awo-Idemili, Imo state.</span>
      </p>
      <p className="mb-4">
        <strong>Phone:</strong> <Link href="tel:+234-703-845-0694" className="underline underline-offset-2">+234-703-845-0694</Link>
      </p>
      <p className="mb-4">
        <strong>Email:</strong> <Link href="mailto: info@bfanelindustries.com" className="underline underline-offset-2">info@bfanelindustries.com</Link>
      </p>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-500">Your Name</label>
          <input
            type="text"
            id="name"
            required
            name="name"
            className={`${touched.name && name ? "invalid:border-red-500" : ""} peer mt-1 block w-full border dark:border-transparent outline-none py-2 px-3 focus:border-secondary border-gray-300 rounded-md shadow-sm dark:bg-white/10 dark:shadow-none`}
            value={name}
            onInput={e => handleInput("name", setName, e.target.value)}
            onBlur={() => setTouched(x => ({ ...x, name: true }))}
            pattern="^[A-z]{2,20}(\s[A-z]{2,20}){0,3}\s*$"
          />
          {name && <span className={`hidden ${touched.name ? "peer-invalid:block" : ""} text-red-500 text-xs`}>Invalid Name! [sample: John Doe]</span>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-500">Your Email</label>
          <input
            type="email"
            id="email"
            required
            name="email"
            className={`${touched.email ? "invalid:border-red-500" : ""} peer mt-1 block w-full border dark:border-transparent outline-none py-2 px-3 focus:border-secondary border-gray-300 rounded-md shadow-sm dark:bg-white/10`}
            value={email}
            onInput={e => handleInput("email", setEmail, e.target.value)}
            onBlur={() => setTouched(x => ({ ...x, email: true }))}
          />
          {email && <span className={`hidden ${touched.email ? "peer-invalid:block" : ""} text-red-500 text-xs`}>Wrong Email Address.</span>}
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-500">Your Message</label>
          <textarea id="message" required name="message" rows="4" className={`${touched.message && message ? "invalid:border-red-500" : ""} peer mt-1 block w-full border dark:border-transparent outline-none py-2 px-3 focus:border-secondary border-gray-300 rounded-md shadow-sm dark:bg-white/10`} value={message} onInput={e => handleInput("message", setMessage, e.target.value)}></textarea>
          {message && <span className={`hidden ${touched.message ? "peer-invalid:block" : ""} text-red-500 text-xs`}>Enter your message.</span>}
        </div>
        <div className="md:col-span-2">
          <button type="submit" className="px-6 py-2 bg-primary dark:bg-secondary transition-all text-white font-bold rounded-md ">
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}