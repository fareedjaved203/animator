"use client";
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import clientReviews from "./reviews.json";
import "./reviews.css";

const Reviews = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    AOS.init({});
  }, []);

  const scrollersRef = useRef([]);

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller-reviews");
    scrollersRef.current = Array.from(scrollers);

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollersRef.current.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(
          ".scroller__inner-reviews"
        );
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", false);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <div className="flex justify-center items-center text-center w-full text-4xl font-semibold text-[#e2b203] mb-20">
        <div className="w-3/4">What Clients have to say</div>
      </div>

      <div
        className="scroller-reviews text-white"
        data-direction="right"
        data-speed="slow"
      >
        <div className="scroller__inner-reviews p-2">
          {clientReviews.map((review) => (
            <div
              key={review.id}
              className={`overflow-auto w-80 space-x-4 mb-8 p-4 pl-0 bg-gray-800 rounded-xl h-56 border border-blue-400 cursor-pointer`}
            >
              <div className="flex space-x-4 pl-4">
                <div className="flex-1">
                  <Image
                    src={review.image}
                    width={120}
                    height={120}
                    alt="me"
                    className="rounded-full aspect-square object-cover border border-2 border-blue-400"
                  />
                </div>
                <div className="flex-grow">
                  <div className="text-md font-semibold">{review.name}</div>
                  <span className="mt-1 text-sm text-blue-300 font-semibold">
                    {review.role}
                  </span>{" "}
                </div>
              </div>
              <div className="text-xs mt-2">{review.review}</div>
              {/* {review?.review?.length > 265 && (
                <>
                  <div
                    className="text-xs underline text-white text-end"
                    onClick={() => window.alert("hello")}
                  >
                    See more
                  </div>
                </>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
