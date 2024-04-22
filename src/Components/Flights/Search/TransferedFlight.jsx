import BlueLine from "../../../assets/Flights/Search/LightLine.png";
import BlueDot from "../../../assets/Flights/Search/BlueDot.png";
import PlaneLogo from "../../../assets/Flights/Search/PlaneLogo.png";
import PegasusPic from "../../../assets/Flights/Search/Pegasus.png";
import DuckPic from "../../../assets/Flights/Search/Duck.png";

function TransferedFlight({ flightsData, isReturn }) {
  // FORMAT DATE FROM NUMBERS TO DAY AND MONTH NAME
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long" };
    return date.toLocaleDateString("en-US", options);
  };

  // FUNCTION TO FORMAT TIME FROM NUMBERS TO "hh:mm" FORMAT
  const formatTime = (hour) => {
    const integerPart = Math.floor(hour);
    const formattedHour =
      integerPart < 10 ? `0${integerPart}` : `${integerPart}`;
    const decimalMinute = Math.round((hour - integerPart) * 10);
    const formattedMinute =
      decimalMinute === 0 ? "00" : `${decimalMinute}0`.padStart(2, "0");
    return `${formattedHour}:${formattedMinute}`;
  };

  return (
    <div className="flex justify-between items-start mb-7 px-5">
      {/* IMAGE DIV */}
      <div className="flex-none hidden sm:flex">
        <img
          src={isReturn ? DuckPic : PegasusPic}
          alt={isReturn ? "duck" : "pegasus"}
        />
      </div>
      {/* DATE */}
      <div className="flex-none flex w-20 flex-col justify-center">
        <div className="font-medium text-gray-500">
          {formatDate(isReturn ? flightsData.return : flightsData.departure)}
        </div>
        <span className="text-sm font-medium text-gray-500">
          {isReturn ? "Return" : "Departure"}
        </span>
      </div>
      {/* TIME / CITY */}
      <div className="flex-none flex flex-col w-20 justify-center">
        <div className="font-medium text-textDark">
          {isReturn
            ? formatTime(flightsData.retStartTime)
            : formatTime(flightsData.depStartTime)}
        </div>
        <div className="text-sm font-medium text-gray-500">
          {isReturn ? flightsData.to : flightsData.from}
        </div>
      </div>
      {/* FLIGHT LINE */}
      <div className="flex  justify-start flex-none gap-2">
        <div className="DEPARTURE ">
          <div className="flex items-end justify-center ">
            <div>
              <img
                src={PlaneLogo}
                alt="plane"
                style={{
                  position: "relative",
                  top: "2px",
                }}
              />
              <span className="absolute ml-6 text-xs mt-0.5 text-gray-500 font-medium">
                {flightsData.transferCity.length > 0
                  ? `${flightsData.transferCity.length} Transfer`
                  : "Direct"}
              </span>
            </div>
            <img
              src={BlueLine}
              className="h-0.5 w-20 relative"
              style={{ bottom: "5px" }}
              alt="blue line"
            />
            <div className="flex items-center justify-center">
              <span className="mb-8 absolute text-xs text-gray-500 font-medium">
                {isReturn
                  ? flightsData.retFlightTime
                  : flightsData.depFlightTime}
              </span>

              <img src={BlueDot} alt="blue line" />
              <span className="mt-9 absolute text-xs text-gray-400 font-medium">
                {flightsData.transferCity ? flightsData.transferCity[0] : "TUR"}
              </span>
            </div>
            <img
              src={BlueLine}
              className="h-0.5 w-7 relative"
              style={{ bottom: "5px" }}
              alt="blue line"
            />
            <div className="flex items-center justify-center">
              <img src={BlueDot} alt="blue line" />
              <span className="mt-9 absolute text-xs text-gray-400 font-medium">
                {flightsData.transferCity ? flightsData.transferCity[1] : "DIR"}
              </span>
            </div>
            <img
              src={BlueLine}
              className="h-0.5 w-10 relative"
              style={{ bottom: "5px" }}
              alt="blue line"
            />
            <img src={BlueDot} alt="blue line" />
          </div>
        </div>
        {/* TIME / CITY */}
        <div className="flex flex-col justify-center w-20">
          <div className="font-medium text-textDark">
            {isReturn
              ? formatTime(flightsData.retEndTime)
              : formatTime(flightsData.depEndTime)}
          </div>
          <span className="text-sm font-medium text-gray-500">
            {isReturn ? flightsData.from : flightsData.to}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TransferedFlight;
