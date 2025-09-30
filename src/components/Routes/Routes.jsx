import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { ROUTES } from "../../untils/routes";
import { SingelProduct } from "../Products/SingelProduct";
import { Profile } from "../Profile/Profile";
import { SingelCategory } from "../Categories/SingelCategory";
import { Cart } from "../Cart/Cart";
export const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="products/:id" element={<SingelProduct />} />
    <Route path={ROUTES.PROFILE} element={<Profile />} />
    <Route path="/categories/:id" element={<SingelCategory />}></Route>
    <Route path="/cart" element={<Cart />} />
  </Routes>
);

//   {ROUTES.PRODUCT}
