import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";

const Marquee = ({
  items = [],
  speed = 80, // px per second
  reverse = false,
  gap = "2rem",
}) => {
  const x = useMotionValue(0);
  const contentRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (!contentRef.current) return;
    setWidth(contentRef.current.scrollWidth);
  }, [items]);

  useAnimationFrame((t, delta) => {
    if (!width) return;

    const moveBy = (speed * delta) / 1000;
    const direction = reverse ? 1 : -1;

    let nextX = x.get() + direction * moveBy;

    if (Math.abs(nextX) >= width) {
      nextX = 0;
    }

    x.set(nextX);
  });

  return (
    <div className="relative overflow-hidden w-full">
      {/* LEFT GRADIENT */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24" />

      {/* RIGHT GRADIENT */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24" />

      <motion.div className="flex w-max" style={{ x, gap }}>
        {/* first copy */}
        <div ref={contentRef} className="flex w-max" style={{ gap }}>
          {items.map((Item, index) => (
            <div key={`first-${index}`} className="flex-shrink-0">
              {Item}
            </div>
          ))}
        </div>

        {/* second copy */}
        <div className="flex w-max" style={{ gap }}>
          {items.map((Item, index) => (
            <div key={`second-${index}`} className="flex-shrink-0">
              {Item}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
