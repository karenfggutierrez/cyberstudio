"use client"

import ScrollButton from "@/components/scrollButton"
import Image from "next/image";

const CasualPage = () => {

    return (
        <div className="bg-gradient-to-b from-yellow-500 to-yellow-400 sm:pb-[3rem]">
            {/* TEXT CONTAINER */}
            <div className="container text-center pt-[2rem] pb-[1rem]">
                <p className="glitch inline-block">
                    <span aria-hidden="true">Casual</span>
                    Casual
                    <span aria-hidden="true">Casual</span>
                </p>
            </div>
            {/* SERVICES CONTAINER */}
            <div className="h-full flex flex-wrap items-center justify-center gap-10 pl-5 pt-5 pr-5 pb-[7%]">
                {/* CARD 1 */}
                <div className="h-[40rem] w-[27rem] flex">
                    <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/torre.jpg" alt="Torre" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
                </div>
                {/* CARD 2 */}
                <div className="h-[40rem] w-[27rem] flex">
                    <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/tren.jpg" alt="Tren" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
                </div>
                {/*  CARD 3 */}
                <div className="h-[40rem] w-[27rem] flex">
                    <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/casual.jpg" alt="Casual" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
                </div>
                {/* CARD 4 */}
                <div className="h-[40rem] w-[27rem] flex">
                    <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/madmax.jpg" alt="Mad Max" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
                </div>
                {/* CARD 5 */}
                <div className="h-[20rem] w-[35rem] flex items-start">
                    <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/casual2.jpg" alt="Casual 2" className="w-full object-contain mt-0" width={300} height={300} responsive="true" />
                </div>
            </div>
            <ScrollButton />
        </div>
    )
}

export default CasualPage
