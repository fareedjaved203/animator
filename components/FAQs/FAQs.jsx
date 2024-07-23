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
      <div className="my-10 text-center space-y-6">
        <div
          className="text-3xl md:text-[48px] text-[#FFDC23]"
          style={{ fontWeight: "900" }}
        >
          Frequently Asked Questions
        </div>
        <div className="text-white text-sm">
          Everything you need to know about the product and billing.
        </div>
      </div>
      <div>
        <AccordionCard />
      </div>
    </div>
  );
};

export default FAQs;
