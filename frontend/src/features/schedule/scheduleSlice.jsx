import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  instructors: {
    data: [],
    status: "idle",
    error: null,
  },
  classes: {
    data: [],
    status: "idle",
    error: null,
  },
  schedules: {
    data: [],
    status: "idle",
    error: null,
  },
};



export const fetchInstructors = createAsyncThunk(
  "schedule/fetchInstructors",
  async () => {
    const response = await fetch("http://127.0.0.1:8000/instructors/");
    const data = await response.json();
    return data;
  }
);

export const fetchClasses = createAsyncThunk(
  "schedule/fetchClasses",
  async () => {
    const response = await fetch("http://127.0.0.1:8000/classes/");
    const data = await response.json();
    return data;
  }
);

export const fetchSchedules = createAsyncThunk(
  "schedule/fetchSchedules",
  async () => {
    const response = await fetch("http://127.0.0.1:8000/schedule/");
    const data = await response.json();
    return data;
  }
);

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInstructors.pending, (state) => {
        state.instructors.status = "loading";
      })
      .addCase(fetchInstructors.fulfilled, (state, action) => {
        state.instructors.status = "succeeded";
        state.instructors.data = action.payload;
      })
      .addCase(fetchInstructors.rejected, (state, action) => {
        state.instructors.status = "failed";
        state.instructors.error = action.error.message;
      })
      .addCase(fetchClasses.pending, (state) => {
        state.classes.status = "loading";
      })
      .addCase(fetchClasses.fulfilled, (state, action) => {
        state.classes.status = "succeeded";
        state.classes.data = action.payload;
      })
      .addCase(fetchClasses.rejected, (state, action) => {
        state.classes.status = "failed";
        state.classes.error = action.error.message;
      })
      .addCase(fetchSchedules.pending, (state) => {
        state.schedules.status = "loading";
      })
      .addCase(fetchSchedules.fulfilled, (state, action) => {
        state.schedules.status = "succeeded";
        state.schedules.data = action.payload;
      })
      .addCase(fetchSchedules.rejected, (state, action) => {
        state.schedules.status = "failed";
        state.schedules.error = action.error.message;
      });
  },
});

export default scheduleSlice.reducer;
