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
              className="flex justify-between items-center text-center w-[960px] text-[#FFDC23] mb-20"
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

          <CarouselContent>
            {clientReviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="md:basis-1/4 lg:basis-[22.22%] ml-4"
              >
                <div className="text-white flex flex-col space-y-3 overflow-auto space-x-4 mb-8 pl-0 bg-black rounded-xl h-[234px] w-[310px] py-2 border border-white cursor-pointer">
                  <div className="p-2 px-3">
                    <Stars />
                  </div>
                  <div className="text-sm font-medium mt-2 italic text-[#CACACA]">
                    "{review.review}"
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
