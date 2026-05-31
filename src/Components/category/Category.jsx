import React from "react";
import classes from "./categoryCard.module.css";
import { CategoryInfo } from "./CategoryInfo.jsx";
import CategoryCard from "./CategoryCard.jsx";
function Category() {
  return (
    <section className={classes.category_container}>
      {CategoryInfo.map((infos, index) => (
        <CategoryCard key={index} data={infos} />
      ))}
    </section>
  );
}

export default Category;
