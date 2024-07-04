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
      <div className="flex flex-col space-y-6 justify-center items-center">
        <div className="text-3xl md:text-4xl text-center text-[#e2b203] font-semibold">
          Featured Thumbnails
        </div>
        <div className="md:w-1/3 text-center text-sm">
          I take pride in combining design and strategy that exceeds your
          expectations.
        </div>
        <div className="text-sm">Explore my featured thumbnails below!</div>
      </div>
      <div className="mt-10 md:mt-20">
        <GridComponent />
      </div>
    </div>
  );
};

export default Thumbnails;
