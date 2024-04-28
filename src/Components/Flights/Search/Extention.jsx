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
      <div className="DESTINATION"></div>
      <ExtentionDeparture flightsData={flightsData} />
      <div>
        <img src={midLine} alt="" />
        <div className="flex gap-5 ml-64 my-3">
          <span className="ml-1">
            <img src={Pin} alt="" />
          </span>
          <span>{flightsData.to}</span>
          <img src={Bed} alt="" />
          <span>
            {calculateNights(flightsData.departure, flightsData.return)}
          </span>
          <span>nights</span>
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
          <span>{flightsData.from}</span>
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
