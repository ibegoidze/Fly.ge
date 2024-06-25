import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { flightsData } from "../../../static.js";
import SearchIcon from "../../../assets/Tickets/images/search.png";
import { setPassengerCountSummary } from "../../../Store/SearchFlights/currentPassengersSlice.js";
import ObjectGenerator from "../../../objectGenerator";
import { setSearchResults } from "../../../Store/SearchFlights/searchResults.js";

const FlightsButton = ({ onSearchData }) => {
  const dispatch = useDispatch();
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

  // CALCULATE PASSENGERS SUMMARY FOR PRICE
  const calculatePassengerCountSummary = () => {
    let countSummary = 0;
    for (const key in passengers) {
      countSummary += passengers[key].count;
    }
    return countSummary;
  };

  // TRANSLATE CURRENT STATE AND CLASS TO ENGLISH FOR CONSISTENT FILTERING
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

  // CLICK TO FILTER AND DISPLAY IN RESULTS
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
      selectedFromAirport ? selectedFromAirport.name : "Any"
    );
    searchParams.set("to", selectedToAirport ? selectedToAirport.name : "Any");
    searchParams.set("checkin", dates.departure);
    searchParams.set("checkout", dates.return || "Not Set");
    searchParams.set("class", classMessage);
    searchParams.set("way", stateMessage);

    const newRelativePathQuery = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    window.history.pushState({}, "", newRelativePathQuery);
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
};

export default FlightsButton;
