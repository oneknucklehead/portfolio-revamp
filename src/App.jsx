import useDarkMode from "./hooks/useDarkMode";
import Home from "./sections/Home";
import WowSection from "./sections/WowSection";
import Services from "./sections/Services";
import Footer from "./sections/Footer";
import StackedCards from "./sections/CardSection";
import Container from "./components/Container";
import FloatingNav from "./components/FloatingNav";
import FAQ from "./sections/FAQ";
import { useRef } from "react";
import TestimonialCarousel from "./sections/TestimonialCarousel";

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const footerRef = useRef(null);
  return (
    <div className="transition-colors duration-700 bg-light-background dark:bg-dark-background ">
      <FloatingNav
        footerRef={footerRef}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Container>
        <div className="overflow-hidden">
          <Home darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className=" p-4">
            {" "}
            <TestimonialCarousel />
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
        <div ref={footerRef} className="overflow-hidden">
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
