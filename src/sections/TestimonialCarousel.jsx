import React, { useEffect, useRef, useState } from "react";
import Flickity from "flickity";
import { motion } from "framer-motion";
import TestimonialCard from "../components/TestimonialCard";

const TestimonialCarousel = () => {
  const carouselRef = useRef(null);
  const flickityInstance = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const testimonials = [
    {
      id: 1,
      imageBefore:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
      imageAfter:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=600&fit=crop",
      chat: [
        {
          sender: "client",
          message:
            "This looks absolutely amazing! Exactly what I envisioned 🔥",
        },
        {
          sender: "you",
          message: "Thank you so much! Happy to bring your vision to life 💚",
        },
      ],
      author: {
        name: "Rohan Jhaveri",
        role: "Founder of 505 Coffee",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      },
      company: "kree8",
    },
    {
      id: 2,
      imageBefore:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      imageAfter:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
      chat: [
        {
          sender: "client",
          message: "Great work! The branding is perfect 👏",
        },
        {
          sender: "you",
          message: "Thank you! We're thrilled you love it 😊",
        },
      ],
      author: {
        name: "Sarah Mitchell",
        role: "CEO of TechStart",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      },
      company: "kree8",
    },
    {
      id: 3,
      imageBefore:
        "https://images.unsplash.com/photo-1557683304-673a23048d34?w=800&h=600&fit=crop",
      imageAfter:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      chat: [
        {
          sender: "client",
          message: "Wow! This exceeded all my expectations 🎯",
        },
        {
          sender: "you",
          message:
            "So glad to hear that! It was a pleasure working with you ✨",
        },
      ],
      author: {
        name: "Marcus Chen",
        role: "Marketing Director at Urban Eats",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      },
      company: "kree8",
    },
    {
      id: 4,
      imageBefore:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&h=600&fit=crop",
      imageAfter:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      chat: [
        {
          sender: "client",
          message: "Incredible attention to detail! Love it! 💯",
        },
        {
          sender: "you",
          message: "Thank you! We appreciate your trust in us 🙌",
        },
      ],
      author: {
        name: "Emily Rodriguez",
        role: "Brand Manager at FreshBites",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      },
      company: "kree8",
    },
    {
      id: 5,
      imageBefore:
        "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&h=600&fit=crop",
      imageAfter:
        "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=800&h=600&fit=crop",
      chat: [
        {
          sender: "client",
          message: "You guys are the best! Perfect execution 🚀",
        },
        {
          sender: "you",
          message: "Thank you! Looking forward to future projects together! 💚",
        },
      ],
      author: {
        name: "David Park",
        role: "Founder of Nomad Collective",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      },
      company: "kree8",
    },
  ];
  const calculateTotalSlides = () => {
    const width = window.innerWidth;
    const totalItems = testimonials.length;

    if (width >= 1024) {
      // Large screens: 3 items per slide
      return Math.ceil(totalItems / 3);
    } else if (width >= 640) {
      // Medium screens: 2 items per slide
      return Math.ceil(totalItems / 2);
    } else {
      // Small screens: 1 item per slide
      return totalItems;
    }
  };
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      if (flickityInstance.current) {
        flickityInstance.current.pausePlayer();

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          flickityInstance.current.unpausePlayer();
        }, 150);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
  useEffect(() => {
    if (carouselRef.current && !flickityInstance.current) {
      flickityInstance.current = new Flickity(carouselRef.current, {
        cellAlign: "left",
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        draggable: true,
        freeScroll: false,
        wrapAround: true,
        autoPlay: 5000,
        pauseAutoPlayOnHover: true,
        groupCells: true,
        adaptiveHeight: false,
        imagesLoaded: true,
        percentPosition: true,
        setGallerySize: true,
        resize: true,
      });
      flickityInstance.current.on("change", (index) => {
        setCurrentSlide(index);
      });
      // Set initial total slides
      setTotalSlides(calculateTotalSlides());

      // Update total slides on window resize
      const handleResize = () => {
        setTotalSlides(calculateTotalSlides());
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }

    return () => {
      if (flickityInstance.current) {
        flickityInstance.current.destroy();
        flickityInstance.current = null;
      }
    };
  }, []);
  const goToSlide = (index) => {
    if (flickityInstance.current) {
      flickityInstance.current.select(index);
    }
  };
  return (
    <div className="py-12 sm:py-12">
      <div className="">
        {/* <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Real testimonials from real people who love our work
          </p>
        </div> */}

        <div ref={carouselRef} className="testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="carousel-cell w-full sm:w-1/2 lg:w-1/3 px-3 sm:px-4   pt-6"
            >
              <TestimonialCard
                testimonial={testimonial}
                isHovered={hoveredCard === index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              />
            </div>
          ))}
        </div>
        <div>
          <div className="flex justify-center items-center gap-2 mt-12">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-colors ${
                  currentSlide === index
                    ? "bg-light-secondary dark:bg-dark-secondary"
                    : "bg-light-secondary/40 dark:bg-dark-secondary/50"
                }`}
                animate={{
                  width: 10,
                  height: 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCarousel;
