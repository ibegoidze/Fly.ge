import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { flightsData } from "../../../static.js";
import SearchIcon from "../../../assets/Tickets/images/search.png";
import { setPassengerCountSummary } from "../../../Store/SearchFlights/currentPassengersSlice.js";

const FlightsButton = ({ onSearchData }) => {
  const dispatch = useDispatch();
  const passengers = useSelector((state) => state.passengers.passengers);
  const oneWayState = useSelector((state) => state.oneWay.oneWayState);
  const selectedClass = useSelector((state) => state.class.selectedClass);
  const { dates } = useSelector((state) => state.dateSelection);
  const { selectedFromAirport, selectedToAirport } = useSelector(
    (state) => state.airports
  );
  const selectedAirlines = useSelector(
    (state) => state.airlines.selectedAirlines
  );
  const { departureTime, returnTime } = useSelector((state) => state.times);
  const { t } = useTranslation();
  const transferFilter = useSelector((state) => state.transferFilter);

  // CALCULATE PASSENGERS SUMMARY FOR PRICE
  const calculatePassengerCountSummary = () => {
    let countSummary = 0;
    for (const key in passengers) {
      countSummary += passengers[key].count;
    }
    return countSummary;
  };

  // TRANSLATE CURRENT STATE FROM OTHER LANGUAGES TO ENGLISH
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
      : selectedClass === "Business klasse" || selectedClass === "ბიზნეს კლასი"
      ? "Business class"
      : selectedClass === "Erste klasse" || selectedClass === "პირველი კლასი"
      ? "First class"
      : selectedClass;
  // CLICK TO FILTER AND DISPLAY IN RESULTS
  const handleSearchClick = () => {
    const filteredData = flightsData.filter((flight) => {
      const { depStartTime, retStartTime } = flight;
      console.log(depStartTime, retStartTime);
      const isDepartureTimeInRange =
        depStartTime >= departureTime[0] && depStartTime < departureTime[1];
      const isReturnTimeInRange =
        retStartTime >= returnTime[0] && retStartTime <= returnTime[1];

      const { departure, return: returnAirlines } = flight.airlines;
      const selectedAirlinesSet = new Set([...selectedAirlines]);
      return (
        flight.from === (selectedFromAirport ? selectedFromAirport.name : "") &&
        flight.to === (selectedToAirport ? selectedToAirport.name : "") &&
        flight.departure === dates.departure &&
        flight.return === dates.return &&
        flight.way === stateMessage &&
        flight.class === classMessage &&
        (transferFilter === "Any" || flight.transfer === transferFilter) &&
        (selectedAirlinesSet.has(departure) ||
          selectedAirlinesSet.has(returnAirlines)) &&
        isDepartureTimeInRange &&
        isReturnTimeInRange
      );
    });

    // UPDATE PASSENGERS SUMMARY
    const summary = calculatePassengerCountSummary();
    dispatch(setPassengerCountSummary(summary));
    // PASS INFO TO PARENT TO DISPLAY IT IN RESULTS
    onSearchData(filteredData, summary);
  };

  return (
    <div>
      <button
        onClick={handleSearchClick}
        className="relative bg-blue-500 hover:bg-blue-700 text-md px-6 py-3 rounded-md text-white font-semibold flex items-center justify-center gap-4 min-w-14 min-h-12"
      >
        <img src={SearchIcon} alt="" />
        <span className="flex whitespace-nowrap">
          {t("Search for tickets")}
        </span>
      </button>
    </div>
  );
};

export default FlightsButton;
