import React, { useEffect } from "react";
import { Poster } from "../Poster/Poster";
import { Product } from "../Products/Product";
import { useDispatch, useSelector } from "react-redux";
import { Categories } from "../Categories/Categories";
import { Banner } from "../Banner/Banner";
import { filterByPrice } from "../../features/Products/productsSlice";

export const Home = () => {
  const {
    products: { list, filtred },
    categories,
  } = useSelector((state) => state);
  
  const dispatch = useDispatch();
  useEffect(() => {
    if (!list.length) return;
    dispatch(filterByPrice(100));
  }, [dispatch, list.length]);
  return (
    <>
      <div>
        <Product products={list} amount={5} title="Trending" />
        <Categories
          products={categories.list}
          amount={4}
          title="Worth seeing"
        />
        <Banner />
        <Product products={filtred} amount={4} title="Less than 100$" />
      </div>
    </>
  );
};
