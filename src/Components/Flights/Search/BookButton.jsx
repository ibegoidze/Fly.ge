import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Arrows from "../../../assets/Flights/Search/twoArrows.png";

function BookButton({ flightsData, onBookButtonClick }) {
  const { t } = useTranslation();
  const passengerSum = useSelector(
    (state) => state.passengerSummary.passengerCountSummary
  );

  // TOTAL PRICE ACCORDING TO PASSENGER QUANTITY
  const calculatePrice = () => {
    const totalPrice = flightsData.price * passengerSum;
    return totalPrice;
  };

  return (
    <div
      className={`flex flex-row justify-between lg:flex-col lg:items-center lg:justify-center items-end mt-5 sm:mt-0 ${
        flightsData.way === "Bilateral" ? "pt-0 lg:pt-12" : "pt-0 lg:pt-5"
      }`}
    >
      <div className="PRICE hidden lg:flex text-lg sm:text-2xl font-semibold">
        {calculatePrice()}$
      </div>
      <div className="flex items-center gap-2 md:hidden text-sm">
        {flightsData.from} <img src={Arrows} alt="arrows" className="w-5 h-5" />{" "}
        {flightsData.to}
      </div>
      <button
        className="relative  hover:bg-blue-700 text-sm lg:text-md w-32 sm:w-44 lg:px-16 transition-all duration-300 py-1.5 sm:py-2 mb-2 sm:mt-4 rounded-md text-white font-semibold flex items-center justify-center gap-4 bg-primaryBlue"
        onClick={() => onBookButtonClick(flightsData)}
      >
        <span className="flex whitespace-nowrap">{t("Reservation")}</span>
      </button>
    </div>
  );
}

export default BookButton;
