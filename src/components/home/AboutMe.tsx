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
        <section className="bg-[#00131A] flex flex-col lg:flex-row min-h-screen max-lg:items-center w-screen">
            <h1 className={`text-[#f0fbff] ${teko.className} font-bold def-h1 text-center lg:hidden`}>Salman Althof</h1>
            <div className={`${stylesAbout.gridContainer}`}>
                <img src="profile/pa5.jpeg" alt="pa1"/>
                <img src="profile/pa6.jpeg" alt="ultraman"/>
                <img src="profile/pa3.jpeg" alt="scada-operator"/>
                <img src="profile/pa4.jpeg" alt="pa4"/>
                <img src="profile/pa1.jpeg" alt="aseptic-operator"/>
                <img src="profile/pa2.jpeg" alt="pa2"/>
            </div>
            <article className="text-[#f0fbff] column-container flex flex-col 2xl:gap-[18rem] gap-[1rem] max-lg:mt-[2rem]">
                <h1 className={`${teko.className} def-h1 pt-[10%] pr-[20%] text-center max-lg:hidden`}>Salman Althof</h1>
                <div className={`text-justify 2xl:pr-[20%] lg:pr-[12%] max-sm:px-[2rem] max-lg:px-[8rem]`}>
                    <h2 className={`${inter} def-h2 font-bold`}>About Me:</h2>
                    <p className={`${inter} def-p`}>Hello, I'm a <span className="teal-green">Software Engineer</span> with expertise in C++, JavaScript, PHP, Bootstrap, and Node.js. With an academic background in Industrial Engineering and Electrical Engineering, I have a strong foundation in both software development and industrial systems. Additionally, I have over 4 years of experience in industrial automation, including SCADA, PLC, and microcontrollers, with hands-on experience in control and monitoring processes at PT Bio Farma.
                    </p>
                </div>
            </article>
        </section>
    )
}