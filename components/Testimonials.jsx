import React from "react";
import Image from "next/image";
import TestimonialCard from "./TestimonialCard";

// Dummy testimonial data
const testimonialData = [
  {
    id: 1,
    category: "Try Out",
    name: "Haniifah Nadya",
    status: "Peserta Try Out GAMAFTR 2025",
    testimonial:
      "tryout gamaftr itu ngebantu aku untuk belajar dalam utbk. dari soal-soal tryoutnya aku bisa dapat gambaran untuk utbk nanti dan juga ngukur kemampuan sendiri dan tau bagian mana yang masih perlu aku pelajarin lagi panitia gamaftrnya humble dan juga helpful jadi ga segan untuk tanya tanya seputar to dan juga informasi tentang UGM. rate keseluruhan acara 100/10!!",
    photo: "/haniifah_1.webp",
  },
  // {
  //   id: 2,
  //   category: "Bedah Kampus",
  //   name: "Siti Nurhaliza",
  //   status: "Siswa SMA Negeri 5",
  //   testimonial:
  //     "Seminar motivasi dari kakak-kakak UGM sangat menginspirasi. Saya jadi lebih semangat untuk belajar dan mengejar impian kuliah di UGM.",
  //   photo: "/LOGO.png",
  // },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: "linear-gradient(to top, #BFDEEB 0%, #ffffff 100%)",
      }}
    >
      {/* Header Border */}
      <div
        className="w-full border-t-[3px] border-dashed"
        style={{ borderColor: "#2B4B55" }}
      />

      {/* Decorative Clouds */}
      <div className="absolute bottom-0 left-0 w-48 md:w-64 lg:w-80 h-auto z-10 pointer-events-none">
        <Image
          src="/AWAN 1.png"
          alt="Decorative cloud"
          width={320}
          height={240}
          className="w-full h-auto opacity-80"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-48 md:w-64 lg:w-80 h-auto z-10 pointer-events-none">
        <Image
          src="/AWAN 2.png"
          alt="Decorative cloud"
          width={320}
          height={240}
          className="w-full h-auto opacity-80"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Title */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16"
          style={{
            fontFamily: "Mochesa, cursive",
            color: "#1E2625",
            textShadow: `
              -2px -2px 0 #fff,
              2px -2px 0 #fff,
              -2px 2px 0 #fff,
              2px 2px 0 #fff,
              0px 4px 6px rgba(0, 0, 0, 0.3)
            `,
          }}
        >
          Apa Kata Mereka
        </h2>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
          {testimonialData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              category={testimonial.category}
              name={testimonial.name}
              status={testimonial.status}
              testimonial={testimonial.testimonial}
              photo={testimonial.photo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
