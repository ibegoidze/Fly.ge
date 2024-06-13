import ExtentionDeparture from "./ExtentionDeparture";
import ExtentionReturn from "./ExtentionRreturn";
import ExtentionLoan from "./ExtentionLoan";

import midLine from "../../../assets/Flights/Search/midLIne.png";
import Bed from "../../../assets/Flights/Search/Bed.png";
import Pin from "../../../assets/Flights/Search/Pin.png";

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function Extention({ flightsData, onBookButtonClick }) {
  const { t } = useTranslation();
  // CALCULATE NIGHTS BETWEEN DATES
  const calculateNights = (startDateStr, endDateStr) =>
    Math.floor(
      (new Date(endDateStr) - new Date(startDateStr)) / (1000 * 3600 * 24)
    );
  const passengerSum = useSelector(
    (state) => state.passengerSummary.passengerCountSummary
  );

  // TOTAL PRICE ACCORDING TO PASSENGER QUANTITY
  const calculatePrice = () => {
    const totalPrice = flightsData.price * passengerSum;
    return totalPrice;
  };
  return (
    <div>
      <ExtentionDeparture flightsData={flightsData} />
      <div>
        <img src={midLine} alt="" />
        <div className="flex gap-4 sm:ml-64 my-3 items-center">
          <span className="ml-1">
            <img src={Pin} alt="" />
          </span>
          <span className=" text-textDark font-medium text-sm sm:text-md">
            {t(flightsData.to)} {`(${flightsData.toCityId})`}
          </span>
          {flightsData.way === "Bilateral" ? (
            <div className="flex gap-3">
              <img src={Bed} alt="" />
              <span className="text-sm text-gray-500 flex items-center font-medium">
                {calculateNights(flightsData.departure, flightsData.return)}{" "}
                {t("nights stop")}
              </span>
            </div>
          ) : (
            <></>
          )}
        </div>
        <img src={midLine} alt="" />
      </div>
      {flightsData.way === "Bilateral" ? (
        <ExtentionReturn flightsData={flightsData} />
      ) : (
        <></>
      )}
      {flightsData.way === "Bilateral" ? (
        <div>
          <img src={midLine} alt="" />
          <div className="flex gap-5 sm:ml-64 my-3 items-center">
            <span className="ml-1">
              <img src={Pin} alt="" />
            </span>
            <span className="font-medium text-sm sm:text-md">
              {t(flightsData.from)} {`(${flightsData.fromCityId})`}
            </span>
          </div>
          <img src={midLine} alt="" />
        </div>
      ) : (
        <></>
      )}
      <div className="LOAN sm:mx-4 flex flex-col sm:flex-row sm:justify-between sm:items-end">
        <ExtentionLoan />
        <div>
          <button
            onClick={() => onBookButtonClick(flightsData)}
            className="relative bg-blue-500 hover:bg-blue-700 transition-all duration-300 w-full text-md px-14 sm:h-10 py-2 sm:mt-8 sm:my-4 rounded-md text-white font-semibold flex items-center justify-center gap-4 min-w-14"
          >
            <span className="flex whitespace-nowrap">
              {t("Reservation")} {calculatePrice()}$
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Extention;
