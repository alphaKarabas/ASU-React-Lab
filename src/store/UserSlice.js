import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registration = createAsyncThunk(
  "registration/fetchUser",
  async ({ email, name, password }, { rejectWithValue }) => {
    try {
      console.log(email, name, password);
      const response = await axios.post(
        `http://localhost:5000/api/auth/registration`,
        {
          email,
          name,
          password,
        }
      );

      console.log(`${response.data.message}: ${response.data.user.email}`);
      localStorage.setItem("JWT_Token", response.data.token);
      return response.data.user;
    } catch (e) {
      console.log(e.response.data.message);
      console.log(e.response.data.errors);
      return rejectWithValue(e.response.data.message)
    }
  }
);

export const login = createAsyncThunk(
  "login/fetchUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/login`,
        {
          email,
          password,
        }
      );
      console.log(`${response.data.message}: ${response.data.user.email}`);
      localStorage.setItem("JWT_Token", response.data.token);
      return response.data.user;
    } catch (e) {
      console.log(e.response.data.message);
      console.log(e.response.data.errors);
      return rejectWithValue(e.response.data.message)
    }
  }
);

export const auth = createAsyncThunk(
  "auth/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/auth/auth`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("JWT_Token")}` }
        }
      );
      console.log(`${response.data.message}: ${response.data.user.email}`);
      localStorage.setItem("JWT_Token", response.data.token);
      return response.data.user;
    } catch (e) {
      localStorage.removeItem("JWT_Token")
      console.log(e.response.data.message);
      console.log(e.response.data.errors);
      return rejectWithValue(e.response.data.message)
    }
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isAuth: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("JWT_Token");
      state.currentUser = null;
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registration.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isAuth = true;
        state.error = null;
      })
      .addCase(registration.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isAuth = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(auth.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isAuth = true;
        state.error = null;
      })
      .addCase(auth.rejected, (state, action) => {
        state.error = action.payload;
      });
  }
});

export const { logout } = UserSlice.actions;

export default UserSlice.reducer;
