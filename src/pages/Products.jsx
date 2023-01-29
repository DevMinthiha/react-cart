import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (id) => {
    setCart(cart?.filter((product) => product.id !== id));
  };
  console.log(cart);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mx-auto">
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cart={cart}
      />
      <div className="flex flex-wrap gap-5 justify-center my-5">
        {products
          ?.filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val?.title?.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          ?.map((product) => (
            <Card
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              key={product?.id}
              product={product}
              cart={cart}
            />
          ))}
      </div>
    </div>
  );
};

export default Products;
