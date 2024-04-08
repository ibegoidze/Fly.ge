import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import SearchIcon from "../../../assets/Tickets/images/search.png";

function FlightsButton() {
  // TAB 1 STATES
  const oneWayState = useSelector((state) => state.oneWay.oneWayState);
  const passengers = useSelector((state) => state.passengers.passengers);
  const selectedClass = useSelector((state) => state.class.selectedClass);
  const { dates } = useSelector((state) => state.dateSelection);
  const { selectedFromAirport, selectedToAirport } = useSelector(
    (state) => state.airports
  );
  const { t } = useTranslation();

  const stateMessage =
    oneWayState === "ცალმხრივი"
      ? "Bilateral"
      : oneWayState === "Einseitig" || oneWayState === "ორმხრივი"
      ? "Unilateral"
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
    const passengersSummary = Object.entries(passengers)
      .filter(([_, data]) => data.count > 0)
      .map(([type, data]) => `${type}: ${data.count}`)
      .join(", ");
    alert(
      `Way: ${stateMessage}\nPassengers: ${passengersSummary}\nClass: ${classMessage}\nFrom: ${
        selectedFromAirport ? selectedFromAirport.name : "(not chosen)"
      } to ${
        selectedToAirport ? selectedToAirport.name : "(not chosen)"
      }\n Departure: ${dates.departure}\n Return: ${dates.return} `
    );
  };
  return (
    <div>
      {" "}
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
}

export default FlightsButton;
