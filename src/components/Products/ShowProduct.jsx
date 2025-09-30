import React, { useEffect, useState } from "react";
import style from "./singleProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItemTooCard } from "../../features/user/userSlice";
import { Product } from "./Product";
import { getRelatedProducts } from "../../features/Products/productsSlice";
export const ShowProduct = (item) => {
  const { title, price, description, images, category } = item;
  const { related } = useSelector((state) => state.products);
  console.log("из шоу продукт", item);
  const [imageCurrent, setImageCurrent] = useState();
  console.log(images);
  useEffect(() => {
    setImageCurrent(images[0]);
  }, [images]);
  const dispatch = useDispatch();
  const addToCard = () => {
    dispatch(addItemTooCard(item));
  };
  useEffect(() => {
    getRelatedProducts(category.id);
  }, [related]);
  console.log(related);
  return (
    <section className={style.singleProduct}>
      <div className={style.imageList}>
        <div
          className={style.imagesCurrent}
          style={{ backgroundImage: `url(${imageCurrent})` }}
        ></div>
        <div className={style.flex}>
          {images.map((image, i) => (
            <div
              className={style.img}
              key={i}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setImageCurrent(image)}
            ></div>
          ))}
        </div>
      </div>
      <div className={style.discrips}>
        <p className={style.title}>{title}</p>
        <p className={style.price}>{price}$</p>
        <p className={style.text}>{description}</p>
        <div className="buttons">
          <button className={style.button} onClick={addToCard}>
            Add to cart
          </button>
          <button className={style.button}>Add to favorites</button>
        </div>
      </div>
      {/* <Product products={category.id} amount={4} title="Less than 100$"/> */}
    </section>
  );
};
