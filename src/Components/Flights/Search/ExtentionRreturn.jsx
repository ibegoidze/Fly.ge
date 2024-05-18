import DuckLines from "../../../assets/Flights/Search/DuckLines.png";
import Circle from "../../../assets/Flights/Search/ExCircle.png";
import Line from "../../../assets/Flights/Search/ExLine.png";
import Clock from "../../../assets/Flights/Search/Clock.png";
import LongTime from "../../../assets/Flights/Search/LongTime.png";

import Luggage from "./Luggage";

function ExtentionDetails({ flightsData }) {
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
    retStartTime,
    retEndTime,
    from,
    to,
    transfer,
    retTransferCity,
    transferWay,
    retFirstTransferEnd,
    retFirstTransferStart,
    retSecondTransferEnd,
    retSecondTransferStart,
    retTransferCityNames,
    fromCityId,
  } = flightsData;

  return (
    <div className="ml-32 my-5">
      {/* HEADER */}
      <div className="RETURN text-medium font-semibold mb-5 text-textDark">
        Return
      </div>
      {/* ONE WAY */}
      <div className="RETURN DETAILS flex">
        {/* DATE AND IMAGE ON THE LEFT */}
        <div className="AIRLINELOGO flex flex-col mr-14">
          <div className="font-medium text-gray-500 text-sm">
            {formatDate(flightsData.return)}
          </div>
          <div className="h-full flex items-center w-20">
            <img src={DuckLines} alt="" />
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
          {/* RETURN START TIME AND CITY */}
          <div className="flex items-center gap-2">
            <span className="text-textDark font-semibold">{retStartTime}</span>{" "}
            <span className="text-sm">
              {to} international airport {` (${flightsData.toCityId})`}
            </span>
          </div>
          {/* TIME BETWEEN RET START AND RETEND OR FIRST TRANSFER */}
          <div className="text-xs flex items-center gap-5">
            {transferWay === "return" || transferWay === "both"
              ? calculateTimeDifference(retStartTime, retFirstTransferStart)
              : calculateTimeDifference(retStartTime, retEndTime)}
            <Luggage flightsData={flightsData} small={true} />
          </div>
          {/* RETEND OR FIRST TRANSFER */}
          <div>
            {transferWay === "return" || transferWay === "both" ? (
              <span className="text-textDark font-semibold">
                {retFirstTransferStart}
              </span>
            ) : (
              <span className="text-textDark font-semibold">{retEndTime}</span>
            )}{" "}
            <span className="text-sm">
              {transferWay === "return" || transferWay === "both"
                ? flightsData.retTransferCityNames[0]
                : from}{" "}
              international airport
              {transferWay === "return" || transferWay === "both" ? (
                <span className="text-sm">{` (${retTransferCity[0]})`}</span>
              ) : (
                <span className="text-sm">{` (${flightsData.fromCityId})`}</span>
              )}
            </span>
          </div>
        </div>
      </div>
      {/* TRANSFER TIME IN ORANGE */}
      <div className="DEPTRANSFERTIME ml-28">
        {transferWay === "return" || transferWay === "both" ? (
          <div className="bg-orange-100 h-10 flex items-center pl-5 rounded-sm my-5">
            <div className="flex gap-1 text-sm items-center font-medium text-orangeBrown">
              <img src={Clock} alt="" className="mr-3" />
              {calculateTimeDifference(
                retFirstTransferStart,
                retFirstTransferEnd
              )}
              <span>stop,</span>
              {retTransferCityNames[0]} <span>{`(${retTransferCity[0]})`}</span>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {/* FIRST TRANSFER */}
      <div className="DEPEDETAILS2">
        {transferWay === "return" || transferWay === "both" ? (
          <div className="DEPDETAILS1 flex">
            {/* AIRLINE LOGO */}
            <div className="AIRLINELOGO flex flex-col w-20 justify-center mr-14">
              <img src={DuckLines} alt="" />
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
                  {retFirstTransferEnd}
                </span>{" "}
                <span className="text-sm">
                  {retTransferCityNames[0]} international airport{" "}
                  {`(${retTransferCity[0]})`}
                </span>
              </div>
              {/* TIME BETWEEN FIRST TRANSFER START AND END */}
              <div className="flex items-center gap-5 text-xs">
                {retTransferCity
                  ? calculateTimeDifference(retFirstTransferEnd, retEndTime)
                  : calculateTimeDifference(
                      retFirstTransferEnd,
                      retSecondTransferStart
                    )}
                <Luggage flightsData={flightsData} small={true} />
              </div>
              {/* FIRST TRANSFER END */}
              <div>
                {transferWay === "return" ||
                (transferWay === "both" && transfer === "1") ? (
                  <div className="flex items-center gap-2">
                    <span className="text-textDark font-semibold">
                      {retEndTime}
                    </span>{" "}
                    <span className="text-sm">
                      {from} airport {`(${fromCityId})`}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-textDark font-semibold">
                      {retSecondTransferStart
                        ? retSecondTransferStart
                        : retEndTime}
                    </span>{" "}
                    <span className="text-sm">
                      {retTransferCityNames[1] ? retTransferCityNames[1] : to}{" "}
                      international airport{" "}
                      {retTransferCity[1]
                        ? `(${retTransferCity[1]})`
                        : `(${fromCityId})`}
                      qqq
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
      {/* SECOND TRANSFER*/}
      <div className="DEPEDETAILS3">
        {retSecondTransferStart ? (
          <div className="flex items-center gap-2 w-full">
            <div className="bg-orange-100 h-10 flex items-center pl-5 rounded-sm my-5 ml-28 w-full">
              <div className="flex gap-1 text-sm items-center font-medium text-orangeBrown">
                <img src={Clock} alt="" className="mr-3" />
                {calculateTimeDifference(
                  retSecondTransferStart,
                  retSecondTransferEnd
                )}
                <span>stop,</span>
                {retTransferCityNames[1]}{" "}
                <span>{`(${retTransferCity[1]})`}</span>
              </div>
            </div>
            {/* CHECK IF TRANSFER TAKES MORE THAN 1 HOUR AND DISPLAY LONG TRANSFER */}
            {calculateTimeDifference(
              retSecondTransferStart,
              retSecondTransferEnd
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
        {retSecondTransferStart ? (
          <div className="DEPDETAILS1 flex">
            {/* AIRLINES LOGO */}
            <div className="AIRLINELOGO flex flex-col w-20 justify-center mr-14">
              <img src={DuckLines} alt="" />
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
                  {retSecondTransferEnd}
                </span>{" "}
                <span className="text-sm">
                  {retTransferCityNames[1]} international airport{" "}
                  <span>{`(${retTransferCity[1]})`}</span>
                </span>
              </div>
              {/* TIME BETWEEN SECOND TRANSFER */}
              <div className="flex items-center gap-5 text-xs">
                {calculateTimeDifference(retSecondTransferEnd, retEndTime)}{" "}
                <Luggage flightsData={flightsData} small={true} />
              </div>
              {/* SECOND TRANSFER END */}
              <div className="flex items-center gap-2">
                <span className="text-textDark font-semibold">
                  {retEndTime}
                </span>{" "}
                <span className="text-sm">
                  {from} international airport <span>{`(${fromCityId})`}</span>
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

export default ExtentionDetails;
