import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Trophy,
  PenTool,
  BarChart2,
  HelpCircle,
  SunMedium,
  Moon,
} from "lucide-react";

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "achievements", icon: Trophy, label: "Achievements" },
  { id: "design", icon: PenTool, label: "Design" },
  { id: "stats", icon: BarChart2, label: "Stats" },
  { id: "help", icon: HelpCircle, label: "Help" },
];

const FloatingNav = ({ darkMode, setDarkMode, footerRef }) => {
  const [activeTab, setActiveTab] = useState("achievements");
  const [hoveredTab, setHoveredTab] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const springTransition = { type: "spring", duration: 0.5, bounce: 0.2 };

  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (footerRef?.current) {
      observer.observe(footerRef.current);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (footerRef?.current) observer.unobserve(footerRef.current);
    };
  }, [footerRef]);

  const showNav = isVisible && !isFooterVisible;

  return (
    <AnimatePresence>
      {showNav && (
        <div
          style={{ pointerEvents: showNav ? "auto" : "none" }}
          className="pointer-events-none flex items-center gap-4 fixed bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-50"
        >
          <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            layout
            transition={springTransition}
            className="pointer-events-auto flex items-center gap-1 sm:gap-2 bg-white/90 backdrop-blur-md border border-gray-200 p-1.5 sm:p-2 rounded-full shadow-2xl"
          >
            <motion.div layout className="flex items-center gap-0.5 sm:gap-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                const isHovered = hoveredTab === item.id;
                // On mobile only show label for active, on desktop show on hover too
                const showLabel = isMobile ? isActive : isActive || isHovered;
                const IconComponent = item.icon;
                const iconSize = isMobile ? 18 : 20;

                return (
                  <motion.button
                    layout
                    key={item.id}
                    onMouseEnter={() => setHoveredTab(item.id)}
                    onMouseLeave={() => setHoveredTab(null)}
                    onClick={() => setActiveTab(item.id)}
                    className="relative px-2.5 sm:px-4 py-2 sm:py-3 flex flex-col items-center justify-center min-w-[40px] sm:min-w-[50px]"
                    transition={springTransition}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-light-background dark:bg-dark-primary rounded-full -z-10"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}

                    <motion.div
                      layout
                      className={`${
                        isActive
                          ? "text-light-primary dark:text-dark-text"
                          : "text-black"
                      } transition-colors duration-300`}
                    >
                      <IconComponent size={iconSize} />
                    </motion.div>

                    <AnimatePresence mode="popLayout">
                      {showLabel && (
                        <motion.span
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className={`text-xs ${
                            isActive
                              ? "text-light-primary dark:text-dark-text"
                              : "text-black"
                          } font-semibold mt-0.5 sm:mt-1 whitespace-nowrap overflow-hidden`}
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}

              <motion.button
                layout
                onClick={() => setDarkMode(!darkMode)}
                className="px-2.5 sm:px-4 py-2 sm:py-3 flex flex-col items-center justify-center min-w-[40px] sm:min-w-[50px] text-black"
                transition={springTransition}
              >
                <motion.div layout>
                  {darkMode ? (
                    <Moon size={isMobile ? 18 : 20} />
                  ) : (
                    <SunMedium size={isMobile ? 18 : 20} />
                  )}
                </motion.div>
                <AnimatePresence mode="popLayout">
                  <motion.span
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-xs font-semibold mt-0.5 sm:mt-1 whitespace-nowrap overflow-hidden"
                  >
                    {darkMode ? "Dark" : "Light"}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </motion.div>
          </motion.nav>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;
