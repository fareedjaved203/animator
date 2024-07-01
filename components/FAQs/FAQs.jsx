import React from "react";
import AccordionCard from "./AccordionCard";

const FAQs = () => {
  return (
    <div className="container mx-auto px-4 md:px-20">
      <div className="text-3xl md:text-4xl text-[#e2b203] my-10 text-center">
        Frequently Asked Questions
      </div>
      <div>
        <AccordionCard />
      </div>
    </div>
  );
};

export default FAQs;
