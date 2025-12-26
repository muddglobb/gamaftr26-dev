import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="
        relative
        w-full
        min-h-[724px]
        flex
        items-center
        bg-linear-to-b
        from-[#FFFFFF]
        to-amazon-200

        md:from-[#FFFFFF]  
        md:to-amazon-200
        py-16
        overflow-x-clip
        overflow-y-visible
      "
    >
      {/* ================= ORNAMEN DESKTOP ================= */}
      <Image 
        src="/AWAN 1.png" //kiri
        alt="Decorative cloud"
        width={800}
        height={600}
        className="hidden md:block absolute -top-[9vw] left-0 w-[61vw] lg:w-[38vw] h-auto object-contain -translate-x-[20%] -translate-y-[33%] z-50"
      />
      <Image 
        src="/AWAN 2.png" //kanan
        alt="Decorative cloud"
        width={800}
        height={600}
        className="hidden md:block absolute -top-[9vw] right-0 w-[61vw] lg:w-[38vw] h-auto object-contain translate-x-[20%] -translate-y-[33%] z-50"
      />

      {/* ================= ORNAMEN MOBILE ================= */}
      <Image
        src="/AWAN 1.png" //kiri
        alt="Decorative cloud"
        width={300}
        height={250}
        className="md:hidden absolute -top-[8vw] left-0 w-[60vw] lg:w-[80vw] h-auto object-contain -translate-x-[25%] -translate-y-[33%] z-50"
      />

      <Image
        src="/AWAN 2.png" //kanan
        alt="Decorative cloud"
        width={300}
        height={250}
        className="md:hidden absolute -top-[8vw] right-0 w-[60vw] h-auto object-contain translate-x-[25%] -translate-y-[33%] z-50"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center">

        {/* ================= FOTO + FRAME ================= */}
        <div className="relative z-20 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[420px] mx-auto">
          <div className="relative w-full aspect-371/291">

            {/* FRAME BIRU */}
            <div className="absolute inset-0 bg-glacier-400 -rotate-6 md:-rotate-3 -translate-x-1 -translate-y-1 md:-translate-x-3 md:-translate-y-px" />

            {/* FRAME HIJAU */}
            <div className="absolute inset-0 bg-amazon-300 rotate-[4deg] md:rotate-2 translate-x-1 translate-y-1 md:-translate-x-2.5 md:translate-y-0.5" />

            {/* FOTO */}
            <Image
              src="/FOTO ABTS.png"
              alt="GAMAFTR Team Photo"
              width={371}
              height={291}
              priority
              style={{ imageRendering: "-webkit-optimize-contrast" }}
              className="relative z-10 w-full h-full object-cover shadow-lg md:shadow-xl border-2 md:border-4 border-[#F2D7D7]"
            />
          </div>
        </div>

        {/* ================= TEKS ================= */}
        <div className="relative max-w-2xl mx-auto md:pl-4">
          <h4
            style={{ 
              textShadow: `
                -1px -1px 0 #fff,
                1px -1px 0 #fff,
                -1px 1px 0 #fff,
                1px 1px 0 #fff,
                -1px -1px 0 #fff,
                1px -1px 0 #fff,
                -1px 1px 0 #fff,
                1px 1px 0 #fff,
                0px 3px 6px rgba(83, 83, 83, 0.3)
              `
            }}
            className="text-amazon-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center md:text-left"
          >
            Tentang Gamaftr
          </h4>

          <div className="relative">
            {/* DESKRIPSI */}
            <div className="relative z-10 space-y-3 md:space-y-4">
              <p className="text-glacier-950 font-sans font-bold leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl text-justify">
                Merupakan program kerja tahunan KEMARIGAMA (Keluarga Mahasiswa Riau
                Gadjah Mada) yang setiap tahunnya sudah mengunjungi lebih dari 50 SMA
                di Provinsi Riau.
              </p>
              <p className="text-glacier-950 font-sans font-bold leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl text-justify">
                GAMAFTR diinisiasikan untuk memperkenalkan Universitas Gadjah Mada (UGM)
                kepada siswa dan siswi SMA/sederajat di Provinsi Riau.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
