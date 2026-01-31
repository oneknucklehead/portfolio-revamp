import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Trophy, PenTool, BarChart2, HelpCircle } from "lucide-react";

const navItems = [
  { id: "home", icon: <Home size={20} />, label: "Home" },
  { id: "achievements", icon: <Trophy size={20} />, label: "Achievements" },
  { id: "design", icon: <PenTool size={20} />, label: "Design" },
  { id: "stats", icon: <BarChart2 size={20} />, label: "Stats" },
  { id: "help", icon: <HelpCircle size={20} />, label: "Help" },
];

const FloatingNav = () => {
  const [activeTab, setActiveTab] = useState("achievements");
  const [hoveredTab, setHoveredTab] = useState(null);

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
      {/* 1. Added 'layout' to the nav to animate its overall width changes */}
      <motion.nav
        layout
        className="flex items-center gap-2 bg-white/90 backdrop-blur-md border border-gray-200 p-2 rounded-full shadow-2xl transition-shadow"
      >
        <motion.div layout className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const isHovered = hoveredTab === item.id;
            const showLabel = isActive || isHovered;

            return (
              <motion.button
                layout // 2. Each button now animates its own width change
                key={item.id}
                onMouseEnter={() => setHoveredTab(item.id)}
                onMouseLeave={() => setHoveredTab(null)}
                onClick={() => setActiveTab(item.id)}
                className="relative px-4 py-3 flex flex-col items-center justify-center min-w-[50px]"
                transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              >
                {/* Selection Background */}
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-light-background dark:bg-dark-primary rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                <motion.div
                  layout
                  className={`${isActive ? "text-light-primary dark:text-dark-text" : "text-black"} transition-colors duration-300`}
                >
                  {item.icon}
                </motion.div>

                {/* Animated Label */}
                <AnimatePresence mode="popLayout">
                  {showLabel && (
                    <motion.span
                      layout // 3. The span also participates in the layout animation
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className={`text-xs  ${isActive ? "text-light-primary dark:text-dark-text" : "text-black dark:text-dark-background"}  font-semibold mt-1 whitespace-nowrap overflow-hidden`}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default FloatingNav;
