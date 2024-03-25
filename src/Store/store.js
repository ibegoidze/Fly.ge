import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./Language/languageSlice";
import oneWayReducer from "./SearchFlights/OneWaySlice";
import passengerReducer from "./SearchFlights/passengerSlice";
import classReducer from "./SearchFlights/classSlice";
import airportsReducer from "./SearchFlights/airportsSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    oneWay: oneWayReducer,
    passengers: passengerReducer,
    class: classReducer,
    airports: airportsReducer,
  },
});
