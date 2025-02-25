import React, { useContext } from "react";
import { dataContext } from "../Context/dataContext.jsx";

import { Link } from "react-router-dom";

const Esenciales = () => {
  const { data } = useContext(dataContext);

  const esenciales = data.categorias
    .flatMap((categoria) => categoria.productos)
    .filter((producto) => producto.categoria === "esenciales");

  return (
    <>
      <div className="bg-gray-400 lg:w-full mx-auto p-4">
        <div className="relative">
          <img
            src="https://dummyimage.com/820x340"
            alt="banner-img"
            className="w-full lg:h-64 object-cover object-center rounded-md  
        opacity-25 block inset-0 hover:opacity-75 transition-all "
          />
        </div>
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {esenciales.length > 0 ? (
          esenciales.map((producto) => (
            <div className="" key={producto.id}>
              <div className="flex flex-col h-full rounded-md rounded-b-none">
                <Link to={`/producto/${producto.id}`}>
                  <div className="aspect-w-1 aspect-h-1 w-full">
                    <img
                      src={producto.img}
                      alt={producto.name}
                      className="object-cover w-full h-full rounded-md rounded-b-none opacity-75 
                  hover:opacity-85 transition-opacity duration-100 ease-in-out cursor-pointer"
                    />
                  </div>
                </Link>
                <div className="bg-white text-center text-slate-950 p-4 rounded-md rounded-t-none">
                  <p className="font-bold">{producto.name}</p>
                  <p className="text-sm">Precio: ${producto.price}.000</p>
                  <button
                    className="bg-slate-950 text-white border  rounded shadow-xl px-2 py-1.5 mt-3 hover:scale-105"
                    onClick={() => buyProducts(producto)}
                  >
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos esenciales disponibles.</p>
        )}
      </div>
    </>
  );
};

export default Esenciales;
