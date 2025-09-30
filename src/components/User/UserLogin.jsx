import React, { useState } from "react";
import style from "./UserSingUp.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CLOSE from "./img/close.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  checkUser,
  createUser,
  toggleForm,
  toggleShowForm,
} from "../../features/user/userSlice";
export const UserLogin = ({ toggleCurentForm }) => {
  const { showForm } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  // const user = {
  //   name: "",
  //   email: "",
  //   password: "",
  // };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerClose = () => {
    dispatch(toggleShowForm(false));
  };

  const handelSubmyt = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    // const isEmpty = user.every((val) => val);
    // if (isEmpty) return;
    dispatch(checkUser(user));
    dispatch(toggleShowForm(false));
  };

  return (
    <div className={style.moduleWindow}>
      <div
        className={style.close}
        onClick={() => {
          handlerClose();
        }}
      >
        X
      </div>
      <div className={style.top}>
        <div className={style.title}>ВОЙТИ</div>
      </div>

      <form action="" onSubmit={handelSubmyt}>
        <div className={style.group}>
          <input
            className={style.input}
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoCapitalize="off"
            required
          />
        </div>
        <div className={style.group}>
          <input
            className={style.input}
            type="password"
            placeholder="Пароль"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoCapitalize="off"
            required
          />
        </div>
        <div
          className={style.bottomLink}
          onClick={() => {
            toggleCurentForm("singup");
          }}
        >
          {" "}
          Создай аккаунт
        </div>
        <button className={style.button}>Войти</button>
      </form>
    </div>
  );
};
