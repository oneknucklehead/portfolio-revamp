import { useEffect, useState } from "react";

export default function useDarkMode() {
    const [darkMode, setDarkMode] = useState(false);

    // Init on mount (safe)
    useEffect(() => {
        const root = document.documentElement;

        const storedTheme = localStorage.getItem("theme");

        if (storedTheme === "dark") {
            setDarkMode(true);
            root.classList.add("dark");
        } else if (storedTheme === "light") {
            setDarkMode(false);
            root.classList.remove("dark");
        } else {
            const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setDarkMode(systemDark);
            if (systemDark) root.classList.add("dark");
            else root.classList.remove("dark");
        }
    }, []);

    // Sync changes
    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
}
