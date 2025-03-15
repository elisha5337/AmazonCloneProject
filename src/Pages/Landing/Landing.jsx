import React from "react";
import Product from "../../Components/product/Product";
import Category from "../../Components/category/Category";
import Carousal from "../../Components/carousal/Carousal";
import Layout from "../../Components/Layout/Layout.jsx";
function Landing() {
  return (
    <Layout>
      <Carousal />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing;
