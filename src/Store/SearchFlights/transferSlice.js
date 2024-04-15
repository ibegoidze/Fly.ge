// transferFilterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = "Any";

const transferFilterSlice = createSlice({
  name: "transferFilter",
  initialState,
  reducers: {
    setTransferFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTransferFilter } = transferFilterSlice.actions;

export default transferFilterSlice.reducer;
