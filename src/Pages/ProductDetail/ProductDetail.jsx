import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router";
import axios from "axios";
import { ProductUrl } from "../../Api/Api";
import ProductCard from "../../Components/product/ProductCard";
import Loader from "../../Components/Loader/Loader";
function ProductDetail() {
  const [isloading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${ProductUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);

        setIsLoading(false);
      });
  }, []);
  console.log(product);

  return (
    <Layout>
      {isloading ? (
        <Loader />
      ) : (
        <ProductCard product={product} flex={true} renderDesc={true} renderAdd={true}/>
      )}
    </Layout>
  );
}

export default ProductDetail;
