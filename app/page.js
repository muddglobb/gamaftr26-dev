import React from "react";
import { Button } from "@/components/ui/button";
import AboutUs from "@/components/aboutus";
import RightArrow from "@/components/icons/RightArrow";
import { H1, H2, H3, H4, H5, H6, H7, B1, B2, B3, B4, B5 } from "@/components/elements/typography";
import footer from "@/components/footer";
import Footer from "@/components/footer";
import TimelineSection from "@/components/timeline/TimelineSection";
import Hero from "../components/hero"
import Navbar from "@/Custom/Navbar";
import NavbarPhone from "@/Custom/NavbarPhone";
import Sponsorbar from "@/Custom/Sponsorbar";
import Testimonials from "@/components/Testimonials";
import "../app/testimonials.module.css";

const Page = () => {
  return (
    <div className="">
      <Navbar/>
      {/* <NavbarPhone/> */}
      <Hero/>
      <AboutUs />
      <TimelineSection />
      <div className="bg-white h-[3vw]"></div>
      <Testimonials />
      <Sponsorbar/>
      <Footer/>
    </div>
  );
};

export default Page;
