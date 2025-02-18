import Link from "next/link"


export default function App() {
  return (
    <footer className="bg-primary text-white pb-6 pt-20 rounded-t-3xl">
      <div className="container text-center">
        <div className="flex gap-2 text-center justify-center items-cente mb-5">
          <span>Developed By</span> <Link href="https://iroka09.github.io" className="underline underline-offset-2 text-cyan-400 font-bold text-xl">TOCHI</Link>
        </div>
        <p className="text-xs text-center text-white/60">&copy; 2022-{new Date().getFullYear()} B-Fanel Industries. All Rights Reserved.</p>
      </div>
    </footer>
  )
}