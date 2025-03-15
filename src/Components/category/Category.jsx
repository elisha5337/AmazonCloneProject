import React from "react";
import classes from "./category.module.css";
import { CategoryInfo } from "./CategoryInfo.jsx";
import CategoryCard from "./CategoryCard.jsx";
function Category() {
  console.log();

  //   const name = "elsaye";
  // console.log(CategoryImage);
  return (
    <section className={classes.category_container}>
      {CategoryInfo.map((infos) => {
        return <CategoryCard data={infos} />;
      })}
    </section>
  );
}

export default Category;
