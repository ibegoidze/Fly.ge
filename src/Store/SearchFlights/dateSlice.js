import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newSelectedDate: null,
  currentDepartureDate: null,
  isDepartureNext: true,
  dates: { departure: "2024-06-22", return: "2024-06-29" },
};

export const dateSelectionSlice = createSlice({
  name: "dateSelection",
  initialState,
  reducers: {
    setNewSelectedDate: (state, action) => {
      state.newSelectedDate = action.payload;
    },
    setCurrentDepartureDate: (state, action) => {
      state.currentDepartureDate = action.payload;
    },
    setIsDepartureNext: (state, action) => {
      state.isDepartureNext = action.payload;
    },
    setDates: (state, action) => {
      state.dates = action.payload;
    },
    resetDateSelection: () => initialState,
  },
});

export const {
  setNewSelectedDate,
  setCurrentDepartureDate,
  setIsDepartureNext,
  setDates,
  resetDateSelection,
} = dateSelectionSlice.actions;

export default dateSelectionSlice.reducer;
