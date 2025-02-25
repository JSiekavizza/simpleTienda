import { useContext } from "react";
import { dataContext } from "../Context/dataContext.jsx";
import { Link } from "react-router-dom";

const Productos = () => {
  const { data } = useContext(dataContext);

  if (!data.categorias || !Array.isArray(data.categorias)) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div
        className="relative z-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 
      lg:grid-cols-2"
      >
        {data.categorias.map((categoria) => (
          <Link
            to={`/categoria/${categoria.nombre.toLowerCase()}`}
            key={categoria.nombre}
          >
            <div className="cursor-pointer">
              <div className=" min-h-64  w-full  flex items-center justify-center relative">
                <img
                  src={categoria.img}
                  alt={categoria.nombre}
                  className="bg-black opacity-70 h-full w-full object-cover 
                  object-center block absolute"
                />
                <div
                  className=" rounded-md text-center font-robotoMono
                   text-white text-2xl underline underline-offset-8
                   duration-100 ease-in-out transform active:scale-125 p-2"
                >
                  <h2>{categoria.nombre}</h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Productos;
