"use client"

import { useState } from "react"


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
    window.location.href = `mailto: info@bfanelindustries.com?subject=Customer [${name.trim()}]&email=${email}&body=${message}`
  }
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-500">Your Name</label>
        <input
          type="text"
          id="name"
          required
          name="name"
          className={`${touched.name ? "invalid:border-red-500" : ""} peer mt-1 block w-full border dark:border-transparent outline-none py-2 px-3 focus:border-cyan-500/60 border-gray-300 rounded-md shadow-sm dark:bg-black/20 dark:shadow-none`}
          value={name}
          onInput={e => handleInput("name", setName, e.target.value)}
          onBlur={() => setTouched(x => ({ ...x, name: true }))}
          pattern="^[A-z]{2,20}(\s[A-z]{2,20}){0,3}\s*$"
        />
        <span className={`hidden ${touched.name ? "peer-invalid:block" : ""} text-red-500 text-xs`}>Invalid Name! [sample: John Doe]</span>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-500">Your Email</label>
        <input
          type="email"
          id="email"
          required
          name="email"
          className={`${touched.email ? "invalid:border-red-500" : ""} peer mt-1 block w-full border dark:border-transparent outline-none py-2 px-3 focus:border-cyan-500/60 border-gray-300 rounded-md shadow-sm dark:bg-black/20`}
          value={email}
          onInput={e => handleInput("email", setEmail, e.target.value)}
          onBlur={() => setTouched(x => ({ ...x, email: true }))}
        />
        <span className={`hidden ${touched.email ? "peer-invalid:block" : ""} text-red-500 text-xs`}>Wrong Email Address.</span>
      </div>
      <div className="md:col-span-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-500">Your Message</label>
        <textarea id="message" required name="message" rows="4" className={`mt-1 block w-full border dark:border-transparent outline-none py-2 px-3 focus:border-cyan-500/60 border-gray-300 rounded-md shadow-sm dark:bg-black/20`} value={message} onInput={e => handleInput("message", setMessage, e.target.value)}></textarea>
      </div>
      <div className="md:col-span-2">
        <button type="submit" className="px-6 py-3 bg-cyan-700 hover:bg-cyan-900 transition-all text-white font-bold rounded-md ">
          Send Message
        </button>
      </div>
    </form>
  )
}