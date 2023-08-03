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
export const addProduct = createAsyncThunk("addProduct", async (formData) => {
  try {
    const URL = `${import.meta.env.VITE_API_KEY}/product/add`;
    const response = await fetch(URL, {
      method: "POST",

      headers: {
        // "Content-Type": "multipart/form-data",
      },
      body: formData,
      credentials: "include",
    });

    const result = await response.json();

    if (result.success) {
      alert(result.message);
      return result.data;
    }
    alert(result.message);
    return [];
  } catch (error) {
    throw new Error(error);
  }
});
export const editProduct = createAsyncThunk("editProduct", async (formData) => {
  try {
    const URL = `${import.meta.env.VITE_API_KEY}/product/edit`;
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
      },
      credentials: "include",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      alert(result.message);
      return result.data;
    }
    alert(result.message);
    return [];
  } catch (error) {
    throw new Error(error);
  }
});
export const deleteProduct = createAsyncThunk("deleteProduct", async (uid) => {
  try {
    const URL = `${import.meta.env.VITE_API_KEY}/product/delete/${uid}`;
    const response = await fetch(URL, {
      method: "DELETE",
      headers: {
        // "Content-Type": "multipart/form-data",
      },
      credentials: "include",
    });

    const result = await response.json();

    if (result.success) {
      alert(result.message);
      return result.data;
    }
    alert(result.message);
    return [];
  } catch (error) {
    throw new Error(error);
  }
});
export const searchProduct = createAsyncThunk("searchProduct", async (str) => {
  try {
    const URL = `${import.meta.env.VITE_API_KEY}/product/q/${str}`;
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        // "Content-Type": "multipart/form-data",
      },
    });

    const result = await response.json();

    if (result.success) {
      return result.data;
    }
    return [];
  } catch (error) {
    throw new Error(error);
  }
});
export const productSlice = createSlice({
  name: "Products",
  initialState: {
    items: [],
    singleproduct: {},
    filtered: [],
    loading: false,
    error: "",
    layout: {
      Grid3x: false,
      Grid4x: false,
      Grid6x: true,
    },
  },
  reducers: {
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
    clearFilter(state, action) {
      state.filtered = [];
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        if (Object.keys(action.payload).length > 1) {
          state.singleproduct = action.payload;
        } else {
          state.singleproduct = state.singleproduct;
        }
        state.error = null;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        if (Object.keys(action.payload).length > 0) {
          state.items = [...state.items, action.payload];
        } else {
          state.items = [...state.items];
        }
        state.error = null;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.singleproduct = action.payload;
        state.error = null;
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(searchProduct.pending, (state) => {
        state.search = true;
      })
      .addCase(searchProduct.fulfilled, (state, action) => {
        state.search = false;
        state.filtered = [...action.payload];
        state.error = null;
      })
      .addCase(searchProduct.rejected, (state, action) => {
        state.search = false;
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { changeLayout, clearFilter } = productSlice.actions;
export default productSlice.reducer;
