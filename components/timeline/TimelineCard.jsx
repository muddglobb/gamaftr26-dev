"use client";

import { Button } from "@/components/ui/button";
import RightArrow from "@/components/icons/RightArrow";
import React from "react";
import { B3 } from "../elements/typography";

const TimelineCard = ({ title, date, location, description, onOpen }) => {
  return (
    <div className="bg-white p-1 rounded-xl w-full max-w-[636px] min-h-[167px] md:h-[167px] z-10 overflow-visible">
      <div
        className="
          relative h-full w-full bg-white rounded-xl 
          border-3 border-dashed border-amazon-800 
          animate-slideUp
          overflow-hidden
        "
      >
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[40%] bg-[url('/timeline/logo-gamaftr.png')] bg-no-repeat bg-left bg-cover rounded-l-xl pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 p-4 h-full">
          <div className="flex flex-col md:flex-row h-full gap-3 md:gap-0">
            <div className="w-full md:w-6/8 md:pr-4 flex flex-col">
              <h3
                className="
                  text-glacier-900 font-[Mochesa] text-[24px] md:text-[28px] leading-[120%]
                  [-webkit-text-stroke-width:0.5px]
                  [-webkit-text-stroke-color:#000]
                "
              >
                {title}
              </h3>

              <p className="text-black text-justify font-[Plus_Jakarta_Sans] text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] font-medium md:line-clamp-3 mt-2 flex-1">
                {description}
              </p>
            </div>

            <div className="w-full md:w-2/8 md:pl-4 flex flex-row md:flex-col justify-between md:justify-between items-center md:items-end gap-2">
              <div className="text-left md:text-right">
                <p className="text-amazon-300 font-[Plus_Jakarta_Sans] text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] font-semibold">
                  {date}
                </p>
                <p className="text-amazon-300 font-[Plus_Jakarta_Sans] text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] font-semibold">
                  {location}
                </p>
              </div>

              <Button className="w-fit text-sm md:text-md px-3 py-1 shrink-0" onClick={() => onOpen()}>
                <B3>Selengkapnya</B3> <RightArrow />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
