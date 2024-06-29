"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Slider = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div
      class="container mx-auto scroll w-full"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
      data-aos-offset="0"
    >
      <div class="m-scroll-left space-x-4">
        <div className="content-slider rounded-full overflow-hidden">
          <Image
            width={150}
            height={150}
            layout="responsive"
            alt="image"
            src="https://media.istockphoto.com/id/183821822/photo/say.jpg?s=612x612&w=0&k=20&c=kRmCjTzA9cq4amgRgeHkZsZuvxezUtC8wdDYfKg-mho="
          />
        </div>
        <div className="content-slider rounded-full overflow-hidden">
          <Image
            width={150}
            height={150}
            layout="responsive"
            alt="image"
            src="https://www.shutterstock.com/image-photo/surreal-concept-roll-world-dice-260nw-1356798002.jpg"
          />
        </div>
        <div className="content-slider rounded-full overflow-hidden">
          <Image
            width={150}
            height={150}
            layout="responsive"
            alt="image"
            className="rounded-xl"
            src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
          />
        </div>
        <div className="content-slider rounded-full overflow-hidden">
          <Image
            width={150}
            height={150}
            layout="responsive"
            alt="image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypk2q4O05d1h8-gAcAC2HsSwPSB8PHLuqCw&s"
          />
        </div>

        <div className="content-slider rounded-full overflow-hidden">
          <Image
            width={150}
            height={150}
            layout="responsive"
            alt="image"
            src="https://media.istockphoto.com/id/183821822/photo/say.jpg?s=612x612&w=0&k=20&c=kRmCjTzA9cq4amgRgeHkZsZuvxezUtC8wdDYfKg-mho="
          />
        </div>
        <div className="content-slider rounded-full overflow-hidden">
          <Image
            width={150}
            height={150}
            layout="responsive"
            alt="image"
            src="https://www.shutterstock.com/image-photo/surreal-concept-roll-world-dice-260nw-1356798002.jpg"
          />
        </div>
        <div className="content-slider rounded-full overflow-hidden">
          <Image
            width={250}
            height={250}
            layout="responsive"
            alt="image"
            src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
          />
        </div>
        <div className="content-slider rounded-full overflow-hidden">
          <Image
            width={150}
            height={150}
            layout="responsive"
            alt="image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypk2q4O05d1h8-gAcAC2HsSwPSB8PHLuqCw&s"
          />
        </div>
        <div className="content-slider rounded-full overflow-hidden">
          <Image
            width={150}
            height={150}
            layout="responsive"
            alt="image"
            src="https://media.istockphoto.com/id/183821822/photo/say.jpg?s=612x612&w=0&k=20&c=kRmCjTzA9cq4amgRgeHkZsZuvxezUtC8wdDYfKg-mho="
          />
        </div>
        <div className="content-slider rounded-full overflow-hidden">
          <Image
            width={150}
            height={150}
            layout="responsive"
            alt="image"
            src="https://www.shutterstock.com/image-photo/surreal-concept-roll-world-dice-260nw-1356798002.jpg"
          />
        </div>
        <div className="content-slider rounded-full overflow-hidden">
          <Image
            width={150}
            height={150}
            layout="responsive"
            alt="image"
            src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
          />
        </div>
        <div className="content-slider rounded-full overflow-hidden">
          <Image
            width={150}
            height={150}
            layout="responsive"
            alt="image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypk2q4O05d1h8-gAcAC2HsSwPSB8PHLuqCw&s"
          />
        </div>

        <div className="content-slider rounded-full overflow-hidden">
          <Image
            width={150}
            height={150}
            layout="responsive"
            alt="image"
            src="https://media.istockphoto.com/id/183821822/photo/say.jpg?s=612x612&w=0&k=20&c=kRmCjTzA9cq4amgRgeHkZsZuvxezUtC8wdDYfKg-mho="
          />
        </div>
        <div className="content-slider rounded-full overflow-hidden">
          <Image
            width={150}
            height={150}
            layout="responsive"
            alt="image"
            src="https://www.shutterstock.com/image-photo/surreal-concept-roll-world-dice-260nw-1356798002.jpg"
          />
        </div>
        <div className="content-slider rounded-full overflow-hidden">
          <Image
            width={150}
            height={150}
            layout="responsive"
            alt="image"
            src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
          />
        </div>
        <div className="content-slider rounded-full overflow-hidden">
          <Image
            width={150}
            height={150}
            layout="responsive"
            alt="image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypk2q4O05d1h8-gAcAC2HsSwPSB8PHLuqCw&s"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
