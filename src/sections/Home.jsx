import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import PhilosophySection from "../components/LoopingComp";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import ServiceImageCarousel from "../components/ServiceImageCarousel";
const letters = ["Z", "O", "H", "E", "B"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
};

const arabicVariants = {
  hidden: { opacity: 0, x: -35, y: -40, rotate: -45 },
  visible: {
    opacity: 1,
    x: -35,
    y: 0,
    rotate: -15,
    transition: {
      delay: 0.15 * letters.length + 0.2, // after all letters appear
      type: "spring",
      stiffness: 70,
      damping: 12,
    },
  },
};

const Home = ({ darkMode, setDarkMode }) => {
  return (
    <div className="">
      <div className="grid grid-cols-2 w-full h-full min-h-screen text-white p-4">
        <div className="bg-light-primary dark:bg-dark-primary transition-colors duration-700 rounded-2xl">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <div className="flex flex-col w-fit justify-center">
              <div className="relative">
                {/* Staggered Letters */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex text-white text-[8vw]"
                >
                  {letters.map((char, index) => (
                    <motion.span
                      className="font-vina leading-none"
                      key={index}
                      variants={letterVariants}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Falling Arabic Label */}
                <motion.div
                  variants={arabicVariants}
                  initial="hidden"
                  animate="visible"
                  className="absolute top-0 left-1/2 transform transition-colors duration-700 -translate-x-1/2 bg-light-secondary dark:bg-dark-secondary px-3 shadow"
                >
                  <p className="text-light-text dark:text-dark-background transition-colors duration-700 text-[1.5vw] font-medium font-poppins">
                    زويب
                  </p>
                </motion.div>
              </div>
              <div>
                <p className="text-right">-Ahmed</p>
              </div>
            </div>
            <div className="max-w-96 py-4 text-center">
              <p>
                Think of me as your product’s wingman — smooth with code,
                strategic in design, and always focused on delivering results.
              </p>
            </div>
            <div className="rounded-full transition-colors duration-700 flex gap-3 items-center uppercase font-semibold text-xs bg-light-secondary dark:bg-dark-secondary py-3 px-4">
              <div className="relative w-3 h-3">
                {/* Expanding Ring */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-full rounded-full bg-white/50"
                  style={{ scale: 1 }}
                  animate={{ scale: 2.5, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
                {/* Static Dot */}
                <div className="absolute top-0 left-0 w-full h-full rounded-full bg-white/75" />
              </div>
              <p>Available for projects</p>
            </div>
            <div className="">
              <PhilosophySection />
            </div>
          </div>
        </div>
        {/* SECOND PART */}
        <div className="p-4">
          <div className="flex flex-col h-full">
            <div className="flex justify-end w-full">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex items-center w-fit bg-white rounded-full gap-8 pl-4"
              >
                {/* Social Icons */}
                {/* <div className="group relative"> */}
                <Facebook className="transition-colors duration-700 text-light-secondary dark:text-dark-primary  w-6 h-6 cursor-pointer" />

                {/* <span className="absolute top-10 left-3 -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-light-secondary dark:bg-dark-secondary py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                    FaceBook
                  </span> */}
                {/* </div> */}
                <Twitter className="transition-colors duration-700 text-light-secondary dark:text-dark-primary  w-5 h-5 cursor-pointer" />
                <Linkedin className="transition-colors duration-700 text-light-secondary dark:text-dark-primary  w-5 h-5 cursor-pointer" />
                <Instagram className="transition-colors duration-700 text-light-secondary dark:text-dark-primary  w-5 h-5 cursor-pointer" />

                {/* SOCIALS Label */}
                <div className="transition-colors duration-700 bg-light-primary dark:bg-dark-secondary uppercase text-white text-sm px-6 py-2 font-semibold rounded-full">
                  Socials
                </div>
              </motion.div>
            </div>

            <div className="h-full">
              <ServiceImageCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
