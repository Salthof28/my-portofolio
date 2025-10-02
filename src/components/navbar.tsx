"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Brain, FileUser, Home, Phone, SquareChartGantt, Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth >= 1024) { // 1024px = lg breakpoint tailwind
            setOpen(false)
        }
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

  return (
    <header className="flex items-center fixed h-screen z-50">
      {/* Tombol hamburger cuma muncul di mobile */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-20">
        <button onClick={() => setOpen(!open)} className="bg-[#0BA98C] text-white p-3 rounded-full shadow-lg"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Nav yang sama untuk desktop & mobile */}
      <nav className={`fixed z-10 items-center gap-[0.2rem] lg:bg-white/3 px-[0.6rem] py-[0.8rem] rounded-full transition-all duration-300 ${open ? "flex bottom-20 left-1/2 -translate-x-1/2 flex-row lg:flex-col bg-black/100" : "hidden lg:flex flex-col left-0 ml-2"}  // default`}>
        <Link href={`/#home`} className={`text-[#0BA98C] hover:drop-shadow-[0_0_0.75rem_rgba(0,255,255,0.427)] transition duration-300`}>
          <Home className="w-[2rem] h-[2rem] lg:w-[2.5rem] lg:h-[2.5rem]" strokeWidth={1.3}/>
        </Link>
        <Link href={`/#about`} className={`text-[#0BA98C] hover:drop-shadow-[0_0_0.75rem_rgba(0,255,255,0.427)] transition duration-300`}>
          <FileUser className="w-[2rem] h-[2rem] lg:w-[2.5rem] lg:h-[2.5rem]" strokeWidth={1.3}/>
        </Link>
        <Link href={`/#skills`} className={`text-[#0BA98C] hover:drop-shadow-[0_0_0.75rem_rgba(0,255,255,0.427)] transition duration-300`}>
          <Brain className="w-[2rem] h-[2rem] lg:w-[2.5rem] lg:h-[2.5rem]" strokeWidth={1.3}/>
        </Link>
        <Link href={`/projects`} className={`text-[#0BA98C] hover:drop-shadow-[0_0_0.75rem_rgba(0,255,255,0.427)] transition duration-300`}>
          <SquareChartGantt className="w-[2rem] h-[2rem] lg:w-[2.5rem] lg:h-[2.5rem]" strokeWidth={1.3}/>
        </Link>
        <Link href={`/`} className={`text-[#0BA98C] hover:drop-shadow-[0_0_0.75rem_rgba(0,255,255,0.427)] transition duration-300`}>
          <Phone className="w-[2rem] h-[2rem] lg:w-[2.5rem] lg:h-[2.5rem]" strokeWidth={1.3}/>
        </Link>
      </nav>
    </header>
  )
}
