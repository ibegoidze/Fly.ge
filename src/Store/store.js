import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./Language/languageSlice";
import oneWayReducer from "./SearchFlights/OneWaySlice";
import passengerReducer from "./SearchFlights/passengerSlice";
import classReducer from "./SearchFlights/classSlice";
import airportsReducer from "./SearchFlights/airportsSlice";
import dateSelectionReducer from "./SearchFlights/dateSlice";
import hotelDestinationReducer from "./SearchFlights/HotelDestinationSlice";
import { checkInSlice, checkOutSlice } from "./SearchFlights/checkSlice";
import searchResultsReducer from "./SearchFlights/searchResults";
import passengerSummaryReducer from "./SearchFlights/currentPassengersSlice";
import transferReducer from "./SearchFlights/transferSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    oneWay: oneWayReducer,
    passengers: passengerReducer,
    class: classReducer,
    airports: airportsReducer,
    dateSelection: dateSelectionReducer,
    hotelDestination: hotelDestinationReducer,
    checkIn: checkInSlice.reducer,
    checkOut: checkOutSlice.reducer,
    searchResults: searchResultsReducer,
    passengerSummary: passengerSummaryReducer,
    transferFilter: transferReducer,
  },
});
