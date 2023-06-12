import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  wishitems: [],
  loading: false,
  error: "",
};

export const getUserWishlist = createAsyncThunk(
  "getUserWishlist",
  async (data) => {
    try {
      const URL = "http://localhost:5000/api/wishlist/get";
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const result = await response.json();

      if (result.success) {
        return result.data;
      }
      // console.log("User Not Found", result);
    } catch (error) {
      throw new Error(error);
    }
  }
);

const wishlistSlice = createSlice({
  name: "Wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserWishlist.fulfilled, (state, action) => {
        // console.log(action, "from fulfiled");

        state.loading = false;
        state.wishitems = action.payload;
        state.error = null;
      })
      .addCase(getUserWishlist.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const {} = wishlistSlice.actions;
export default wishlistSlice.reducer;
