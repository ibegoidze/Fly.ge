import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const hotelDestinationSlice = createSlice({
  name: "destination",
  initialState,
  reducers: {
    setDestination: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDestination } = hotelDestinationSlice.actions;
export default hotelDestinationSlice.reducer;
