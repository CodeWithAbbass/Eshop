import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import productReducer from "./Slices/productSlice";
import userReducer from "./Slices/userSlice";

const store = configureStore({
  reducer: {
    User: userReducer,
    Cart: cartReducer,
    Products: productReducer,
  },
});

export default store;
