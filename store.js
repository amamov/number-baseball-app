import { configureStore, createSlice } from "@reduxjs/toolkit";
import { set_local_data } from "./local_storage";

const STATUS = createSlice({
  name: "STATUS",
  initialState: { success: 0, avg_attempts: 0, attempts: 0 },
  reducers: {
    accumulate_success: (state, action) => {
      state.success++;
      state.avg_attempts = parseInt(state.attempts / state.success);
      set_local_data(state);
    },
    accumulate_attempts: (state, action) => {
      state.attempts++;
      set_local_data(state);
    },
    reset: (state, action) => {
      state = { success: 0, attempts: 0, avg_attempts: 0, all_attempts: 0 };
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
