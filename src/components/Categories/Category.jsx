import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategiry } from "../../features/Products/productsSlice";
import { useSelector } from "react-redux";
import { Product } from "../Products/Product";

export const Category = ({ productByCategory }) => {
  return (
    <>
      <Product products={productByCategory} amount={productByCategory.length} />
    </>
  );
};
