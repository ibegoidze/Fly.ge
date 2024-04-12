import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResults } from "../../../Store/SearchFlights/searchResults.js";
import { setPassengerCountSummary } from "../../../Store/SearchFlights/currentPassengersSlice.js";
import { flightsData } from "../../../static.js";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../../assets/Tickets/images/search.png";

function SearchButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const oneWayState = useSelector((state) => state.oneWay.oneWayState);
  const selectedClass = useSelector((state) => state.class.selectedClass);
  const { dates } = useSelector((state) => state.dateSelection);
  const { selectedFromAirport, selectedToAirport } = useSelector(
    (state) => state.airports
  );
  const passengers = useSelector((state) => state.passengers.passengers);

  // CALCULATE PASSENGERS QUANTITY TO DISPLAY IT IN RESULT
  const calculatePassengerCountSummary = () => {
    let countSummary = 0;
    for (const key in passengers) {
      countSummary += passengers[key].count;
    }
    return countSummary;
  };
  // CLICK FILTERS DATA AND DIRECTS USER TO FLIGHT FLIGHTS PAGE
  const handleSearchClick = () => {
    // TRANSLATE CURRENT STATE TO ENGLISH
    const stateMessage =
      oneWayState === "ცალმხრივი"
        ? "Unilateral"
        : oneWayState === "Einseitig" || oneWayState === "ორმხრივი"
        ? "Bilateral"
        : oneWayState;
    const classMessage =
      selectedClass === "Economy klasse" || selectedClass === "ეკონომ კლასი"
        ? "Economy class"
        : selectedClass === "Premium klasse" ||
          selectedClass === "პრემიუმ ეკონომ კლასი"
        ? "Premium class"
        : selectedClass === "Business klasse" ||
          selectedClass === "ბიზნეს კლასი"
        ? "Business class"
        : selectedClass === "Erste klasse" || selectedClass === "პირველი კლასი"
        ? "First class"
        : selectedClass;
    // FILTER
    const filteredData = flightsData.filter((flight) => {
      return (
        flight.from === (selectedFromAirport ? selectedFromAirport.name : "") &&
        flight.to === (selectedToAirport ? selectedToAirport.name : "") &&
        flight.departure === dates.departure &&
        flight.return === dates.return &&
        flight.way === stateMessage &&
        flight.class === classMessage
      );
    });
    // SET FILTERED DATA TO RESULTS AND NAVIGATE TO FLIGHT
    const summary = calculatePassengerCountSummary();
    dispatch(setPassengerCountSummary(summary));
    dispatch(setSearchResults(filteredData));
    navigate("/Flights");
  };

  return (
    <button
      onClick={handleSearchClick}
      className="bg-blue-500 hover:bg-blue-700 text-lg px-5 py-3 rounded-md text-white font-medium flex items-center justify-center gap-4 min-w-14 min-h-14"
    >
      <img src={SearchIcon} alt="search icon" className="h-5 w-5" />
      <span className="hidden md:flex whitespace-nowrap">
        {t("Search for tickets")}
      </span>
    </button>
  );
}

export default SearchButton;
