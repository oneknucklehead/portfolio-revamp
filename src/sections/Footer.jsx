import React, { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { animateScroll } from "react-scroll";

const socials = [
  {
    title: "Follow Me",
    emoji: "⚽",
    x: 0.33,
    y: 0.12,
    rotate: -20,
  },
  {
    title: "Instagram",
    emoji: "🎮",
    x: 0.35,
    y: 0.62,
  },
  {
    title: "Twitter",
    emoji: "🎱",
    x: 0.3,
    y: 0.4,
  },
  {
    title: "LinkedIn",
    emoji: "🏏",
    x: 0.5,
    y: 0.2,
  },
  {
    title: "GitHub",
    emoji: "🌌",
    x: 0.55,
    y: 0.42,
  },
];

const Footer = () => {
  const constraintsRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!constraintsRef.current) return;

    const updateSize = () => {
      setSize({
        width: constraintsRef.current.offsetWidth,
        height: constraintsRef.current.offsetHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-5 bg-light-text w-full h-full dark:bg-dark-primary rounded-xl p-8">
          <div className="w-full h-full flex flex-col justify-around items-center">
            <div className="text-light-secondary dark:text-dark-secondary rounded-xl flex flex-col items-start">
              <p className="pl-1 text-xl font-semibold">Let’s</p>
              <h3 className="text-6xl">
                Get in <span className="font-semibold italic">touch</span>
              </h3>
            </div>
            <div className="group w-full max-w-sm flex items-center justify-between pl-8 pr-2 py-2 bg-light-background hover:bg-light-secondary dark:bg-dark-text dark:hover:bg-dark-secondary text-white dark:text-black rounded-full transition-all duration-500 ease-in-out cursor-pointer shadow-lg">
              <p className="text-2xl font-semibold tracking-tight">connect</p>

              <div className="relative overflow-hidden flex w-fit rounded-full py-4 px-3.5 bg-light-secondary dark:bg-dark-secondary group-hover:bg-white/20 dark:group-hover:bg-white/30 transition-colors duration-500 gap-1">
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
        </div>
        <div className="col-span-7">
          <motion.div
            ref={constraintsRef}
            className="relative h-[250px] overflow-hidden bg-light-secondary dark:bg-dark-secondary rounded-xl p-4"
          >
            {socials.map((social) => (
              <motion.div
                key={social.title}
                drag
                dragConstraints={constraintsRef}
                className="absolute uppercase bg-light-secondary dark:bg-dark-secondary text-white flex items-center gap-2 px-8 border-2 border-white rounded-full py-2.5 cursor-pointer"
                style={{
                  x: size.width * social.x,
                  y: size.height * social.y,
                  rotate: social.rotate || 0,
                }}
              >
                <span className="font-semibold">{social.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="py-2 px-4 text-xs md:text-sm transition-colors duration-700 bg-light-text dark:bg-dark-primary rounded-xl flex items-center justify-between">
        <p className="transition duration-700 text-light-secondary dark:text-dark-text">
          © Zoheb Ahmed
        </p>
        {/* <button
          className="uppercase transition-colors duration-700 bg-light-secondary dark:bg-dark-secondary rounded-lg text-white px-4 py-2"
          
        >
          To Top
        </button> */}
        <motion.button
          initial={false}
          whileHover="hover"
          onClick={scrollToTop}
          className="
        relative overflow-hidden
        w-[40px] h-[40px]
        flex items-center justify-center
        rounded-full
        bg-light-secondary dark:bg-dark-background border-light-background dark:border-dark-secondary border-2
        
        cursor-pointer
      "
          variants={{
            hover: {
              width: "140px",
              borderRadius: "50px",
            },
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Arrow Icon */}
          <motion.svg
            viewBox="0 0 384 512"
            className="w-[13px]"
            variants={{
              hover: { y: "-200%" },
            }}
            transition={{ duration: 0.3 }}
          >
            <path
              fill="white"
              d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
            />
          </motion.svg>

          {/* Text */}
          <motion.span
            className="absolute text-light-text font-semibold text-[13px] uppercase"
            initial={{ opacity: 0, y: 20 }}
            variants={{
              hover: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{ duration: 0.3 }}
          >
            Back to Top
          </motion.span>
        </motion.button>
      </div>
    </div>
  );
};

export default Footer;
