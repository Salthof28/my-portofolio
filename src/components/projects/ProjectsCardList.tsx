'use client'
import { ListProject } from "@/types/interfaces"
import { Inter } from "next/font/google";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

interface ProjectsCardListItf {
    listProjects: ListProject[]
}
export default function ProjectsCardList ({ listProjects }: ProjectsCardListItf) {
    const router: AppRouterInstance = useRouter();
    const handleRouter = (projectId: number, projectSlug: string) => {
        router.push(`/projects/${projectId}/${projectSlug}`);
    }

    return(
        <div className="grid xl:grid-cols-[repeat(3,20rem)] 2xl:grid-cols-[repeat(3,25rem)] grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,16rem)] gap-5 px-[4%] z-10 text-[#28031d]">
            {listProjects.map((project) => (
                <article onClick={() => handleRouter(project.id, project.slug)} key={project.id} className="bg-gradient-to-br from-[#56c7e8] to-[#f62cd1] flex flex-col items-center justify-start rounded-[1rem] sm:w-[18rem] md:w-[20rem] lg:w-[16rem] xl:w-[20rem] 2xl:w-[25rem] transition duration-300 hover:drop-shadow-[0_0_12px_rgba(218,119,231,0.6)] active:scale-90">
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
    )
}