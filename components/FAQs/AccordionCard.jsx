"use client";
import { useState } from "react";

const AccordionCard = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (id) => {
    if (expanded === id) {
      setExpanded(null);
    } else {
      setExpanded(id);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="clash-display md:w-[58%] py-4 text-white"
        style={{ lineHeight: "26px" }}
      >
        <div className="w-full space-y-6">
          <AccordionItem
            question="What is your process when working together and creating a youtube
thumbnail?"
            answer="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
            id="answer-1"
            expanded={expanded === "answer-1"}
            toggleAccordion={() => toggleAccordion("answer-1")}
          />
          <AccordionItem
            question="How can a professionally designed thumbnail benefit my youtube channel?"
            answer="We guarantee an uptime of 99.9% for all our hosting services."
            id="answer-2"
            expanded={expanded === "answer-2"}
            toggleAccordion={() => toggleAccordion("answer-2")}
          />
          <AccordionItem
            question="What sets your Youtube Thumbnail design services apart?"
            answer="Yes, we offer free website migration assistance for new customers."
            id="answer-3"
            expanded={expanded === "answer-3"}
            toggleAccordion={() => toggleAccordion("answer-3")}
          />
          <AccordionItem
            question="Is there a free trial available?"
            answer="We employ advanced security measures including firewalls, DDoS protection, and regular security audits."
            id="answer-4"
            expanded={expanded === "answer-4"}
            toggleAccordion={() => toggleAccordion("answer-4")}
          />
        </div>
      </div>
    </div>
  );
};

const AccordionItem = ({ question, answer, id, expanded, toggleAccordion }) => {
  return (
    <div className="bg-black rounded-lg border border-[#FFDC23] cursor-pointer transition-all duration-300">
      <button
        className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold focus:outline-none p-5"
        onClick={toggleAccordion}
        aria-expanded={expanded}
        aria-controls={id}
      >
        <span className="text-[#FFDC23] text-sm">{question}</span>
        <svg
          className={`mt-1.5 border border-white border-2 rounded-full md:mt-0 flex-shrink-0 transform h-6 w-6 ${
            expanded ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {expanded ? (
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              d="M5 12h14"
            ></path>
          ) : (
            <>
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M5 12h14"
              ></path>
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M12 5v14"
              ></path>
            </>
          )}
        </svg>
      </button>
      <div
        className={`transition-all duration-300 answer pt-2 pb-5 px-5 text-sm text-white font-medium ${
          expanded ? "block" : "hidden"
        }`}
        id={id}
        aria-labelledby={`button-${id}`}
        style={{ display: expanded ? "block" : "none" }}
      >
        {answer}
      </div>
    </div>
  );
};

export default AccordionCard;
