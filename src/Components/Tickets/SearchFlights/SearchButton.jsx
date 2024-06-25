import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResults } from "../../../Store/SearchFlights/searchResults.js";
import { setPassengerCountSummary } from "../../../Store/SearchFlights/currentPassengersSlice.js";
import { useNavigate } from "react-router-dom";

import ObjectGenerator from "../../../objectGenerator";
import { flightsData } from "../../../static.js";

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

  // STATE TO STORE GENERATED OBJECTS
  const [generatedFlights, setGeneratedFlights] = useState([]);

  useEffect(() => {
    // CREATE AN INSTANCE OF THE OBJECT GENERATOR CLASS
    const from = selectedFromAirport ? selectedFromAirport.name : "New York";
    const to = selectedToAirport ? selectedToAirport.name : "Los Angeles";
    const departure = dates.departure || "2024-07-01";
    const returnDate = dates.return || "2024-07-10";

    const generator = new ObjectGenerator(from, to, departure, returnDate);
    const generatedObjects = generator.generateObjects();
    setGeneratedFlights(generatedObjects);
  }, [selectedFromAirport, selectedToAirport, dates]);

  // CALCULATE PASSENGERS QUANTITY TO DISPLAY IT IN RESULT
  const calculatePassengerCountSummary = () => {
    let countSummary = 0;
    for (const key in passengers) {
      countSummary += passengers[key].count;
    }
    return countSummary;
  };

  // TRANSLATE STATE AND CLASS TO ENGLISH FOR CONSISTENT FILTERING
  const translateStateAndClass = () => {
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
    return { stateMessage, classMessage };
  };

  // FILTER FLIGHTS DATA AND NAVIGATE TO FLIGHTS PAGE
  const handleSearchClick = () => {
    const { stateMessage, classMessage } = translateStateAndClass();

    // FILTER FLIGHTSDATA FIRST
    let filteredData = flightsData.filter((flight) => {
      return (
        flight.from === (selectedFromAirport ? selectedFromAirport.name : "") &&
        flight.to === (selectedToAirport ? selectedToAirport.name : "") &&
        flight.departure === dates.departure &&
        (!flight.return || flight.return === dates.return) &&
        flight.way === stateMessage &&
        flight.class === classMessage
      );
    });

    // IF NO FLIGHTS FOUND, USE GENERATED OBJECTS
    if (filteredData.length === 0) {
      filteredData = generatedFlights.filter((flight) => {
        return (
          flight.from ===
            (selectedFromAirport ? selectedFromAirport.name : "") &&
          flight.to === (selectedToAirport ? selectedToAirport.name : "") &&
          flight.departure === dates.departure &&
          (!flight.return || flight.return === dates.return) &&
          flight.way === stateMessage &&
          flight.class === classMessage
        );
      });
    }

    // SET FILTERED DATA TO RESULTS AND NAVIGATE TO FLIGHT
    const summary = calculatePassengerCountSummary();
    dispatch(setPassengerCountSummary(summary));
    dispatch(setSearchResults(filteredData));

    // UPDATE THE URL WITH QUERY PARAMETERS
    const searchParams = new URLSearchParams();
    searchParams.set(
      "from",
      selectedFromAirport ? selectedFromAirport.name : ""
    );
    searchParams.set("to", selectedToAirport ? selectedToAirport.name : "");
    searchParams.set("checkin", dates.departure);
    searchParams.set("checkout", dates.return);

    // BUILD THE NEW URL
    const newRelativePathQuery = `/Flights/search?${searchParams.toString()}`;

    // NAVIGATE TO THE NEW URL
    navigate(newRelativePathQuery);
  };

  return (
    <button
      onClick={handleSearchClick}
      className="bg-blue-500 hover:bg-blue-700 text-lg  rounded-full sm:px-5 sm:py-3 md:rounded-md text-white font-medium flex items-center justify-center gap-4 min-w-10 min-h-10 sm:min-w-14 sm:min-h-14 touch-none md:touch-auto"
    >
      <span class="material-symbols-outlined">search</span>
      <span className="hidden md:flex whitespace-nowrap">
        {t("Search for tickets")}
      </span>
    </button>
  );
}

export default SearchButton;
