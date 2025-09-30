import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../untils/routes'
import style from './footer.module.css'
import LOGO from './img/LOGO.svg'
import INST from './img/instagram.svg'
import BOOK from './img/facebook.svg'
import YOU from './img/youtube.svg'
export const Footer = () => {
  return (
    
      <div className={style.center}>
        
        <div><Link to = {ROUTES.HOME}> 
            <img src={LOGO} alt=''/>
            </Link></div>
        
      <div className={style.rigth}>
      Developed by <span className={style.rigthEl}>Kolinrok</span>
      </div>
      <div className={style.socials}>
        <a href="">
          <img className={style.yuo} src={YOU} alt="" />
        </a>
        <a href="" className={style.link}>
          <img src={BOOK} alt="" />
        </a>
        <a href="">
          <img src={
            INST
          } alt="" />
        </a>
      </div>
      </div>
  
  )
}
