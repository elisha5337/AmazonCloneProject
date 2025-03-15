import React from "react";
import classes from "./Category.module.css";
function CategoryCard({ data }) {
  console.log(data);
  return (
    <div className={classes.category}>
      <a href={`/category/${data.name}`}>
        <span>
          <h2>{data?.name}</h2>
          <h2>{data?.title}</h2>
        </span>
        <img src={data?.imglink} alt="amazon" />
        <p>shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
