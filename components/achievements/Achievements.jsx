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
      <div className="text-white flex justify-around md:justify-center items-center md:space-x-20 lg.5:space-x-0 md:flex-row w-full md:w-1/2 md:space-y-0">
        <div
          className="md:space-y-1 md:flex-1  flex justify-center items-center flex-col"
          style={{ fontSize: "16px" }}
        >
          <div>VIEWS</div>
          <div
            className="text-5xl md:text-8xl font-montserrat"
            style={{ fontWeight: "900" }}
          >
            3M+
          </div>
        </div>
        <div className="md:space-y-1 md:flex-1 flex justify-center items-center flex-col">
          <div style={{ fontSize: "16px" }} className="text-nowrap">
            HAPPY CREATORS
          </div>
          <div
            className="text-5xl md:text-8xl font-montserrat"
            style={{ fontWeight: "900" }}
          >
            100+
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
