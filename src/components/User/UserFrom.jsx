import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserSigUp } from "./UserSigUp";
import style from "./UserSingUp.module.css";
import {
  toggleForm,
  toggleFormType,
  toggleShowForm,
} from "../../features/user/userSlice";
import { UserLogin } from "./UserLogin";
export const UserFrom = () => {
  const dispatch = useDispatch();
  const { showForm, formType } = useSelector((state) => state.user);
  const toggleCurentForm = (type) => dispatch(toggleFormType(type));
  return showForm ? (
    <>
      <div
        className={style.overleyar}
        onClick={() => dispatch(toggleShowForm(false))}
      />
      {formType === "singup" ? (
        <UserSigUp toggleCurentForm={toggleCurentForm} />
      ) : (
        <UserLogin toggleCurentForm={toggleCurentForm} />
      )}
    </>
  ) : (
    <></>
  );
};
