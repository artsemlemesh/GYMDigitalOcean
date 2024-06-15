import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  status: "idle",
  error: null,
};





export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ username, password }) => {
    const response = await fetch("http://127.0.0.1:8000/login/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    console.log(data.user, 'DATA')
    localStorage.setItem("user", JSON.stringify(data.user));
    return data;
  }
);

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  const response = await fetch("http://127.0.0.1:8000/logout/", {
    method: "POST",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Logout failed");
  }
  localStorage.removeItem("user");

  return null;
});





export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await get('http://127.0.0.1:8000/user-profile/', {
        withCredentials: true, // Include credentials for authentication
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);







const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //no synchronous actions for this slice
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
