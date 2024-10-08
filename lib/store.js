import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/add-to-cart.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
