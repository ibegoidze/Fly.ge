import BlueLine from "../../../assets/Flights/Search/LightLine.png";
import BlueDot from "../../../assets/Flights/Search/BlueDot.png";
import PlaneLogo from "../../../assets/Flights/Search/PlaneLogo.png";
import PegasusPic from "../../../assets/Flights/Search/Pegasus.png";
import DuckPic from "../../../assets/Flights/Search/Duck.png";

function TransferedFlight({ flightsData, isReturn }) {
  // FORMAT DATE
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    return `${day} ${month}`;
  };

  // CALCULATE TIME DIFFERENCE
  const calculateTimeDifference = (start, end) => {
    const startTime = new Date(`2024-01-01 ${start}`);
    const endTime = new Date(`2024-01-01 ${end}`);
    const difference = endTime.getTime() - startTime.getTime();
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes === 0) {
      return `${hours}hr`;
    } else {
      return `${hours}hr, ${minutes}`;
    }
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
        <div className="font-semibold text-gray-500">
          {formatDate(isReturn ? flightsData.return : flightsData.departure)}
        </div>
        <span className="text-xs font-medium text-gray-500">
          {isReturn ? "Return" : "Departure"}
        </span>
      </div>
      {/* TIME / CITY */}
      <div className="flex-none flex flex-col w-20 justify-center">
        <div className="font-semibold text-textDark">
          {isReturn ? flightsData.retStartTime : flightsData.depStartTime}
        </div>
        <div className="text-xs font-medium text-gray-500 flex gap-1">
          {isReturn ? flightsData.to : flightsData.from}
          <span>{` (${
            isReturn ? flightsData.toCityId : flightsData.fromCityId
          }) `}</span>
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
                {/* {flightsData.transferCity.length > 0
                  ? `${flightsData.transferCity.length} Transfer`
                  : "Direct"} */}
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
                  ? calculateTimeDifference(
                      flightsData.retStartTime,
                      flightsData.retEndTime
                    )
                  : calculateTimeDifference(
                      flightsData.depStartTime,
                      flightsData.depEndTime
                    )}
              </span>
              <img src={BlueDot} alt="blue line" />
              <span className="mt-9 absolute text-xs text-gray-400 font-medium">
                {isReturn
                  ? flightsData.retTransferCity[0]
                  : flightsData.depTransferCity[0]}
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
                {isReturn
                  ? flightsData.retTransferCity
                    ? flightsData.retTransferCity[1]
                    : "DIR"
                  : flightsData.depTransferCity
                  ? flightsData.depTransferCity[1]
                  : "DIR"}
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
          <div className="font-semibold text-textDark">
            {isReturn ? flightsData.retEndTime : flightsData.depEndTime}
          </div>
          <span className="text-xs font-medium text-gray-500 flex gap-1">
            {isReturn ? flightsData.from : flightsData.to}
            <span>{` (${
              isReturn ? flightsData.fromCityId : flightsData.toCityId
            }) `}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TransferedFlight;
