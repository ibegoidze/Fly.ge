import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  passengerCountSummary: 1,
};

const passengerSummarySlice = createSlice({
  name: "passengerSummary",
  initialState,
  reducers: {
    setPassengerCountSummary(state, action) {
      state.passengerCountSummary = action.payload;
    },
  },
});

export const { setPassengerCountSummary } = passengerSummarySlice.actions;

export default passengerSummarySlice.reducer;
