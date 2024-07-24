"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Form from "./Form";
import { ContentLayout } from "../Layout/ContentLayout";

const Contact = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <ContentLayout className={"w-full max-w-[520px]"}>
      <div data-aos="fade-up" data-aos-duration="2000" className="w-full">
        <div className="w-full space-y-5 text-center">
          <h2
            className="w-full text-4xl md:text-[48px] text-[#FFDC23] font-semibold "
            style={{ fontWeight: "900" }}
          >
            Get in touch today!
          </h2>
          <div className="text-white text-sm md:text-base">Thank You!</div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <Form />
        </div>
      </div>
    </ContentLayout>
  );
};

export default Contact;
