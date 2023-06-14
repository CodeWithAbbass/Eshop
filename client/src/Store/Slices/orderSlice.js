import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  orders: [],
  addressbook: [],
  loading: false,
  error: "",
};

export const getUserOrders = createAsyncThunk("getUserOrders", async (data) => {
  const authtoken = localStorage.getItem("authtoken");
  try {
    const URL = "http://localhost:5000/api/order/user";
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
});
export const placeOrder = createAsyncThunk("placeOrder", async (data) => {
  const authtoken = localStorage.getItem("authtoken");
  if (!authtoken) {
    alert("Please Login Before Place Order");
    return [];
  }
  try {
    const URL = `http://localhost:5000/api/order/confirm`;
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        authtoken,
        Accept: "application/json",
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
  } catch (error) {
    throw new Error(error);
  }
});

export const getUserOrderAddress = createAsyncThunk(
  "getUserOrderAddress",
  (data) => {
    const addressbook = localStorage.getItem("addressbook");
    if (addressbook == null) {
      return [];
    }
    return JSON.parse(addressbook);
  }
);
export const addNewAddress = createAsyncThunk("addNewAddress", (location) => {
  const oldAddressBook = JSON.parse(localStorage.getItem("addressbook"));
  if (oldAddressBook == null || !oldAddressBook) {
    localStorage.setItem(
      "addressbook",
      JSON.stringify([{ default: false, location }])
    );
    return [{ default: false, location }];
  }

  const NewAddressBook = [...oldAddressBook, { default: false, location }];
  localStorage.setItem("addressbook", JSON.stringify(NewAddressBook));
  return NewAddressBook;
});
const orderSlice = createSlice({
  name: "Orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserOrders.fulfilled, (state, action) => {
        // console.log(action, "from fulfiled");

        state.loading = false;
        state.orders = action.payload;
        state.error = null;
      })
      .addCase(getUserOrders.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getUserOrderAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserOrderAddress.fulfilled, (state, action) => {
        // console.log(action, "from fulfiled");

        state.loading = false;
        state.addressbook = action.payload;
        state.error = null;
      })
      .addCase(getUserOrderAddress.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addNewAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewAddress.fulfilled, (state, action) => {
        // console.log(action, "from fulfiled");

        state.loading = false;
        state.addressbook = action.payload;
        state.error = null;
      })
      .addCase(addNewAddress.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { actions } = orderSlice;
export default orderSlice.reducer;
