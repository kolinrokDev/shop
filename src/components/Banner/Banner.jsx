import React from 'react'
import style from './baner.module.css'

import BOOTS from './img/boots.png'
import PS from './img/ps.png'
export const Banner = () => {
  return (
    <div className={style.banner}>
        <div className={style.left}>
            <p className={style.psmall}>
            NEW YEAR
            </p>
            <p className={style.pbig}>
            SALE
            </p>
            <button className={style.button}>See more</button>
            <img src={BOOTS} alt="" className={style.boots} />
            <img src={PS} alt="" className={style.ps}/>
        </div>
        <div className={style.rigth}>
            <p className={style.text}>save up to <span className={style.textSpan}>50%</span>  off</p>
        </div>
    </div>
  )
}
