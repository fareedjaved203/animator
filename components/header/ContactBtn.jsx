"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ContactBtn = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname == "/" ? (
        <div class="w-full text-center animate-fade-in animation-delay-1000">
          <div className="flex space-x-3 text-[#FFDC23] justify-center items-center">
            <Image src={"/tick.svg"} width={30} height={30} alt="tick" />
            <div>Over 200+ Satisfied Clients</div>
          </div>
          <div
            class="text-4xl md:text-6xl text-white font-semibold flex justify-center items-center flex-col"
            style={{ fontSize: "58px" }}
          >
            Create Your
            <div className="flex flex-nowrap space-x-4">
              {" "}
              <div className="text-[#FFDC23]">
                Thumbnail
                <Image
                  src={"curve.svg"}
                  width={270}
                  height={10}
                  alt="curve"
                  className="ml-6"
                />
              </div>{" "}
              <div>Now.</div>
            </div>
          </div>
        </div>
      ) : (
        <div class="flex justify-center items-center flex-col w-full text-center animate-fade-in animation-delay-1000">
          <div class="text-6xl text-white font-semibold">
            My <span className="text-[#FFDC23]">Work</span>
            <Image
              src={"curve.svg"}
              width={270}
              height={10}
              alt="curve"
              className="ml-6"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ContactBtn;
