import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departureTime: [0, 24],
  returnTime: [0, 24],
};

const timesSlice = createSlice({
  name: "times",
  initialState,
  reducers: {
    setDepartureTime(state, action) {
      state.departureTime = action.payload;
    },
    setReturnTime(state, action) {
      state.returnTime = action.payload;
    },
  },
});

export const { setDepartureTime, setReturnTime } = timesSlice.actions;
export default timesSlice.reducer;
