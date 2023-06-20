import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import productReducer from "./Slices/productSlice";
import userReducer from "./Slices/userSlice";
import wishlistReducer from "./Slices/wishlistSlice";
import orderReducer from "./Slices/orderSlice";
// import { api } from "../services/api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
  reducer: {
    User: userReducer,
    Cart: cartReducer,
    Wishlist: wishlistReducer,
    Products: productReducer,
    Orders: orderReducer,
    // [api.reducerPath]: api.reducer,
  },

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
