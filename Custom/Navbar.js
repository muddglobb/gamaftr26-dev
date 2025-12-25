import { B1 } from "@/components/elements/typography";
import { H1 } from "@/components/elements/typography";
import { H4 } from "@/components/elements/typography";
import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return (
    <div style={{ backgroundColor: "#BFDEEB" }}>
        <nav
            style={{
                backgroundColor: "#AAF0C4", 
                padding: "12px 32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px"
            }}
        >
            <div >
            <Image
                src="/LOGO.png"
                alt="LogoGAMAFTR26"
                width={55}
                height={55}
            />
            <span>
                <B1></B1>
            </span>
            </div>

            <div style={{ display: "flex", gap: "32px", alignItems: "center",
                }}>

                <Link href="Tentang Kami">
                    <span
                        style={{
                            color: "white",
                            fontSize: "18px",
                            textShadow: `
                                 -0.75px -0.75px 0 #000,
                                 0.75px -0.75px 0 #000,
                                 -0.75px  0.75px 0 #000,
                                 0.75px  0.75px 0 #000 `,
                            cursor: "pointer"
                        }}
                        >

                            <b><B1>Tentang Kami</B1></b>
                    </span>
                </Link>

                <Link href="Tentang Kami">
                    <span
                        style={{
                            color: "white",
                            fontSize: "18px",
                            textShadow: `
                                 -0.75px -0.75px 0 #000,
                                 0.75px -0.75px 0 #000,
                                 -0.75px  0.75px 0 #000,
                                 0.75px  0.75px 0 #000 `,
                            cursor: "pointer"
                        }}
                        >
                        <b><B1>Kegiatan</B1></b>
                    </span>
                </Link>

                <button
                    style={{
                        backgroundColor: "#087443",
                        color: "white",
                        borderRadius: "8px",
                        padding: "10px 20px",
                        border: "none",
                        fontSize: "16px",
                        cursor: "pointer",
                    }}
                >
                    <Link href="PesanTiket">
                        <b>
                            <B1>Pesan Tiket</B1>
                        </b>
                    </Link>
                </button>
            </div> 
        </nav>
    </div>
    );
}
