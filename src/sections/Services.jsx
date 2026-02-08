import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import img from "../assets/images/img.png";
import img2 from "../assets/images/imagee.png";
const items = [
  {
    id: 0,
    title: "Development",
    index: "01",
    desc: "I design like a GPS: clear paths, no wrong turns.",
    images: [img, img2],
    bg: "bg-[#1FB6C1]",
  },
  {
    id: 1,
    title: "UI/UX Design",
    index: "02",
    desc: "I design like a GPS: clear paths, no wrong turns.",
    images: [img2, img2],
    bg: "bg-[#1FB6C1]",
  },
  {
    id: 2,
    title: "Graphic Design",
    index: "03",
    desc: "I design like a GPS: clear paths, no wrong turns.",
    images: [img2, img],
    bg: "bg-[#1FB6C1]",
  },
  {
    id: 3,
    title: "Branding",
    index: "04",
    desc: "I design like a GPS: clear paths, no wrong turns.",
    images: [img, img],
    bg: "bg-[#1FB6C1]",
  },
];

export default function CapabilitiesSection() {
  const [active, setActive] = useState(items[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const totalImages = active.images.length;
  const autoPlayRef = useRef(null); // Ref to store the interval
  const Skeleton = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 rounded-xl bg-gray-200/50 dark:bg-neutral-800 overflow-hidden"
    >
      <motion.div
        className="absolute w-[200%] inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
  useEffect(() => {
    setIsLoading(true);
    setLoadedCount(0);
  }, [active]);
  useEffect(() => {
    let mounted = true;

    Promise.all(
      active.images.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve;
          }),
      ),
    ).then(() => {
      if (mounted) setIsLoading(false);
    });

    return () => {
      mounted = false;
    };
  }, [active]);

  // 2. AUTO-SWITCH LOGIC
  useEffect(() => {
    // Start the interval
    autoPlayRef.current = setInterval(() => {
      if (!isLoading) {
        setActive((prev) => {
          const nextIndex = (prev.id + 1) % items.length;
          return items[nextIndex];
        });
      }
    }, 5000); // Switches every 5 seconds

    // Cleanup interval on unmount or when active item changes
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [active, isLoading]); // Reset timer whenever active item changes or loading finishes

  const handleManualClick = (item) => {
    if (item.id === active.id || isLoading) return;

    // Clear the current interval to "reset" the 5s timer immediately
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setActive(item);
  };
  return (
    <section className="w-full py-12 flex items-center justify-center">
      <div className="w-full grid grid-cols-12 gap-12">
        {/* LEFT */}
        <div className="col-span-5 flex flex-col gap-8">
          <h2 className="text-4xl font-semibold text-light-primary dark:text-dark-secondary mb-6">
            Here’s what i am <br /> capable of
          </h2>

          <div className="relative w-[480px] h-[320px]">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <Skeleton key="skeleton" />
              ) : (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0 }}
                  // y: 30
                  animate={{ opacity: 1 }}
                  //  y: 0
                  exit={{ opacity: 0 }}
                  // y: -30
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 pl-6 -mt-8"
                >
                  {active.images.map((img, i) => (
                    <motion.img
                      key={`${active.id}-${i}`}
                      src={img}
                      alt=""
                      className="absolute w-full h-full object-cover object-top rounded-xl shadow-xl"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: isLoading ? 0 : 1,
                        rotate: i === 0 ? -8 : 6,
                        y: i === 0 ? 0 : 80,
                      }}
                      exit={{ opacity: 0, rotate: 0, y: 0 }}
                      transition={{
                        opacity: 5,
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      style={{ zIndex: i }}
                    />
                  ))}
                  {/* {active.images.map((img, i) => (
                    <motion.img
                      key={img + i}
                      src={img}
                      alt=""
                      loading="lazy"
                      className="absolute w-full h-full object-cover object-top rounded-xl shadow-xl"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: isLoading ? 0 : 1,
                        rotate: i === 0 ? -8 : 6,
                        y: i === 0 ? 0 : 80,
                      }}
                      exit={{
                        opacity: 0,
                        y: 0,
                        rotate: 0,
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      style={{ zIndex: i }}
                      onLoad={() => {
                        setLoadedCount((prev) => {
                          const next = prev + 1;
                          if (next === totalImages) {
                            setIsLoading(false);
                          }
                          return next;
                        });
                      }}
                    />
                  ))} */}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className="group transition duration-700 w-full max-w-sm inline-flex items-center justify-between rounded-lg gap-2 mt-24 bg-white dark:bg-white/90 px-4 py-2 font-semibold">
            <p className="text-light-primary dark:text-dark-background">
              See what I can do?
            </p>
            <span className="group-hover:-rotate-45 transition duration-700 p-1 rounded-full bg-light-primary dark:bg-dark-background text-white flex items-center justify-center text-xs">
              <ArrowRight />
            </span>
          </button>
        </div>

        {/* RIGHT */}
        <div className="col-span-7 grid grid-cols-2 gap-4">
          {items.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => {
                if (item.id === active.id || isLoading) return;
                handleManualClick(item);
                setActive(item);
              }}
              className={`${active.id === item.id ? "bg-light-primary dark:bg-dark-secondary" : "bg-light-secondary"}  dark:bg-dark-primary transition duration-700 flex flex-col justify-between text-white gap-4 rounded-2xl p-6 text-left overflow-hidden`}
            >
              <div className="flex items-start justify-between gap-4">
                <p className="max-w-44">{item.desc}</p>

                {/* Arrow */}
                <span className="rounded-full p-1 bg-white/20 flex items-center justify-center">
                  <ArrowUpRight />
                </span>
              </div>
              <div className="flex items-end justify-between gap-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <span className="text-lg text-white/50 font-semibold">
                  {item.index}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
