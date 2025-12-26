"use client";

import { H2 } from "@/components/elements/typography";
import TimelineCard from "./TimelineCard";
import { timelineData } from "./timelineData";
import Image from "next/image";
import { useState } from "react";
import TimelinePopup from "./TimelinePopup";

const TimelineSection = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const openPopup = (data) => setSelectedCard(data);
  const closePopup = () => setSelectedCard(null);

  return (
    <section className="z-1 relative w-full py-20 bg-amazon-200">
      <div className="absolute left-[-32px] bottom-0 w-[240px] h-[1093px] pointer-events-none" aria-hidden="true">
        <Image src="/timeline/gunungleft2.png" alt="Timeline Background" fill className="object-contain" />
      </div>
      <div className="absolute left-[-64px] bottom-0 w-[240px] h-[1093px] pointer-events-none" aria-hidden="true">
        <Image src="/timeline/gunungleft1.png" alt="Timeline Background" fill className="object-contain" />
      </div>
      <div className=" z-0 absolute right-[-32px] bottom-[-180px] w-[240px] h-[1093px] pointer-events-none" aria-hidden="true">
        <Image src="/timeline/gunungright1.png" alt="Timeline Background" fill className="object-contain" />
      </div>
      <div className=" z-0 absolute right-64px bottom-0 pointer-events-none" aria-hidden="true">
        <Image src="/timeline/burung.png" alt="Timeline Background" fill className="object-contain" />
      </div>
      
      
      <div className="container mx-auto max-w-6xl px-4">
        
        <H2
          className="
            text-white text-center
            [text-shadow:0_4px_1px_rgba(0,0,0,0.90)]
            font-[Mochesa] text-[61px] leading-[150%]
            font-normal
            [-webkit-text-stroke-width:0.5px]
            [-webkit-text-stroke-color:#000]
            mb-20
          "
        >
          Timeline Gamaftr 2026
        </H2>

        <div className="z-100 flex flex-col gap-[30px]">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-center"
              >
                {/* Image first on mobile, card second. On desktop we swap via md:order to keep alternating sides. */}
                <div className={`relative w-full max-w-[636px] h-[167px] rounded-2xl 
                  overflow-hidden z-0 pointer-events-none 
                  ${isEven ? 'md:order-2 md:-translate-x-[5%]' : 'md:order-1 md:translate-x-[5%]'}`} aria-hidden="true">
                  <div className={`absolute ${isEven ? 'right-0' : 'left-0'} 
                  top-0 bottom-0 w-full md:w-full rounded-2xl overflow-hidden`}>
                    <Image src={item.image} alt={item.title} fill className={`object-cover object-center md
                      :${isEven ? 'object-right' : 'object-left'}`} />

                  </div>
                </div>

                <div className={`${isEven ? 'md:order-1' : 'md:order-2'} relative w-full max-w-[636px] min-h-[167px] z-10 -mt-6 md:mt-0`}> 
                  {/* negative top margin on mobile so the card overlaps image to create a blended look */}
                  <TimelineCard {...item} onOpen={() => openPopup(item)} />
                </div>
              </div>
            );
          })}
        </div>

        {selectedCard && (
          <TimelinePopup data={selectedCard} onClose={closePopup} />
        )}

      </div>
    </section>
  );
};

export default TimelineSection;
