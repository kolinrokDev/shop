import React, { useEffect, useState } from "react";

import { Link, useFetcher, useNavigate } from "react-router-dom";
import { ROUTES } from "../../untils/routes";
import style from "../Header/Header.module.css";
import LOGO from "./img/LOGO.svg";
import AVATAR from "./img/avatar.svg";
import LIKE from "./img/like.svg";
import CART from "./img/cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm, toggleShowForm } from "../../features/user/userSlice";
import { searchProducts } from "../../features/Products/productsSlice";
export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //поиск
  const { found, isLoading } = useSelector(({ products }) => products);
  const [search, setSearch] = useState("");
  const heandelSearch = ({ target: { value } }) => {
    setSearch(value);
    dispatch(searchProducts(search));
  };
  // useEffect(() => {
  //   dispatch(searchProducts(search));
  // }, [search]);
  //отображение формы юзера
  const { currentUser, cart } = useSelector(({ user }) => user);
  const heandelClick = () => {
    if (!currentUser) {
      dispatch(toggleShowForm(true));
    } else navigate(ROUTES.PROFILE);
  };
  const [user, setUser] = useState({ name: "Guest" });
  useEffect(() => {
    if (!currentUser) return;
    setUser(currentUser);
  }, [currentUser]);

  return (
    <div className={style.center}>
      <div className={style.header}>
        <div>
          <Link to={ROUTES.HOME}>
            <img src={LOGO} alt="" />
          </Link>
        </div>
        <div className={style.user}>
          <a
            onClick={() => {
              heandelClick();
            }}
          >
            <div className={style.avatar}>
              <img src={AVATAR} alt="" />
            </div>
            <div className={style.name}>{user.name}</div>
          </a>
        </div>
        <form>
          <div className="icon"></div>
          <div className="">
            <input
              className={style.inputEl}
              name=""
              type="search"
              placeholder="Поиск"
              autoComplete="off"
              onChange={heandelSearch}
              value={search}
            />
          </div>
          {search && (
            <div className={style.box}>
              {!isLoading
                ? "Загрузка"
                : !found.length
                ? "Нет совпадений"
                : found.map(({ title, images, id }) => {
                    return (
                      <Link
                        key={id}
                        onClick={() => {
                          setSearch("");
                        }}
                        to={`./products/${id}`}
                      >
                        <div className={style.found}>
                          <div
                            className={style.img}
                            style={{ backgroundImage: `url(${images[0]})` }}
                          ></div>
                          <div className={style.titleSearch}>{title}</div>
                        </div>
                      </Link>
                    );
                  })}
            </div>
          )}
        </form>
        {/* <div className={style.info}> */}

        <div className={style.account}>
          <Link to={ROUTES.HOME} className={style.favourites}>
            <img src={LIKE} alt="" />
          </Link>
          <Link to={ROUTES.CART} className={style.cart}>
            <img src={CART} alt="" />
            {!!cart.length && (
              <div className={style.cartNumber}>{cart.length}</div>
            )}
          </Link>

          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
