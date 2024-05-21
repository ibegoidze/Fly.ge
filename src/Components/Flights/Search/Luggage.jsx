import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function Luggage({ flightsData, small }) {
  const { t } = useTranslation();
  const passengerSum = useSelector(
    (state) => state.passengerSummary.passengerCountSummary
  );

  return (
    <div className={`flex gap-1 sm:gap-2`}>
      <div
        className={`rounded-full bg-gray-50 border px-${small ? "2" : "4"} py-${
          small ? "1" : "1.5"
        } font-medium text-${small ? "xs" : "sm"} text-gray-500 cursor-pointer`}
      >
        {t(flightsData.class)}
      </div>
      <div
        className={`rounded-full bg-gray-50 border px-${small ? "2" : "4"} py-${
          small ? "1" : "1.5"
        } font-medium text-${small ? "xs" : "sm"} text-gray-500 cursor-pointer`}
      >
        {passengerSum} {passengerSum > 1 ? t("Passenger") : t("Passenger")}
      </div>
      <div
        className={`rounded-full bg-gray-50 border px-${small ? "2" : "4"} py-${
          small ? "1" : "1.5"
        } font-medium text-${
          small ? "xs" : "sm"
        } text-gray-500 cursor-pointer `}
      >
        {t("luggage")}
      </div>
    </div>
  );
}

export default Luggage;
