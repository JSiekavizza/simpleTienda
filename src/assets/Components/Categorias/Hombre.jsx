import { useContext } from "react";
import { dataContext } from "../Context/dataContext";

import { Link } from "react-router-dom";

const Hombre = () => {
  const { data, buyProducts } = useContext(dataContext);

  console.log("Datos del contexto:", data);

  const hombreCategoria = data.categorias?.find(
    (categoria) => categoria.nombre === "Hombres"
  );

  if (!data || !data.categorias || !Array.isArray(data.categorias)) {
    return <div>Cargando datos...</div>;
  }

  if (!hombreCategoria) {
    return <div>No se encontraron productos para la categoría "Hombres"</div>;
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {hombreCategoria.productos.map((producto) => (
          <div className="" key={producto.id}>
            <div className=" flex flex-col h-full rounded-md rounded-b-none">
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
              <div className="bg-white text-slate-950 p-4 rounded-md rounded-t-none">
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
        ))}
      </div>
    </>
  );
};

export default Hombre;
