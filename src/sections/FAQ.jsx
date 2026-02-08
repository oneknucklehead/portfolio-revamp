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
    <div className="w-full flex flex-col mb-4 md:mb-6 lg:mb-8">
      {/* Question Row */}
      <div className="flex items-center gap-2 md:gap-3 self-start max-w-[95%] sm:max-w-[90%] md:max-w-[85%]">
        <div
          onClick={onClick}
          className={`px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-4 rounded-t-xl rounded-r-xl md:rounded-t-[1.5rem] md:rounded-r-[1.5rem] lg:rounded-t-3xl lg:rounded-r-3xl text-sm md:text-base lg:text-lg font-medium cursor-pointer transition-all duration-300 ${
            isOpen
              ? "bg-light-primary dark:bg-dark-secondary text-white"
              : "bg-white/90 dark:bg-[#474747] text-black dark:text-white"
          }`}
        >
          {question}
        </div>
        <button
          onClick={onClick}
          className={`flex hover:-rotate-12 duration-700 items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full transition-all flex-shrink-0 shadow-sm
            ${isOpen ? "bg-light-primary dark:bg-dark-secondary text-white" : "bg-white/90 text-black"}
          `}
        >
          <div className="relative flex items-center justify-center">
            <div
              className={`absolute transition-all duration-500 w-3 md:w-4 h-[2px] ${
                isOpen
                  ? "bg-white/90 rotate-0 opacity-100"
                  : "bg-black rotate-90 opacity-100"
              }`}
            ></div>
            <div
              className={`w-3 md:w-4 h-[2px] transition-all duration-500 ${
                isOpen ? "bg-white/90" : "bg-black"
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
            <div className="font-medium flex justify-end items-end mt-2 md:mt-3 gap-2 md:gap-3 w-full">
              <div className="bg-light-secondary/50 dark:bg-white/90 p-3 sm:p-4 md:p-5 lg:p-8 rounded-t-xl rounded-l-xl md:rounded-t-[1.5rem] md:rounded-l-[1.5rem] lg:rounded-t-3xl lg:rounded-l-3xl text-white dark:text-black leading-relaxed text-xs sm:text-sm md:text-base max-w-[85%] md:max-w-[80%] lg:max-w-xl shadow-sm">
                {answer}
              </div>
              <div className="flex-shrink-0 mb-1">
                <img
                  src={profile}
                  alt="profile"
                  className="bg-white aspect-square w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-white shadow-sm"
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
    <section className="py-8 md:py-12 lg:py-20 px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 items-center w-full gap-4 md:gap-6">
      <div className="text-light-primary dark:text-dark-primary space-y-4 md:space-y-6 lg:space-y-8">
        <h2 className="text-light-primary dark:text-light-text text-4xl lg:text-6xl font-bold">
          Frequently Asked{" "}
          <span className="text-light-secondary dark:text-dark-secondary italic">
            {" "}
            Questions
          </span>
        </h2>
        <p className="font-medium max-w-lg text-sm sm:text-base text-light-primary dark:text-white">
          We Get It—Curiosity Leads to Success! Got questions? That's a great
          sign. Here are some -
        </p>
        <div className="group w-fit hidden md:flex items-center justify-between gap-4 pl-4 sm:pl-6 md:pl-8 pr-2 py-1.5 sm:py-2 bg-light-secondary hover:bg-light-secondary dark:bg-[#474747] text-white dark:text-white rounded-full transition-all duration-500 ease-in-out cursor-pointer shadow-lg">
          <p className="text-base sm:text-lg md:text-2xl font-semibold tracking-tight">
            Send us a Mail today!
          </p>

          <div className="relative overflow-hidden flex w-fit rounded-full py-2.5 px-2.5 sm:py-3 sm:px-3 md:py-4 md:px-3.5 bg-white/25 dark:bg-white/30 group-hover:bg-light-primary/40 dark:group-hover:bg-dark-background transition-colors duration-500 gap-1">
            <svg
              className="transform transition-all duration-500 ease-out group-hover:translate-x-1"
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
        <div className="flex flex-col mt-4">
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
        <div className="group mt-4 w-fit flex md:hidden items-center justify-between gap-4 pl-4 sm:pl-6 md:pl-8 pr-2 py-1.5 sm:py-2 bg-light-secondary hover:bg-light-secondary dark:bg-[#474747] text-white dark:text-white rounded-full transition-all duration-500 ease-in-out cursor-pointer shadow-lg">
          <p className="text-base sm:text-lg md:text-2xl font-semibold tracking-tight">
            Send us a Mail today!
          </p>

          <div className="relative overflow-hidden flex w-fit rounded-full py-2.5 px-2.5 sm:py-3 sm:px-3 md:py-4 md:px-3.5 bg-white/25 dark:bg-white/30 group-hover:bg-light-primary/40 dark:group-hover:bg-dark-background transition-colors duration-500">
            <svg
              className="transform transition-all duration-500 ease-out group-hover:translate-x-1"
              width="8"
              height="15"
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
              width="8"
              height="15"
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
    </section>
  );
}
