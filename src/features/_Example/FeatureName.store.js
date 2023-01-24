// Configures the feature slice for the redux toolkit reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

// Name must be the same in store reducer src/store/index.js
const sliceName = "example";

export const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    example_reducer: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Export reducers
export const { example_reducer } = slice.actions;
export default slice.reducer;

// Functions to use with dispatch:
export const store_getData = (state) => state[sliceName].data;
