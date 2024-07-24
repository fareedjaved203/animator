"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GridComponent from "./Grid";
import { ContentLayout } from "../Layout/ContentLayout";

const Thumbnails = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <ContentLayout>
      <div
        className="text-white w-full"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-1 place-items-center md:place-items-start lg.5:grid-cols-3 space-x-0 lg.5:space-x-16 space-y-4 lg.5:space-y-0 gap-x-16">
            <h2
              className="col-span-3 md:col-span-1 w-full text-4xl text-center lg.5:text-start lg.5:text-[48px] leading-none text-[#FFDC23]"
              style={{ fontWeight: "900" }}
            >
              Featured <span className="text-white">Thumbnails</span>
            </h2>
            <div className="col-span-3 md:col-span-2 text-[#CACACA] font-roboto xl:pr-0 lg.5:text-start text-sm md:text-base text-center md:text-justify">
              We always provide the best for our clients in any case so that all
              their wishes can be realized and have a decent, comfortable and
              aesthetically pleasing place to live. Pleasing environment for the
              people using the space.
            </div>
          </div>
        </div>
        <div className="mt-10 w-full">
          <GridComponent />
        </div>
      </div>
    </ContentLayout>
  );
};

export default Thumbnails;
