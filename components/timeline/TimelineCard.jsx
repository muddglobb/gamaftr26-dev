// components/timeline/TimelineCard.jsx
import { Button } from "@/components/ui/button";
import RightArrow from "@/components/icons/RightArrow";
import React from "react";
import { B3 } from "../elements/typography";

const TimelineCard = ({ title, date, location, description }) => {
  return (
    <div className="bg-white p-1 rounded-xl w-[636px] h-[167px]">
        <div
        className="
            h-full
            w-full
            bg-white 
            rounded-xl 
            border-2 border-dashed border-neutral-400
            p-4 flex flex-col justify-between
        "
        >
        {/* Header */}
        <div className="flex items-start justify-between">
            <h3
            className="
                text-glacier-900
                font-[Mochesa]
                text-[28px]
                leading-[120%]
                font-normal
                [-webkit-text-stroke-width:0.5px]
                [-webkit-text-stroke-color:#000]
            "
            >
            {title}
            </h3>

            <div className="text-right">
            <p className="text-amazon-300 font-[Plus_Jakarta_Sans] text-[14px] leading-[20px] font-semibold">
                {date}
            </p>
            <p className="text-amazon-300 font-[Plus_Jakarta_Sans] text-[14px] leading-[20px] font-semibold">
                {location}
            </p>
            </div>
        </div>

        {/* Description */}
        <p className="text-black text-justify font-[Plus_Jakarta_Sans] text-[14px] leading-[20px] font-medium line-clamp-2">
            {description}
        </p>

        {/* CTA */}
        <Button className="w-fit text-md px-3 py-1">
            <B3>Selengkapnya</B3> <RightArrow />
        </Button>
        </div>
        </div>
  );
};

export default TimelineCard;
