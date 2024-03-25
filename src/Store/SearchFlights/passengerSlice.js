import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  passengers: {
    Adult: { count: 1, description: "From the age of 11" },
    Child: { count: 0, description: "2-11 years old" },
    Newborn: { count: 0, description: "Up to 2 years" },
    Disabled: { count: 0, description: "" },
  },
};

export const passengerSlice = createSlice({
  name: "passengers",
  initialState,
  reducers: {
    increment: (state, action) => {
      const type = action.payload;
      if (state.passengers[type]) {
        state.passengers[type].count += 1;
      }
    },
    decrement: (state, action) => {
      const type = action.payload;
      if (state.passengers[type] && state.passengers[type].count > 0) {
        state.passengers[type].count -= 1;
      }
    },
    reset: (state) => {
      Object.keys(state.passengers).forEach((type) => {
        state.passengers[type].count = 0;
      });
    },
  },
});

export const { increment, decrement, reset } = passengerSlice.actions;

export default passengerSlice.reducer;
