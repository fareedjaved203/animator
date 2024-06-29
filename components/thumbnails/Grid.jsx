"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const GridComponent = () => {
  const [divsData, setDivsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/thumbnails.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data);
        setDivsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-4">
        {divsData.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 cursor-pointer hover:scale-105 hover:transition-all"
          >
            <div className="bg-gray-200 w-full rounded-xl overflow-hidden shadow-lg flex justify-center items-center">
              <Image
                src={item.image}
                width={400}
                height={400}
                alt="image"
                className="cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
