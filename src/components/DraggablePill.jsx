import { useMotionValue, motion } from "framer-motion";
import { useEffect } from "react";

const DraggablePill = ({ social, size, constraintsRef }) => {
  const x = useMotionValue(size.width * social.x);
  const y = useMotionValue(size.height * social.y);

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.2}
      //   dragMomentum={false}
      style={{
        left: `${social.left}%`,
        top: `${social.top}%`,
        // x,
        // y,
        rotate: social.rotate || 0,
      }}
      whileDrag={{ scale: 1.1, zIndex: 100 }}
      className="absolute uppercase bg-white/10 backdrop-blur-md text-white flex items-center gap-2 px-6 border-2 border-white/50 rounded-full py-2 cursor-grab active:cursor-grabbing whitespace-nowrap"
    >
      <span className="font-semibold">{social.title}</span>
    </motion.div>
  );
};

export default DraggablePill;
