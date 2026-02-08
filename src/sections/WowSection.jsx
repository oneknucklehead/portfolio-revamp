import React, { Fragment } from "react";
import Marquee from "../components/Marquee";
import MarqueeTicks from "../components/MarqueeTicks";
import { StarIcon } from "lucide-react";
const techstacks = [
  {
    icon: StarIcon,
    title: "Design",
  },
  {
    icon: StarIcon,
    title: "Development",
  },
  {
    icon: StarIcon,
    title: "Branding",
  },
  {
    icon: StarIcon,
    title: "Design",
  },
  {
    icon: StarIcon,
    title: "Development",
  },
  {
    icon: StarIcon,
    title: "Branding",
  },
];
const WowSection = () => {
  return (
    <div>
      <div className="transition-colors duration-700 bg-light-secondary   text-white dark:bg-dark-primary rounded-2xl flex flex-col items-center justify-center gap-4 px-6 py-12">
        <h1 className="text-3xl md:text-4xl leading-snug text-center">
          Injecting personality into pixels—so your product <br /> doesn’t just
          work, it{" "}
          <span className="transition-colors duration-700 font-semibold dark:text-dark-secondary">
            {" "}
            WOWS.
          </span>
        </h1>
        <p className="text-center">
          Here’s What I Build With (So You Don’t Have To):
        </p>
        <div className="w-full max-w-xl sm:max-w-2xl lg:max-w-3xl">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex py-0.5 flex-none gap-3 sm:gap-4 lg:gap-6 pr-3 sm:pr-4 lg:pr-6 animate-move-left [animation-duration:30s]">
              {[...new Array(2)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {techstacks.map((techstack, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center gap-2 sm:gap-3 lg:gap-4 py-1.5 sm:py-2 px-2.5 sm:px-3 bg-light-text text-black rounded-full"
                    >
                      <span className="text-xs sm:text-sm font-semibold">
                        {techstack.title}
                      </span>
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WowSection;
