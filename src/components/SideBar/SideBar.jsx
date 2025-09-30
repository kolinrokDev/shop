import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./sideBar.module.css";
export const SideBar = () => {
  const { list } = useSelector((state) => state.categories);
  return (
    <div className={style.sideBar}>
      <div className={style.titel}>CATEGORIES</div>
      <nav>
        <ul className={style.menu}>
          {list.map(({ id, name }) => (
            <li key={id} className={style.li}>
              <NavLink
                className={({ isActive }) =>
                  `${style.link} ${isActive ? style.active : ""}`
                }
                to={`/categories/${id}`}
              >
                {name}
              </NavLink>
              {/* <NavLink  to={`/caterories/${id}`}>{name}</NavLink> */}
            </li>
          ))}
        </ul>
      </nav>

      {/* <div className="footer">
          <a href="/help"  target="_blank"className=''>
    Help
          </a>
          <a href="/terms"  target="_blank"className=''>
    Term & Condition
          </a>
      </div> */}
    </div>
  );
};
