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

export default function Education () {
    return(
        <section id="about" className="bg-[#00131A] min-h-screen w-full py-[2%]">
            <div className="text-[#f0fbff] py-[1%] mx-[8%] lg:mx-[15%] max-lg:p-[2%] justify-center bg-white/5 rounded-md h-fit shadow-[0_6px_15px_rgba(0,0,0,0.3)]">
                <h2 className={`pt-[1%] text-center def-h2 ${teko.className}`}>Education</h2>
                {/* Binus */}
                <article className="flex flex-row m-[3%] px-[2%] py-[1%] bg-[#02566085] rounded-xl shadow-[0_6px_15px_rgba(0,0,0,0.3)] transition-transform duration-500 ease-in-out hover:scale-[1.01] max-[982px]:flex-col max-[982px]:items-center max-[982px]:text-center max-[982px]:px-[3%] max-[982px]:py-[5%]">
                    <img src="education/binus.png" alt="binus" className="w-[12.5rem] h-auto object-contain max-[2195px]:w-[10rem] max-[1340px]:w-[8rem] max-[982px]:w-[14rem] max-[712px]:w-[10rem]"/>
                    <div className="m-[2%]">
                        <p className={`def-p ${inter.className} font-bold`}>Binus University</p>
                        <p className={`def-p ${inter.className}`}>Jakarta (2022 - 2024)</p>
                        <p className={`def-p ${inter.className}`}>Bachelor Of Industrial Engineering</p>
                        <p className={`def-p ${inter.className} font-bold`}>Thesis:</p>
                        <p className={`def-p ${inter.className}`}> Optimization Analysis Of Vessel Cooling Time To Prevent nOPV2 Vaccine Deviation Using Linear Regression And Factorial DOE At PT Biofarma
                        </p>
                    </div>
                </article>
                {/* Polban */}
                <article className="flex flex-row m-[3%] px-[2%] py-[1%] bg-[#02566085] rounded-xl shadow-[0_6px_15px_rgba(0,0,0,0.3)] transition-transform duration-500 ease-in-out hover:scale-[1.01] max-[982px]:flex-col max-[982px]:items-center max-[982px]:text-center max-[982px]:px-[3%] max-[982px]:py-[5%]">
                    <img src="education/polban.png" alt="polban" className="w-[12.5rem] h-auto object-contain max-[2195px]:w-[10rem] max-[1340px]:w-[8rem] max-[982px]:w-[6rem] max-[712px]:w-[6rem]"/>
                    <div className="m-[2%]">
                        <p className={`def-p ${inter.className} font-bold`}>Bandung State Polytechnic</p>
                        <p className={`def-p ${inter.className}`}>Bandung (2016 - 2019)</p>
                        <p className={`def-p ${inter.className}`}>Associate Degree of Electronics Engineering</p>
                        <p className={`def-p ${inter.className} font-bold`}>Final Project:</p>
                        <p className={`def-p ${inter.className}`}>Tsunami Wave Detection System Based on IoT</p>
                    </div>
                </article>
            </div>
        </section>
    )
}