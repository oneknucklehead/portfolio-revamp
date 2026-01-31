import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Dropdown = ({ label = "Menu", items = [] }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  // const [isOpen, setIsOpen] = useState(false);

  const dotStyle =
    "absolute transition-colors duration-700 bg-light-secondary dark:bg-dark-secondary rounded-full";

  return (
    <div className="relative inline-block text-left">
      <div
        className="relative inline-flex items-center rounded-full overflow-hidden transition-colors duration-700 bg-light-text dark:bg-dark-text"
        ref={dropdownRef}
      >
        {/* Dot Area */}
        <button
          // onClick={() => setOpen((prev) => !prev)}
          className="relative w-12 flex items-center justify-center"
        >
          {/* Dot 1 -> '\' part of X */}
          <motion.span
            className={dotStyle}
            animate={{
              x: open ? 0 : -6,
              y: open ? 0 : -6,
              rotate: open ? 45 : 0,
              width: open ? 16 : 7,
              height: open ? 2.5 : 7,
              borderRadius: open ? 2 : "9999px",
              opacity: 1,
            }}
            transition={{ duration: 0.3 }}
          />
          {/* Dot 2 -> '/' part of X */}
          <motion.span
            className={dotStyle}
            animate={{
              x: open ? 0 : 6,
              y: open ? 0 : 6,
              rotate: open ? -45 : 0,
              width: open ? 16 : 7,
              height: open ? 2.5 : 7,
              borderRadius: open ? 2 : "9999px",
              opacity: 1,
            }}
            transition={{ duration: 0.3 }}
          />
          {/* Dot 3 */}
          <motion.span
            className={dotStyle}
            animate={{
              x: open ? 0 : 6,
              y: open ? 0 : -6,
              scale: open ? 0 : 1,
              opacity: open ? 0 : 1,
              width: 7,
              height: 7,
              borderRadius: "9999px",
            }}
            transition={{ duration: 0.3 }}
          />
          {/* Dot 4 */}
          <motion.span
            className={dotStyle}
            animate={{
              x: open ? 0 : -6,
              y: open ? 0 : 6,
              scale: open ? 0 : 1,
              opacity: open ? 0 : 1,
              width: 7,
              height: 7,
              borderRadius: "9999px",
            }}
            transition={{ duration: 0.3 }}
          />
        </button>

        {/* MENU Button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="transition-colors duration-700 bg-light-secondary dark:bg-dark-secondary text-white px-6 py-2 flex items-center justify-center uppercase font-semibold tracking-wide text-sm rounded-full"
        >
          {label}
        </button>
      </div>
      {/* Dropdown Content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-full origin-top-right bg-white rounded-md shadow-lg z-50"
          >
            <div className="py-1">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href || "#"}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
