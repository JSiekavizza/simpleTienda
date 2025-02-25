import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <Link to="/categorias/allProducts" className="lg:w-full mx-auto p-4">
        <div className=" bg-gray-100 relative">
          <img
            src="../img-banner-principal/banner-principal.png"
            alt="banner-img"
            className="w-full lg:h-64 object-cover object-center rounded-md  
        opacity-25 block inset-0 hover:opacity-75 transition-all "
          />
        </div>
      </Link>
    </>
  );
};

export default Banner;
