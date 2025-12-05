import React from "react";
import Image from "next/image"
import { H1, H2, H3, H4, H5, H6, H7, B1, B2, B3, B4, B5 } from "@/components/elements/typography";
import heroKiri from "../public/hero-bg-kiri.png";
import heroKanan from "../public/hero-bg-kanan.png"
import heroHeader from "../public/hero-header.png"
import Countdown from "./countdown";

const Hero = () => {
  return (
    <div className="hero-section relative overflow-hidden bg-linear-to-b from-glacier-300 to-white">
        <div className="hero-background absolute h-full w-full">
            <Image src={heroKiri} className="absolute left-0 z-10"/>
            <Image src={heroKanan} className="absolute right-0 z-10"/>
        </div>
        <div className="hero-content relative h-200 flex flex-col justify-center items-center z-100">
            <div className="hero-header flex flex-col justify-center items-center mb-10">
                <Image src={heroHeader} className="object-contain"/> 
                <H6>Revealing the Path, Lighting the Way Towards Brighter Futures</H6>
            </div>
            <div className="hero-countdown relative flex flex-row">
                <div className="countdown-opening-ceremony justify-center items-center">
                    <H5 className="text-center text-white drop-shadow-[0_1.6px_0_rgba(0,0,0,1)] [-webkit-text-stroke:0.4px_#000000]">Opening Ceremony</H5>
                    <Countdown targetDate={"2025-12-08T23:59:59"}></Countdown>
                </div>
                <div className="countdown-bedah-kampus justify-center items-center">
                    <H5 className="text-center text-white drop-shadow-[0_1.6px_0_rgba(0,0,0,1)] [-webkit-text-stroke:0.4px_#000000]">Bedah Kampus</H5>
                    <Countdown targetDate={"2025-12-31T23:59:59"}></Countdown>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;
