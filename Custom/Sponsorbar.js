"use client";
import Image from "next/image";
import {H1, H2, H3, H4, H5, H6, H7, B1, B2, B3, B4, B5} from "@/components/elements/typography";
import { TypeOutline } from "lucide-react";
import { useEffect } from "react";

export default function Sponsorbar() {

    return (
        <div 
            style={{
                backgroundColor: "#BFDEEB",
                minHeight: "1560px",
                padding: "50px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "flex-start",
            }}
        >
            <H3
                style={{
                    fontSize: "38px",
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
        
            <Image style={{marginBottom: "30px"}}
                src="/LogoPertamina.webp"
                width={130}
                height={130}
                alt="LogoSponsor" 
            />

            <H6
                style={{
                    fontSize:"30px",
                    marginBottom:"50px",
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
                alt="LogoSponsor"    
            />
        </div>
    );
}