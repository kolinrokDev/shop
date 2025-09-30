import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../untils/constants";

export const getSingelProducts = createAsyncThunk(
  "singleProducts/getSingelProducts",
  async (idProduct = "1", thunkAPI) => {
    try {
      const response = await axios(`${BASE_URL}/products/${idProduct}`);
      console.log("Все идет по плану");
      return response.data;
    } catch (error) {
      console.log("Что то не так с загрузкой", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  list: [],
  isLoading: false,
};

const singleProductsSlice = createSlice({
  name: "singleProducts",
  initialState: {
    list: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getSingelProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSingelProducts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
      console.log(action.payload);
    });
    builder.addCase(getSingelProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
export default singleProductsSlice.reducer;
