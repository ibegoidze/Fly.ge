// src/features/airports/airportsSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const airportsSlice = createSlice({
  name: "airports",
  initialState: {
    selectedFromAirport: null,
    selectedToAirport: null,
    searchTermFrom: "",
    searchTermTo: "",
    isRotating: false,
  },
  reducers: {
    setSelectedFromAirport: (state, action) => {
      state.selectedFromAirport = action.payload;
    },
    setSelectedToAirport: (state, action) => {
      state.selectedToAirport = action.payload;
    },
    setSearchTermFrom: (state, action) => {
      state.searchTermFrom = action.payload;
    },
    setSearchTermTo: (state, action) => {
      state.searchTermTo = action.payload;
    },
    setIsRotating: (state, action) => {
      state.isRotating = action.payload;
    },
  },
});

export const {
  setSelectedFromAirport,
  setSelectedToAirport,
  setSearchTermFrom,
  setSearchTermTo,
  setIsRotating,
} = airportsSlice.actions;

export default airportsSlice.reducer;
