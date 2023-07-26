import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loading: false,
  error: null,
};

export const getUser = createAsyncThunk("getUser", async (data) => {
  const authtoken = localStorage.getItem("authtoken");
  if (authtoken == null || authtoken.length < 1) {
    return {};
  }
  try {
    const URL = `${import.meta.env.VITE_API_KEY}/auth`;
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        authtoken: `${authtoken}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const result = await response.json();

    if (result.success) {
      localStorage.setItem("authtoken", result.authtoken);
      return result.user;
    }
  } catch (error) {
    throw new Error(error);
  }
});

export const Signup = createAsyncThunk("Signup", async (data) => {
  try {
    const URL = `${import.meta.env.VITE_API_KEY}/auth/signup`;
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
      return result.data;
    }
    if (response.status == 412) {
      for (const key in result.data.errors) {
        alert(result.data.errors[key]);
      }
      return {};
    } else {
      alert(result.message);
      return result.data;
    }
  } catch (error) {
    alert(result.message);
    throw new Error(error);
  }
});

export const Login = createAsyncThunk("Login", async (data) => {
  try {
    const URL = `${import.meta.env.VITE_API_KEY}/auth/login`;
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
      localStorage.clear();
      localStorage.setItem("authtoken", result.authtoken);
      alert(result.message);
      return result.user;
    }
    alert(result.message);
    console.log(result);
    return {};
  } catch (error) {
    alert(result.message);
    throw new Error(error);
  }
});

export const Logout = createAsyncThunk("Logout", async (data) => {
  localStorage.setItem("authtoken", "");
  alert("Logout Successfully");
  return {};
});

export const updateUser = createAsyncThunk("updateUser", async (data) => {
  const authtoken = localStorage.getItem("authtoken");
  try {
    const URL = `${import.meta.env.VITE_API_KEY}/auth/update`;
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        authtoken,
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
  } catch (error) {
    alert(result.message);
    throw new Error(error);
  }
});
const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = { ...state.user, ...action.payload };
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(Signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(Signup.fulfilled, (state, action) => {
        state.loading = false;
        if (Object.hasOwnProperty(action.payload).length > 0) {
          state.user = action.payload;
        } else {
          state.user = state.user;
        }
        state.error = null;
      })
      .addCase(Signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(Login.pending, (state) => {
        state.loading = true;
      })
      .addCase(Login.fulfilled, (state, action) => {
        state.loading = false;
        if (Object.hasOwnProperty(action.payload).length > 0) {
          state.user = action.payload;
        } else {
          state.user = state.user;
        }
        state.error = null;
      })
      .addCase(Login.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(Logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(Logout.fulfilled, (state, action) => {
        // console.log(action, "from fulfiled");

        state.loading = false;
        state.user = {};
        state.error = null;
      })
      .addCase(Logout.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        // console.log(action, "from fulfiled");

        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        // console.log(action, "from rejections");
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions } = userSlice;
export default userSlice.reducer;
