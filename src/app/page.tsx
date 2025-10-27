import Footer from "@/components/Footer";
import AboutMe from "@/components/home/AboutMe";
import Education from "@/components/home/Education";
import Skills from "@/components/home/Skills";
import WorkExperience from "@/components/home/WorkExperience";
import Navbar from "@/components/navbar";
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

export default function Home() {

  return (
    <div className="w-full flex flex-col items-center min-h-screen overflow-x-hidden">
      <Navbar/>
      <main>
        {/* home hello */}
        <section id="home" className="flex flex-col-reverse lg:flex-row bg-[#270D01] w-screen max-md:py-[2rem] min-h-screen justify-center lg:justify-between gap-[2rem] 2xl:gap-[8rem] px-[12%] lg:pt-[14rem] xl:pt-[4rem] 2xl:pt-[2rem]">
          <div className="lg:mt-[15%]">
              <h2 className={`text-[#FCAD78] fteko def-h2 ${teko.className}`}>Hello!</h2>
              <h1 className={`text-[#FEE2D4] def-h1 ${inter.className} font-bold`}>{`I'm Salman Althof`}</h1>
              <p className={`text-[#FEE2D4] def-p ${inter.className}`}>I am a Software Engineer passionate about full-stack web development and industrial automation.</p>
              <br/>
              <form method="get" action="profile/cv/resume.pdf">
                  <button className={`my-custom-button bg-[#FCAD78] text-[#270D01] shadow-lg/30 ring-[0.1rem] ring-black/5 active:scale-95 hover:scale-110 transform transition duration-300`}>Download My Resume</button>
              </form>
          </div>
          <div className="max-lg:flex max-lg:justify-center lg:pt-[8rem] xl:pt-[10rem] 2xl:pt-[16rem]">
              <img className="w-[60vw] 2xl:w-[30vw]" src="profile/photo-home.png" alt="coming-soon" />
          </div>
        </section>
        <AboutMe/>
        <Education/>
        <WorkExperience/>
        <Skills/>
      </main>
      <Footer/>
    </div>
  );
}