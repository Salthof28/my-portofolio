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

  const aboutImages = [
    {
      src: "profile/pa5.jpeg",
      alt: "pa1",
      className: "row-span-5 w-[300px] max-[1340px]:w-[196px] max-[982px]:w-[125px]",
    },
    {
      src: "profile/pa6.jpeg",
      alt: "ultraman",
      className: "col-span-3 row-span-1 w-[310px] max-[1340px]:w-[200px] max-[982px]:w-[126px]",
    },
    {
      src: "profile/pa3.jpeg",
      alt: "scada-operator",
      className: "col-start-3 row-start-3 w-[150px] max-[1340px]:w-[95px] max-[982px]:w-[58px]",
    },
    {
      src: "profile/pa4.jpeg",
      alt: "pa4",
      className: "col-start-5 row-start-3 w-[150px] max-[1340px]:w-[95px] max-[982px]:w-[58px]",
    },
    {
      src: "profile/pa1.jpeg",
      alt: "aseptic-operator",
      className: "col-start-3 row-start-5 w-[150px] max-[1340px]:w-[95px] max-[982px]:w-[58px]",
    },
    {
      src: "profile/pa2.jpeg",
      alt: "pa2",
      className: "col-start-5 row-start-5 w-[150px] max-[1340px]:w-[95px] max-[982px]:w-[58px]",
    },
  ];



  return (
    <div className="w-full flex flex-col items-center min-h-screen overflow-x-hidden">
      <Navbar/>
      <main>
        {/* home hello */}
        <section className="flex flex-row bg-[#270D01] w-screen min-h-screen justify-between gap-[8rem] px-[12%]">
            <div className="mt-[15%]">
                <h2 className={`text-[#FCAD78] fteko def-h2 ${teko.className}`}>Hello!</h2>
                <h1 className={`text-[#FEE2D4] def-h1 ${inter.className} font-bold`}>I'm Salman Althof</h1>
                <p className={`text-[#FEE2D4] def-p ${inter.className}`}>I am Software Engineer with a background in Industrial & Electrical Engineering.</p>
                <br/>
                <form method="get" action="profile/cv/resume.pdf">
                    <button className={`my-custom-button bg-[#FCAD78] text-[#270D01] shadow-lg/30 ring-[0.1rem] ring-black/5 active:scale-95 hover:scale-110 transform transition duration-300`}>Download My Resume</button>
                </form>
            </div>
            <div>
                <img className="w-[30vw]" src="profile/photo-home.png" alt="coming-soon" />
            </div>
        </section>
        {/* about me */}
        <section id="about" className="flex flex-row flex-wrap md:flex-nowrap bg-[#014d4a] text-[#e0ffff]">
          {/* Judul khusus mobile */}
          <h1 className="hidden max-[712px]:block text-center text-xl font-bold">
            Salman Althof
          </h1>
          {/* Grid Container */}
          <div className="grid pt-[8%] pl-[15%] pr-[10%] gap-[10px] grid-cols-[1fr_10px_auto_10px_auto] grid-rows-[auto_10px_auto_10px_1fr] max-[712px]:px-0 max-[712px]:pt-[5%]"
          >
            {aboutImages.map((img, i) => (
              <img key={i} src={img.src} alt={img.alt} className={`max-w-[800px] object-cover rounded-xl grayscale shadow-lg hover:grayscale-0 hover:scale-125 transition duration-500 ease-in-out hover:z-10 hover:shadow-white/10 ${img.className}`}
              />
            ))}
          </div>
          {/* Article */}
          <article className="flex flex-col justify-between max-[2195px]:justify-around max-[712px]:px-[5%]">
            <h1 className="text-center pt-[10%] pr-[20%] max-[982px]:pt-[4%] max-[712px]:hidden">
              Salman Althof
            </h1>
            <div className="pr-[20%] text-justify max-[2195px]:pr-[12%] max-[982px]:pt-[10%] max-[712px]:p-0">
              <h2 className="text-lg font-semibold">About Me:</h2>
              <p>
                Hello, I'm a{" "}
                <span className="text-green-400">Software Engineer</span> with expertise in C++, JavaScript, PHP, Bootstrap, and Node.js. 
                With an academic background in Industrial Engineering and Electrical Engineering, 
                I have a strong foundation in both software development and industrial systems. 
                Additionally, I have over 4 years of experience in industrial automation, including SCADA, PLC, and microcontrollers, 
                with hands-on experience in control and monitoring processes at PT Bio Farma.
              </p>
            </div>
          </article>
        </section>

      </main>
    </div>
  );
}
            // <div>
            //     <h2 class="light-coral-orange fteko">Hello!</h2>
            //     <h1 class="peach-cream">I'm Salman Althof</h1>
            //     <p class="peach-cream">I am Software Engineer with a background in Industrial & Electrical Engineering.</p>
            //     <br>
            //     <form method="get" action="assets/download/Resume.pdf">
            //         <button type="submit">Download My Resume</button>
            //     </form>
            // </div>
            // <div class="img-container">
            //     <img src="assets/photo-home.png" alt="coming-soon" >
            // </div>