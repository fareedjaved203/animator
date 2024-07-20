"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ContactBtn = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname == "/" ? (
        <div className="w-full text-center animate-fade-in animation-delay-1000 space-y-4">
          <div className="flex space-x-3 text-[#FFDC23] justify-center items-center">
            <Image src={"/tick.svg"} width={30} height={30} alt="tick" />
            <div
              className="font-lato"
              style={{
                fontWeight: "700",
                fontSize: "16px",
                letterSpacing: "6%",
              }}
            >
              Over 200+ Satisfied Clients
            </div>
          </div>
          <div
            className="text-4xl md:text-6xl text-white font-semibold flex justify-center items-center flex-col"
            style={{ fontWeight: "900" }}
          >
            Create Your
            <div className="flex flex-nowrap space-x-2 md:space-x-4">
              {" "}
              <div className="text-[#FFDC23]">
                Thumbnail
                <Image
                  src={"curve.svg"}
                  width={270}
                  height={10}
                  alt="curve"
                  className="ml-6 w-40 h-10 md:w-72"
                />
              </div>{" "}
              <div>Now.</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col w-full text-center animate-fade-in animation-delay-1000">
          <div
            className="space-y-4 text-6xl text-white"
            style={{ fontWeight: "900" }}
          >
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
