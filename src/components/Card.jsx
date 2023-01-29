import React, { useState } from "react";
import { BiDollarCircle } from "react-icons/bi";

const Card = ({ product, addToCart, removeFromCart, cart }) => {
  const { title, image, description, price, id, category } = product;
  const [toggle, setToggle] = useState(false);
  const addToCartHandler = () => {
    addToCart(product);
  };
  const removeFromCartHandler = () => {
    removeFromCart(id);
  };
  const buttonHandler = () => {
    setToggle(!toggle);
    if (toggle) {
      removeFromCartHandler();
    } else {
      addToCartHandler();
    }
  };
  return (
    <div className="w-72 border p-3 flex flex-col gap-5 relative">
      <img src={image} alt="" className="h-44 mx-auto" />
      <h1 className="text-xl font-semibold tracking-wide text-orange-500">
        {title.substring(0, 20)}...
      </h1>
      <p className="text-gray-500 text-sm">
        {description?.substring(0, 50)}...
      </p>

      <div className="flex items-center gap-1">
        <BiDollarCircle className="text-2xl text-orange-500" />
        <p className="text-xl font-bold text-gray-500">{price}</p>
      </div>

      <div className="absolute left-[-5px] bg-orange-500 text-xs text-white px-2 py-1 rounded">
        {category}
      </div>
      <button
        onClick={buttonHandler}
        className={`${
          toggle ? "bg-red-500" : "bg-orange-500"
        } text-white py-3 rounded uppercase font-bold shadow-md`}
      >
        {toggle ? "remove form cart" : "add to cart"}
      </button>
    </div>
  );
};

export default Card;
