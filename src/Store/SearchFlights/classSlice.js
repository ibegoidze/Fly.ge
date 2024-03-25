import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedClass: "ეკონომ კლასი", // Default to empty or 'Economy class' if preferred
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

// Export the auto-generated action creator
export const { setSelectedClass } = classSlice.actions;

export default classSlice.reducer;
