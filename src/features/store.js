import { configureStore } from "@reduxjs/toolkit";
import cateroriesSlice from "./categoris/categorisSlice";
import productsSlice from "./Products/productsSlice";
import singleProductsSlice from "./Products/simgleProductSlice";
import userSlice from "./user/userSlice";
import { apiSlice } from "./api/apiSlice";
export const store = configureStore({
  reducer: {
    categories: cateroriesSlice,
    products: productsSlice,
    // [apiSlice.reducerPath]: apiSlice.reducer,
    singleProducts: singleProductsSlice,
    user: userSlice,
  },
  // middleware: (getMiddleweare) => getMiddleweare().concat(apiSlice.middleware),
});
