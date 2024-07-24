"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AccordionCard from "./AccordionCard";
import { ContentLayout } from "../Layout/ContentLayout";

const FAQs = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <ContentLayout>
      <div data-aos="fade-up" data-aos-duration="2000">
        <div className="my-10 text-center space-y-6">
          <div
            className="text-4xl md:text-[48px] text-[#FFDC23]"
            style={{ fontWeight: "900" }}
          >
            Frequently Asked Questions
          </div>
          <div className="text-white text-md">
            Everything you need to know about the product and billing.
          </div>
        </div>
        <div>
          <AccordionCard />
        </div>
      </div>
    </ContentLayout>
  );
};

export default FAQs;
