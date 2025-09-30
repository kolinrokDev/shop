import React, { useEffect } from "react";
import { AppRoutes } from "./Routes/Routes";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { SideBar } from "./SideBar/SideBar";
import { useDispatch } from "react-redux";
import { getCategories } from "../features/categoris/categorisSlice";
import style from "../index.module.css";
import { getProducts } from "../features/Products/productsSlice";
import { Poster } from "./Poster/Poster";
import { UserFrom } from "./User/UserFrom";
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={style.app}>
      <Header />
      <UserFrom />
      <div className={style.contaner}>
        <SideBar />
        <Poster />
      </div>
      <AppRoutes />
      <Footer />
    </div>
  );
};
