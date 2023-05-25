import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import productReducer from "./Slices/productSlice";


const store = configureStore({
  reducer: {
    Cart: cartReducer,
    Products: productReducer,
  },
});
export default store;
