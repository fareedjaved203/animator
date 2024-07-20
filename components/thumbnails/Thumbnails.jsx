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
      className="container mx-auto px-4 md:px-20 text-white"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 place-items-start md:grid-cols-3 md:w-2/3 xl:2/3 md:space-x-14 px-4 space-y-2 md:space-y-0">
          <div
            className="text-3xl md:text-4.5xl text-[#FFDC23]"
            style={{ fontWeight: "900" }}
          >
            Featured <div className="text-white">Thumbnails</div>
          </div>
          <div
            className="col-span-2 text-[#CACACA] font-roboto"
            style={{
              fontSize: "14px",
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
