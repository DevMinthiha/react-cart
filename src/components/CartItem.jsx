import React, { useEffect, useState } from "react";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const CartItem = ({ pd, removeFromCart }) => {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(pd?.price * count);
  }, [count]);
  return (
    <div className="flex border p-5 items-end gap-5 relative">
      <img src={pd?.image} className="h-24" alt="" />
      <div className="flex flex-col gap-3">
        <h1>{pd?.title}</h1>
        <p>Total Price - ${totalPrice}</p>
        <div className="flex items-center gap-2">
          <AiFillMinusSquare
            onClick={() => {
              if (count > 1) setCount((prev) => prev - 1);
            }}
            className="text-2xl cursor-pointer text-red-600"
          />
          <button>{count}</button>
          <AiFillPlusSquare
            onClick={() => setCount((prev) => prev + 1)}
            className="text-2xl cursor-pointer text-green-600"
          />
        </div>
      </div>
      <RxCross2
        onClick={() => removeFromCart(pd?.id)}
        className="absolute top-3 cursor-pointer right-3"
      />
    </div>
  );
};

export default CartItem;
