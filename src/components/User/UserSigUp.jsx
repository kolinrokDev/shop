import React, { useState } from "react";
import style from "./UserSingUp.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CLOSE from "./img/close.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  createUser,
  toggleForm,
  toggleShowForm,
} from "../../features/user/userSlice";
export const UserSigUp = ({ toggleCurentForm }) => {
  const { showForm } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  // const user = {
  //   name: "",
  //   email: "",
  //   password: "",
  // };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerClose = () => {
    dispatch(toggleShowForm(false));
  };

  const handelSubmyt = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      password: password,
    };
    console.log(user);
    // const isEmpty = user.every((val) => val);
    // if (isEmpty) return;
    dispatch(addUser(user));
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
        <div className={style.title}>РЕГИСТРАЦИЯ</div>
      </div>

      <form action="" onSubmit={handelSubmyt}>
        <div className={style.group}>
          <input
            className={style.input}
            type="name"
            placeholder="Имя"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoCapitalize="off"
            required
          />
        </div>
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
            toggleCurentForm("Login");
          }}
        >
          {" "}
          Авторизуйся если зарегистрирован
        </div>
        <button className={style.button}>Создать аккаунт</button>
      </form>
    </div>
  );
};
