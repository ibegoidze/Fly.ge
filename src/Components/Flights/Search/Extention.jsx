import TurkishAirlinesLogo from "../../../assets/Flights/Search/TurkishExtention.png";
import Circle from "../../../assets/Flights/Search/ExCircle.png";
import Line from "../../../assets/Flights/Search/ExLine.png";

function Extention({ flightsData }) {
  // FORMAT DATE
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long" };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div>
      <div className="DEPARTURE">
        {/* .................................... */}
        <div className="GAMGZAVREBA">Departure</div>
        <div className="DEPDETAILS1 flex">
          {/*  */}
          <div className="AIRLINELOGO flex flex-col">
            <div>{formatDate(flightsData.departure)}</div>
            <img src={TurkishAirlinesLogo} alt="" />
          </div>
          {/*  */}
          <div className="LINE flex flex-col items-center gap-1">
            <img src={Circle} alt="" />
            <img src={Line} alt="" className="h-32 w-0.5" />
            <img src={Circle} alt="" />
          </div>
          {/*  */}
          <div className="TIMES flex flex-col justify-between">
            <div>
              {flightsData.depStartTime}:00 {flightsData.from} international
              airport
            </div>
            <div>{flightsData.depFlightTime}</div>
            <div>
              {flightsData.depEndTime}:00 {flightsData.to} international airport
            </div>
          </div>
        </div>
        {/* .................................... */}
        <div className="DEPTRANSFERTIME"></div>
        <div className="DEPEDETAILS2"></div>
      </div>
      <div className="DESTINATION"></div>
      <div className="RETURN"></div>
      <div className="HOME"></div>
      <div className="LOAN"></div>
    </div>
  );
}

export default Extention;
