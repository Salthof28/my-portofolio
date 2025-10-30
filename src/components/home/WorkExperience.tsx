'use client'
import { ArrowUpRight } from "lucide-react";
import { Teko } from "next/font/google";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import DetailWorkExperience from "./DetailWorkExperience";
import { workExperience } from "@/services/dataPorto";
import { WorkExperienceItf } from "@/types/interfaces";

const teko = Teko({
  subsets: ["latin"],
  weight: ["700"], // ambil langsung yang bold
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // pilih bobot
});

export default function WorkExperience() {
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [currentWork, setCurrentWork] = useState<WorkExperienceItf | undefined>(undefined);
    useEffect(() => {
        if (showDetail) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showDetail]);
    const handleViewDetail = (workSelect: WorkExperienceItf): void => {
        setCurrentWork(workSelect);
        setShowDetail(true)
    }
    return(
        <section id="about" className="bg-[#00131A] flex flex-col items-center min-h-fit py-[2%] justify-center w-screen">
            <h2 className={`${teko.className} def-h2 text-[#ffffff] fteko font-bold my-6`}>Work Experience</h2>
            <div className="text-[#e9b0d8] flex flex-col items-center w-full">
                {workExperience.map(work => (
                    <article key={work.id} className="flex lg:flex-row flex-col-reverse items-center bg-[#F62CD125] px-[4%] py-[2%] rounded-xl mx-[8%] lg:mx-[15%] my-[2%] shadow-[0_4px_15px_rgba(246,44,209,0.6)] transition-transform duration-800 ease-in-out hover:scale-[1.02] hover:shadow-[0_4px_15px_rgb(246,44,209)] gap-[2rem]">
                        <div className="my-4">
                            {/* w-[18.75rem] max-[712px]:w-[8rem] */}
                            <img src="work/biofarma.png" alt="Biofarma" className="w-[clamp(8rem,60vw,18.75rem)] object-contain"/>
                        </div>
                        <div className="flex flex-col gap-[1rem]">
                            <p className={`font-bold text-[clamp(0.8rem,1.5vw,1.4rem)] ${inter.className} text-[#69baa5]`}>{work.name}</p>
                            <h3 className={`def-h3 ${inter.className}`}><strong>{work.position}</strong></h3>
                            <hr/>
                            <div>
                                <p className={`font-bold text-[clamp(0.8rem,1.5vw,1.2rem)] ${inter.className}`}>Location: <span className="text-[#e9b0d88a]">{work.location}</span></p>
                                <p className={`font-bold text-[clamp(0.8rem,1.5vw,1.2rem)] ${inter.className} text-[#e9b0d88a]`}>{work.status}</p>
                            </div>
                            <button onClick={() => handleViewDetail(work)} className={`flex flex-row justify-center gap-[0.2rem] bg-[#ffa154] p-[0.8rem] font-bold text-[clamp(0.6rem,1.1vw,1.1rem)] rounded-[0.4rem] text-[#9f3900] ${inter.className} active:scale-98 shadow-[0_6px_15px_rgba(0,0,0,0.3)] mx-[15%] xl:mx-[30%]`}>View Detail <ArrowUpRight className="w-[clamp(0.6rem,1.1vw,1.5rem)] h-[clamp(0.6rem,1.1vw,1.5rem)]" /></button>
                        </div>
                    </article>
                ))}
            </div>
            {showDetail && currentWork && (
                <>
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-lg z-50" onClick={() => setShowDetail(false)} />
                    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                        <DetailWorkExperience currentWork={currentWork} hiddenForm={() => setShowDetail(false)} />
                    </div>
                </>
            )}
        </section>
    )
}

