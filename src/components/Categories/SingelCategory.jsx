import React, { useEffect } from "react";
import { Category } from "./Category";
import { useParams } from "react-router-dom";
import { getProductsByCategiry } from "../../features/Products/productsSlice";
import { useDispatch, useSelector } from "react-redux";

export const SingelCategory = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsByCategiry(id));
  }, [id]);
  const { productByCategory } = useSelector((state) => state.products);

  return productByCategory ? (
    <>
      <Category productByCategory={productByCategory} />
    </>
  ) : (
    "Загрузка"
  );
};
