"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import clientReviews from "./reviews.json";
import "./reviews.css";
import Stars from "./Stars";

const Reviews = () => {
  const OPTIONS = { align: "center", dragFree: true, loop: true };
  return (
    <Carousel className="w-full" options={OPTIONS}>
      <CarouselContent className="-ml-2 py-2  w-full ">
        {clientReviews.map((item) => (
          <CarouselItem key={item.id} className=" md:basis-1/2">
            <Card className=" w-full p-4 flex flex-col justify-center    hover:bg-white border max-w-[687px]  h-[440px] sm:h-full sm:max-h-[380px] md:max-h-[500px] lg:max-h-[363px] ">
              <CardHeader className="flex  flex-row gap-4 ">
                <Image src={item.image} alt="icon" width={120} height={116} />
                <div className="flex-col space-y-1">
                  <h2 className=" text-2xl lg:text-3xl font-mulish font-bold">
                    {item.name}
                  </h2>
                </div>
              </CardHeader>
              <CardContent className=" space-y-4 aspect-square x-6 ">
                <p className="text-lg lg:text-xl font-normal font-mulish text-[##133240] p-0 m-0 ">
                  {item.review}
                  <br /> {item.role}
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Reviews;
