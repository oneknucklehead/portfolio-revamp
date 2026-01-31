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
        <h1 className="text-4xl leading-snug text-center">
          Injecting personality into pixels—so your product <br /> doesn’t just
          work, it{" "}
          <span className="transition-colors duration-700 font-semibold dark:text-dark-secondary">
            {" "}
            WOWS.
          </span>
        </h1>
        <p>Here’s What I Build With (So You Don’t Have To):</p>
        <div className="max-w-3xl">
          {/* <Marquee
            baseSpeed={60}
            items={[
              <MarqueeTicks title="Design" />,
              <MarqueeTicks title="Development" />,
              <MarqueeTicks title="Branding" />,
            ]}
          /> */}
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex py-0.5 flex-none gap-6 pr-6 animate-move-left [animation-duration:30s]">
              {[...new Array(2)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {techstacks.map((techstack) => (
                    <div
                      key={techstack}
                      className="inline-flex items-center gap-4 py-2 px-3 bg-light-text text-black rounded-full"
                    >
                      {/* <span>{techstack.icon}</span> */}
                      <span className="text-sm font-semibold">
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
