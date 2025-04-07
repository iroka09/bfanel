
import Link from "next/link"


export default function App() {
  return (
    <footer className="bg-primary text-white py-5 rounded-t-3xl">
      <div className="container text-center">
        <div className="my-5 text-sm">
          <span>Do you need a website like this?</span>
          <br />
          <Link href="https://iroka09.github.io" className="underline underline-offset-2 text-cyan-400">Click Here</Link>
        </div>
        <p className="text-xs text-center text-white/60 mt-8">&copy; 2022 - {new Date().getFullYear() + " • "} B-Fanel Industries. All Rights Reserved.</p>
      </div>
    </footer>
  )
}