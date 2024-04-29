import ExtentionDeparture from "./ExtentionDeparture";
import ExtentionReturn from "./ExtentionRreturn";

import midLine from "../../../assets/Flights/Search/midLIne.png";
import Bed from "../../../assets/Flights/Search/Bed.png";
import Pin from "../../../assets/Flights/Search/Pin.png";

function Extention({ flightsData }) {
  // CALCULATE NIGHTS BETWEEN DATES
  const calculateNights = (startDateStr, endDateStr) =>
    Math.floor(
      (new Date(endDateStr) - new Date(startDateStr)) / (1000 * 3600 * 24)
    );

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
      <div className="RETURN"></div>
      <div className="HOME"></div>
      <div className="LOAN"></div>
    </div>
  );
}

export default Extention;
