import { useContext } from "react";
import { dataContext } from "../Context/dataContext";

import { Link } from "react-router-dom";

import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

const CartContent = () => {
  const { cart } = useContext(dataContext);

  return (
    <>
      <div className="bg-white">
        <CartElements />
        <button className="w-full p-6">
          <CartTotal />
        </button>
      </div>
    </>
  );
};

export default CartContent;
