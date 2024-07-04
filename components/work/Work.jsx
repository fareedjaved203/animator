"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GridComponent from "./Grid";

export const Work = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div
      className="container mx-auto text-white"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <GridComponent />
    </div>
  );
};
