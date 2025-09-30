import React from "react";
import { Link } from "react-router-dom";
import styles from "./product.module.css";
export const Product = ({ title, products = [], amount, style = {} }) => {
  const list = products.filter((_, i) => i < amount);
  return (
    <section className={styles.products} style={style}>
      {title && <h2>{title}</h2>}
      <div className={styles.list}>
        {list.map(({ id, title, images, category: { name }, price }) => (
          <div className={styles.item}>
            <Link to={`/products/${id}`} key={id}>
              <div
                className={styles.img}
                style={{ backgroundImage: `url(${images[0]})` }}
              >
                <img src="" alt="" />
              </div>
              <div className={styles.wrapper}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.name}>{name}</div>
                <div className={styles.info}>
                  <div className={styles.priceItems}>
                    <div className={styles.prices}>{price}$</div>
                    <div className={styles.oldPrice}>
                      {(price * 0.8).toFixed(0)}$
                    </div>
                  </div>
                  <div className={styles.pur}>
                    {(Math.random() * 20 + 1).toFixed(0)}
                    people purchased
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
