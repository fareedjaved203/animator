import React from "react";
import Image from "next/image";
import clientReviews from "./reviews.json";

const Reviews = () => {
  return (
    <div className="container mx-auto">
      <div className="scroll">
        <div className="flex justify-center items-center text-center w-full text-4xl md:text-5xl text-[#e2b203] mb-20">
          <div className="w-3/4">What Clients have to say</div>
        </div>
        <div className="m-scroll-left space-x-4 text-white w-full">
          {clientReviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col items-start space-x-4 mb-8 p-4 bg-gray-800 rounded-xl min-w-80 md:min-w-[30%] h-auto border border-blue-400 cursor-pointer hover:scale-105 hover:transition-all "
            >
              <div className="flex space-x-4">
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
                  <div className="text-lg font-semibold">{review.name}</div>
                  <span className="mt-1 text-md text-blue-300 font-semibold">
                    {review.role}
                  </span>{" "}
                </div>
              </div>
              <div className="text-sm mt-2 line-clamp-4">{review.review}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
