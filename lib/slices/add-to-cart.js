import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      console.log("side", action.payload);
      const newData = { ...action.payload };
      state.push(newData);
    },
    removeFromCart(state, action) {
      const index = state.findIndex(
        (cartItem) => cartItem.id == action.payload.id
      );
      state.splice([index], 1);
    },
    increment(state, action) {
      const currentEle = state.find((prod) => prod.id == action.payload.id);
      currentEle.quantity++;
    },
    decrement(state, action) {
      const currentEle = state.find((prod) => prod.id == action.payload.id);
      currentEle.quantity--;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
