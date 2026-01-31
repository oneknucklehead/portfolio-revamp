import { useEffect, useRef, useState } from "react";
import Flickity from "flickity";
import { motion, AnimatePresence } from "framer-motion";
import "flickity/css/flickity.css";
import img from "../assets/images/img.png";
import imgBg from "../assets/images/img-placeholder.png";
import "../assets/styles/ServiceImageCarousel.css";
import { ArrowUpRight, ChevronLeft, ChevronRight, Heart } from "lucide-react";

const services = [
  {
    image: img,
    likes: 3,
    link: "/services/branding",
  },
  {
    image: imgBg,
    likes: 7,
    link: "/services/ui-ux",
  },
  {
    image: img,
    likes: 12,
    link: "/services/marketing",
  },
];

const ServiceImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const carouselRef = useRef(null);
  const flkty = useRef(null);

  useEffect(() => {
    flkty.current = new Flickity(carouselRef.current, {
      cellAlign: "center",
      contain: true,
      wrapAround: true,
      pageDots: false,
      prevNextButtons: false,
      draggable: true,
      autoPlay: true,
    });
    flkty.current.on("change", (index) => {
      setCurrentIndex(index);
    });

    return () => {
      flkty.current?.destroy();
    };
  }, []);

  const prev = () => flkty.current.previous();
  const next = () => flkty.current.next();

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="relative w-full max-w-[420px] max-h-fit m-auto h-full">
        {/* CAROUSEL */}
        <div ref={carouselRef} className="carousel">
          {services.map((item, i) => (
            <div key={i} className="carousel-cell w-full">
              <motion.div className="relative h-[520px] rounded-t-xl overflow-hidden">
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />

                {/* LIKE + LINK */}
                <div className="absolute bottom-5 left-5 flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-white/50 transition-colors duration-700 text-light-secondary dark:text-dark-secondary px-3 py-2 rounded-full text-sm font-medium">
                    <Heart
                      //   color="#119FB1"
                      //   fill="text-light-secondary dark:text-dark-secondary"
                      className="transition-colors duration-700 fill-light-secondary dark:fill-dark-secondary"
                      strokeWidth={1}
                    />{" "}
                    {item.likes}
                  </div>

                  <motion.a
                    whileTap={{ scale: 0.9 }}
                    href={item.link}
                    className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center text-lg"
                  >
                    <ArrowUpRight
                      className="transition-colors duration-700 text-light-secondary dark:text-dark-secondary"
                      strokeWidth={2}
                    />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="absolute right-[-16px] bottom-24 flex flex-col gap-2 z-20">
          {services.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => flkty.current.select(index)}
              animate={{
                height: currentIndex === index ? 18 : 8,
                opacity: currentIndex === index ? 1 : 0.5,
              }}
              transition={{ duration: 0.25 }}
              className="w-2 rounded-full transition-colors duration-700 bg-light-secondary dark:bg-dark-secondary"
            />
          ))}
        </div>
        <div className="flex justify-between items-center my-5">
          {/* PLAY BAR */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center gap-2 transition-colors duration-700 bg-light-secondary dark:bg-dark-secondary px-6 py-4 rounded-full">
              <motion.button
                className="relative flex items-center justify-center"
                onClick={() => {
                  setAutoplay((prev) => {
                    if (!prev) flkty.current.playPlayer();
                    else flkty.current.stopPlayer();
                    return !prev;
                  });
                }}
              >
                <motion.svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <motion.path
                    fill="white"
                    animate={{
                      d: autoplay
                        ? // PAUSE (two bars, single compatible path)
                          "M2 1 H4 V11 H2 Z M8 1 H10 V11 H8 Z"
                        : // PLAY (triangle but same commands)
                          "M2 1 H4 L10 6 L4 11 H2 Z",
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.4, 0, 0.2, 1], // material-like smoothness
                    }}
                  />
                </motion.svg>
              </motion.button>

              <div className="flex gap-1.5">
                {services.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => {
                      flkty.current.select(i);
                    }}
                    animate={{
                      opacity: currentIndex === i ? 1 : 0.4,
                      scale: currentIndex === i ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.25 }}
                    className="w-2 h-2 rounded-full bg-white"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ARROWS */}
          <div className="flex gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="p-2 transition-colors duration-700 rounded-full bg-white/50 dark:bg-white/15 flex items-center justify-center "
            >
              <ChevronLeft
                className="transition-colors duration-700 text-light-secondary dark:text-dark-secondary"
                strokeWidth={2}
              />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="p-2 transition-colors duration-700 rounded-full bg-white/50 dark:bg-white/15 flex items-center justify-center "
            >
              <ChevronRight
                className="transition-colors duration-700 text-light-secondary dark:text-dark-secondary"
                strokeWidth={2}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceImageCarousel;
