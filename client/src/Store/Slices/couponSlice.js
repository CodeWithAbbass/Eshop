import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  coupons: [],
  loading: false,
  error: null,
};

export const getAllCoupon = createAsyncThunk("getAllCoupon", async (data) => {
  try {
    const URL = `${import.meta.env.VITE_API_KEY}/coupon`;
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
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
export const addCoupon = createAsyncThunk("addCoupon", async (data) => {
  try {
    const URL = `${import.meta.env.VITE_API_KEY}/coupon/add`;
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
export const couponSlice = createSlice({
  name: "Coupons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCoupon.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCoupon.fulfilled, (state, action) => {
        state.loading = false;
        state.coupons = action.payload;
        state.error = null;
      })
      .addCase(getAllCoupon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addCoupon.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCoupon.fulfilled, (state, action) => {
        state.loading = false;
        state.coupons = action.payload;
        state.error = null;
      })
      .addCase(addCoupon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = couponSlice.actions;
export default couponSlice.reducer;
