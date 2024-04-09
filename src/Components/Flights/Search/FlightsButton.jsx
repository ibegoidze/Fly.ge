import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { flightsData } from "../../../static.js";
import SearchIcon from "../../../assets/Tickets/images/search.png";

const FlightsButton = ({ onSearchData }) => {
  const oneWayState = useSelector((state) => state.oneWay.oneWayState);
  const selectedClass = useSelector((state) => state.class.selectedClass);
  const { dates } = useSelector((state) => state.dateSelection);
  const { selectedFromAirport, selectedToAirport } = useSelector(
    (state) => state.airports
  );
  const { t } = useTranslation();

  // TRANSLATE CURRENT STATE FROM OTHER LANGUAGES TO ELNGLISH
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

  const handleSearchClick = () => {
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

    onSearchData(filteredData);
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
