import React, { useEffect, useRef } from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import Lenis from "lenis";
import Container from "../components/Container";
import useDarkMode from "../hooks/useDarkMode";
import { ArrowRight } from "lucide-react";
import img from "../assets/images/img.png";
const projects = [
  {
    title: "Matthias Leidinger",
    description: "Originally hailing from Austria...",
    src: "/images/rock.jpg",
    color: "#FFFFFF",
    darkColor: "#ffffff",
  },
  {
    title: "Clément Chapillon",
    description: "This is a story on the border...",
    src: "/images/tree.jpg",
    color: "#119FB1",
    darkColor: "#474747",
  },
  {
    title: "Zissou",
    description: "Though he views photography...",
    src: "/images/water.jpg",
    color: "#1B3654",
    darkColor: "#1c1c1c",
  },
];
const animation = {
  y: ["0%", "0%", "-100%"],
  scale: [1, 1, 0],
};

const transition = {
  duration: 2,
  ease: "linear",
  repeat: Infinity,
  times: [0, 0.5, 1],
};
const Card = ({
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
        className={`relative flex flex-col justify-between  gap-4 h-fit w-full rounded-[25px] p-8 md:p-[50px] origin-top shadow-2xl border border-white/10`}
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
          <div>
            <div className="relative w-fit h-fit mr-14 -mt-4">
              {/* First circle */}
              <motion.span
                className="absolute w-[45px] h-[45px] bg-white rounded-full"
                animate={animation}
                transition={transition}
              />

              {/* Second circle (delayed by 1s) */}
              <motion.span
                className="absolute w-[45px] h-[45px] bg-white rounded-full"
                animate={animation}
                transition={{
                  ...transition,
                  delay: 1,
                }}
              />
            </div>
          </div>
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
          <div className="bg-white p-1 rounded-lg">
            <div className="aspect-square w-80 h-80">
              <img
                src={img}
                alt="text"
                className="w-full h-full object-cover object-top aspect-square"
              />
            </div>
            <div></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

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
      {projects.map((project, i) => {
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
      })}
    </section>
  );
}
