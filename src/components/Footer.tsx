import { Teko } from "next/font/google";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // pilih bobot
})

export default function Footer() {
    return(
        <footer className="bg-[#00080a] text-center p-[1rem]">
            <p className={`text-[#FEE2D4] ${inter.className} def-p`}>2025 &copy; Salman Althof</p>
        </footer>
    )
}