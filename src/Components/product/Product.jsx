import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Product.module.css";
import ProductCard from "./ProductCard";
function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function Fetch() {
      console.log("hello");
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        //   console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log("error is:" + error);
      }
    }
    Fetch();
  }, []);
  console.log("products are:" + products);
  return (
    <div className={classes.Products_container}>
      {products.map((data) => (
        <ProductCard product={data} key={data.id} />
      ))}
    </div>
  );
}

export default Product;
