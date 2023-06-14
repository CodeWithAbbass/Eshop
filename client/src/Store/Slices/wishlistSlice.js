import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  wishitems: [],
  loading: false,
  error: "",
};

export const getUserWishlist = createAsyncThunk(
  "getUserWishlist",
  async (data) => {
    const authtoken = localStorage.getItem("authtoken");
    try {
      const URL = "http://localhost:5000/api/wishlist/get";
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          authtoken,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const result = await response.json();
      if (result.success) {
        return result.data;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);
export const addToWishlist = createAsyncThunk("addToWishlist", async (data) => {
  const authtoken = localStorage.getItem("authtoken");
  try {
    const URL = `http://localhost:5000/api/wishlist/add/${data}`;
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        authtoken,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const result = await response.json();

    if (result.success) {
      alert(result.message);
      return result.data;
    }
  } catch (error) {
    throw new Error(error);
  }
});
export const deleteFromWishlist = createAsyncThunk(
  "deleteFromWishlist",
  async (data) => {
    const authtoken = localStorage.getItem("authtoken");
    try {
      const URL = `http://localhost:5000/api/wishlist/delete/${data}`;
      const response = await fetch(URL, {
        method: "DELETE",
        headers: {
          authtoken,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message);
        return result.data;
      }
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
      })
      .addCase(addToWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        // console.log(action, "from fulfiled");

        state.loading = false;
        state.wishitems = action.payload;
        state.error = null;
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteFromWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteFromWishlist.fulfilled, (state, action) => {
        // console.log(action, "from fulfiled");

        state.loading = false;
        state.wishitems = action.payload;
        state.error = null;
      })
      .addCase(deleteFromWishlist.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { getWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
