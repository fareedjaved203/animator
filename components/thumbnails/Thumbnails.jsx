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
      className="md:container mx-auto px-4 md:px-20 text-white"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 place-items-start md:grid-cols-3 md:w-[75%] md:space-x-16 space-y-4 md:space-y-0">
          <div
            className="text-4xl md:text-[48px] leading-none text-[#FFDC23]"
            style={{ fontWeight: "900" }}
          >
            Featured <div className="text-white">Thumbnails</div>
          </div>
          <div
            className="col-span-2 text-[#CACACA] font-roboto xl:pr-0"
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
