
import Link from "next/link"


export default function App() {
  return (
    <footer className="bg-neutral-900 text-white py-5 rounded-t-3xl">
      <div className="container">
        <div className="my-2 text-xs">
          <Link href="https://iroka09.github.io" className="text-white/80 underline underline">Contact the Developer</Link>
        </div>
        <p className="text-xs text-center text-white/60 mt-8">&copy; {new Date().getFullYear() + " • "} All Rights Reserved.</p>
      </div>
    </footer>
  )
}