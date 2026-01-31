import { Framer } from "lucide-react";
import React from "react";

const MarqueeTicks = ({ title, logo = <Framer /> }) => {
  return (
    <div className="flex items-center justify-center gap-1 rounded-full bg-white py-2 px-4 text-black">
      <span>{logo}</span>
      <div>
        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
};

export default MarqueeTicks;
