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
                <img src="profile/pa2.jpeg" alt="pa2"/>
            </div>
            <article className="text-[#f0fbff] column-container flex flex-col min-[1536px]:gap-[2rem] min-[2400px]:gap-[3.5rem] 2xl: gap-[1rem] max-md:mt-[0.4rem] max-lg:mt-[2rem] 2xl:mt-[8rem]">
                <h1 className={`${teko.className} def-h1 text-center max-lg:hidden`}>Salman Althof</h1>
                <div className={`text-justify`}>
                    <h2 className={`${inter} def-h2 font-bold`}>About Me:</h2>
                    <div className={`${inter} text-[clamp(0.8rem,1.5vw,1.5rem)] flex flex-col gap-[1rem]`}>
                        <p >{`I am an`} <span className={`text-[#74eab0]`}>Engineer</span> {`with experience in Software Development and a background in Electrical and Industrial Engineering, focused on building reliable software and automation solutions through continuous learning and collaboration. Before focusing on software development, I spent four years as a Field Engineer at PT Bio Farma, where I developed strong analytical and problem-solving skills through production operations, SCADA monitoring, instrumentation, and equipment troubleshooting.`}
                        </p>
                        <p>Skilled in NestJS, React, Next.js, FastAPI, Redis, and Docker, I combine software development skills with experience in PLC, HMI, SCADA, industrial automation, sensors, and electronics to build scalable applications and practical engineering solutions.</p>
                        <p>With experience across Software Development, Electrical Engineering, and Industrial Automation, I bring technical precision and a system-oriented mindset to every project, while continuously learning, improving, and striving to build software and technology solutions that make a difference.</p>
                        
                    </div>
                </div>
            </article>
        </section>
    )
}
{/* <span className={`text-[#74eab0]`}>Software Engineer</span> */}