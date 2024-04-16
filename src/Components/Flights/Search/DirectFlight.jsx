import BlueLine from "../../../assets/Flights/Search/LightLine.png";
import BlueDot from "../../../assets/Flights/Search/BlueDot.png";
import PlaneLogo from "../../../assets/Flights/Search/PlaneLogo.png";
import PegasusPic from "../../../assets/Flights/Search/Pegasus.png";
import DuckPic from "../../../assets/Flights/Search/Duck.png";

function DirectFlight({ flightsData, isReturn }) {
  // FORMAT DATE FROM NUMBERS TO DAY AND MONTH NAME
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long" };
    return date.toLocaleDateString("en-US", options);
  };

  // RENDER TRANSFER CITY ON BLUE POINTS
  const transferCity = () => {
    if (flightsData.transferWay === "departure" && isReturn === false) {
      return flightsData.transferCity ? flightsData.transferCity[0] : "DIR";
    } else if (flightsData.transferWay === "return" && isReturn === true) {
      return flightsData.transferCity ? flightsData.transferCity[0] : "DIR";
    }
  };

  // CONDITIONALLY SELECT IMAGE BASED ON FLIGHT DATA AND ISRETURN PROP
  const selectImage = () => {
    if (!isReturn) {
      return flightsData.airlines.departure === "Pegasus"
        ? DuckPic
        : PegasusPic;
    } else {
      return flightsData.airlines.return === "Pegasus" ? DuckPic : PegasusPic;
    }
  };

  return (
    <div className="flex justify-between items-start mb-7 px-5">
      {/* IMAGE DIV */}
      <div className="flex-none hidden sm:flex">
        <img src={selectImage()} alt={isReturn ? "duck" : "pegasus"} />
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
          {isReturn ? "09:30" : "07:00"}
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
                {flightsData.transfer === "1" &&
                ((flightsData.transferWay === "departure" && !isReturn) ||
                  (flightsData.transferWay === "return" && isReturn))
                  ? `${flightsData.transfer} Transfer`
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
                3 hr, 20
              </span>
              <img src={BlueDot} alt="blue line" />
              <span className="mt-9 absolute text-xs text-gray-400 font-medium">
                {transferCity() ? transferCity() : "DIR"}
              </span>
            </div>
            <img
              src={BlueLine}
              className="h-0.5 w-20 relative"
              style={{ bottom: "5px" }}
              alt="blue line"
            />
            <img src={BlueDot} alt="blue line" />
          </div>
        </div>
        {/* TIME / CITY */}
        <div className="flex flex-col justify-center w-20">
          <div className="font-medium text-textDark">
            {isReturn ? "11:00" : "09:10"}
          </div>
          <span className="text-sm font-medium text-gray-500">
            {isReturn ? flightsData.from : flightsData.to}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DirectFlight;
