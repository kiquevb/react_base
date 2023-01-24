import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavbarOpen: false,
};

const sliceName = "layout";

export const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    toggle_navbar_open: (state) => {
      state.isNavbarOpen = !state.isNavbarOpen;
    },
  },
});

export const { toggle_navbar_open } = slice.actions;
export default slice.reducer;

export const store_navbar_open = (state) => state[sliceName].isNavbarOpen;
