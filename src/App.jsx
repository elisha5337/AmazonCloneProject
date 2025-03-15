import { useState } from "react";
import "./App.css";
import CarousalEffect from "./Components/carousal/Carousal";
import Header from "./Components/Header/Header";
import Category from "./Components/category/Category";
import { CategoryInfo } from "./Components/category/CategoryInfo";
import Product from "./Components/product/Product";
import Landing from "./Pages/Landing/Landing";
import Routing from "./Pages/Routing/Routing";
import Layout from "./Components/Layout/Layout";
function App() {
  return (
    <>
      <Routing></Routing>
    </>
  );
}

export default App;
