import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  orders: [],
  addressbook: [],
  paymentmethod: "cod",
  editaddress: {},
  loading: false,
  error: "",
};

export const getUserOrders = createAsyncThunk("getUserOrders", async (data) => {
  const authtoken = localStorage.getItem("authtoken");
  try {
    const URL = `${import.meta.env.VITE_API_KEY}/order/user`;
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
    const URL = `${import.meta.env.VITE_API_KEY}/order/confirm`;
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
export const getAddress = createAsyncThunk("getAddress", async () => {
  const authtoken = localStorage.getItem("authtoken");
  if (!authtoken) {
    return [];
  }
  try {
    const URL = `${import.meta.env.VITE_API_KEY}/address`;
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
    return [];
  } catch (error) {
    throw new Error(error);
  }
});
export const addNewAddress = createAsyncThunk(
  "addNewAddress",
  async (newAddress) => {
    const authtoken = localStorage.getItem("authtoken");
    if (!authtoken) {
      alert("Please Login Before Adding Address");
      return [];
    }
    try {
      const URL = `${import.meta.env.VITE_API_KEY}/address/add`;
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          authtoken,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(newAddress),
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message);
        return result.data;
      }
      alert(result.message);
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);
export const editAddress = createAsyncThunk(
  "editAddress",
  async (updateData) => {
    const authtoken = localStorage.getItem("authtoken");
    if (!authtoken) {
      alert("Please Login Before Adding Address");
      return [];
    }
    try {
      const URL = `${import.meta.env.VITE_API_KEY}/address/update/${
        updateData.aid
      }`;
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          authtoken,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(updateData),
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message);
        return result.data;
      }
      alert(result.message);
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);
export const defaultAddress = createAsyncThunk(
  "defaultAddress",
  async (aid) => {
    const authtoken = localStorage.getItem("authtoken");
    if (!authtoken) {
      alert("Please Login Before Setting Default Address");
      return [];
    }
    try {
      const URL = `${import.meta.env.VITE_API_KEY}/address/da/${aid}`;
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
  }
);
export const deleteAddress = createAsyncThunk("deleteAddress", async (aid) => {
  const authtoken = localStorage.getItem("authtoken");
  if (!authtoken) {
    alert("Please Login Before Deleting Address");
    return [];
  }
  const res = window.confirm(
    "Are You Sure? You Want To Delete This Address Permanantly?"
  );
  if (!res) {
    return [];
  }

  try {
    const URL = `${import.meta.env.VITE_API_KEY}/address/delete/${aid}`;
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
      return result.data;
    }
  } catch (error) {
    throw new Error(error);
  }
});

const orderSlice = createSlice({
  name: "Orders",
  initialState,
  reducers: {
    changeDeliveryMethod(state, action) {
      return { ...state, paymentmethod: action.payload };
    },
    editAddressState(state, action) {
      return { ...state, editaddress: action.payload };
    },
  },
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
      .addCase(placeOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        // console.log(action, "from fulfiled");

        state.loading = false;
        state.orders = action.payload;
        state.error = null;
      })
      .addCase(placeOrder.rejected, (state, action) => {
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
      .addCase(getAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAddress.fulfilled, (state, action) => {
        // console.log(action, "from fulfiled");

        state.loading = false;
        state.addressbook = action.payload;
        state.error = null;
      })
      .addCase(getAddress.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addNewAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewAddress.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.length == 0) {
          return;
        }
        state.addressbook = action.payload;
        state.error = null;
      })
      .addCase(addNewAddress.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(editAddress.fulfilled, (state, action) => {
        // console.log(action, "from fulfiled");

        state.loading = false;
        if (action.payload.length == 0) {
          return;
        }
        state.addressbook = action.payload;
        state.error = null;
      })
      .addCase(editAddress.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(defaultAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(defaultAddress.fulfilled, (state, action) => {
        // console.log(action, "from fulfiled");

        state.loading = false;
        state.addressbook = action.payload;
        state.error = null;
      })
      .addCase(defaultAddress.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.length > 0) {
          state.addressbook = action.payload;
        } else {
          return;
        }
        state.error = null;
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { changeDeliveryMethod, editAddressState } = orderSlice.actions;
export default orderSlice.reducer;
