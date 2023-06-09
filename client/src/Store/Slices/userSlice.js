import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  loading: false,
  error: null,
};

// create action for user Signup
export const Signup = createAsyncThunk("Signup", async (data) => {
  try {
    const URL = "http://localhost:5000/api/auth/signup";
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.success) {
      alert(result.message);
      return;
    }
    alert(result.message);
  } catch (error) {
    alert(result.message);
    throw new Error(error);
  }
});

export const Login = createAsyncThunk("Login", async (data) => {
  try {
    const URL = "http://localhost:5000/api/auth/login";
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
      return result.user;
    }
    alert(result.message);
  } catch (error) {
    alert(result.message);
    throw new Error(error);
  }
});

export const getUser = createAsyncThunk("getUser", async (data) => {
  try {
    const URL = "http://localhost:5000/api/auth";
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
      return result.user;
    }
    // console.log("User Not Found", result);
  } catch (error) {
    throw new Error(error);
  }
});

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(Signup.fulfilled, (state, action) => {
        // console.log(action, "from fulfiled");

        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(Signup.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(Login.pending, (state) => {
        state.loading = true;
      })
      .addCase(Login.fulfilled, (state, action) => {
        // console.log(action, "from fulfiled");

        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(Login.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        // console.log(action, "from fulfiled");
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions } = userSlice;
export default userSlice.reducer;
