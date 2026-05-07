import { CircleSmall, Shell } from "lucide-react";
import { Teko } from "next/font/google";
import { Inter } from "next/font/google";
import slideSoft from "./Skills.module.css";
import { title } from "process";
import Link from "next/link";

const teko = Teko({
  subsets: ["latin"],
  weight: ["700"], // ambil langsung yang bold
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // pilih bobot
})

export default function Skills() {
  const mySkills = [
    { img: "skills/c++.png", title: "C++" },
    { img: "skills/html.png", title: "HTML" },
    { img: "skills/css.png", title: "CSS" },
    { img: "skills/js.png", title: "JavaScript" },
    { img: "skills/php.png", title: "PHP" },
    { img: "skills/nodejs.png", title: "Node.js" },
    { img: "skills/mysql.png", title: "MySQL" },
    { img: "skills/postgresql.png", title: "PostgreSQL"},
    { img: "skills/mongodb.png", title: "MongoDB" },
    { img: "skills/nextjs.png", title: "NextJs" },
    { img: "skills/nestjs.png", title: "NestJs" },
    { img: "skills/scada.png", title: "Scada" },
    { img: "skills/golang.png", title: "Golang"},
    { img: "skills/python.png", title: "Python"},
    { img: "skills/fastapi.png", title: "FastApi"},
    { img: "skills/redis.png", title: "Redis"}
  ];
  const softSkill = [
    "Communication",
    "Team Collaboration",
    "Problem Solving",
    "Time Management"
  ];
  const repeatedSoftSkills = [...softSkill, ...softSkill, ...softSkill, ...softSkill];
  return(
    <section id="skills" className="bg-[#00131A] flex flex-col items-center pt-[8rem] min-h-full w-screen">
      <h2 className={`flex flex-col my-[1rem] text-[#ffffff] def-h2 ${teko.className}`}>Skills</h2>
      <div className={`text-[#ffffff] flex flex-row gap-[0.6rem] p-[1rem] my-[1rem] mx-[5%] items-center justify-between rounded-[0.6rem] bg-amber-600 md:w-[40rem] xl:w-[60rem] shadow-[inset_-3px_3px_0_#cea623,inset_2px_2px_5px_#78350f] -rotate-2 ${slideSoft.electricCard}`} >
        <div className={slideSoft.electricFlicker}></div>
        <div className="flex flex-col items-center justify-center max-md:hidden text-[#ffffff8c]">
          <CircleSmall className="fill-[#ffffff8c]" />
          <CircleSmall className="fill-[#ffffff8c]" />
          <CircleSmall className="fill-[#ffffff8c]" />
        </div>
        <div className={`${slideSoft.sliderContainer} md:border border-amber-200 p-[0.6rem] rounded-[0.6rem]`}>
          <div className={`${slideSoft.sliderTrack}`}>
          {repeatedSoftSkills.map((soft, index) => 
            <div key={index} className={`${slideSoft.slideCard} flex flex-row gap-[0.6rem] items-center justify-center`}>
              <p className={`text-[clamp(0.8rem,1.5vw,1.4rem)] ${teko.className}`} font-bold>{soft}</p>
              <Shell className="w-[2rem] h-[2rem]" />
            </div>
          )}
          </div>
          {/* duplicate only */}
          <div aria-hidden className={`${slideSoft.sliderTrack}`}>
          {repeatedSoftSkills.map((soft, index) => 
            <div key={index} className={`${slideSoft.slideCard} flex flex-row gap-[0.6rem] items-center justify-center`}>
              <p className={`text-[clamp(0.8rem,1.5vw,1.4rem)] ${teko.className}`} font-bold>{soft}</p>
              <Shell className="w-[2rem] h-[2rem]" />
            </div>
          )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center max-md:hidden text-[#ffffff8c]">
          <CircleSmall className="fill-[#ffffff8c]" />
          <CircleSmall className="fill-[#ffffff8c]" />
          <CircleSmall className="fill-[#ffffff8c]" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-[20px] pt-4 xl:max-w-[56rem] lg:max-w-[50rem] md:max-w-[30rem] max-w-[15rem]">
        {mySkills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center justify-around rounded-xl bg-gradient-to-br from-[#56c7e8] to-[#f62cd1] lg:min-w-[12rem] lg:max-w-[15rem] lg:h-[16rem] md:min-w-[12rem] md:max-w-[13rem] md:h-[18rem] min-w-[6rem] max-w-[10rem] h-[10rem] hover:drop-shadow-[0_0_12px_rgba(218,119,231,0.6)] transition">
            <img src={skill.img} alt={skill.title} className="md:w-[8rem] w-[4rem] h-[8rem] object-contain"/>
            <p className={`text-[#52424d] ${inter.className} m-[0.4rem] md:text-[2rem] text-[1rem] font-bold`}>{skill.title}</p>
          </div>
        ))}
      </div>
      <Link href={'/projects'} className={`w-[12em] h-[3.5em] my-[6em] bg-amber-600 text-[#00b6b68c] rounded-xl text-[1.2em] -rotate-10 ${inter.className} font-bold ${slideSoft.electricCard} text-[#ffffff] flex justify-center items-center`}>View My Project</Link>

      {/* <div className={`${slideSoft.bannerSkill} mt-[2%]`}>
        <div className={`${slideSoft.sliderSkill}`} style={{ ["--quantity"]: mySkills.length } as React.CSSProperties}>
          {mySkills.map((skill, index) => (
            <div key={index} className={`${slideSoft.itemSkill} flex flex-col justify-center items-center rounded-xl bg-gradient-to-br from-[#56c7e8] to-[#f62cd1]`} style={{ ["--position"]: 0 + index } as React.CSSProperties}>
              <img src={skill.img} alt={skill.title} className="md:w-[8rem] w-[4rem]"/>
              <p className={`text-[#52424d] ${inter.className} m-[0.4rem] md:text-[2rem] text-[1rem] font-bold`}>{skill.title}</p>
            </div>
          ))}
        </div>
        <div className={`${slideSoft.modelRobs}`}></div>
      </div> */}
    </section>
  )
}    