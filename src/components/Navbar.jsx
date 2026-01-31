import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = ({ darkMode, setDarkMode }) => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const dropdownItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        {/* <button
          className="rounded-full transition-colors duration-700 p-[4px] bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-background"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun className="h-5 w-5 " /> : <Moon />}
        </button> */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="relative w-[4em] h-[2.2em] rounded-full shadow-md overflow-hidden"
        >
          {/* Background */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              backgroundColor: darkMode ? "#2a2a2a" : "#119FB1",
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Stars */}
          <motion.div
            className="absolute inset-0"
            animate={{ opacity: darkMode ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="absolute w-[5px] h-[5px] bg-white rounded-full left-[2.5em] top-[0.5em]" />
            <span className="absolute w-[5px] h-[5px] bg-white rounded-full left-[2.2em] top-[1.2em]" />
            <span className="absolute w-[5px] h-[5px] bg-white rounded-full left-[3em] top-[0.9em]" />
          </motion.div>

          {/* Cloud */}
          <motion.svg
            viewBox="0 0 16 16"
            className="absolute w-[3.5em] left-[-1.1em] bottom-[-1.4em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: darkMode ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <path
              fill="#fff"
              transform="matrix(.77976 0 0 .78395-299.99-418.63)"
              d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            />
          </motion.svg>

          {/* Knob */}
          <motion.div
            className="absolute w-[1.2em] h-[1.2em] rounded-full bottom-[0.5em] left-[0.5em]"
            animate={{
              x: darkMode ? "0em" : "1.8em",
              boxShadow: darkMode
                ? "inset 8px -4px 0px 0px #ffffff"
                : "inset 15px -4px 0px 15px #ffcf48",
            }}
            transition={{
              duration: 0.5,
              ease: [0.81, -0.04, 0.38, 1.5],
            }}
          />
        </button>
        <div>
          <Dropdown label="Menu" items={dropdownItems} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
