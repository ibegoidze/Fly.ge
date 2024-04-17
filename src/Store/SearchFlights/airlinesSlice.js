import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  selectorRef: null,
  selectedAirlines: [
    "Pegasus",
    "Turkish Airlines",
    "Wizzair",
    "Georgian Airways",
    "Ryanair",
    "Emirates",
    "Lufthansa",
    "Delta Air Lines",
    "British Airways",
    "Air France",
    "Qatar Airways",
    "Singapore Airlines",
  ],
  windowWidth: window.innerWidth,
};

export const airlinesSlice = createSlice({
  name: "airlines",
  initialState,
  reducers: {
    toggleDropdown: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeDropdown: (state) => {
      state.isOpen = false;
    },
    toggleAllAirlines: (state) => {
      if (
        state.selectedAirlines.length === 0 ||
        state.selectedAirlines.length !== initialState.selectedAirlines.length
      ) {
        // IF NO AIRLINES ARE SELECTED OR NOT ALL AIRLINES ARE SELECTED SELECT ALL
        state.selectedAirlines = [
          "Pegasus",
          "Turkish Airlines",
          "Wizzair",
          "Georgian Airways",
          "Ryanair",
          "Emirates",
          "Lufthansa",
          "Delta Air Lines",
          "British Airways",
          "Air France",
          "Qatar Airways",
          "Singapore Airlines",
        ];
      } else {
        // OTHERWISE, CLEAR ALL SELECTED AIRLINES
        state.selectedAirlines = [];
      }
    },
    toggleAirlineSelection: (state, action) => {
      const airline = action.payload;
      const index = state.selectedAirlines.indexOf(airline);
      if (index === -1) {
        state.selectedAirlines.push(airline);
      } else {
        state.selectedAirlines.splice(index, 1);
      }
    },
    setSelectorRef: (state, action) => {
      state.selectorRef = action.payload;
    },
    setWindowWidth: (state, action) => {
      state.windowWidth = action.payload;
    },
  },
});

export const {
  toggleDropdown,
  closeDropdown,
  toggleAllAirlines,
  toggleAirlineSelection,
  setSelectorRef,
  setWindowWidth,
} = airlinesSlice.actions;

export default airlinesSlice.reducer;
