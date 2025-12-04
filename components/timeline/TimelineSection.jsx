import { H2 } from "@/components/elements/typography";
import TimelineCard from "./TimelineCard";
import { timelineData } from "./timelineData";
import Image from "next/image";

const TimelineSection = () => {
  return (
    <section className="w-full py-20 bg-amazon-200">
      <div className="container mx-auto max-w-6xl px-4">

        {/* TITLE */}
        <H2
          className="
            text-white text-center
            [text-shadow:0_4px_1px_rgba(0,0,0,0.90)]
            [font-family:Mochesa]
            text-[61px] leading-[150%]
            font-normal
            [-webkit-text-stroke-width:0.5px]
            [-webkit-text-stroke-color:#000]
            mb-20
          "
        >
          Timeline Gamaftr 2026
        </H2>

        {/* TIMELINE */}
        <div className="flex flex-col gap-[30px]">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className="
                  flex flex-col md:flex-row
                  justify-center
                "
              >
                {isEven ? (
                  <>
                    {/* CARD LEFT */}
                    <TimelineCard {...item} />

                    {/* IMAGE RIGHT */}
                    <div className="relative w-[636px] h-[167px] rounded-xl overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* IMAGE LEFT */}
                    <div className="relative w-[636px] h-[167px] rounded-xl overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* CARD RIGHT */}
                    <TimelineCard {...item} />
                  </>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TimelineSection;
