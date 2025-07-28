import { motion } from "framer-motion";
import useDarkMode from "./hooks/useDarkMode";
import Home from "./sections/Home";

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    // <main className="min-h-screen flex items-center justify-center text-center p-6 bg-[#9FD7DF] dark:bg-black">
    //   <div className="grid grid-cols-2">
    //     <div className="col-span-1">
    //       <div className="rounded-2xl bg-[#1B3654] dark:bg-[#0d0d0d] w-full h-full">
    //         <div>
    //           <button
    //             className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-[#53D364] dark:text-black"
    //             onClick={() => setDarkMode(!darkMode)}
    //           >
    //             Toggle {darkMode ? "Light" : "Dark"} Mode
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-span-1"></div>
    //   </div>
    <div>
      <Home />
    </div>
    // {/* </main> */}
  );
}

export default App;
