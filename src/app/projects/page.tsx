import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import stylesVapour from "./Projects.module.css"
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

export default function ProjectPage() {
    const listProjects =[
        { img: "projects/scada/HMI.JPG", title: "SCADA System Tea Leaf Dryer", content: "create a Supervisory Control and Data Acquisition (SCADA) system from the 'Oven Heater and Heater Dryer (Tea Leaf Dryer)' plant. The controller used is ADAM-6015 (I/O = Analog) for reading temperature sensors, and the ADAM-6060 controller (Digital) to control the relay from the oven heater and heater dryer. Also made is the Human Machine Interface (HMI) from the 'Oven Heater and Heater Dryer (Tea Leaf Dryer)' plant."},
        { img: "projects/scada/HMI.JPG", title: "SCADA System Tea Leaf Dryer", content: "create a Supervisory Control and Data Acquisition (SCADA) system from the 'Oven Heater and Heater Dryer (Tea Leaf Dryer)' plant. The controller used is ADAM-6015 (I/O = Analog) for reading temperature sensors, and the ADAM-6060 controller (Digital) to control the relay from the oven heater and heater dryer. Also made is the Human Machine Interface (HMI) from the 'Oven Heater and Heater Dryer (Tea Leaf Dryer)' plant."},
        { img: "projects/scada/HMI.JPG", title: "SCADA System Tea Leaf Dryer", content: "create a Supervisory Control and Data Acquisition (SCADA) system from the 'Oven Heater and Heater Dryer (Tea Leaf Dryer)' plant. The controller used is ADAM-6015 (I/O = Analog) for reading temperature sensors, and the ADAM-6060 controller (Digital) to control the relay from the oven heater and heater dryer. Also made is the Human Machine Interface (HMI) from the 'Oven Heater and Heater Dryer (Tea Leaf Dryer)' plant."},
        { img: "projects/scada/HMI.JPG", title: "SCADA System Tea Leaf Dryer", content: "create a Supervisory Control and Data Acquisition (SCADA) system from the 'Oven Heater and Heater Dryer (Tea Leaf Dryer)' plant. The controller used is ADAM-6015 (I/O = Analog) for reading temperature sensors, and the ADAM-6060 controller (Digital) to control the relay from the oven heater and heater dryer. Also made is the Human Machine Interface (HMI) from the 'Oven Heater and Heater Dryer (Tea Leaf Dryer)' plant."}
    ]


    return(
        <div className="w-full flex flex-col items-center min-h-screen overflow-x-hidden">
            <Navbar/>
            <main>
                <section className="bg-[#00131A] flex flex-col items-center pt-8 relative min-h-screen w-screen">
                    <h2 className={`text-[#F62CD1] def-h2 mb-[2rem] ${teko.className}`}>Projects</h2>
                    <div className="grid xl:grid-cols-[repeat(3,20rem)] 2xl:grid-cols-[repeat(3,25rem)] grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,16rem)] gap-5 px-[4%] z-10 text-[#28031d]">
                        {listProjects.map((project) => (
                            <article className="bg-gradient-to-br from-[#56c7e8] to-[#f62cd1] flex flex-col items-center justify-start rounded-[1rem] sm:w-[18rem] md:w-[20rem] lg:w-[16rem] xl:w-[20rem] 2xl:w-[25rem] transition duration-300 hover:drop-shadow-[0_0_12px_rgba(218,119,231,0.6)] active:scale-90">
                                <div className="px-[1rem] py-[1rem]">
                                    <img 
                                        src={project.img} 
                                        alt={project.title}
                                        className="object-fit w-[28rem] h-[11rem] rounded-[0.5rem]"
                                    />
                                </div>
                                <div className="flex flex-col text-justify px-[1rem] pb-[1rem] min-h-[8rem]">
                                    <h3 className="text-center font-semibold text-[1.3rem] mb-2">{project.title}</h3>
                                    <p className={`${inter.className} text-[0.9rem]`}>{project.content.slice(0,100)}...</p>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className={`${stylesVapour.vaporContainer}`}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}