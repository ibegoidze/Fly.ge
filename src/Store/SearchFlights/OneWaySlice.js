import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  oneWayState: "Bilateral",
};

export const oneWaySlice = createSlice({
  name: "oneWawy",
  initialState,
  reducers: {
    setDropdownOption: (state, action) => {
      state.oneWayState = action.payload;
    },
  },
});

export const { setDropdownOption } = oneWaySlice.actions;
export default oneWaySlice.reducer;
