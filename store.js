import { configureStore, createSlice } from "@reduxjs/toolkit";

const LOG_DATA = createSlice({
  name: "LOG_DATA",
  initialState: { three: {}, four: {} },
  reducers: {
    wow: (state, action) => {
      // return {};
    },
  },
});

export const store = configureStore({ reducer: LOG_DATA.reducer });

export const { wow } = LOG_DATA.actions;
