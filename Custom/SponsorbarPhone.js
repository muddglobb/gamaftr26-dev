"use client";
import Image from "next/image";
import { H3, H6 } from "@/components/elements/typography";

export default function SponsorbarPhone() { // renamed to match file/component intent
  return (
    <section role="region" aria-label="Sponsor section">
      <div className="
        bg-[#BFDEEB]
        min-h-screen
        px-4 py-10
        sm:px-8
        md:px-12
        flex flex-col items-center text-center
      ">
    
        <H3
            style={{
                    fontSize: "25px",
                    marginBottom: "30px",
                    color: "white",
                     textShadow: `
                        /* Outline */
                        -1px -1px 0 #000,
                        1px -1px 0 #000,
                        -1px  1px 0 #000,
                        1px  1px 0 #000,

                        /* Shadow */
                        3px 3px 5px rgba(0,0,0,0.5)
                        `,
                }}
        >
          TERIMA KASIH KEPADA
        </H3>

        <H6 
            style={{
                    fontSize: "30px",
                    marginBottom: "20px",
                    color: "#294852",
                    textShadow: `
                        /* Outline */
                        -1px -1px 0 #ffffffff,
                        1px -1px 0 #ffffffff,
                        -1px  1px 0 #ffffffff,
                        1px  1px 0 #ffffffff,  

                        /* Shadow */
                        3px 3px 5px rgba(0,0,0,0.5)
                        `,
                }}
        >
          SPONSOR
        </H6>

        <Image
          src="/LogoPertamina.webp"
          width={130}
          height={130}
          alt="Logo Pertamina - Sponsor"
          loading="lazy"  // added lazy loading
          className="mb-8 w-[100px] sm:w-[130px]"
        />

        {/* MEDIA PARTNER */}
        <H6 
            style={{
                    fontSize: "30px",
                    marginBottom: "20px",
                    color: "#294852",
                    textShadow: `
                        /* Outline */
                        -1px -1px 0 #ffffffff,
                        1px -1px 0 #ffffffff,
                        -1px  1px 0 #ffffffff,
                        1px  1px 0 #ffffffff,  

                        /* Shadow */
                        3px 3px 5px rgba(0,0,0,0.5)
                        `,
                }}
        >
          MEDIA PARTNER
        </H6>

        <Image
          src="/LogoPertamina.webp"
          width={200}
          height={200}
          alt="Logo Pertamina - Media Partner"
          loading="lazy"
          className="w-[140px] sm:w-[200px]"
        />
      </div>
    </section>
  );
}