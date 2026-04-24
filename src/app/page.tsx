import Footer from "@/components/Footer";
import AboutMe from "@/components/home/AboutMe";
import Education from "@/components/home/Education";
import Skills from "@/components/home/Skills";
import WorkExperience from "@/components/home/WorkExperience";
import Navbar from "@/components/navbar";
import { Teko } from "next/font/google";
import { Inter } from "next/font/google";
import Link from "next/link";

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
        <section id="home" className="flex flex-col-reverse items-center lg:flex-col bg-[#270D01] w-screen  min-h-screen justify-center lg:justify-between gap-[2em] 2xl:gap-[8em] px-[10%] lg:pt-[2em] pt-[2em]">
          <div className="lg:mt-[1%] flex flex-col items-center">
              <div className={`flex justify-center flex-col items-center`}>
                <div>
                  <h2 className={`text-[#FCAD78] fteko text-[clamp(1em,2.5vw,4em)] ${teko.className}`}>Hello!</h2>
                  <h1 className={`text-[#FEE2D4] text-[clamp(1.5em,4.4vw,7em)] ${inter.className} font-bold -mt-[0.5em]`}>{`I'm Salman Althof`}</h1>
                </div>
              </div>
              <div className={`flex flex-row items-center justify-center gap-[20%] w-screen -mt-[clamp(1em,2.5vw,4em)] px-[clamp(1.2em,1vw,1.5em)]`}>
                <div className={`flex flex-col items-center text-[clamp(1.4em,4.9vw,8em)] ${teko.className} text-[#FCAD78]`}>
                  <h1>I</h1>
                  <h1>am</h1>
                </div>
                {/* <div> */}
                  <div className="relative -ml-[4.35%]">
                    <img className=" w-[clamp(16em,29.9vw,48em)]" src="profile/photo-home.png" alt="coming-soon" />
                    <div className={`bg-[#270D01] text-center absolute top-[32%] w-[clamp(10em,52.9vw,18em)] md:w-[clamp(18em,32.5vw,52em)] py-[clamp(0.1em,0.7vw,1em)] rotate-10 -ml-[1%]`}>
                      <p className={`text-[clamp(0.6em,1.9vw,3em)] ${inter.className} text-[#FEE2D4] font-bold`}>a <span className={`${teko.className} text-[#FCAD78]`}>So</span>ftwa<span className={`${teko.className} text-[#FCAD78]`}>re</span></p>
                    </div>
                    <div className={`bg-[#270D01] text-center absolute top-[46%] w-[clamp(3.5em,15vw,18em)] py-[clamp(0em,0.7vw,1em)] -ml-[1%] rounded-r-[3em]`}>
                      <p className={`text-[clamp(0.4em,1.5vw,1.5em)] ${inter.className} text-[#FEE2D4] font-bold`}>passionate about</p>
                    </div>
                    <div className={`bg-[#270D01] text-center absolute top-[60%] w-[clamp(8em,28vw,42em)] py-[clamp(0.1em,0.7vw,1em)] -ml-[1%] rounded-r-[3em] -rotate-10`}>
                      <p className={`text-[clamp(0.5em,1.8vw,2.8em)] ${inter.className} text-[#FEE2D4] font-bold`}>full-stack <span className={`${teko.className} text-[#FCAD78]`}>web</span> developement</p>
                    </div>
                    <div className={`flex text-center absolute top-[70%] left-[70%] w-[clamp(1em,4vw,6em)] h-[clamp(1em,4vw,6em)] p-[clamp(0.1em,0.1vw,0.2em)] -ml-[1%] justify-center items-center`}>
                      <div className={`absolute w-full h-full bg-[#270D01] rotate-45 z-0 aspect-square`}> </div>
                      <p className={`relative text-[clamp(0.5em,1.8vw,2.8em)] ${teko.className} text-[#FCAD78] font-bold z-10`}>&</p>
                    </div>
                    <div className={`bg-[#270D01] text-center absolute top-[80%] w-[clamp(7em,23vw,33em)] py-[clamp(0.1em,0.7vw,1em)] -ml-[1%] rounded-r-[3em] rotate-10`}>
                      <p className={`text-[clamp(0.5em,1.8vw,2.6em)] ${inter.className} text-[#FEE2D4] font-bold`}>industrial automation</p>
                    </div>
                  </div>
                {/* </div> */}
                <div className={`flex flex-col items-center text-[clamp(0.8em,2.5vw,4em)] ${teko.className} text-[#FCAD78]`} >
                  <h1>E</h1>
                  <h1>N</h1>
                  <h1>G</h1>
                  <h1>G</h1>
                  <h1>I</h1>
                  <h1>N</h1>
                  <h1>E</h1>
                  <h1>E</h1>
                  <h1>R</h1>
                </div>
              </div>
              {/* <p className={`text-[#FEE2D4] def-p ${inter.className}`}>I am a Software Engineer passionate about full-stack web development and industrial automation.</p> */}
              <br/>
              <div className="flex flex-col md:flex-row gap-[clamp(0.5em,0.9vw,1.4em)] items-center">
                <Link href='/#about' className={`my-custom-button bg-[#fd8c41] text-[#270D01] shadow-lg/30 ring-[0.1rem] ring-black/5 active:scale-95 hover:scale-110 transform transition duration-300 w-fit text-[clamp(0.5em,0.7vw,2em)]`}>About Me</Link>
                <form method="get" action="profile/cv/Salman-Althof-CV.pdf">
                    <button className={`my-custom-button bg-[#FCAD78] text-[#270D01] shadow-lg/30 ring-[0.1rem] ring-black/5 active:scale-95 hover:scale-110 transform transition duration-300 text-[clamp(0.5em,0.7vw,2em)]`}>Download My CV</button>
                </form>
              </div>

              <div className={`mt-[2em] flex flex-row gap-[0.8em] max-md:justify-center mb-[4em]`}>
                <Link href="https://github.com/Salthof28" className={`md:border-[0.1em] md:border-[#FEE2D4] flex flex-row items-center md:p-[clamp(0.4em,0.4vw,0.6em)] gap-[0.2em] rounded-[1em]`}>
                  <svg stroke="#FEE2D4" fill="#FEE2D4" stroke-width="0" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg" className={`h-[clamp(1.4em,1vw,1.6em)] w-[clamp(1.4em,1vw,1.6em)]`}>
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                  <p className={`text-[#FEE2D4] text-[1em] ${inter.className} text-[clamp(0.8em,0.7vw,1em)] max-md:hidden`}>GitHub</p>
                </Link>

                <Link className={`md:border-[0.1em] md:border-[#FEE2D4] flex flex-row items-center md:p-[clamp(0.4em,0.4vw,0.6em)] gap-[0.2em] rounded-[1em]`} href="https://www.linkedin.com/in/salman-althof-241209238">
                  <svg stroke="#FEE2D4" fill="#FEE2D4" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" className={`h-[1.6em] w-[1.6em]`}>
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                  </svg>
                  <p className={`text-[#FEE2D4] text-[1em] ${inter.className} text-[clamp(0.8em,0.7vw,1em)] max-md:hidden`}>Linkedln</p>
                </Link>

                <Link href="https://wa.me/6282120018395" className={`md:border-[0.1em] md:border-[#FEE2D4] flex flex-row items-center md:p-[clamp(0.4em,0.4vw,0.6em)] gap-[0.2em] rounded-[1em]`}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256" className={`h-[1.6em] w-[1.6em]`}>
                    <g fill="#FEE2D4" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M25,2c-12.682,0 -23,10.318 -23,23c0,3.96 1.023,7.854 2.963,11.29l-2.926,10.44c-0.096,0.343 -0.003,0.711 0.245,0.966c0.191,0.197 0.451,0.304 0.718,0.304c0.08,0 0.161,-0.01 0.24,-0.029l10.896,-2.699c3.327,1.786 7.074,2.728 10.864,2.728c12.682,0 23,-10.318 23,-23c0,-12.682 -10.318,-23 -23,-23zM36.57,33.116c-0.492,1.362 -2.852,2.605 -3.986,2.772c-1.018,0.149 -2.306,0.213 -3.72,-0.231c-0.857,-0.27 -1.957,-0.628 -3.366,-1.229c-5.923,-2.526 -9.791,-8.415 -10.087,-8.804c-0.295,-0.389 -2.411,-3.161 -2.411,-6.03c0,-2.869 1.525,-4.28 2.067,-4.864c0.542,-0.584 1.181,-0.73 1.575,-0.73c0.394,0 0.787,0.005 1.132,0.021c0.363,0.018 0.85,-0.137 1.329,1.001c0.492,1.168 1.673,4.037 1.819,4.33c0.148,0.292 0.246,0.633 0.05,1.022c-0.196,0.389 -0.294,0.632 -0.59,0.973c-0.296,0.341 -0.62,0.76 -0.886,1.022c-0.296,0.291 -0.603,0.606 -0.259,1.19c0.344,0.584 1.529,2.493 3.285,4.039c2.255,1.986 4.158,2.602 4.748,2.894c0.59,0.292 0.935,0.243 1.279,-0.146c0.344,-0.39 1.476,-1.703 1.869,-2.286c0.393,-0.583 0.787,-0.487 1.329,-0.292c0.542,0.194 3.445,1.604 4.035,1.896c0.59,0.292 0.984,0.438 1.132,0.681c0.148,0.242 0.148,1.41 -0.344,2.771z"></path></g></g>
                  </svg>
                  <p className={`text-[#FEE2D4] text-[1em] ${inter.className} text-[clamp(0.8em,0.7vw,1em)] max-md:hidden`}>WhatsApp</p>
                </Link>
                <Link href={`mailto:${process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL}`} className={`md:border-[0.1em] md:border-[#FEE2D4] flex flex-row items-center md:p-[clamp(0.4em,0.4vw,0.6em)] gap-[0.2em] rounded-[1em]`}>
                  <svg stroke="#FEE2D4" fill="#FEE2D4" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className={`h-[1.6em] w-[1.6em]`}>
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"></path><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"></path>
                  </svg>
                  <p className={`text-[#FEE2D4] text-[1em] ${inter.className} text-[clamp(0.8em,0.7vw,1em)] max-md:hidden`}>Email</p>
                </Link>
              </div>
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