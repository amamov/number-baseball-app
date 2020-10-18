import { configureStore, createSlice } from "@reduxjs/toolkit";
import { set_local_data } from "./local_storage";

const STATUS = createSlice({
  name: "STATUS",
  initialState: [
    { balls: 3, success: 0, avg_attempts: 0, attempts: 0 },
    { balls: 4, success: 0, avg_attempts: 0, attempts: 0 },
    { balls: 5, success: 0, avg_attempts: 0, attempts: 0 },
  ],
  reducers: {
    accumulate_success: (state, action) => {
      state[action.payload].success++;
      state[action.payload].avg_attempts = parseInt(
        state[action.payload].attempts / state[action.payload].success
      );
      set_local_data(state);
    },
    accumulate_attempts: (state, action) => {
      state[action.payload].attempts++;
      set_local_data(state);
    },
    reset: (state, action) => {
      state = [
        { balls: 3, success: 0, avg_attempts: 0, attempts: 0 },
        { balls: 4, success: 0, avg_attempts: 0, attempts: 0 },
        { balls: 5, success: 0, avg_attempts: 0, attempts: 0 },
      ];
    },
    init_status: (state, action) => {
      return { ...action.payload };
    },
  },
});

export const store = configureStore({ reducer: STATUS.reducer });

export const {
  accumulate_success,
  accumulate_attempts,
  reset,
  init_status,
} = STATUS.actions;
