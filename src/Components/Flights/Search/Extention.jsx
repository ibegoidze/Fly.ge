import ExtentionDeparture from "./ExtentionDeparture";
import ExtentionReturn from "./ExtentionRreturn";

import midLine from "../../../assets/Flights/Search/midLIne.png";
import Bed from "../../../assets/Flights/Search/Bed.png";
import Pin from "../../../assets/Flights/Search/Pin.png";
import ExtentionLoan from "./ExtentionLoan";
import { useSelector } from "react-redux";

function Extention({ flightsData }) {
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
        <div className="flex gap-4 ml-64 my-3">
          <span className="ml-1">
            <img src={Pin} alt="" />
          </span>
          <span className=" text-textDark font-medium">
            {flightsData.to} {`(${flightsData.toCityId})`}
          </span>
          <img src={Bed} alt="" />
          <span className="text-sm text-gray-500 flex items-center font-medium">
            {calculateNights(flightsData.departure, flightsData.return)} nights
            stop
          </span>
        </div>
        <img src={midLine} alt="" />
      </div>
      <ExtentionReturn flightsData={flightsData} />
      <div>
        <img src={midLine} alt="" />
        <div className="flex gap-5 ml-64 my-3">
          <span className="ml-1">
            <img src={Pin} alt="" />
          </span>
          <span className="font-medium">
            {flightsData.from} {`(${flightsData.fromCityId})`}
          </span>
        </div>
        <img src={midLine} alt="" />
      </div>
      <div className="LOAN mx-4 flex justify-between items-end">
        <ExtentionLoan />
        <div>
          <button className="relative bg-blue-500 hover:bg-blue-700 transition-all duration-300 text-md px-16 h-12 py-2 mt-8 my-4 rounded-md text-white font-semibold flex items-center justify-center gap-4 min-w-14">
            <span className="flex whitespace-nowrap">
              Book {calculatePrice()}$
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Extention;
