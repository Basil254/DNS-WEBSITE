import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";

// Default theme
import "@splidejs/react-splide/css";
import { sponsorsLogo } from "../data";

// options for Splide
const splideOptions = {
  perPage: 5,
  perMove: 1,
  type: "loop",
  autoplay: true,
  rewind: true,
  keyboard: "global",
  gap: "1rem",
  pagination: false,
  padding: "2rem",
  breakpoints: {
    1200: { perPage: 4 },
    991: { perPage: 2.3 },
    768: { perPage: 2 },
    500: { perPage: 1.3 },
    425: { perPage: 1 },
  },
  autoScroll: {
    speed: 1,
  },
};

const Sponsors = () => {
  return (
    <div>
      <div className="my-10">
        <h1 className="text-2xl lg:text-4xl text-[#010101] font-bold mb-4 text-center mx-2">
          2022 KENYA DNS <br /> SPONSORS
        </h1>
        <div className="mt-7">
          <Splide options={splideOptions}>
            {sponsorsLogo.map(({ logoUrl, name }, index) => (
              <SplideSlide className="mb-0.5" key={index}>
                <div className="">
                  <div className="flex items-center justify-center">
                    <img
                      src={logoUrl}
                      alt={name}
                      className="w-[200px] h-[100px] shadow-md object-contain p-2 shadow-slate-200 rounded-lg"
                    />
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
