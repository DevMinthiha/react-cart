import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const data = useLocation();
  const [cart, setCart] = useState(data?.state?.cart);
  const [qty, setQty] = useState(1);
  const total = cart?.reduce((a, c) => a + c.price * qty, 0);
  const removeFromCart = (id) => {
    setCart(cart?.filter((item) => item?.id !== id));
  };
  
  return (
    <div className="container mx-auto">
      <div className="flex gap-10 my-5">
        <div className="w-1/2 flex flex-col gap-5">
          {cart?.map((pd) => (
            <CartItem key={pd?.id} pd={pd} removeFromCart={removeFromCart} />
          ))}
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-bold tracking-wider">
            Total Price - {total}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
