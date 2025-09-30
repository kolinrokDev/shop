import React from "react";
import POSTER from "./img/poster.png";
import style from "./poster.module.css";
export const Poster = () => {
  return (
    <div className={style.poster}>
      <div className={style.BS}>BIG SALE 20%</div>
      <div className={style.poduct}>
        <div className="text">
          <div className={style.sub}>the bestseller of 2022 </div>
          <h1 className={style.title}>
            LENNON r2d2
            <br /> with NVIDIA 5090 TI
          </h1>
          <button className={style.button}> Shop Now</button>
        </div>
        <div className={style.imgPoster}>
          <img src={POSTER} alt="" />
        </div>
      </div>
    </div>
  );
};
