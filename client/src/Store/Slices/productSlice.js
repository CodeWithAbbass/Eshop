import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// create action for user Signup
export const getProduct = createAsyncThunk("getProduct", async (data) => {
  try {
    const URL = `${import.meta.env.VITE_API_KEY}/product/allproducts`;
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (result.success) {
      return result.data;
    }
  } catch (error) {
    alert(result.message);
    throw new Error(error);
  }
});
export const getSingleProduct = createAsyncThunk(
  "getSingleProduct",
  async (uid) => {
    try {
      const URL = `${import.meta.env.VITE_API_KEY}/product/${uid}`;
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (result.success) {
        return result.data;
      }
    } catch (error) {
      alert(result.message);
      throw new Error(error);
    }
  }
);

export const productSlice = createSlice({
  name: "Products",
  initialState: {
    items: [],
    singleproduct: {},
    loading: false,
    error: "",
    layout: {
      Grid3x: false,
      Grid4x: false,
      Grid6x: true,
    },
  },
  reducers: {
    addProduct(state, action) {
      console.log(state.items);
    },
    updateProduct(state, action) {
      console.log(state);
    },
    deleteProduct(state, action) {
      // console.log(action.payload);
      return state;
    },
    changeLayout(state, action) {
      const Grid = action.payload;

      for (let key in state.layout) {
        if (key == Grid) {
          state.layout[Grid] = true;
        } else {
          state.layout[key] = false;
        }
      }
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        // console.log(action, "from fulfiled");

        state.loading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(getProduct.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.singleproduct = action.payload;
        state.error = null;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { updateProduct, deleteProduct, changeLayout } =
  productSlice.actions;
export default productSlice.reducer;
