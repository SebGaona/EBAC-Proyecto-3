import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      console.log("Adding to cart:", action.payload);
      return [...state, action.payload];
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
