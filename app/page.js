"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/navbar/Navbar";
import { useEffect } from "react";
import Header from "@/components/header/Header";

export default function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div data-aos="fade-up" data-aos-anchor-placement="center-center">
        <Header />
      </div>
    </main>
  );
}
