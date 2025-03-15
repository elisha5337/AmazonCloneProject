import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router";
import { ProductUrl } from "../../Api/Api";
import axios from "axios";
function Results() {
  const { categoryName } = useParams();
  console.log(categoryName);
  const [results, setResults] = useState([]);
  axios
    .get(`${ProductUrl}/products/category/${categoryName}`)
    .then((res) => {
      console.log(res.data);
      setResults(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  return <Layout>Results page</Layout>;
}

export default Results;
