import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Flickity from "flickity";
import "flickity/css/flickity.css";

const TestimonialCarousel = () => {
  const carouselRef1 = useRef(null);
  const flkty = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (carouselRef1.current) {
        flkty.current = new Flickity(carouselRef1.current, {
          cellAlign: "left",
          contain: true,
          freeScroll: false,
          pageDots: true,
          imagesLoaded: true,
          // Change this to false for better stability with Tailwind widths
          percentPosition: false,
          groupCells: false,
        });
      }
    }, 100);

    return () => {
      if (flkty.current) flkty.current.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="py-20 bg-[#B2D8E5] min-h-screen overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Main Ref Container */}
        <div ref={carouselRef1} className="carousel-main outline-none">
          {/* Card Item - Use a fixed width or specific md:w to prevent clipping */}
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="carousel-cell w-[85%] md:w-[400px] mr-8 pb-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] p-8 shadow-xl flex flex-col h-[600px]"
              >
                {/* Image Section */}
                <div className="bg-[#E9EBEF] rounded-[2rem] p-3 h-64 mb-6">
                  <img
                    src="https://via.placeholder.com/400x300"
                    className="w-full h-full object-cover rounded-[1.5rem]"
                    alt="Work"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-gray-900 font-semibold text-xl leading-tight">
                    Functional design meets beauty. Their designs are always
                    creative and aligned.
                  </p>
                  <p className="text-blue-300 text-sm mt-2">Recent / Power</p>
                </div>

                {/* Chat Bubble */}
                <div className="flex flex-col items-end mb-6">
                  <div className="bg-[#F3F4F6] px-6 py-3 rounded-2xl rounded-tr-none text-sm font-medium">
                    Thank yet, dv
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 mt-1 mr-2 uppercase tracking-widest">
                    Kreeb
                  </span>
                </div>

                {/* Footer */}
                <div className="flex items-center gap-4">
                  <img
                    src="https://i.pravatar.cc/100"
                    className="w-12 h-12 rounded-full"
                    alt="avatar"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      AI Mentioning Recorder
                    </h4>
                    <p className="text-gray-400 text-xs">Landing Page Design</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS FIXES */}
      <style>{`
        /* 1. Prevent clipping of shadows and rounded corners */
        .flickity-viewport { 
          overflow: visible !important; 
        }

        /* 2. Custom Dots styling to match your first image */
        .flickity-page-dots { bottom: -40px; }
        .flickity-page-dots .dot {
          width: 8px; height: 8px; background: #555; opacity: 0.3;
        }
        .flickity-page-dots .dot.is-selected {
          opacity: 1;
          background: #333;
        }
      `}</style>
    </div>
  );
};

export default TestimonialCarousel;
