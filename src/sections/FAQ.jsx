import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "../assets/images/profile.jpeg";

const faqData = [
  {
    question: "How does the delivery process work?",
    answer:
      "Our delivery process is streamlined to ensure quality and speed. Once a request is made, we assign it to a lead designer who works with you through completion.",
  },
  {
    question: "Is there a limit to how many design requests I can have?",
    answer:
      "No limits! You can add as many design requests to your queue as you'd like, and they will be delivered one by one.",
  },
  {
    question: "How fast will I receive my designs?",
    answer:
      "Most designs are delivered within 48 hours. More complex requests may take a bit longer, but we'll always keep you updated.",
  },
  {
    question: "Who's behind kree8?",
    answer:
      "kree8 is led by a passionate team—Ved, a brand strategist, and Jay, a design developer. Together, we built KREE8 to understand unique client requests while building lasting trust and creativity.",
  },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="w-full flex flex-col mb-6 md:mb-8">
      {/* Question Row */}
      <div className="flex items-center gap-2 md:gap-3 self-start max-w-[90%] md:max-w-[85%]">
        <div
          onClick={onClick}
          className={`px-5 py-3 md:px-6 md:py-4 rounded-t-[1.5rem] rounded-r-[1.5rem] md:rounded-t-3xl md:rounded-r-3xl text-base md:text-lg font-medium cursor-pointer transition-all duration-300 ${
            isOpen
              ? "bg-light-primary dark:bg-dark-secondary text-white"
              : "bg-white dark:bg-[#474747] text-black dark:text-white"
          }`}
        >
          {question}
        </div>
        <button
          onClick={onClick}
          className={`flex hover:-rotate-12 duration-700 items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all flex-shrink-0 shadow-sm
            ${isOpen ? "bg-light-primary dark:bg-dark-secondary text-white" : "bg-white text-black"}
          `}
        >
          <div className="relative flex items-center justify-center">
            <div
              className={`absolute transition-all duration-500 w-4 h-[2px] ${
                isOpen
                  ? "bg-white rotate-0 opacity-100"
                  : "bg-black rotate-90 opacity-100"
              }`}
            ></div>
            <div
              className={`w-4 h-[2px] transition-all duration-500 ${
                isOpen ? "bg-white" : "bg-black"
              }`}
            ></div>
          </div>
        </button>
      </div>

      {/* Answer Row */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -5 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -5 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="overflow-hidden"
          >
            <div className="font-medium flex justify-end items-end mt-3 gap-2 md:gap-3 w-full">
              <div className="bg-light-secondary/50 dark:bg-white p-5 md:p-8 rounded-t-[1.5rem] rounded-l-[1.5rem] md:rounded-t-3xl md:rounded-l-3xl text-white dark:text-black leading-relaxed text-sm md:text-base max-w-[80%] md:max-w-xl shadow-sm">
                {answer}
              </div>
              <div className="flex-shrink-0 mb-1">
                <img
                  src={profile}
                  alt="profile"
                  className="bg-white aspect-square w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(3);

  return (
    <section className="py-10 md:py-20 px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 items-center w-full gap-4">
      <div className="text-light-primary dark:text-dark-primary space-y-8">
        <h2 className="text-light-primary dark:text-light-text text-3xl md:text-6xl font-bold">
          Frequently Asked{" "}
          <span className="text-light-secondary dark:text-dark-secondary italic">
            {" "}
            Questions
          </span>
        </h2>
        <p className="font-medium max-w-lg text-light-primary dark:text-white ">
          We Get It—Curiosity Leads to Success! Got questions? That’s a great
          sign. Here are some -
        </p>
        <div className="group w-full max-w-sm flex items-center justify-between pl-8 pr-2 py-2 bg-light-secondary hover:bg-light-secondary dark:bg-[#474747]  text-white dark:text-white rounded-full transition-all duration-500 ease-in-out cursor-pointer shadow-lg">
          <p className="text-2xl font-semibold tracking-tight">
            Send us a Mail today!
          </p>

          <div className="relative overflow-hidden flex w-fit rounded-full py-4 px-3.5 bg-white/25 dark:bg-white/30 group-hover:bg-light-primary/40 dark:group-hover:bg-dark-background transition-colors duration-500 gap-1">
            <svg
              className=" transform transition-all duration-500 ease-out group-hover:translate-x-1"
              width="10"
              height="19"
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 20.25L10.875 10.875L1.5 1.5"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <svg
              className="transform transition-all duration-500 ease-out delay-75 group-hover:translate-x-1"
              width="10"
              height="19"
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 20.25L10.875 10.875L1.5 1.5"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
