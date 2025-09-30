import React, { useState } from "react";
import { createUser, toggleShowForm } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import style from "./Profile.module.css";
export const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { currentUser } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const handelSubmyt = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      password: password,
    };
    console.log(user);
    dispatch(toggleShowForm(false));
  };

  return (
    <div className="profile">
      {!currentUser ? (
        <span>Тебе надо загегистрироваться</span>
      ) : (
        <form action="" onSubmit={handelSubmyt}>
          <div className={style.group}>
            {" "}
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
            <label htmlFor="" className={style.label}>
              {currentUser.name}
            </label>
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
            <label htmlFor="" className={style.label}>
              {currentUser.email}
            </label>
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
            <label htmlFor="" className={style.label}>
              Новый пароль
            </label>
          </div>

          <button className={style.button}>Изменить</button>
        </form>
      )}
    </div>
  );
};
