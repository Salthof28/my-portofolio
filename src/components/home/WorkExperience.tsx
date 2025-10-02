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

export default function WorkExperience() {
    return(
        <section className="bg-[#00131A] flex flex-col items-center h-screen justify-center">
            <h2 className={`${teko.className} def-h2 text-[#F62CD1] fteko font-bold my-6`}>Work Experience</h2>
            <div className="text-[#E5D8FD] flex flex-col items-center w-full">
                <article className="flex flex-col items-center bg-[#F62CD125] px-[10%] py-[5%] rounded-xl mx-[8%] lg:mx-[15%] my-[2%] shadow-[0_4px_15px_rgba(246,44,209,0.6)] transition-transform duration-800 ease-in-out hover:scale-[1.02] hover:shadow-[0_4px_15px_rgb(246,44,209)]">
                <h3 className={`text-center text-2xl font-bold def-h3 ${inter.className}`}>PT Bio Farma</h3>
                
                <div className="my-4">
                    <img src="work/biofarma.png" alt="Biofarma" className="w-[18.75rem] max-[712px]:w-[8rem] object-contain"/>
                </div>

                <p className={`text-center def-p ${inter.className}`}><strong>Field Operations Staff (SCADA Operator) - Contract</strong></p>
                <p className={`text-center mb-4 def-p ${inter.className}`}>2022 - 2024</p>

                <ul className={`list-disc text-justify max-[712px]:text-start def-ul ${inter.className}`}>
                    <li>Performing control and monitoring pressure vessel tank processes during production.</li>
                    <li>Disinfect, Clean in Place and Sterilize Pressure Vessel Tank before using production.</li>
                    <li>Review data disinfect, Clean in Place, sterilize and processes production pressure vessel tank.</li>
                    <li>Conducting initial troubleshooting using a machine pressure vessel tank, and SCADA pressure vessel tank.</li>
                    <li>Conducting preventive maintenance on pressure vessel tank.</li>
                    <li>Compiling and preparing production document requirements.</li>
                </ul>
                </article>
            </div>
        </section>
    )
}