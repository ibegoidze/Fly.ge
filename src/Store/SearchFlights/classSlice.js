import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedClass: "ეკონომ კლასი",
};

export const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    setSelectedClass: (state, action) => {
      state.selectedClass = action.payload;
    },
  },
});

export const { setSelectedClass } = classSlice.actions;

export default classSlice.reducer;
