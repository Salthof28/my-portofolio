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
        <section id="about" className="bg-[#00131A] flex flex-col lg:flex-row lg:min-h-screen max-lg:items-center w-screen items-center max-lg:py-[4rem] px-[8%] 2xl:px-[15%] gap-[1rem] xl:gap-[3rem]">
            <h1 className={`text-[#f0fbff] ${teko.className} font-bold def-h1 text-center lg:hidden`}>Salman Althof</h1>
            <div className={`${stylesAbout.gridContainer}`}>
                <img src="profile/pa5.jpeg" alt="pa1"/>
                <img src="profile/pa6.jpeg" alt="ultraman"/>
                <img src="profile/pa3.jpeg" alt="scada-operator"/>
                <img src="profile/pa4.jpeg" alt="pa4"/>
                <img src="profile/pa1.jpeg" alt="aseptic-operator"/>
                <img src="profile/pa2.jpeg" alt="pa2"/>
            </div>
            <article className="text-[#f0fbff] column-container flex flex-col 2xl:gap-[8rem] gap-[1rem] max-md:mt-[0.4rem] max-lg:mt-[2rem] 2xl:mt-[8rem]">
                <h1 className={`${teko.className} def-h1 text-center max-lg:hidden`}>Salman Althof</h1>
                <div className={`text-justify`}>
                    <h2 className={`${inter} def-h2 font-bold`}>About Me:</h2>
                    <p className={`${inter} def-p`}>{`I am a`} <span className={`text-[#74eab0]`}>Software Engineer</span> {`who values continuous learning, teamwork, and a data-driven approach. With four years of experience as a Field Engineer at PT Biofarma, I developed strong problem-solving skills and successfully reduced production downtime. I have built applications such as SmaFarm, connecting livestock owners with trusted shelters, and deShopper, an optimized e-commerce platform. Proficient in React.js, Next.js, and NestJS, and experienced with Docker for deployment and testing, I also possess strong communication skills. My educational background in Electrical Engineering (Associate Degree) and Industrial Engineering (Bachelor’s Degree) provides me with a solid technical foundation. This blend of engineering and software development expertise, along with my commitment to learning, makes me an adaptive candidate ready to make impactful contributions.`}
                    </p>
                </div>
            </article>
        </section>
    )
}
{/* <span className={`text-[#74eab0]`}>Software Engineer</span> */}