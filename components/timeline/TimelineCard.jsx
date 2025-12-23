"use client";

import { Button } from "@/components/ui/button";
import RightArrow from "@/components/icons/RightArrow";
import React from "react";
import { B3 } from "../elements/typography";

const TimelineCard = ({ title, date, location, description, onOpen }) => {
  return (
    <div className="bg-white p-1 rounded-xl w-full max-w-[636px] h-[167px] z-10 overflow-visible">
      <div
        className="
          relative h-full w-full bg-white rounded-xl 
          border-3 border-dashed border-amazon-800 
          animate-slideUp
          overflow-hidden
        "
      >
        <div className="absolute left-0 top-0 bottom-0 w-[40%] bg-[url('/timeline/logo-gamaftr.png')] bg-no-repeat bg-left bg-cover rounded-l-xl pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 p-4 h-full">
          <div className="flex h-full">
            <div className="w-6/8 pr-4 flex flex-col">
              <h3
                className="
                  text-glacier-900 font-[Mochesa] text-[28px] leading-[120%]
                  [-webkit-text-stroke-width:0.5px]
                  [-webkit-text-stroke-color:#000]
                "
              >
                {title}
              </h3>

              <p className="text-black text-justify font-[Plus_Jakarta_Sans] text-[14px] leading-[20px] font-medium line-clamp-3 mt-2 flex-1">
                {description}
              </p>
            </div>

            <div className="w-2/8 pl-4 flex flex-col justify-between items-end">
              <div className="text-right">
                <p className="text-amazon-300 font-[Plus_Jakarta_Sans] text-[14px] leading-[20px] font-semibold">
                  {date}
                </p>
                <p className="text-amazon-300 font-[Plus_Jakarta_Sans] text-[14px] leading-[20px] font-semibold">
                  {location}
                </p>
              </div>

              <Button className="w-fit text-md px-3 py-1" onClick={() => onOpen()}>
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
