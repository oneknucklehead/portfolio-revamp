import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-2 w-full h-full min-h-screen bg-black text-white">
        <div className="bg-light-primary dark:bg-dark-primary rounded-2xl">
          <Navbar />
        </div>
        <div>part 2</div>
      </div>
    </div>
  );
};

export default Home;
