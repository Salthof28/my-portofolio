'use client'
import { ArrowUpRight } from "lucide-react";
import { Teko } from "next/font/google";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import DetailWorkExperience from "./DetailWorkExperience";

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
    return(
        <section id="about" className="bg-[#00131A] flex flex-col items-center min-h-fit py-[2%] justify-center w-full">
            <h2 className={`${teko.className} def-h2 text-[#ffffff] fteko font-bold my-6`}>Work Experience</h2>
            <div className="text-[#e9b0d8] flex flex-col items-center w-full">
                <article className="flex flex-row items-center bg-[#F62CD125] px-[4%] py-[2%] rounded-xl mx-[8%] lg:mx-[15%] my-[2%] shadow-[0_4px_15px_rgba(246,44,209,0.6)] transition-transform duration-800 ease-in-out hover:scale-[1.02] hover:shadow-[0_4px_15px_rgb(246,44,209)] gap-[2rem]">
                    <div className="my-4">
                        <img src="work/biofarma.png" alt="Biofarma" className="w-[18.75rem] max-[712px]:w-[8rem] object-contain"/>
                    </div>
                    <div className="flex flex-col gap-[1rem]">
                        <p className={`font-bold text-[clamp(0.8rem,1.5vw,1.4rem)] ${inter.className} text-[#69baa5]`}>PT Bio Farma . Aug 2022 - Aug 2024</p>

                        <h3 className={`def-h3 ${inter.className}`}><strong>Field Operations Staff (SCADA Operator)</strong></h3>
                        <hr/>
                        <div>
                            <p className={`font-bold text-[clamp(0.8rem,1.5vw,1.2rem)] ${inter.className}`}>Location: <span className="text-[#e9b0d88a]">Bandung, Indonesia</span></p>
                            <p className={`font-bold text-[clamp(0.8rem,1.5vw,1.2rem)] ${inter.className} text-[#e9b0d88a]`}>Contract</p>
                        </div>
                        <button onClick={() => setShowDetail(true)} className={`flex flex-row justify-center gap-[0.2rem] bg-[#ffa154] p-[0.8rem] font-bold text-[clamp(0.8rem,1.5vw,1.2rem)] rounded-[0.4rem] text-[#9f3900] ${inter.className} active:scale-98 shadow-[0_6px_15px_rgba(0,0,0,0.3)] mx-[30%]`}>View Detail <ArrowUpRight /></button>
                    </div>

                    {/* <ul className={`list-disc text-justify max-[712px]:text-start def-ul ${inter.className}`}>
                        <li>Controlled and monitored pressure vessel tank processes during production, reducing production deviations by 90% by using real-time SCADA monitoring to track key production and cleaning parameters.</li>
                        <li>Prepared and compiled production document requirements, increasing compliance by 90% and reducing production deviations by 60% through creating standardized production forms with clear guidelines for operators.</li>
                        <li>Reviewed data from disinfection, CIP, sterilization, and production processes to reduce inconsistencies in subsequent production by 90%, by manually analyzing real-time data and collaborating with supervisors to address deviations.</li>
                        <li>Troubleshot initial issues on pressure vessel tanks and SCADA systems, decreasing equipment downtime by 95% by conducting pressure checks and analyzing SCADA data to detect anomalies early.</li>
                    </ul> */}
                </article>
            </div>
            {showDetail && (
                <>
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-lg z-50" onClick={() => setShowDetail(false)} />
                    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                        <DetailWorkExperience hiddenForm={() => setShowDetail(false)} />
                    </div>
                </>
            )}
        </section>
    )
}