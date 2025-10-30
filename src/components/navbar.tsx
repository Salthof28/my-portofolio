"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Brain, FileUser, Home, Phone, SquareChartGantt, Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  // asset nafigation
  const styleNav = 'w-[2rem] h-[2rem] xl:w-[2.5rem] xl:h-[2.5rem]'
  const assetNav = [
    {icon: <Home className={styleNav} strokeWidth={1.3}/>, name: 'Home', href: '/#home', id: 'home'},
    {icon: <FileUser className={styleNav} strokeWidth={1.3}/>, name: 'Profile', href: '/#about', id: 'about'},
    {icon: <Brain className={styleNav} strokeWidth={1.3}/>, name: 'Skills', href: '/#skills', id: 'skills'},
    {icon: <SquareChartGantt className={styleNav} strokeWidth={1.3}/>, name: 'Projects', href: '/projects', id: 'projects'},
    {icon: <Phone className={styleNav} strokeWidth={1.3}/>, name: 'Contact', href: '/contact', id: 'contact'},
  ]

  useEffect(() => {
    // hamburger button login
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // 1024px = lg breakpoint tailwind
          setOpen(false)
      }
    }
    window.addEventListener("resize", handleResize);
    // detection active section
    const sections = document.querySelectorAll('section[id]');
    const detectSection = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    );
    sections.forEach((section) => detectSection.observe(section))
    return () => {
      window.removeEventListener("resize", handleResize);
      sections.forEach((section) => detectSection.unobserve(section));
    }
  }, []);
  return (
    <header className="flex items-center fixed h-screen z-40">
      {/* hamburger button for mobile */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-20">
        <button onClick={() => setOpen(!open)} className="bg-[#0BA98C] text-white p-3 rounded-full shadow-lg"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Nafigation */}
      <nav className={`fixed z-10 items-center gap-[0.6rem] lg:bg-white/5 px-[1rem] lg:px-[0.3rem] xl:px-[0.6rem] py-[0.8rem] rounded-[1rem] transition-all duration-300 ${open ? "flex bottom-20 left-1/2 -translate-x-1/2 flex-row lg:flex-col bg-black/100" : "hidden lg:flex flex-col left-0 ml-2"}  // default`}>
      {assetNav.map((asset, index) => (
        <Link key={index} href={asset.href} className={`text-[#0BA98C] ${activeSection === asset.id ? 'bg-[#004b22ab]': ''} rounded-[0.5rem] p-[0.2rem] hover:drop-shadow-[0_0_0.75rem_rgba(0,255,255,0.427)] transition duration-300 flex flex-col items-center text-[clamp(0.5rem,1.1vw,0.8rem)]`}>
          {asset.icon}{asset.name}
        </Link>
      ))}
      </nav>
    </header>
  )
}
