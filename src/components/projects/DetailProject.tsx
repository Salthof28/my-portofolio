import { useState } from "react";
import { motion } from "framer-motion";
import { Teko } from "next/font/google";
import { Inter } from "next/font/google";
import { ProjectDetail } from "@/types/interfaces";
import { detailProjects } from "@/services/dataPorto";
import { createPortal } from "react-dom";
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
    currentId: number;
}
export default function DetailProject ({ hiddenForm, currentId }: DetailWorkExperienceItf) {
    const project: ProjectDetail = detailProjects[currentId];
    const [position, setPosition] = useState<string>('Description');
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
    const btnName: string[] = ['Description', 'My Roles', 'Features', 'Tech Stack', 'Screenshot'];
    return(
        <div className={`bg-[#00131A] rounded-[0.6rem] flex flex-col overflow-hidden formStyle`}>
            <div className="flex flex-col w-[clamp(0.20rem,90vw,55rem)] h-[30rem] py-[1rem] px-[2rem]">
                <button onClick={hiddenForm} className="text-gray-400 text-end font-bold">X</button>
                <h2 className={`text-[#69baa5] ${teko.className} text-[clamp(1.4rem,1.5vw,2rem)]`}>{project.title}</h2>
                {/* <h3 className={`text-[#559684] font-bold ${inter.className} text-[clamp(0.8rem,1.5vw,1.1rem)]`}>{project.title}</h3> */}
                <div className={`flex flex-row gap-[1rem] my-[2rem] overflow-auto custom-scrollbar`}>
                    {btnName.map((name, index) => (
                        <button key={index} onClick={() => setPosition(name)} className={`relative px-[1rem] py-[0.1rem] md:py-[0.4rem] rounded-[1rem] font-medium text-[0.95rem] transition-colors duration-300 z-10 ${position === name ? "text-black" : "text-[#bbbbbb]"} font-bold ${inter.className} text-[clamp(0.8rem,1.5vw,1rem)]`}>
                            {position === name && (
                            <motion.section layoutId="tab-indicator" className="absolute inset-0 bg-[#69baa5] rounded-[1rem] -z-1"
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
                    <div className={`${inter.className} overflow-auto h-[16rem] custom-scrollbar px-[0.4rem]`}>
                        <h2 className={`text-[#559684] font-bold text-[clamp(0.8rem,1.5vw,1.1rem)] mb-[0.4rem]`}>{position}</h2>
                        <p className={`text-[#bbbbbb] text-[clamp(0.8rem,1.5vw,1rem)] text-justify`}>{project.description}</p>
                    </div>
                )}

                {position === btnName[1] && (
                    <div className={`${inter.className} overflow-auto h-[16rem] custom-scrollbar px-[0.4rem]`}>
                        <h2 className={`text-[#559684] font-bold text-[clamp(0.8rem,1.5vw,1.1rem)] mb-[0.4rem]`}>{position}</h2>
                        <ul className={`flex flex-col text-justify ${inter.className} text-[clamp(0.8rem,1.5vw,1rem)] text-[#bbbbbb] gap-[0.4rem]`}>
                            {project.roles.map((role, index) => (
                                <li key={index} className="flex gap-3">
                                    <span className="flex items-center justify-center w-[1.1rem] h-[1.1rem] rounded-full bg-[#69baa5] text-black font-bold mt-1">{index + 1}</span>
                                    <span className="flex-1">{role}</span>
                                </li>
                            ))}

                        </ul>
                    </div>
                )}
                {position === btnName[2] && (
                    <div className={`${inter.className} overflow-auto h-[16rem] custom-scrollbar px-[0.4rem]`}>
                        <h2 className={`text-[#559684] font-bold text-[clamp(0.8rem,1.5vw,1.1rem)] mb-[0.4rem]`}>{position}</h2>
                        <div className={`flex flex-col text-justify ${inter.className} text-[clamp(0.8rem,1.5vw,1rem)] text-[#bbbbbb] gap-[0.4rem]`}>
                            {project.features.map((feature, index) => (
                                <div key={index} className="flex flex-row gap-[0.5rem] bg-white/5 p-[1rem] rounded-[0.6rem] border-[0.1rem] border-[#28362e]">
                                    <p>{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {position === btnName[3] && (
                    <div className={`${inter.className}`}>
                        <h2 className={`text-[#559684] font-bold text-[clamp(0.8rem,1.5vw,1.1rem)] mb-[0.4rem]`}>{position}</h2>
                        <div className={`flex flex-row flex-wrap text-justify ${inter.className} text-[clamp(0.8rem,1.5vw,1rem)] text-[#bbbbbb] gap-[0.4rem]`}>
                            {project.tech.map((ts, index) => (
                                <div key={index} className="flex flex-row gap-[0.5rem] bg-white/5 p-[0.6rem] rounded-[1.5rem] border-[0.1rem] border-[#28362e]">
                                    <p>{ts}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {position === btnName[4] && (
                    <div className={`${inter.className} overflow-auto h-[16rem] custom-scrollbar`}>
                        <h2 className={`text-[#559684] font-bold text-[clamp(0.8rem,1.5vw,1.1rem)] mb-[0.4rem]`}>{position}</h2>
                        <div className={`flex flex-row flex-wrap text-justify ${inter.className} text-[clamp(0.8rem,1.5vw,1rem)] text-[#bbbbbb] gap-[0.4rem] max-lg:justify-center `}>
                            {project.images?.map((img, index) => (
                                <img key={index} src={img} alt={img} className="w-[8rem]" onClick={() => setSelectedImage(img)}/>
                            ))}
                        </div>
                    </div>
                )}
                {selectedImage && typeof window !== "undefined" && createPortal(
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-md" onClick={() => setSelectedImage(undefined)}>
                        <div className="flex flex-col" onClick={(e) => e.stopPropagation()}>
                            <button className="text-end top-2 right-2 text-emerald-500 font-bol text-[clamp(1rem,1.5vw,2rem)] font-bold" onClick={() => setSelectedImage(undefined)}>✕</button>
                            <img src={selectedImage} alt="Selected" className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg transition-transform duration-300"/>

                        </div>
                    </div>,
                    document.body
                )}
            </div>
        </div>
    )
}