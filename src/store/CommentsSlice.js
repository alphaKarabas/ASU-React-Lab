import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserComments = createAsyncThunk(
  "comments/fetchComments",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/comments`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("JWT_Token")}` },
      });
      console.log(`${response.data.message}: ${response.data.comments}`);
      return response.data;
    } catch (e) {
      console.log(e.response.data.message);
      return rejectWithValue(e.response.data.message)
    }
  });

export const createComment = createAsyncThunk(
  "comments/createComment",
  async ({ text }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/comments`,
        {
          text
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("JWT_Token")}`,
          },
        }
      );
      console.log(`${response.data.message}: ${response.data.newComment}`);
      return response.data;
    } catch (e) {
      console.log(e.response.data.message);
      return rejectWithValue(e.response.data.message)
    }
  }
);

const CommentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserComments.fulfilled, (state, action) => {
        if (!action.payload.comments) return;
        state.comments = action.payload.comments;
      })
      .addCase(getUserComments.rejected, (state) => {
        state.comments = [];
      })
      .addCase(createComment.fulfilled, (state, action) => {
        if (!action.payload.newComment) return;
        console.log(action.payload.newComment);
        state.comments.push(action.payload.newComment);
      })
  },
  reducers: {
    resetComments(state, action) {
      state.comments = [];
    },
  },
});

export const {
  resetComments
} = CommentsSlice.actions;

export default CommentsSlice.reducer;
