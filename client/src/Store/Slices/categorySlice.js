import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  categories: [],
  loading: false,
  error: null,
};
export const getAllCat = createAsyncThunk("getAllCat", async () => {
  try {
    const URL = `${import.meta.env.VITE_API_KEY}/cat`;
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
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
export const addCategory = createAsyncThunk("addCategory", async (data) => {
  try {
    const URL = `${import.meta.env.VITE_API_KEY}/cat/add`;
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
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
export const editCategory = createAsyncThunk("editCategory", async (data) => {
  try {
    const URL = `${import.meta.env.VITE_API_KEY}/cat/edit`;
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
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
export const deleteCategory = createAsyncThunk(
  "deleteCategory",
  async (cid) => {
    try {
      const URL = `${import.meta.env.VITE_API_KEY}/cat/delete/${cid}`;
      const response = await fetch(URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
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
  }
);
export const categorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCat.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCat.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.error = null;
      })
      .addCase(getAllCat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.error = null;
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(editCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.error = null;
      })
      .addCase(editCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.error = null;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = categorySlice.actions;
export default categorySlice.reducer;
