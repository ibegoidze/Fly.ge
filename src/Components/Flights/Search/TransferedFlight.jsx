import BlueLine from "../../../assets/Flights/Search/LightLine.png";
import BlueDot from "../../../assets/Flights/Search/BlueDot.png";
import PlaneLogo from "../../../assets/Flights/Search/PlaneLogo.png";
import PegasusPic from "../../../assets/Flights/Search/Pegasus.png";
import DuckPic from "../../../assets/Flights/Search/Duck.png";

import { useTranslation } from "react-i18next";
import { formatDate, calculateTimeDifference } from "../../../utility";

function TransferedFlight({ flightsData, isReturn }) {
  const { t } = useTranslation();

  // FUNCTION TO RENDER TRANSFER INFO
  const renderTransferInfo = () => {
    const transferCity = isReturn ? retTransferCity : depTransferCity;
    return transferCity ? (
      <div className="flex gap-1">
        {transferCity.length}{" "}
        <span className="hidden xs:flex">{t("stop")}</span>
      </div>
    ) : (
      "Direct"
    );
  };

  const {
    departure,
    retStartTime,
    retEndTime,
    depStartTime,
    depEndTime,
    to,
    from,
    toCityId,
    fromCityId,
    retTransferCity,
    depTransferCity,
  } = flightsData;

  return (
    <div className="flex justify-between items-start mb-7 md:px-5">
      {/* IMAGE DIV */}
      <div className="flex-none hidden md:flex">
        <img
          src={isReturn ? DuckPic : PegasusPic}
          alt={isReturn ? "duck" : "pegasus"}
        />
      </div>
      {/* DATE */}
      <div className="hidden flex-none sm:flex w-20 sm:w-32  flex-col justify-center">
        <div className="font-semibold text-xs sm:text-base text-gray-500">
          {formatDate(isReturn ? flightsData.return : departure)}
        </div>
        <span className="text-xs font-medium text-gray-500">
          {isReturn ? t("Return") : t("Departure")}
        </span>
      </div>
      {/* TIME / CITY */}
      <div className="flex-none  flex flex-col w-20 sm:w-32 justify-center">
        <div className="font-semibold text-textDark">
          {isReturn ? retStartTime : depStartTime}
        </div>
        <div className="text-xxs sm:text-xs font-medium text-gray-500 flex gap-1">
          {isReturn ? t(to) : t(from)}
          <span>{` (${isReturn ? toCityId : fromCityId}) `}</span>
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
              <span className="absolute ml-6 text-xxs sm:text-xs mt-0.5 text-gray-500 font-medium">
                {renderTransferInfo()}
              </span>
            </div>
            <img
              src={BlueLine}
              className="h-0.5 w-6 xs:w-20 relative"
              style={{ bottom: "5px" }}
              alt="blue line"
            />
            <div className="flex items-center justify-center">
              <span className="mb-8 absolute text-xs text-gray-500 font-medium">
                {isReturn
                  ? calculateTimeDifference(retStartTime, retEndTime)
                  : calculateTimeDifference(depStartTime, depEndTime)}
              </span>
              <img src={BlueDot} alt="blue line" />
              <span className="mt-9 absolute text-xxs sm:text-xs text-gray-400 font-medium">
                {isReturn ? retTransferCity[0] : depTransferCity[0]}
              </span>
            </div>
            <img
              src={BlueLine}
              className="h-0.5 w-5 xs:w-8 relative"
              style={{ bottom: "5px" }}
              alt="blue line"
            />
            <div className="flex items-center justify-center">
              <img src={BlueDot} alt="blue line" />
              <span className="mt-9 absolute text-xxs sm:text-xs text-gray-400 font-medium">
                {isReturn
                  ? retTransferCity
                    ? retTransferCity[1]
                    : "DIR"
                  : depTransferCity
                  ? depTransferCity[1]
                  : "DIR"}
              </span>
            </div>
            <img
              src={BlueLine}
              className="h-0.5 w-6 xs:w-8 relative"
              style={{ bottom: "5px" }}
              alt="blue line"
            />
            <img src={BlueDot} alt="blue line" />
          </div>
        </div>
      </div>
      {/* TIME / CITY */}
      <div className="flex flex-col justify-center w-20 sm:w-32">
        <div className="font-semibold text-textDark">
          {isReturn ? retEndTime : depEndTime}
        </div>
        <span className="text-xxs sm:text-xs font-medium text-gray-500 flex gap-1">
          {isReturn ? t(from) : t(to)}
          <span>{` (${isReturn ? fromCityId : toCityId}) `}</span>
        </span>
      </div>
    </div>
  );
}

export default TransferedFlight;
