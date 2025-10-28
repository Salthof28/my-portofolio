import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import stylesVapour from "./Projects.module.css"
import { Teko } from "next/font/google";
import { listProject } from "@/services/dataPorto";
import ProjectsCardList from "@/components/projects/ProjectsCardList";


const teko = Teko({
  subsets: ["latin"],
  weight: ["700"], // ambil langsung yang bold
});



export default function ProjectPage() {

    return(
        <div className="w-full flex flex-col items-center min-h-screen overflow-x-hidden">
            <Navbar/>
            <main>
                <section id="projects" className="bg-[#00131A] flex flex-col items-center pt-8 relative min-h-screen w-screen">
                    <h2 className={`text-[#F62CD1] def-h2 mb-[2rem] ${teko.className}`}>Projects</h2>
                    <ProjectsCardList listProjects={listProject} />
                    {/* vapour effect */}
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