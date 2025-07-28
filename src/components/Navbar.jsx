import React, { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import Dropdown from "./Dropdown";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  // const [menuOpen, setMenuOpen] = useState(false);
  const dropdownItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <button
          className="rounded-full p-[4px] bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-background"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun className="h-5 w-5 " /> : <Moon />}
        </button>
        <div>
          <Dropdown label="Menu" items={dropdownItems} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
