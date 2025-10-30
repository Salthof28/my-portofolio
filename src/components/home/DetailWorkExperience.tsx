import { WorkExperienceItf } from "@/types/interfaces";
import { useState } from "react";
import { motion } from "framer-motion";
import { Teko } from "next/font/google";
import { Inter } from "next/font/google";
const teko = Teko({
  subsets: ["latin"],
  weight: ["700"], // ambil langsung yang bold
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // pilih bobot
});

interface DetailWorkExperienceItf {
    hiddenForm: () => void;
    currentWork: WorkExperienceItf;
}
export default function DetailWorkExperience ({ hiddenForm, currentWork }: DetailWorkExperienceItf) {
    const [position, setPosition] = useState<string>('Overview');
    const btnName: string[] = ['Overview', 'Achievements', 'Responsibilities', 'Tech Stack'];
    return(
        <div className={`bg-[#00131A] py-[1rem] px-[2rem] rounded-[0.6rem] w-[clamp(0.20rem,90vw,55rem)] flex flex-col h-[30rem] overflow-auto custom-scrollbar`}>
            <button onClick={hiddenForm} className="text-gray-400 text-end font-bold">X</button>
            <div>
                <h2 className={`text-[#69baa5] ${teko.className} text-[clamp(1.4rem,1.5vw,2rem)]`}>{currentWork.position}</h2>
                <h3 className={`text-[#559684] font-bold ${inter.className} text-[clamp(0.8rem,1.5vw,1.1rem)]`}>{currentWork.name}</h3>
                <div className={`flex flex-row gap-[1rem] my-[2rem] overflow-auto`}>
                    {btnName.map((name, index) => (
                        <button key={index} onClick={() => setPosition(name)} className={`relative px-[1rem] py-[0.4rem] rounded-[1rem] font-medium text-[0.95rem] transition-colors duration-300 z-10 ${position === name ? "text-black" : "text-[#bbbbbb]"} font-bold ${inter.className} text-[clamp(0.8rem,1.5vw,1rem)]`}>
                            {position === name && (
                            <motion.div layoutId="tab-indicator" className="absolute inset-0 bg-[#69baa5] rounded-[1rem] -z-1"
                                transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                                }}
                            />
                            )}
                            {name}
                        </button>
                    ))}
                </div>
                {position === btnName[0] && (
                    <div className={`${inter.className}`}>
                        <h2 className={`text-[#559684] font-bold text-[clamp(0.8rem,1.5vw,1.1rem)] mb-[0.4rem]`}>{position}</h2>
                        <p className={`text-[#bbbbbb] text-[clamp(0.8rem,1.5vw,1rem)] text-justify`}>As a Field Operations Staff (SCADA Operator) at PT Bio Farma, I ensured reliable operation of pressure vessel systems by monitoring production parameters and performing disinfection, CIP, and sterilization processes. I also managed production documentation, verified data compliance, and troubleshot pressure vessel and SCADA issues to maintain production efficiency.</p>
                    </div>
                )}
                {position === btnName[1] && (
                    <div className={`${inter.className}`}>
                        <h2 className={`text-[#559684] font-bold text-[clamp(0.8rem,1.5vw,1.1rem)] mb-[0.4rem]`}>{position}</h2>
                        <div className={`flex flex-col text-justify ${inter.className} text-[clamp(0.8rem,1.5vw,1rem)] text-[#bbbbbb] gap-[0.4rem]`}>
                            {currentWork.achievements.map((achieve, index) => (
                                <div key={index} className="flex flex-row gap-[0.5rem] bg-white/5 p-[1rem] rounded-[0.6rem] border-[0.1rem] border-[#28362e]">
                                    <p>{achieve}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {position === btnName[2] && (
                    <div className={`${inter.className}`}>
                        <h2 className={`text-[#559684] font-bold text-[clamp(0.8rem,1.5vw,1.1rem)] mb-[0.4rem]`}>{position}</h2>
                        <ul className={`flex flex-col text-justify ${inter.className} text-[clamp(0.8rem,1.5vw,1rem)] text-[#bbbbbb] gap-[0.4rem]`}>
                            {currentWork.res.map((responsi, index) => (
                                <li key={index} className="flex gap-3">
                                    <span className="flex items-center justify-center w-[1.1rem] h-[1.1rem] rounded-full bg-[#69baa5] text-black font-bold mt-1">{index + 1}</span>
                                    <span className="flex-1">{responsi}</span>
                                </li>
                            ))}

                        </ul>
                    </div>
                )}
                {position === btnName[3] && (
                    <div className={`${inter.className}`}>
                        <h2 className={`text-[#559684] font-bold text-[clamp(0.8rem,1.5vw,1.1rem)] mb-[0.4rem]`}>{position}</h2>
                        <div className={`flex flex-row flex-wrap text-justify ${inter.className} text-[clamp(0.8rem,1.5vw,1rem)] text-[#bbbbbb] gap-[0.4rem]`}>
                            {currentWork.tech.map((ts, index) => (
                                <div key={index} className="flex flex-row gap-[0.5rem] bg-white/5 p-[0.6rem] rounded-[1.5rem] border-[0.1rem] border-[#28362e]">
                                    <p>{ts}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}