import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../untils/constants";
import { act } from "react";
import { bilderUrl } from "../../untils/helper";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (idProd = "", thunkAPI) => {
    try {
      const response = await axios(`${BASE_URL}/products/${idProd}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async (param, thunkAPI) => {
    try {
      console.log("из searchProducts", bilderUrl(param));
      const response = await axios(bilderUrl(param));
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getProductsByCategiry = createAsyncThunk(
  "products/getProductsByCategiry",
  async (idCtegi = "1", thunkAPI) => {
    try {
      const response = await axios(
        `https://api.escuelajs.co/api/v1/products/?categoryId=${idCtegi}`
      );
      console.log(
        `https://api.escuelajs.co/api/v1/products/?categoryId=${idCtegi}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  list: [],
  filtred: [],
  found: [],
  related: [],
  itemGetId: [],
  productByCategory: [],
  isLoading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    filtred: [],
    found: [],
    related: [],
    itemGetId: [],
    productByCategory: [],
    isLoading: false,
  },
  reducers: {
    filterByPrice: (state, action) => {
      state.filtred = state.list.filter(({ price }) => price < action.payload);
    },
    getRelatedProducts: (state, action) => {
      const list = state.list.filter(
        ({ category: { id } }) => id === action.payload.category
      );
      console.log("их слысера", list);
      state.related = list;
      // state.filtred = state.list.filter(({ price }) => price < action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.list = action.payload;
      console.log(action.state);
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(searchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.found = action.payload;
      console.log("из редусера", state.found);
    });
    builder.addCase(getProductsByCategiry.fulfilled, (state, action) => {
      state.productByCategory = action.payload;
      console.log("из редусера", state.found);
    });
  },
});
export const { filterByPrice, getRelatedProducts } = productsSlice.actions;
export default productsSlice.reducer;
