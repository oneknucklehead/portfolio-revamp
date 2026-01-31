import { motion } from "framer-motion";
import useDarkMode from "./hooks/useDarkMode";
import Home from "./sections/Home";
import Marquee from "./components/Marquee";
import WowSection from "./sections/WowSection";
import Services from "./sections/Services";
import Footer from "./sections/Footer";
import CardsSection from "./sections/CardSection";
import StackedCards from "./sections/CardSection";
import Container from "./components/Container";
import FloatingNav from "./components/FloatingNav";
import FAQ from "./sections/FAQ";

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
    <div className="transition-colors duration-700 bg-light-background dark:bg-dark-background ">
      <FloatingNav darkMode={darkMode} setDarkMode={setDarkMode} />
      <Container>
        <div className="overflow-hidden">
          <Home darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className=" p-4">
            {" "}
            {/*p-4*/}
            <WowSection />
            <Services />
          </div>
        </div>

        <div className="relative p-4">
          <StackedCards darkMode={darkMode} />
        </div>
        <div>
          <FAQ />
        </div>
        <div className="overflow-hidden">
          <div className=" p-4">
            <Footer />
          </div>
        </div>
      </Container>
    </div>

    // {/* </main> */}
  );
}

export default App;
