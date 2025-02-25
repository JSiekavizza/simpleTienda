import { useContext } from "react";
import { dataContext } from "../Context/dataContext";

import CartItemCounter from "./CartItemCounter";

import { AiOutlineDelete } from "react-icons/ai";

const CartElements = () => {
  const { cart, setCart } = useContext(dataContext);

  const deleteProduct = (id) => {
    const foundId = cart.find((element) => element.id === id);

    const newCart = cart.filter((element) => {
      return element !== foundId;
    });
    setCart(newCart);
    console.log(newCart);
  };

  return cart.map((producto) => {
    return (
      <div
        className="bg-white grid lg:grid-cols-2  justify-center items-center
         text-white p-2 "
        key={producto.id}
      >
        <div
          className="flex flex-col items-center h-full rounded-md rounded-b-none
         border shadow-md p-4"
        >
          <div className="rounded p-2 lg:rounded w-full mx-auto lg:w-120 ">
            <img
              className="rounded-md rounded-b-none w-full"
              src={producto.img}
              alt={producto.name}
            />
          </div>
        </div>
        <div className="bg-slate-950 flex flex-col justify-center min-h-full shadow-md p-4 rounded rounded-t-none ">
          <div
            className="flex flex-col items-center justify-center 
          text-center w-full "
          >
            <h2 className="text- text-white text-4xl lg:text-6xl font-extrabold p-2 mt-6">
              {producto.name}
            </h2>
            <h4 className="p-3 ">
              <p className="bg-white text-center text-xl text-slate-950 font-bold rounded-full mb-5 ">
                Valor: ${producto.price}.000
              </p>
              <span className="text-sm">
                La confirmación de tu pedido se realiza sin pago ni envío de por
                medio.Tenemos Delivery propio.
              </span>
            </h4>
          </div>{" "}
          <div
            className="bg-slate-950 flex flex-col items-center justify-around 
          w-full rounded-md rounded-t-none p-3"
          >
            <CartItemCounter producto={producto} />
            <p className="text-xl">
              Valor: $ {producto.price * producto.quanty} .000
            </p>
          </div>
          <a
            className="text-gary-600 hover:text-red-500 text-3xl 
           flex p-5 cursor-pointer"
            onClick={() => deleteProduct(producto.id)}
          >
            <AiOutlineDelete className="text-xl" />
          </a>
        </div>
      </div>
    );
  });
};

export default CartElements;
