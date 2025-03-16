import React from "react";
import { Link } from "react-router";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../currencyFormat/CurrencyForma";
import classes from "./Product.module.css";
function ProductCard({ product, flex, renderDesc }) {
  // console.log(product);
  const { id, title, image, rating, price, category, description } = product;
  console.log(product);
  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`products/${id}`}>
        <img src={image} alt="" />{" "}
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          <Rating value={rating} precision={0.1} />
          {<small>{rating?.count}</small>}
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
