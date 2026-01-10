"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { B3 } from "../elements/typography";
import RightArrow from "@/components/icons/RightArrow";


// TimelinePopup component to display detailed information about a timeline event

const TimelinePopup = ({ data, onClose }) => {
  if (!data) return null;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, []);

  return (
    
    <div className=" gap-0.5 fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-150 animate-fadeIn">
        <div className="bg-white p-1 rounded-xl w-[700px] max-h-[90vh]">
        <div className="bg-white rounded-xl p-5 w-full h-full gap-1 overflow-y-auto relative border-3 border-dashed border-amazon-800 animate-slideUp">

            {/* CLOSE BUTTON */}
            <button
            onClick={onClose}
            className="absolute top-3 right-3 text-black text-3xl font-bold hover:text-red-500"
            >
            ×
            </button>

            {/* TITLE */}
            <h3
            className="
                text-glacier-900 font-[Mochesa] text-[40px] text-center mb-4
                [-webkit-text-stroke-width:0.5px]
                [-webkit-text-stroke-color:#000]
            "
            >
            {data.title}
            </h3>
            {/* DATE & LOCATION */}
            <p className="text-amazon-300 font-[Plus_Jakarta_Sans] text-[16px] leading-[24px] font-semibold text-center mb-2">
            {data.date} | {data.location}
            </p>

            {/* DESCRIPTION */}
            <p className="text-black text-justify font-[Plus_Jakarta_Sans] text-[16px] leading-[24px] font-semibold mb-6">
            {data.description}
            </p>

            {/* ACTIONS */}
            {!data.noButton && (
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                {data.formUrl && (
                  <Button
                    className="flex-1 py-3 text-lg bg-amazon-600 hover:bg-amazon-700 text-white"
                    onClick={() => window.open(data.formUrl, "_blank")}
                  >
                    Daftar
                  </Button>
                )}

                {/* Maps: support multiple maps via `data.maps` array (label + url), or single `data.mapsUrl` string */}
                {data.maps && Array.isArray(data.maps) && data.maps.length > 0 ? (
                  data.maps.map((m, i) => (
                    <Button
                      key={i}
                      className="flex-1 py-3 text-lg bg-white text-amazon-600 border border-amazon-600 hover:bg-amazon-50"
                      onClick={() => window.open(m.url, "_blank")}
                    >
                      {m.label ? `Lokasi ${m.label}` : 'Lihat Lokasi'}
                    </Button>
                  ))
                ) : data.mapsUrl ? (
                  <Button
                    className="flex-1 py-3 text-lg bg-white text-amazon-600 border border-amazon-600 hover:bg-amazon-50"
                    onClick={() => window.open(data.mapsUrl, "_blank")}
                  >
                    Lihat Lokasi
                  </Button>
                ) : null}
              </div>
            )}

        </div>
        </div>
    </div>

  );
};

export default TimelinePopup;
