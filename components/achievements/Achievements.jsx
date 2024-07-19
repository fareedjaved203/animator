"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiFillLike } from "react-icons/ai";
import { MdRemoveRedEye } from "react-icons/md";

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
      <div className="text-white flex justify-center items-center flex-col md:flex-row w-3/4 space-y-4 md:space-y-0">
        <div className="space-y-6  flex-1 flex justify-center items-center flex-col">
          <div>VIEWS</div>
          <div
            className="text-8xl font-montserrat"
            style={{ fontWeight: "900" }}
          >
            3M+
          </div>
        </div>
        <div className="space-y-6  flex-1 flex justify-center items-center flex-col">
          <div>HAPPY CREATORS</div>
          <div
            className="text-8xl font-montserrat"
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
