"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GridComponent from "./Grid";

const Thumbnails = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div
      className="lg.5:container mx-auto px-4 md:px-20 text-white"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 place-items-start lg.5:grid-cols-3 md:w-[75%] 2xl:w-[77%] lg.5:space-x-16 space-y-4 lg.5:space-y-0">
          <div
            className="w-full text-4xl text-center lg.5:text-start lg.5:text-[48px] leading-none text-[#FFDC23]"
            style={{ fontWeight: "900" }}
          >
            Featured <div className="text-white">Thumbnails</div>
          </div>
          <div
            className="col-span-2 text-[#CACACA] font-roboto xl:pr-0 text-center lg.5:text-start"
            style={{
              fontSize: "16px",
            }}
          >
            We always provide the best for our clients in any case so that all
            their wishes can be realized and have a decent, comfortable and
            aesthetically pleasing place to live. Pleasing environment for the
            people using the space.
          </div>
        </div>
      </div>
      <div className="mt-10">
        <GridComponent />
      </div>
    </div>
  );
};

export default Thumbnails;
