import { createSlice } from "@reduxjs/toolkit";

export const checkInSlice = createSlice({
  name: "checkIn",
  initialState: {
    selectedMonth: new Date().getMonth(),
    selectedDay: new Date().getDate(),
  },
  reducers: {
    setCheckInMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },
    setCheckInDay: (state, action) => {
      state.selectedDay = action.payload;
    },
  },
});

export const { setCheckInMonth, setCheckInDay } = checkInSlice.actions;

export const checkOutSlice = createSlice({
  name: "checkOut",
  initialState: {
    selectedMonth: new Date().getMonth(),
    selectedDay: new Date().getDate(),
  },
  reducers: {
    setCheckOutMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },
    setCheckOutDay: (state, action) => {
      state.selectedDay = action.payload;
    },
  },
});

export const { setCheckOutMonth, setCheckOutDay } = checkOutSlice.actions;

export default { checkInSlice, checkOutSlice };
