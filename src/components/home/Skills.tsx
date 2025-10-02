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

export default function Skills() {
  const mySkills = [
    { img: "skills/c++.png", title: "C++" },
    { img: "skills/html.png", title: "HTML" },
    { img: "skills/css.png", title: "CSS" },
    { img: "skills/js.png", title: "JavaScript" },
    { img: "skills/php.png", title: "PHP" },
    { img: "skills/nodejs.png", title: "Node.js" },
    { img: "skills/mysql.png", title: "MySQL" },
    { img: "skills/mongodb.png", title: "MongoDB" },
  ]
  return(
      <section id="skills" className="bg-[#00131A] flex flex-col items-center py-[8rem]">
        <h2 className={`text-[#F62CD1] def-h2 ${teko.className}`}>Skills</h2>

        <div className="flex flex-wrap justify-center gap-[20px] pt-4 xl:max-w-[56rem] lg:max-w-[50rem] md:max-w-[30rem] max-w-[15rem]">
          {mySkills.map((skill) => (
            <div className="flex flex-col items-center justify-around rounded-xl bg-gradient-to-br from-[#56c7e8] to-[#f62cd1] lg:min-w-[12rem] lg:max-w-[15rem] lg:h-[16rem] md:min-w-[12rem] md:max-w-[13rem] md:h-[18rem] min-w-[6rem] max-w-[10rem] h-[10rem] hover:drop-shadow-[0_0_12px_rgba(218,119,231,0.6)] transition">
              <img src={skill.img} alt={skill.title} className="md:w-[8rem] w-[4rem]"/>
              <p className={`text-[#52424d] ${inter.className} m-[0.4rem] md:text-[2rem] text-[1rem] font-bold`}>{skill.title}</p>
            </div>
          ))}
        </div>
      </section>
  )
}    