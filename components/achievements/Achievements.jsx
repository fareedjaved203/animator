"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Achievements = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="container mx-auto px-4 md:px-20 flex justify-center items-center"
    >
      <div className="text-white flex justify-center items-center space-x-10 md:space-x-12 lg.5:space-x-20 xl:space-x-20 md:flex-row w-full md:w-1/2 md:space-y-0">
        <div className="text-base space-y-2 md:flex-1  flex justify-center items-center flex-col">
          <div>VIEWS</div>
          <div className="text-5xl md:text-8xl font-black font-montserrat">
            3M+
          </div>
        </div>
        <div className="text-base space-y-2 md:flex-1 flex justify-center items-center flex-col">
          <div className="text-nowrap">HAPPY CREATORS</div>
          <div className="text-5xl md:text-8xl font-black font-montserrat">
            100+
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
