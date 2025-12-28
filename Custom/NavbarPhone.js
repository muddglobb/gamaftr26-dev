"use client";
import { useState } from "react";
import Image from "next/image";
import { B1 } from "@/components/elements/typography";
import { timelineData } from "@/components/timeline/timelineData";

export default function NavbarPhone () {
    const [open, setOpen] = useState(false);
    const tryOutData = timelineData.find(item => item.id === 3);
    const ticketUrl = tryOutData?.formUrl || "#";

    return (
        <>
    <div style={{ backgroundColor: "#BFDEEB", position: "sticky", top: 0, left: 0, zIndex: 400 }}>
        <nav style={{
            width: "100%",

            backgroundColor: "#AAF0C4",
            padding: "12px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",


        }}>
            
            <div className="flex items-center gap-2 text-[#417C60] text-lg">
                <Image src="/lOGO.png" alt="LogoGAMAFTR26" width={32} height={32} />

                <span>GAMAFTR 2026</span>
            </div>

            <div
                className="text-3xl text-[#417C60] cursor-pointer md:hidden"
                onClick={() => setOpen(true)}
            >
                ☰
            </div>
        </nav>
    </div>    
        
        <div 
            className={`fixed top-0 right-0 w-[70%] h-full bg-white p-6 flex flex-col gap-6 z-50 transition-all duration-300
            ${open ? "translate-x-0" : "translate-x-full"}`}
        > 
            <div
                className="text-4xl text-red-600 text-right cursor-pointer"
                onClick={() => setOpen(false)}
            >
                ✕
            </div>
            
            <a
                className="text-2xl text-center text-[#417C60] font-bold"  
                href="google.com"
            >
                Tentang Kami

            </a>

            <a  
                href="google.com" 
                className="text-2xl text-center text-[#417C60] font-bold" 
            >
                Kegiatan
            </a>


                <a
                    href={ticketUrl}
                    target="_blank"
                    className="bg-[#087443] text-white px-5 py-3 rounded-xl text-lg text-center">
                    Pesan Tiket
                </a>
         
        </div>
        </>
    );
}