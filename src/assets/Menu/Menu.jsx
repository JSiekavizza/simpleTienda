import { useContext, useState } from "react";
import { dataContext } from "../Components/Context/dataContext";

import { Link } from "react-router-dom";

import TotalItems from "../Components/CartContent/TotalItems";

import { MdOutlineMenu } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";

const Menu = () => {
  const { cart } = useContext(dataContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const slides = [
    {
      id: 1,
      text: "¡Descubre nuestras ofertas especiales!",
    },
    { id: 2, text: "Nuevos productos cada semana" },
    {
      id: 3,
      text: "Envíos gratis en pedidos seleccionados",
    },
  ];

  return (
    <div className="relative">
      {/* Banner de texto */}
      <div className="overflow-hidden h-5 bg-gray-100">
        <div className="flex animate-slide">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 w-full flex items-center 
              justify-center text-black text-sm text-nowrap font-bold"
            >
              {slide.text}
            </div>
          ))}
        </div>
      </div>

      {/* Menú principal */}
      <div className="flex items-center justify-between p-5 relative z-50">
        {/* Sección izquierda: Logo y botón del menú */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div
            className="text-white text-3xl lg:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            {isOpen ? <IoIosClose /> : <MdOutlineMenu />}
          </div>
          <Link to="/" className="text-xl text-white font-bold">
            Simple
          </Link>
        </div>

        {/* Sección central: Menú */}
        <div
          className={`${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } absolute top-0 left-0 w-full lg:static lg:max-h-none lg:opacity-100 
          transition-all duration-300 ease-in-out overflow-hidden lg:flex lg:items-center lg:ml-auto`}
        >
          <div className="bg-black lg:hidden flex justify-between items-center p-5">
            <p className="text-white text-lg">Tienda</p>
            <button
              className="text-white text-xl border border-gray-300 px-3 py-1 rounded-md"
              onClick={closeMenu}
            >
              <IoIosClose />
            </button>
          </div>
          <ul className=" flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 text-white text-lg p-5 lg:p-0 ml-5">
            <Link
              to="/categoria/hombres"
              className="hover:text-gray-300 cursor-pointer"
            >
              Hombre
            </Link>
            <Link
              to="/categoria/mujeres"
              className="hover:text-gray-300 cursor-pointer"
            >
              Mujer
            </Link>
            <Link
              to="/categoria/cosas"
              className="hover:text-gray-300 cursor-pointer"
            >
              Cosas
            </Link>
            <Link
              to="/categoria/sales"
              className="hover:text-gray-300 cursor-pointer"
            >
              Sales
            </Link>
          </ul>
        </div>

        {/* Sección derecha: Carrito de compras */}
        <div className="bg-slate-950 p-3 ml-3 rounded-md">
          <Link
            to="/carrito"
            className="flex lg:block text-white text-3xl cursor-pointer"
          >
            <div className="text-5xl">
              <CiShoppingCart className="bg-orange-600 rounded-md  p-2" />
              {cart.length > 0 ? <TotalItems /> : null}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
