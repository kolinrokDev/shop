import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../untils/constants";
import { act } from "react";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/users`, user);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, user);
      const login = await axios(`${BASE_URL}/auth/porofile`, {
        headers: {
          Authorization: `Bearer ${response.access_token}`,
        },
      });
      return login.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// const initialState = {
//   currentUser: [],
//   cart: [],
//   isLoading: false,
// };

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    cart: [],
    isLoading: false,
    formType: "singup",
    showForm: false,
  },
  reducers: {
    addItemTooCard: (state, action) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === action.payload.id);

      if (found) {
        newCart = newCart.map((item) => {
          return item.id === action.payload.id
            ? {
                ...item,
                quantity: action.payload.quantity || item.quantity + 1,
              }
            : item;
        });
      } else newCart.push({ ...action.payload, quantity: 1 });
      state.cart = newCart;
    },
    removeItenToCart: (state, { payload }) => {
      state.cart = state.cart.filter(({ id }) => id !== payload);
    },
    toggleShowForm: (state, action) => {
      state.showForm = action.payload;
    },
    addUser: (state, action) => {
      state.formType = "singin";
      localStorage.setItem(
        action.payload.email,
        JSON.stringify(action.payload)
      );
      state.currentUser = action.payload;
      // createUser(action.payload);
    },
    checkUser: (state, action) => {
      const user = JSON.parse(localStorage.getItem(action.payload.email));

      console.log("из локал сторедж", user);
      console.log(user.email);
      console.log(user.password);
      if (!user) return;
      if (
        user.email === action.payload.email &&
        user.password === action.payload.password
      ) {
        state.currentUser = user;
      }
    },
    toggleFormType: (state, action) => {
      state.formType = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getUser.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
    // builder.addCase(getUser.rejected, (state, action) => {
    //   state.isLoading = false;
    // });
  },
});
export const {
  addItemTooCard,
  toggleShowForm,
  addUser,
  toggleFormType,
  checkUser,
  removeItenToCart,
} = userSlice.actions;
export default userSlice.reducer;
