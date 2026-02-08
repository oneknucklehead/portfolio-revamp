import React, { useEffect, useRef } from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import Lenis from "lenis";
import Container from "../components/Container";
import useDarkMode from "../hooks/useDarkMode";
import { ArrowRight } from "lucide-react";
import img from "../assets/images/img.png";
import img2 from "../assets/images/imagee.png";
import CardSwap, { Card as CardSwapChild } from "../components/CardSwap";

export default function StackedCards({ darkMode }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  useEffect(() => {
    console.log("darkMode changed:", darkMode);
  }, [darkMode]);
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <section ref={container} className="relative">
      <Card1
        i={0}
        progress={scrollYProgress}
        range={[0 * (1 / 3), 1]}
        targetScale={1 - (3 - 0) * 0.05}
        color={"#FFFFFF"}
        darkColor={"#FFFFFF"}
        darkMode={darkMode}
      />
      <Card2
        i={1}
        progress={scrollYProgress}
        range={[1 * (1 / 3), 1]}
        targetScale={1 - (3 - 1) * 0.05}
        color={"#119FB1"}
        darkMode={darkMode}
        darkColor={"#474747"}
      />
      <Card3
        i={2}
        progress={scrollYProgress}
        range={[2 * (1 / 3), 1]}
        targetScale={1 - (3 - 2) * 0.05}
        color={"#1B3654"}
        darkColor={"#1c1c1c"}
        darkMode={darkMode}
      />
      {/* {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={i}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * (1 / projects.length), 1]}
            targetScale={targetScale}
            darkMode={darkMode}
          />
        );
      })} */}
    </section>
  );
}

const Card1 = ({
  i,
  title,
  description,
  src,
  color,
  darkColor,
  progress,
  range,
  targetScale,
  darkMode,
}) => {
  const container = useRef(null);

  // Internal scroll for the image parallax
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="sticky top-0 w-full flex justify-center mb-10"
      style={{ top: `${60 + i * 20}px` }} // Each card sticks slightly lower than the last
    >
      <motion.div
        style={{
          scale,
        }}
        animate={{
          backgroundColor: darkMode ? darkColor : color,
        }}
        transition={{
          backgroundColor: { duration: 0.6, ease: "easeInOut" },
        }}
        className={`overflow-hidden dark:opacity-90  relative flex flex-col justify-between  gap-4 h-fit w-full rounded-[25px] p-8 md:p-[50px] origin-top shadow-2xl border border-white/10`}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-light-text text-6xl max-w-lg leading-tight">
            Simple, Fast and Privacy{" "}
            <span className="text-light-secondary dark:text-dark-secondary">
              {" "}
              Focused
            </span>{" "}
            Analytics
          </h3>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-white max-w-xs mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div>
              <button className="group transition duration-700 text-white border-white border-2 rounded-lg p-2.5">
                <ArrowRight className="group-hover:-rotate-45 transition duration-700" />
              </button>
            </div>
          </div>
          {/* <div className="bg-white p-1 rounded-lg"> */}

          {/* <div className="aspect-square w-80 h-80">
              <img
                src={img}
                alt="text"
                className="w-full h-full object-cover object-top aspect-square"
              />
            </div>
            <div></div> */}
          {/* </div> */}
        </div>
      </motion.div>
    </div>
  );
};
const Card2 = ({
  i,
  title,
  description,
  src,
  color,
  darkColor,
  progress,
  range,
  targetScale,
  darkMode,
}) => {
  const container = useRef(null);

  // Internal scroll for the image parallax
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="sticky top-0 w-full flex justify-center mb-10"
      style={{ top: `${60 + i * 20}px` }} // Each card sticks slightly lower than the last
    >
      <motion.div
        style={{
          scale,
        }}
        animate={{
          backgroundColor: darkMode ? darkColor : color,
        }}
        transition={{
          backgroundColor: { duration: 0.6, ease: "easeInOut" },
        }}
        className={`overflow-hidden relative flex flex-col justify-between  gap-4 h-fit w-full rounded-[25px] p-8 md:p-[50px] origin-top shadow-2xl border border-white/10`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center ">
            <h3 className="text-light-text text-6xl max-w-lg leading-tight">
              Simple, Fast and Privacy{" "}
              <span className="text-light-secondary dark:text-dark-secondary">
                {" "}
                Focused
              </span>{" "}
              Analytics
            </h3>

            <div>
              <p className="text-white max-w-xs mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div>
                <button className="group transition duration-700 text-white border-white border-2 rounded-lg p-2.5">
                  <ArrowRight className="group-hover:-rotate-45 transition duration-700" />
                </button>
              </div>
            </div>
            {/* <div className="bg-white p-1 rounded-lg"> */}

            {/* <div className="aspect-square w-80 h-80">
              <img
                src={img}
                alt="text"
                className="w-full h-full object-cover object-top aspect-square"
              />
            </div>
            <div></div> */}
            {/* </div> */}
          </div>
          <div style={{ height: "400px", position: "relative" }}>
            <CardSwap
              cardDistance={60}
              verticalDistance={60}
              delay={3500}
              skewAmount={0}
              pauseOnHover={false}
            >
              <CardSwapChild>
                <h3>Card 1</h3>
                <p>Your content here</p>
              </CardSwapChild>
              <CardSwapChild>
                <h3>Card 2</h3>
                <p>Your content here</p>
              </CardSwapChild>
              <CardSwapChild>
                <h3>Card 3</h3>
                <p>Your content here</p>
              </CardSwapChild>
            </CardSwap>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
const Card3 = ({
  i,
  title,
  description,
  src,
  color,
  darkColor,
  progress,
  range,
  targetScale,
  darkMode,
}) => {
  const container = useRef(null);

  // Internal scroll for the image parallax
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="sticky top-0 w-full flex justify-center mb-10"
      style={{ top: `${60 + i * 20}px` }} // Each card sticks slightly lower than the last
    >
      <motion.div
        style={{
          scale,
        }}
        animate={{
          backgroundColor: darkMode ? darkColor : color,
        }}
        transition={{
          backgroundColor: { duration: 0.6, ease: "easeInOut" },
        }}
        className={`overflow-hidden relative flex flex-col justify-between  gap-4 h-fit w-full rounded-[25px] origin-top shadow-2xl border border-white/10`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-[50px]">
            <h3 className="text-light-text text-6xl max-w-lg leading-tight">
              Simple, Fast and Privacy{" "}
              <span className="text-light-secondary dark:text-dark-secondary">
                {" "}
                Focused
              </span>{" "}
              Analytics
            </h3>
            <div>
              <p className="text-white max-w-xs mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div>
                <button className="group transition duration-700 text-white border-white border-2 rounded-lg p-2.5">
                  <ArrowRight className="group-hover:-rotate-45 transition duration-700" />
                </button>
              </div>
            </div>
          </div>
          {/* PUT VIDEO HERE NOT IMAGE */}
          <div className="">
            <img
              src={img}
              alt="text"
              className="w-full h-full object-cover object-top aspect-square"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
