import TurkishAirlinesLogo from "../../../assets/Flights/Search/TurkishExtention.png";
import Circle from "../../../assets/Flights/Search/ExCircle.png";
import Line from "../../../assets/Flights/Search/ExLine.png";
import Clock from "../../../assets/Flights/Search/Clock.png";
import LongTime from "../../../assets/Flights/Search/LongTime.png";

import Luggage from "./Luggage";

function ExtentionDeparture({ flightsData }) {
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

    return hours === 0 && minutes === 0
      ? ""
      : hours === 0
      ? `${minutes} min`
      : minutes === 0
      ? `${hours} hr`
      : `${hours} hr, ${minutes}`;
  };

  const {
    departure,
    depStartTime,
    depEndTime,
    from,
    to,
    transfer,
    transferWay,
    depTransferCity,
    depFirstTransferStart,
    depFirstTransferEnd,
    depSecondTransferStart,
    depSecondTransferEnd,
    depTransferCityNames,
    toCityId,
  } = flightsData;

  return (
    <div className="ml-32 mb-5">
      {/* HEADER */}
      <div className="RETURN text-medium font-semibold mb-5 text-textDark">
        Departure
      </div>
      {/* ONE WAY */}
      <div className="DEPDETAILS1 flex">
        {/* DATE AND IMAGE ON THE LEFT */}
        <div className="AIRLINELOGO flex flex-col mr-14">
          <div className="font-medium text-gray-500 text-sm">
            {formatDate(departure)}
          </div>
          <div className="h-full flex w-20 items-center">
            <img src={TurkishAirlinesLogo} alt="" />
          </div>
        </div>
        {/* LINE */}
        <div className="LINE flex flex-col items-center gap-1 pt-1 pb-1">
          <img src={Circle} alt="" />
          <img src={Line} alt="" className="h-22 w-0.5" />
          <img src={Circle} alt="" />
        </div>
        {/* RIGHT SIDE */}
        <div className="TIMES flex flex-col justify-between ml-5 text-gray-500 font-medium">
          {/* DEP START TIME AND CITY */}
          <div className="flex items-center gap-2">
            <span className="text-textDark font-semibold">{depStartTime}</span>{" "}
            <span className="text-sm">
              {from} international airport {` (${flightsData.fromCityId})`}
            </span>
          </div>
          {/* TIME BETWEEN DEP START AND DEPEND OR FIRST TRANSFER */}
          <div className="text-xs flex items-center gap-5">
            {transferWay === "departure" || transferWay === "both"
              ? calculateTimeDifference(depStartTime, depFirstTransferStart)
              : calculateTimeDifference(depStartTime, depEndTime)}
            <Luggage flightsData={flightsData} small={true} />
          </div>
          {/* FIRST TRANSFER END*/}
          <div className="flex items-center gap-2">
            {transferWay === "departure" || transferWay === "both" ? (
              <span className="text-textDark font-semibold">
                {depFirstTransferStart}
              </span>
            ) : (
              <span className="text-textDark font-semibold">{depEndTime}</span>
            )}{" "}
            <span className="text-sm">
              {transferWay === "departure" || transferWay === "both"
                ? depTransferCityNames[0]
                : to}{" "}
              international airport
              {transferWay === "departure" || transferWay === "both" ? (
                <span className="text-sm">{` (${depTransferCity[0]})`}</span>
              ) : (
                <span className="text-sm">{` (${toCityId})`}</span>
              )}
            </span>
          </div>
        </div>
      </div>
      {/* TRANSFER TIME IN ORANGE */}
      <div className="DEPTRANSFERTIME ml-28">
        {transferWay === "departure" || transferWay === "both" ? (
          <div className="bg-orange-100 h-10 flex items-center pl-5 rounded-sm my-5">
            <div className="flex gap-1 text-sm items-center font-medium text-orangeBrown">
              <img src={Clock} alt="" className="mr-3" />
              {calculateTimeDifference(
                depFirstTransferStart,
                depFirstTransferEnd
              )}
              <span>stop,</span>
              {depTransferCityNames[0]} <span>{`(${depTransferCity[0]})`}</span>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {/* FIRST TRANSFER  */}
      <div className="DEPEDETAILS2">
        {" "}
        {transferWay === "departure" || transferWay === "both" ? (
          <div className="DEPDETAILS1 flex">
            {/* AIRLINE LOGO */}
            <div className="AIRLINELOGO w-20 flex flex-col justify-center mr-14">
              <img src={TurkishAirlinesLogo} alt="" />
            </div>
            {/* LINE */}
            <div className="LINE flex flex-col items-center gap-1 pt-1 pb-1">
              <img src={Circle} alt="" />
              <img src={Line} alt="" className="h-22 w-0.5" />
              <img src={Circle} alt="" />
            </div>
            {/* FIRST TRANSFER START TIME AND CITY */}
            <div className="TIMES flex flex-col justify-between ml-5 text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-textDark font-semibold">
                  {depFirstTransferEnd}
                </span>{" "}
                <span className="text-sm">
                  {depTransferCityNames[0]} international airport{" "}
                  {`(${depTransferCity[0]})`}
                </span>
              </div>
              {/* TIME BETWEEN FIRST TRANSFER START AND END */}
              <div className="flex items-center gap-5 text-xs">
                {transfer === "1"
                  ? calculateTimeDifference(depFirstTransferEnd, depEndTime)
                  : calculateTimeDifference(
                      depFirstTransferEnd,
                      depSecondTransferStart
                    )}
                <Luggage flightsData={flightsData} small={true} />
              </div>
              {/* FIRST TRANSFER END */}
              <div>
                {transferWay === "departure" ||
                (transferWay === "both" && transfer === "1") ? (
                  <div className="flex items-center gap-2">
                    <span className="text-textDark font-semibold">
                      {depEndTime}
                    </span>{" "}
                    <span className="text-sm">
                      {to} airport {`(${toCityId})`}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-textDark font-semibold">
                      {depSecondTransferStart}
                    </span>{" "}
                    <span className="text-sm">
                      {depTransferCityNames[1]} international airport{" "}
                      {`(${depTransferCity[1]})`}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {/* SECOND TRANSFER */}
      <div className="DEPEDETAILS3">
        {/* TRANSFER TIME IN ORANGE */}
        {transferWay === "departure" ||
        (transferWay === "both" && transfer === "2") ||
        transfer === "3" ||
        transfer === "4" ? (
          <div className="flex items-center gap-2 w-full">
            <div className="bg-orange-100 h-10 flex items-center pl-5 rounded-sm my-5 ml-28 w-full">
              <div className="flex gap-1 text-sm items-center font-medium text-orangeBrown">
                <img src={Clock} alt="" className="mr-3" />
                {calculateTimeDifference(
                  depSecondTransferStart,
                  depSecondTransferEnd
                )}
                <span>stop,</span>
                {depTransferCityNames[1]}{" "}
                <span>{`(${depTransferCity[1]})`}</span>
              </div>
            </div>
            {/* CHECK IF TRANSFER TAKES MORE THAN 1 HOUR AND DISPLAY LONG TRANSFER */}
            {calculateTimeDifference(
              depSecondTransferStart,
              depSecondTransferEnd
            ).includes("1 hr") ? (
              <div className="bg-red-100 h-10 flex items-center w-1/4 rounded-sm justify-center gap-2 text-longRed font-medium text-sm">
                <img src={LongTime} alt="" />
                <span>Long</span>
              </div>
            ) : null}
          </div>
        ) : (
          <div></div>
        )}{" "}
        {transferWay === "departure" ||
        (transferWay === "both" && transfer === "2") ||
        transfer === "3" ||
        transfer === "4" ? (
          <div className="DEPDETAILS1 flex">
            {/* AIRLINES LOGO */}
            <div className="AIRLINELOGO w-20 flex flex-col justify-center mr-14">
              <img src={TurkishAirlinesLogo} alt="" />
            </div>
            {/* LINE */}
            <div className="LINE flex flex-col items-center gap-1 pt-1 pb-1">
              <img src={Circle} alt="" />
              <img src={Line} alt="" className="h-22 w-0.5" />
              <img src={Circle} alt="" />
            </div>
            {/* SECOND TRANSFER START */}
            <div className="TIMES flex flex-col justify-between ml-5 text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-textDark font-semibold">
                  {depSecondTransferEnd}
                </span>{" "}
                <span className="text-sm">
                  {depTransferCityNames[1]} international airport{" "}
                  <span>{`(${depTransferCity[1]})`}</span>
                </span>
              </div>
              {/* TIME BETWEEN SECOND TRANSFER */}
              <div className="flex items-center gap-5 text-xs">
                {calculateTimeDifference(depSecondTransferEnd, depEndTime)}
                <Luggage flightsData={flightsData} small={true} />
              </div>
              {/* SECOND TRANSFER END */}
              <div className="flex items-center gap-2">
                <span className="text-textDark font-semibold">
                  {depEndTime}
                </span>{" "}
                <span className="text-sm">
                  {to} international airport <span>{`(${toCityId})`}</span>
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default ExtentionDeparture;
