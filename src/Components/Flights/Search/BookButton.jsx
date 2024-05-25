import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

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
      className={`flex flex-col items-center justify-between ${
        flightsData.way === "Bilateral" ? "md:p-4 md:pt-12" : "p-2 md:pt-5"
      }`}
    >
      <div className="PRICE text-lg sm:text-2xl font-semibold">
        {calculatePrice()}$
      </div>
      <button
        className="relative  hover:bg-blue-700 text-md w-full sm:w-4/5 lg:px-16 transition-all duration-300 py-1.5 sm:py-2 mt-2 sm:mt-4 rounded-md text-white font-semibold flex items-center justify-center gap-4 bg-primaryBlue"
        onClick={() => onBookButtonClick(flightsData)}
      >
        <span className="flex whitespace-nowrap">{t("Reservation")}</span>
      </button>
    </div>
  );
}

export default BookButton;
