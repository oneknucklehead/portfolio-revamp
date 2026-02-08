import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import PhilosophySection from "../components/LoopingComp";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import ServiceImageCarousel from "../components/ServiceImageCarousel";
import Dropdown from "../components/Dropdown";
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
      delay: 0.15 * letters.length + 0.2,
      type: "spring",
      stiffness: 70,
      damping: 12,
    },
  },
};

const Home = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <div className="hidden lg:block">
        <div className="grid grid-cols-2 lg:grid-rows-[1fr] w-full min-h-screen text-white p-4 gap-4">
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[1fr] w-full text-white p-4 gap-4"> */}
          {/* LEFT */}
          {/* <div className="bg-light-primary dark:bg-dark-primary transition-colors duration-700 rounded-2xl min-h-screen lg:min-h-0"> */}
          <div className="bg-light-primary dark:bg-dark-primary transition-colors duration-700 rounded-2xl min-h-screen lg:min-h-[unset]">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="flex flex-col items-center justify-center h-full gap-6">
              <div className="flex flex-col w-fit justify-center">
                <div className="relative">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex text-white text-[14vw] sm:text-[10vw] lg:text-[8vw]"
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

                  <motion.div
                    variants={arabicVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute top-0 left-1/2 transform transition-colors duration-700 -translate-x-1/2 bg-light-secondary dark:bg-dark-secondary px-3 shadow"
                  >
                    <p className="text-light-text dark:text-dark-background transition-colors duration-700 text-[3vw] sm:text-[2vw] lg:text-[1.5vw] font-medium font-poppins">
                      زوہیب
                    </p>
                  </motion.div>
                </div>
                <div>
                  <p className="text-right">-Ahmed</p>
                </div>
              </div>
              <div className="max-w-96 text-sm lg:text-base py-4 text-center">
                <p>
                  Think of me as your product's wingman — smooth with code,
                  strategic in design, and always focused on delivering results.
                </p>
              </div>
              <div className="rounded-full transition-colors duration-700 flex gap-3 items-center uppercase font-semibold text-xs bg-light-secondary dark:bg-dark-secondary py-3 px-4">
                <div className="relative w-3 h-3">
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
                  <div className="absolute top-0 left-0 w-full h-full rounded-full bg-white/75" />
                </div>
                <p>Available for projects</p>
              </div>
              <div className="">
                <PhilosophySection />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:h-full">
            <div className="flex flex-col h-full">
              <div className="flex justify-end w-full">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex items-center w-fit bg-white rounded-full gap-8 pl-4"
                >
                  <Facebook className="transition-colors duration-700 text-light-secondary dark:text-dark-primary w-6 h-6 cursor-pointer" />
                  <Twitter className="transition-colors duration-700 text-light-secondary dark:text-dark-primary w-5 h-5 cursor-pointer" />
                  <Linkedin className="transition-colors duration-700 text-light-secondary dark:text-dark-primary w-5 h-5 cursor-pointer" />
                  <Instagram className="transition-colors duration-700 text-light-secondary dark:text-dark-primary w-5 h-5 cursor-pointer" />

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
      <div className="block lg:hidden">
        <div className="grid grid-cols-1 h-screen w-full text-white p-4 gap-4">
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[1fr] w-full text-white p-4 gap-4"> */}
          {/* LEFT */}
          {/* <div className="bg-light-primary dark:bg-dark-primary transition-colors duration-700 rounded-2xl min-h-screen lg:min-h-0"> */}
          <div className="h-full bg-light-primary dark:bg-dark-primary transition-colors duration-700 rounded-2xl">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="flex flex-col items-center justify-center h-full gap-6 p-4">
              <div className="flex flex-col w-fit justify-center">
                <div className="relative">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex text-white text-[18vw] sm:text-[15vw] lg:text-[8vw]"
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

                  <motion.div
                    variants={arabicVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute top-0 left-1/2 transform transition-colors duration-700 -translate-x-1/2 bg-light-secondary dark:bg-dark-secondary px-3 shadow"
                  >
                    <p className="text-light-text dark:text-dark-background transition-colors duration-700 text-[3vw] sm:text-[2vw] lg:text-[1.5vw] font-medium font-poppins">
                      زوہیب
                    </p>
                  </motion.div>
                </div>
                <div>
                  <p className="text-right">-Ahmed</p>
                </div>
              </div>
              <div className="max-w-72 text-sm lg:text-base py-4 text-center">
                <p>
                  Think of me as your product's wingman — smooth with code,
                  strategic in design, and always focused on delivering results.
                </p>
              </div>
              <div className="rounded-full transition-colors duration-700 flex gap-3 items-center uppercase font-semibold text-xs bg-light-secondary dark:bg-dark-secondary py-3 px-4">
                <div className="relative w-3 h-3">
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
                  <div className="absolute top-0 left-0 w-full h-full rounded-full bg-white/75" />
                </div>
                <p>Available for projects</p>
              </div>
              <div className="">
                <PhilosophySection />
              </div>
            </div>
          </div>

          {/* RIGHT */}
        </div>
        {/* RIGHT */}
        <div className="w-full lg:h-full  p-4">
          <div className="flex flex-col h-full">
            <div className="flex justify-end w-full">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="hidden sm:flex  flex-wrap items-center w-fit bg-white rounded-full gap-8 pl-4"
              >
                <Facebook className="transition-colors duration-700 text-light-secondary dark:text-dark-primary w-6 h-6 cursor-pointer" />
                <Twitter className="transition-colors duration-700 text-light-secondary dark:text-dark-primary w-5 h-5 cursor-pointer" />
                <Linkedin className="transition-colors duration-700 text-light-secondary dark:text-dark-primary w-5 h-5 cursor-pointer" />
                <Instagram className="transition-colors duration-700 text-light-secondary dark:text-dark-primary w-5 h-5 cursor-pointer" />

                <div className="transition-colors duration-700 bg-light-primary dark:bg-dark-secondary uppercase text-white text-sm px-6 py-2 font-semibold rounded-full">
                  Socials
                </div>
              </motion.div>
              <motion.div className="block sm:hidden">
                <Dropdown
                  label="SOCIALS"
                  items={[
                    {
                      label: "Facebook",
                      icon: (
                        <Facebook className="transition-colors duration-700 text-light-secondary dark:text-dark-primary w-6 h-6 cursor-pointer" />
                      ),
                      href: "#",
                    },
                    {
                      label: "Twitter",
                      icon: (
                        <Twitter className="transition-colors duration-700 text-light-secondary dark:text-dark-primary w-5 h-5 cursor-pointer" />
                      ),
                      href: "#",
                    },
                    {
                      label: "Linkedin",
                      icon: (
                        <Linkedin className="transition-colors duration-700 text-light-secondary dark:text-dark-primary w-5 h-5 cursor-pointer" />
                      ),
                      href: "#",
                    },
                    {
                      label: "Instagram",
                      icon: (
                        <Instagram className="transition-colors duration-700 text-light-secondary dark:text-dark-primary w-5 h-5 cursor-pointer" />
                      ),
                      href: "#",
                    },
                  ]}
                />
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
