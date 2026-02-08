const Card = ({
  i,
  title,
  description,
  src,
  color,
  darkColor,
  progress,
  range,
  targetScale,
  darkMode,
}) => {
  const container = useRef(null);

  // Internal scroll for the image parallax
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="sticky top-0 w-full flex justify-center mb-10"
      style={{ top: `${60 + i * 20}px` }} // Each card sticks slightly lower than the last
    >
      <motion.div
        style={{
          scale,
        }}
        animate={{
          backgroundColor: darkMode ? darkColor : color,
        }}
        transition={{
          backgroundColor: { duration: 0.6, ease: "easeInOut" },
        }}
        className={`overflow-hidden relative flex flex-col justify-between  gap-4 h-fit w-full rounded-[25px]  origin-top shadow-2xl border border-white/10`}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-light-text text-6xl max-w-lg leading-tight">
            Simple, Fast and Privacy{" "}
            <span className="text-light-secondary dark:text-dark-secondary">
              {" "}
              Focused
            </span>{" "}
            Analytics
          </h3>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-white max-w-xs mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div>
              <button className="group transition duration-700 text-white border-white border-2 rounded-lg p-2.5">
                <ArrowRight className="group-hover:-rotate-45 transition duration-700" />
              </button>
            </div>
          </div>
          {/* <div className="bg-white p-1 rounded-lg"> */}
          <div style={{ height: "400px", position: "relative" }}>
            <CardSwap
              cardDistance={60}
              verticalDistance={60}
              delay={3500}
              skewAmount={0}
              pauseOnHover={false}
            >
              <CardSwapChild>
                <h3>Card 1</h3>
                <p>Your content here</p>
              </CardSwapChild>
              <CardSwapChild>
                <h3>Card 2</h3>
                <p>Your content here</p>
              </CardSwapChild>
              <CardSwapChild>
                <h3>Card 3</h3>
                <p>Your content here</p>
              </CardSwapChild>
            </CardSwap>
          </div>
          {/* <div className="aspect-square w-80 h-80">
              <img
                src={img}
                alt="text"
                className="w-full h-full object-cover object-top aspect-square"
              />
            </div>
            <div></div> */}
          {/* </div> */}
        </div>
      </motion.div>
    </div>
  );
};
