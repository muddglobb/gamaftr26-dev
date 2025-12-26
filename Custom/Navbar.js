"use client";
import { useState } from "react";
import { B1 } from "@/components/elements/typography";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        style={{
          backgroundColor: "#BFDEEB",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 400,
        }}
      >
        <nav
          style={{
            backgroundColor: "#AAF0C4",
            padding: "12px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/LOGO.png"
              alt="LogoGAMAFTR26"
              width={55}
              height={55}
              className="w-8 h-8 md:w-[55px] md:h-[55px]"
            />
            <span className="text-[#417C60] text-base md:text-lg font-semibold md:hidden">
              GAMAFTR 2026
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="#aboutus">
              <span
                style={{
                  color: "white",
                  fontSize: "18px",
                  textShadow: `
                    -0.75px -0.75px 0 #000,
                    0.75px -0.75px 0 #000,
                    -0.75px 0.75px 0 #000,
                    0.75px 0.75px 0 #000`,
                  cursor: "pointer",
                }}
              >
                <b>
                  <B1>Tentang Kami</B1>
                </b>
              </span>
            </Link>

            <Link href="#timeline">
              <span
                style={{
                  color: "white",
                  fontSize: "18px",
                  textShadow: `
                    -0.75px -0.75px 0 #000,
                    0.75px -0.75px 0 #000,
                    -0.75px 0.75px 0 #000,
                    0.75px 0.75px 0 #000`,
                  cursor: "pointer",
                }}
              >
                <b>
                  <B1>Kegiatan</B1>
                </b>
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
              <Link href="#pesan-tiket">
                <b>
                  <B1>Pesan Tiket</B1>
                </b>
              </Link>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div
            className="text-3xl text-[#417C60] cursor-pointer md:hidden"
            onClick={() => setOpen(true)}
          >
            ☰
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 w-[70%] h-full bg-white p-6 flex flex-col gap-6 z-500 transition-all duration-300 md:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div
          className="text-4xl text-red-600 text-right cursor-pointer"
          onClick={() => setOpen(false)}
        >
          ✕
        </div>

        <Link
          href="#aboutus"
          className="text-2xl text-center text-[#417C60] font-bold"
          onClick={() => setOpen(false)}
        >
          Tentang Kami
        </Link>

        <Link
          href="#timeline"
          className="text-2xl text-center text-[#417C60] font-bold"
          onClick={() => setOpen(false)}
        >
          Kegiatan
        </Link>

        <Link
          href="#pesan-tiket"
          className="bg-[#087443] text-white px-5 py-3 rounded-xl text-lg text-center"
          onClick={() => setOpen(false)}
        >   
          Pesan Tiket
        </Link>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-opacity-50 z-450 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
