import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import productReducer from "./Slices/productSlice";
import userReducer from "./Slices/userSlice";
import wishlistReducer from "./Slices/wishlistSlice";
const store = configureStore({
  reducer: {
    User: userReducer,
    Cart: cartReducer,
    Wishlist: wishlistReducer,
    Products: productReducer,
  },
});

export default store;
