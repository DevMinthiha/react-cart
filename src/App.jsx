import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import "./styles.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
