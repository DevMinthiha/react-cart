import React from "react";
import { TfiShoppingCart } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Navbar = ({ searchTerm, setSearchTerm, cart }) => {
  return (
    <nav className="flex items-center justify-between my-5 px-10">
      <p className="text-orange-500 text-2xl font-bold tracking-wider ">SHOP</p>
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="border px-3 py-1 rounded"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to="/cart" state={{cart}}>
          <button className="relative">
            <TfiShoppingCart className="text-3xl" />
            <small className="absolute bg-orange-500 text-white p-1 rounded-full top-[-10px] right-[-15px] text-xs">
              {cart?.length}
            </small>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
