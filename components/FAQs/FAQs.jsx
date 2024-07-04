"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AccordionCard from "./AccordionCard";

const FAQs = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="container mx-auto px-4 md:px-20"
    >
      <div className="text-3xl font-semibold text-[#e2b203] my-10 text-center">
        Frequently Asked Questions
      </div>
      <div>
        <AccordionCard />
      </div>
    </div>
  );
};

export default FAQs;
