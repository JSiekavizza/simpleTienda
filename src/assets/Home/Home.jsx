import React from "react";

import TextPressureDemo from "../Components/TiAnimation/TextPressureDemo.jsx";
import Productos from "../Components/Productos/Productos";
import Galeria from "../Components/Galeria/Galeria";

const Home = () => {
  return (
    <>
      <div className="relative min-h-screen w-full z-10 ">
        <div className="flex flex-col relative">
          <TextPressureDemo />
        </div>
        <Productos />
        <Galeria />
      </div>
    </>
  );
};

export default Home;
