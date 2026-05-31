import React from "react";
import classes from "./categoryCard.module.css";
import { Link } from "react-router";
function CategoryCard({ data }) {
  //console.log(data);
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data?.name}</h2>
          <h2>{data?.title}</h2>
        </span>
        <img src={data?.imglink} alt="amazon" />
        <p>shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
