import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router";
import { ProductUrl } from "../../Api/Api";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import classes from "./Results.module.css";
import ProductCard from "../../Components/product/ProductCard";
function Results() {
  const [isloading, setIsLoading] = useState(false);
  const { categoryName } = useParams();
  console.log(categoryName);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${ProductUrl}/products/category/${categoryName}`)
      .then((res) => {
        //console.log(res.data);
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  console.log(results);
  return (
    <Layout>
      {isloading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category:{categoryName}</p> <hr />
          <div className={classes.product_container}>
            {results?.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </section>
      )}
    </Layout>
  );
}

export default Results;
