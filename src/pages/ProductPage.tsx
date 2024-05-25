import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id, product } = useParams();
  console.log(id, product);
  return <div>ProductPage</div>;
};

export default ProductPage;
