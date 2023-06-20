import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalAmount: 0,
  shippingFee: 1,
  loading: false,
  error: "",
};

export const getCart = createAsyncThunk("getCart", async (data) => {
  const items = JSON.parse(localStorage.getItem("items"));
  if (items == null || items.length == 0) {
    return [];
  } else {
    return items;
  }
});
export const addToCart = createAsyncThunk("addToCart", (data) => {
  const items = JSON.parse(localStorage.getItem("items")); // Getting From Local Storage
  if (items == null || items.length == 0 || !items) {
    const NewItem = JSON.stringify([data]);
    localStorage.setItem("items", NewItem);
    return JSON.parse(NewItem);
  }

  let avail = items.filter((item) => item.uid == data.uid);

  if (avail.length > 0) {
    let updatedItems = items.map((item) => {
      if (item.uid == data.uid) {
        if (item.quantity >= item.stock) {
          item.quantity = item.stock;
          return item;
        }
        item.quantity += 1;
        return item;
      }
      return item;
    });
    const Newitem = JSON.stringify(updatedItems);
    localStorage.setItem("items", Newitem);
    return updatedItems;
  }
  const Newitem = [...items, data];
  localStorage.setItem("items", JSON.stringify(Newitem));
  return Newitem;
});
export const selectIncDec = createAsyncThunk("selectIncDec", async (data) => {
  let { value, uid } = data;
  const items = JSON.parse(localStorage.getItem("items")); // Getting From Local Storage
  const res = items.map((item) => {
    if (item.uid == uid) {
      if (+value >= item.stock) {
        item.quantity = item.stock;
        return item;
      }
      if (+value <= 1) {
        item.quantity = 1;
        return item;
      }
      item.quantity = +value;
      return item;
    }
    return item;
  });
  const Newitem = JSON.stringify(res);
  localStorage.setItem("items", Newitem);
  return res;
});
export const increment = createAsyncThunk("increment", async (uid) => {
  const items = JSON.parse(localStorage.getItem("items")); // Getting From Local Storage
  let res = items.map((item) => {
    if (item.uid == uid) {
      if (item.quantity >= item.stock) {
        item.quantity = item.stock;
        return item;
      }
      item.quantity = +item.quantity + 1;
      return item;
    }
    return item;
  });
  const Newitem = JSON.stringify(res);
  localStorage.setItem("items", Newitem);
  return res;
});
export const decrement = createAsyncThunk("decrement", async (uid) => {
  const items = JSON.parse(localStorage.getItem("items")); // Getting From Local Storage
  let res = items.map((item) => {
    if (item.uid == uid) {
      if (item.quantity <= 1) {
        item.quantity = 1;
        return item;
      }
      item.quantity = +item.quantity - 1;
      return item;
    }
    return item;
  });
  const Newitem = JSON.stringify(res);
  localStorage.setItem("items", Newitem);
  return res;
});
export const deleteFromCart = createAsyncThunk(
  "deleteFromCart",
  async (uid) => {
    const items = JSON.parse(localStorage.getItem("items")); // Getting From Local Storage
    const res = items.filter((item) => item.uid !== uid);
    if (res.length == 0) {
      localStorage.removeItem("items");
      return [];
    }
    const Newitem = JSON.stringify(res);
    localStorage.setItem("items", Newitem);
    return res;
  }
);
export const clearCart = createAsyncThunk("clearCart", async () => {
  localStorage.removeItem("items");
  return [];
});
export const totalPrice = createAsyncThunk("totalPrice", async (data) => {
  const items = JSON.parse(localStorage.getItem("items")); // Getting From Local Storage
  let totalPrice = items.reduce((initialNumber, curElem) => {
    let { price, quantity, discount } = curElem;
    let NewAmount;
    if (discount != null && discount > 0) {
      NewAmount = price - (price * discount) / 100;
      initialNumber = initialNumber + NewAmount * quantity;
    } else {
      discount = 0;
      initialNumber = initialNumber + price * quantity;
    }
    //    initialNumber =         0     +   50  x    1    === 50
    //    initialNumber =         50    +   50  x    1    === 100
    //    initialNumber =         100   +   100 x    1    === 200
    return initialNumber;
  }, 0);

  return totalPrice;
});

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    // AddToCart(state, action) {
    //   const newItem = action.payload;
    //   let avail = state.items.filter((item) => item.uid == newItem.uid);
    //   if (avail.length > 0) {
    //     let res = state.items.map((item) => {
    //       if (item.uid == newItem.uid) {
    //         if (item.quantity >= item.stock) {
    //           return { ...item, quantity: item.stock };
    //         }
    //         return { ...item, quantity: item.quantity + 1 };
    //       }
    //       return { ...item };
    //     });
    //     return { ...state, items: res };
    //   }
    //   return {
    //     ...state,
    //     items: [...state.items, newItem],
    //   };
    // },
    // SelectIncrementDecrement(state, action) {
    //   let { value, uid } = action.payload;
    //   const res = state.items.map((item) => {
    //     if (item.uid == uid) {
    //       if (+value >= item.stock) {
    //         return { ...item, quantity: item.stock };
    //       }
    //       if (+value <= 1) {
    //         return { ...item, quantity: 1 };
    //       }
    //       return { ...item, quantity: +value };
    //     }
    //     return { ...item };
    //   });
    //   return { ...state, items: res };
    // },
    // PlusIncrement(state, action) {
    //   const itemID = action.payload;
    //   let res = state.items.map((item) => {
    //     if (item.uid == itemID) {
    //       if (item.quantity >= item.stock) {
    //         return { ...item, quantity: item.stock };
    //       }
    //       return { ...item, quantity: +item.quantity + 1 };
    //     }
    //     return { ...item };
    //   });
    //   return { ...state, items: res };
    // },
    // MinusDecrement(state, action) {
    //   let itemID = action.payload;
    //   let res = state.items.map((item) => {
    //     if (item.uid == itemID) {
    //       if (item.quantity <= 1) {
    //         return { ...item, quantity: 1 };
    //       }
    //       return { ...item, quantity: +item.quantity - 1 };
    //     }
    //     return { ...item };
    //   });
    //   return { ...state, items: res };
    // },
    // DeleteFromCart(state, action) {
    //   const itemID = action.payload;
    //   const res = state.items.filter((item) => item.uid !== itemID);
    //   return { ...state, items: res };
    // },
    // TotalPrice(state, action) {
    //   let totalPrice = state.items.reduce((initialNumber, curElem) => {
    //     let { price, quantity, discount } = curElem;
    //     let NewAmount;
    //     if (discount != null && discount > 0) {
    //       NewAmount = price - (price * discount) / 100;
    //       initialNumber = initialNumber + NewAmount * quantity;
    //     } else {
    //       discount = 0;
    //       initialNumber = initialNumber + price * quantity;
    //     }
    //     //    initialNumber =         0     +   50  x    1    === 50
    //     //    initialNumber =         50    +   50  x    1    === 100
    //     //    initialNumber =         100   +   100 x    1    === 200
    //     return initialNumber;
    //   }, 0);
    //   return { ...state, totalPrice };
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        // console.log(action, "from fulfiled");
        state.loading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(getCart.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(addToCart.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(selectIncDec.pending, (state) => {
        state.loading = true;
      })
      .addCase(selectIncDec.fulfilled, (state, action) => {
        // console.log(action, "from fulfiled");
        state.loading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(selectIncDec.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(increment.pending, (state) => {
        state.loading = true;
      })
      .addCase(increment.fulfilled, (state, action) => {
        // console.log(action, "from fulfiled");
        state.loading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(increment.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(decrement.pending, (state) => {
        state.loading = true;
      })
      .addCase(decrement.fulfilled, (state, action) => {
        // console.log(action, "from fulfiled");
        state.loading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(decrement.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteFromCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteFromCart.fulfilled, (state, action) => {
        // console.log(action, "from fulfiled");
        state.loading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(deleteFromCart.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(clearCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(clearCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(clearCart.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(totalPrice.pending, (state) => {
        state.loading = true;
      })
      .addCase(totalPrice.fulfilled, (state, action) => {
        // console.log(action, "from fulfiled");

        state.loading = false;
        state.totalAmount = action.payload;
        state.error = null;
      })
      .addCase(totalPrice.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const {
  // AddToCart,
  // PlusIncrement,
  // MinusDecrement,
  // DeleteFromCart,
  // SelectIncrementDecrement,
  // TotalPrice,
} = cartSlice.actions;
export default cartSlice.reducer;
