import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Product.module.css";
import ProductCard from "./ProductCard";
import Loader from "../Loader/Loader";
function Product() {
  const [isloading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    async function Fetch() {
      // console.log("hello");
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        //   console.log(response.data);
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error is:" + error);
        setIsLoading(false);
      }
    }
    Fetch();
  }, []);
  // console.log(products);
  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <div className={classes.Products_container}>
          {products.map((data) => (
            <ProductCard product={data} key={data.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default Product;
