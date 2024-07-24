import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Stars from "./Stars";
import clientReviews from "./reviews.json";

const CarouselSlider = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <div className="flex justify-center items-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-[100vw]"
        >
          <div className="flex justify-center items-center">
            <div
              className="flex space-y-4 md:space-y-0 flex-col md:flex-row justify-between items-center text-center md:w-[650px] lg.5w-[960px] text-[#FFDC23] mb-10 md:mb-16"
              style={{ fontWeight: "900" }}
            >
              <div className="text-4xl md:text-4.5xl text-nowrap">
                Client Reviews
              </div>
              <div className="text-black space-x-3">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </div>
          </div>

          {/* <CarouselItem
                key={review.id}
                className="bg-blue-200 basis-1/1 lg:basis-[24%] 2xl:basis-[21.5%] 2.5xl:basis-[18%] 2.2xl:basis-[20%] 3xl:basis-[16%] 4xl:basis-[12%] lg.5:basis-[30%] lg.6:basis-[27%] lg.75:basis-[26%] pl-6"
              > */}
          {/* className="flex-nowrap ml-3 md:-ml-1 bg-pink-500" */}
          <CarouselContent className="-ml-2 py-2  w-full">
            {clientReviews.map((review) => (
              <CarouselItem
                key={review.id}
                // className="bg-blue-200 basis-1/1 lg:basis-[24%] 2xl:basis-[21.5%] 2.5xl:basis-[18%] 2.2xl:basis-[20%] 3xl:basis-[16%] 4xl:basis-[12%] lg.5:basis-[30%] lg.6:basis-[27%] lg.75:basis-[26%] pl-6"
                className="sm:basis-1/1 md:basis-1/2  lg:basis-1/2 xl:basis-[23%] max-w-[316px] max-h-[240px]"
              >
                <div className="w-full text-white flex flex-col space-y-3 overflow-auto space-x-4 mb-8 pl-0 bg-black rounded-xl h-full py-2 border border-white cursor-pointer">
                  <div className="p-2 px-3">
                    <Stars />
                  </div>
                  <div className="text-sm font-medium mt-2 pr-2 italic text-[#CACACA]">
                    &quot;{review.review}&quot;
                  </div>
                  <div className="flex justify-start items-center space-x-4">
                    <div className="">
                      <Image
                        src={review.image}
                        width={90}
                        height={90}
                        alt="me"
                        className="rounded-full w-[76px] h-[76px] aspect-square object-cover"
                      />
                    </div>
                    <div className="">
                      <div className="text-sm font-medium">{review.name}</div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselSlider;
