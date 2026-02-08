import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = ["Creativity.", "User-first.", "Pixel-perfect."];

export default function RotatingTextList() {
  const [visibleItems, setVisibleItems] = useState([
    items[0],
    items[1],
    items[2],
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % items.length;

      const nextVisible = [
        items[nextIndex],
        items[(nextIndex + 1) % items.length],
        items[(nextIndex + 2) % items.length],
      ];

      setVisibleItems(nextVisible);
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex justify-center space-x-0 lg:space-x-7 w-full">
        {/* Left Block */}
        <div className="text-white px-4 py-2 text-end">
          <h2 className="text-base sm:text-2xl font-semibold">
            My design
            <br />
            philosophy is,
          </h2>
          <button className="mt-3 sm:mt-4 px-3 sm:px-5 py-1.5 sm:py-2 uppercase border hover:border-light-secondary hover:dark:border-dark-secondary border-white rounded-full text-xs sm:text-sm font-medium hover:bg-light-secondary hover:text-white hover:dark:bg-dark-secondary hover:dark:text-dark-text transition duration-700">
            Let's Build
          </button>
        </div>

        {/* Right Block - Text Cycle */}
        <div className="w-full h-fit overflow-hidden rounded px-4 py-2">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={visibleItems.join("-")}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              className="flex flex-col justify-center text-white text-base sm:text-2xl italic font-semibold"
            >
              {visibleItems.map((line, i) => (
                <div
                  key={i}
                  className={`px-2 sm:px-3 py-1.5 sm:py-2 ${i === 0 ? "" : "bg-white/5"}`}
                >
                  {line}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
