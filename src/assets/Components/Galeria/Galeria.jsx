import React from "react";
import { Link } from "react-router-dom";

const Galeria = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 p-4 mx-auto flex flex-wrap">
        <div className="lg:w-full mx-auto">
          <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 rounded-md relative mb-4">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block  rounded-md
        opacity-25 absolute inset-0 hover:opacity-75 transition-all "
              src="../img-banner-esenciales/banner-esenciales.png"
            ></img>
            <Link
              to="/categorias/esenciales"
              className="text-center relative z-10 w-full"
            >
              <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">
                Descubre los esenciales perfectos
              </h2>
              <p className="leading-relaxed">
                Básicos que hacen la diferencia. Construye tu look desde lo
                esencial y lleva tu estilo al siguiente nivel.
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Ver
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeria;
