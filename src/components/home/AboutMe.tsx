import stylesAbout from "./AboutMe.module.css"
import { Teko } from "next/font/google";
import { Inter } from "next/font/google";

const teko = Teko({
  subsets: ["latin"],
  weight: ["700"], // ambil langsung yang bold
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // pilih bobot
})

export default function AboutMe () {
    return (
        <section id="about" className="bg-[#00131A] flex flex-col lg:flex-row lg:min-h-screen max-lg:items-center w-screen items-center max-lg:py-[4rem] px-[8%] min-[1536px]:px-[10%] min-[2400px]:px-[15%] gap-[1rem] xl:gap-[3rem]">
            <h1 className={`text-[#f0fbff] ${teko.className} font-bold def-h1 text-center lg:hidden`}>Salman Althof</h1>
            <div className={`${stylesAbout.gridContainer}`}>
                <img src="profile/pa5.jpeg" alt="pa1"/>
                <img src="profile/pa6.jpeg" alt="ultraman"/>
                <img src="profile/pa3.jpeg" alt="scada-operator"/>
                <img src="profile/pa4.jpeg" alt="pa4"/>
                <img src="profile/pa1.jpeg" alt="aseptic-operator"/>
                <img src="profile/pa2.jpeg" alt="pa2"/>cd
            </div>
            <article className="text-[#f0fbff] column-container flex flex-col min-[1536px]:gap-[2rem] min-[2400px]:gap-[8rem] 2xl: gap-[1rem] max-md:mt-[0.4rem] max-lg:mt-[2rem] 2xl:mt-[8rem]">
                <h1 className={`${teko.className} def-h1 text-center max-lg:hidden`}>Salman Althof</h1>
                <div className={`text-justify`}>
                    <h2 className={`${inter} def-h2 font-bold`}>About Me:</h2>
                    <div className={`${inter} text-[clamp(0.8rem,1.5vw,1.5rem)] flex flex-col gap-[1rem]`}>
                        <p >{`I am a`} <span className={`text-[#74eab0]`}>Software Engineer</span> {`who enjoys building impactful and data-driven digital solutions. Before diving into tech, I spent four years as a Field Engineer at PT Bio Farma, where I developed strong analytical and problem-solving skills by optimizing production systems and reducing downtime.`}
                        </p>
                        <p>Skilled in NestJs, React, Next.js, and Docker, I combine analytical thinking from my Electrical and Industrial Engineering background with a problem-solving mindset to deliver scalable and user-focused solutions.</p>
                        <p>With a background in Electrical and Industrial Engineering, I combine technical precision with a system-oriented mindset — always learning, improving, and striving to build software that makes a difference.</p>
                        
                    </div>
                </div>
            </article>
        </section>
    )
}
{/* <span className={`text-[#74eab0]`}>Software Engineer</span> */}