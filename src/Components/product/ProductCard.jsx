import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../currencyFormat/CurrencyForma";
import classes from "./Product.module.css";
function ProductCard({ product }) {
  const { id, title, image, rating, price, category, description } = product;
  console.log(product);
  return (
    <div className={classes.card_container}>
      <a href="">
        <img src={image} alt="" />
        <div>{title}</div>
        <div className={classes.rating}>
          <Rating value={rating} precision={0.1} />
          <small>{rating.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>add to cart</button>
      </a>
    </div>
  );
}

export default ProductCard;
