import Link from "next/link";
import { Brain, FileUser, Home, Phone, SquareChartGantt } from "lucide-react";

export default function Navbar() {
    return (
        <header className="flex items-center fixed h-screen">
            <nav className="flex flex-col fixed left-0 bg-white/3 px-[0.6rem] py-[0.8rem] rounded-full ml-2 items-center z-10 gap-[0.2rem]">
                <Link href={`/`} className={`text-[#0BA98C] hover:drop-shadow-[0_0_0.75rem_rgba(0,255,255,0.427)] transition duration-300`}><Home className="w-[2rem] h-[2rem] lg:w-[2.5rem] lg:h-[2.5rem]" strokeWidth={1.3}/></Link>
                <Link href={`/`} className={`text-[#0BA98C] hover:drop-shadow-[0_0_0.75rem_rgba(0,255,255,0.427)] transition duration-300`}><FileUser className="w-[2rem] h-[2rem] lg:w-[2.5rem] lg:h-[2.5rem]" strokeWidth={1.3}/></Link>
                <Link href={`/`} className={`text-[#0BA98C] hover:drop-shadow-[0_0_0.75rem_rgba(0,255,255,0.427)] transition duration-300`}><Brain className="w-[2rem] h-[2rem] lg:w-[2.5rem] lg:h-[2.5rem]" strokeWidth={1.3}/></Link>
                <Link href={`/`} className={`text-[#0BA98C] hover:drop-shadow-[0_0_0.75rem_rgba(0,255,255,0.427)] transition duration-300`}><SquareChartGantt className="w-[2rem] h-[2rem] lg:w-[2.5rem] lg:h-[2.5rem]" strokeWidth={1.3}/></Link>
                <Link href={`/`} className={`text-[#0BA98C] hover:drop-shadow-[0_0_0.75rem_rgba(0,255,255,0.427)] transition duration-300`}><Phone className="w-[2rem] h-[2rem] lg:w-[2.5rem] lg:h-[2.5rem]" strokeWidth={1.3}/></Link>
            </nav>
        </header>
    )
}

    // <header>
    //     <nav class="nav">
    //         <ul>
    //             <li><a href="#home" class="icon-container">
    //                 <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //                     <path d="M10 16h4M2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8m-2 3v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
    //                 </svg>
    //             </a></li>
    //             <li><a href="#about" class="icon-container">
    //                 <svg viewBox="0,0,24,24" xmlns="http://www.w3.org/2000/svg" >
    //                     <path d="M13 3.002Q12.295 3 11.5 3C7.022 3 4.782 3 3.391 4.391S2 8.021 2 12.5c0 4.478 0 6.718 1.391 8.109S7.021 22 11.5 22c4.478 0 6.718 0 8.109-1.391S21 16.979 21 12.5q0-.795-.002-1.5"></path><path d="m18.5 2l.258.697c.338.914.507 1.371.84 1.704c.334.334.791.503 1.705.841L22 5.5l-.697.258c-.914.338-1.371.507-1.704.84c-.334.334-.503.791-.841 1.705L18.5 9l-.258-.697c-.338-.914-.507-1.371-.84-1.704c-.334-.334-.791-.503-1.705-.841L15 5.5l.697-.258c.914-.338 1.371-.507 1.704-.84c.334-.334.503-.791.841-1.705zM7 17.5c2.332-2.442 6.643-2.557 9 0M13.995 10c0 1.38-1.12 2.5-2.503 2.5A2.5 2.5 0 0 1 8.988 10c0-1.38 1.12-2.5 2.504-2.5a2.5 2.5 0 0 1 2.503 2.5"></path>
    //                 </svg>
    //             </a></li>
    //             <li><a href="project.html" class="icon-container">
    //                 <svg viewBox="0,0,24,24" xmlns="http://www.w3.org/2000/svg"><path d="M7 17v-4m5 4V7m5 10v-6M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></path></svg>
    //             </a></li>
    //             <li><a href="contact.html" class="icon-container">
    //                 <svg viewBox="0,0,24,24" xmlns="http://www.w3.org/2000/svg"><path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2h1.5c3.771 0 5.657 0 6.828 1.172S21.5 6.229 21.5 10v4c0 3.771 0 5.657-1.172 6.828S17.271 22 13.5 22H12c-3.771 0-5.657 0-6.828-1.172S4 17.771 4 14z"></path><path d="M9.8 11.974c-.427-.744-.633-1.351-.757-1.967c-.184-.91.237-1.8.933-2.368c.295-.24.632-.158.806.155l.393.705c.311.558.467.838.436 1.134c-.03.296-.24.537-.66 1.02zm0 0a10.36 10.36 0 0 0 3.726 3.726m0 0c.744.427 1.351.633 1.967.757c.91.184 1.8-.237 2.368-.933c.24-.295.158-.632-.155-.806l-.704-.393c-.56-.311-.839-.467-1.135-.436c-.296.03-.537.24-1.02.66zM5 6H2.5M5 12H2.5M5 18H2.5"></path></svg>
    //             </a></li>
    //         </ul>     
    //     </nav>
    // </header>