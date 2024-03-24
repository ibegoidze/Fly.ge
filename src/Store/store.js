import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./Language/languageSlice";
import oneWayReducer from "./SearchFlights/OneWaySlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    oneWay: oneWayReducer,
  },
});
