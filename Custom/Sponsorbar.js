"use client";
import Image from "next/image";
import { H3, H6 } from "@/components/elements/typography";

export default function Sponsorbar() {
  return (
    <section role="region" aria-label="Sponsor section">
      <div className="
        bg-[#BFDEEB]
        min-h-screen
        px-4 py-10
        sm:px-8 sm:py-12
        md:px-12 md:py-16
        lg:px-16 lg:py-20
        flex flex-col items-center text-center
      ">
    
        <H3
          style={{
            marginBottom: "30px",
            color: "white",
            textShadow: `
              -1px -1px 0 #000,
              1px -1px 0 #000,
              -1px 1px 0 #000,
              1px 1px 0 #000,
              3px 3px 5px rgba(0,0,0,0.5)
            `,
          }}
          className="text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-8"
        >
          TERIMA KASIH KEPADA
        </H3>

        <H6 
          style={{
            color: "#294852",
            textShadow: `
              -1px -1px 0 #fff,
              1px -1px 0 #fff,
              -1px 1px 0 #fff,
              1px 1px 0 #fff,
              3px 3px 5px rgba(0,0,0,0.5)
            `,
          }}
          className="text-xl sm:text-2xl md:text-3xl mb-4 md:mb-6"
        >
          SPONSOR
        </H6>

        {/* Sponsor Logos Container */}
        <div className="w-full max-w-6xl mb-12 md:mb-16">
          <div className="relative w-full">
            <Image
              src="/coming soon.png"
              width={1200}
              height={400}
              alt="Sponsor"
              loading="lazy"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>

        <H6 
          style={{
            color: "#294852",
            textShadow: `
              -1px -1px 0 #fff,
              1px -1px 0 #fff,
              -1px 1px 0 #fff,
              1px 1px 0 #fff,
              3px 3px 5px rgba(0,0,0,0.5)
            `,
          }}
          className="text-xl sm:text-2xl md:text-3xl mb-4 md:mb-6"
        >
          MEDIA PARTNER
        </H6>

        {/* Media Partner Logos Container */}
        <div className="w-full max-w-6xl">
          <div className="relative w-full">
            <Image
              src="/coming soon.png"
              width={1200}
              height={400}
              alt="Media Partner"
              loading="lazy"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}