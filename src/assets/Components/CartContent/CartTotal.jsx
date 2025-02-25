import { useContext } from "react";
import { dataContext } from "../Context/dataContext";

import { IoLogoWhatsapp } from "react-icons/io";

const CartTotal = () => {
  const { cart } = useContext(dataContext);

  const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);

  return (
    <div
      className="bg-orange-600 opacity-90 flex flex-col items-center 
    rounded-md p-5 text-center shadow-lg shadow-gray-500"
    >
      <button className="text-black text-4xl font-bold">Realizar Pedido</button>
      <IoLogoWhatsapp className="text-black text-3xl w-72" />
      <h3 className="text-black">Valor Total: ${total} .000</h3>
    </div>
  );
};

export default CartTotal;
