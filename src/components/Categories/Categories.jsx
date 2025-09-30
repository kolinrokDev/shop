import React from "react";
import { Link } from "react-router-dom";
import styles from "./categories.module.css";
export const Categories = ({ title, products = [], amount, style = {} }) => {
  const list = products.filter((_, i) => i < amount);
  return (
    <section className={styles.categories}>
      <h2>{title}</h2>
      <div className={styles.list}>
        {list.map(({ id, name, image }) => (
          <Link to={`/categories/${id}`} key={id} className={styles.item}>
            <div
              className={styles.img}
              style={{ backgroundImage: `url(${image})` }}
            >
              <img src="" alt="" />
            </div>
            <h3 className="">{name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};
