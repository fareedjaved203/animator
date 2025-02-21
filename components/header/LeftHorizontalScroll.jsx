"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import slider from "./data.json";
import "./left.css";

const LeftHorizontalScroll = () => {
  const scrollersRef = useRef([]);

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller-left");
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
        const scrollerInner = scroller.querySelector(".scroller__inner-left");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div
      className="scroller-left w-full"
      data-direction="left"
      data-speed="slow"
    >
      <div className="scroller__inner-left ">
        {slider?.map((item) => (
          <div key={item?.id} className="">
            <Image
              width={230}
              height={130}
              alt="image"
              className="rounded-xl w-[268px] h-[151px] aspect-video object-cover cursor-pointer"
              src={item?.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftHorizontalScroll;
