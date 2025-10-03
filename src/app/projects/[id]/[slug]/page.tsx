import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import { detailProjects } from "@/services/dataPorto";
import { ProjectDetail } from "@/types/interfaces";
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

interface DetailProjectItf {
    params: Promise <{ 
        id: string,
        slug: string 
    }>
}
export default async function DetailProject({ params }: DetailProjectItf) {
    const resolvedParams = await params;
    const id: number = parseInt(resolvedParams.id);
    const slug: string = resolvedParams.slug;
    const project: ProjectDetail = detailProjects[id];
    if(!project || project.slug !== slug) {
        return(
            <div className="w-full flex flex-col items-center min-h-screen overflow-x-hidden bg-[#270D01]">
                <Navbar/>
                <main className="pt-[2%] px-[8%] w-screen min-h-screen flex items-center justify-center">
                        <h1 className={`text-[#ffe5d9] def-h1 ${teko.className}`}>Project Not Found</h1>
                </main>
                <Footer/>
            </div>
        )
    }
    return(
        <div className="w-full flex flex-col items-center min-h-screen overflow-x-hidden bg-[#270D01]">
            <Navbar/>
            <main className="py-[2%] px-[8%] w-screen min-h-screen">
                <section className={`w-full bg-[#57301c] p-[2rem] xl:p-[4rem] rounded-[1rem] text-[#ffe5d9] flex flex-col shadow-lg/50 ring-[0.1rem] ring-[#1c0f08]/5 hover:scale-[1.01] transition-transform duration-500`}>
                    <h1 className={`def-h1 ${teko.className} text-center`}>{project.title}</h1>
                    <div className="flex justify-center mb-[2rem]">
                        <img src={project.img} alt={project.title} className="w-[64rem] rounded-[1rem] border border-black"/>
                    </div>
                    <p className={`${inter.className} def-p-project text-justify`}>{project.mainContent}</p>
                    {/* content 1 */}
                    <div className={`my-[1rem] ml-[0.5rem] lg:ml-[1rem] xl:ml-[2rem] ${project?.sub1 || project?.imgs1 || project?.c1 ? 'block' : 'hidden'}`}>
                        <h2 className={`def-h2 ${teko.className} text-start`}>{project?.sub1}</h2>
                        <div className={`flex flex-row flex-wrap gap-[0.5rem] xl:gap-[1rem] justify-center my-[1rem] bg-[#88592e74] py-[0.6rem] md:py-[2rem] lg:py-[1.2rem] xl:py-[2rem] rounded-[0.4rem] md:rounded-[1rem] ${project?.imgs1 ? 'flex' : 'hidden'}`}>
                            {project?.imgs1?.map((img, index) => (
                                <img key={index} src={img} className="2xl:w-[40rem] xl:w-[30rem] lg:w-[23rem] md:w-[32rem] w-[11rem] hover:scale-[1.11] transition-transform duration-500 rounded-[0.5rem] object-fit"/>
                            ))}
                        </div>
                        <p className={`${inter.className} def-p-project text-justify`}>{project?.c1}</p>
                    </div>
                    {/* content 2 */}
                    <div className={`my-[1rem] ml-[0.5rem] lg:ml-[1rem] xl:ml-[2rem] ${project?.sub2 || project?.imgs2 || project?.c2 ? 'block' : 'hidden'}`}>
                        <h2 className={`def-h2 ${teko.className} text-start`}>{project?.sub2}</h2>
                        <div className={`flex flex-row flex-wrap gap-[0.5rem] xl:gap-[1rem] justify-center my-[1rem] bg-[#88592e74] py-[0.6rem] md:py-[2rem] lg:py-[1.2rem] xl:py-[2rem] rounded-[0.4rem] md:rounded-[1rem] ${project?.imgs2 ? 'flex' : 'hidden'}`}>
                            {project?.imgs2?.map((img, index) => (
                                <img key={index} src={img} className="2xl:w-[40rem] xl:w-[30rem] lg:w-[23rem] md:w-[32rem] w-[11rem] hover:scale-[1.11] transition-transform duration-500 rounded-[0.5rem] object-fit"/>
                            ))}
                        </div>
                        <p className={`${inter.className} def-p-project text-justify`}>{project?.c2}</p>
                    </div>
                    {/* content 3 */}
                    <div className={`my-[1rem] ml-[0.5rem] lg:ml-[1rem] xl:ml-[2rem] ${project?.sub3 || project?.imgs3 || project?.c3 ? 'block' : 'hidden'}`}>
                        <h2 className={`def-h2 ${teko.className} text-start`}>{project?.sub3}</h2>
                        <div className={`flex flex-row flex-wrap gap-[0.5rem] xl:gap-[1rem] justify-center my-[1rem] bg-[#88592e74] py-[0.6rem] md:py-[2rem] lg:py-[1.2rem] xl:py-[2rem] rounded-[0.4rem] md:rounded-[1rem] ${project?.imgs3 ? 'flex' : 'hidden'}`}>
                            {project?.imgs3?.map((img, index) => (
                                <img key={index} src={img} className="2xl:w-[40rem] xl:w-[30rem] lg:w-[23rem] md:w-[32rem] w-[11rem] hover:scale-[1.11] transition-transform duration-500 rounded-[0.5rem] object-fit"/>
                            ))}
                        </div>
                        <p className={`${inter.className} def-p-project text-justify`}>{project?.c3}</p>
                    </div>
                    <p className={`${inter.className} def-p-project text-justify mt-[1rem]`}>{project?.finalContent}</p>
                </section>
            </main>
            <Footer/>
        </div>
    )
}