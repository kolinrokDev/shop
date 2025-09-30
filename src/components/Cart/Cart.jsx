import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sum } from "../../untils/helper";
import style from "./cart.module.css";
import { useFetcher } from "react-router-dom";
import {
  addItemTooCard,
  removeItenToCart,
} from "../../features/user/userSlice";
export const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(({ user }) => user);
  const changQuantity = (item, quantity) => {
    dispatch(addItemTooCard({ ...item, quantity }));
  };
  const removeItem = (item) => {
    dispatch(removeItenToCart(item.id));
  };
  return (
    <div className={style.cart}>
      <h2 className={style.titleH2}>Карзина</h2>
      {!cart.length ? (
        <div className={style.cartEmpty}>Карзина пуста</div>
      ) : (
        <>
          <div>
            {cart.map((item) => {
              const { title, category, images, price, id, quantity } = item;
              return (
                <div className={style.item} key={id}>
                  <div
                    className={style.img}
                    style={{ backgroundImage: `url(${images[0]})` }}
                  ></div>
                  <div className={style.info}>
                    <div className={style.name}>{title}</div>
                    <div className={style.category}>{category.name}</div>
                  </div>
                  <div className={style.price}>{price}$</div>
                  <div style={{ display: "flex" }}>
                    <div
                      className={style.minus}
                      onClick={() => {
                        changQuantity(item, Math.max(1, quantity - 1));
                      }}
                    >
                      -
                    </div>
                    <div className={style.quantity}>{quantity}</div>
                    <div
                      className={style.minus}
                      onClick={() => {
                        changQuantity(item, quantity + 1);
                      }}
                    >
                      +
                    </div>
                  </div>

                  <div className={style.total}>{price * quantity}$</div>
                  <button
                    className={style.button}
                    onClick={() => {
                      removeItem(item);
                    }}
                  >
                    Удалить
                  </button>
                </div>
              );
            })}
          </div>
          <div className="action">
            <div className={style.totalPrice}>
              TOTAL PRICE: {""}{" "}
              <span>
                {sum(cart.map(({ quantity, price }) => quantity * price))}$
              </span>
            </div>
            <div className="butt"></div>
          </div>
        </>
      )}
    </div>
  );
};
