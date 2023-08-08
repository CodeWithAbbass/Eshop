import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import productReducer from "./Slices/productSlice";
import categoryReducer from "./Slices/categorySlice";
import userReducer from "./Slices/userSlice";
import wishlistReducer from "./Slices/wishlistSlice";
import orderReducer from "./Slices/orderSlice";
import couponReducer from "./Slices/couponSlice";

const store = configureStore({
  reducer: {
    User: userReducer,
    Cart: cartReducer,
    Wishlist: wishlistReducer,
    Products: productReducer,
    Categories: categoryReducer,
    Orders: orderReducer,
    Coupons: couponReducer,
  },
});

export default store;
