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
    transferCity,
    transferWay,
    firstTransferEnd,
    firstTransferStart,
    secondTransferEnd,
    secondTransferStart,
    transferCityNames,
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
            {transferWay === "return"
              ? calculateTimeDifference(retStartTime, firstTransferStart)
              : calculateTimeDifference(retStartTime, retEndTime)}
            <Luggage flightsData={flightsData} small={true} />
          </div>
          {/* RETEND OR FIRST TRANSFER */}
          <div>
            {transferWay === "return" ? (
              <span className="text-textDark font-semibold">
                {firstTransferStart}
              </span>
            ) : (
              <span className="text-textDark font-semibold">{retEndTime}</span>
            )}{" "}
            <span className="text-sm">
              {transferWay === "return"
                ? flightsData.transferCityNames[0]
                : from}{" "}
              international airport
              {transferWay === "return" ? (
                <span className="text-sm">{` (${transferCity[0]})`}</span>
              ) : (
                <span className="text-sm">{` (${flightsData.fromCityId})`}</span>
              )}
            </span>
          </div>
        </div>
      </div>
      {/* TRANSFER TIME IN ORANGE */}
      <div className="DEPTRANSFERTIME ml-28">
        {transferWay === "return" ? (
          <div className="bg-orange-100 h-10 flex items-center pl-5 rounded-sm my-5">
            <div className="flex gap-1 text-sm items-center font-medium text-orangeBrown">
              <img src={Clock} alt="" className="mr-3" />
              {calculateTimeDifference(firstTransferStart, firstTransferEnd)}
              <span>stop,</span>
              {transferCityNames[0]} <span>{`(${transferCity[0]})`}</span>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {/* FIRST TRANSFER */}
      <div className="DEPEDETAILS2">
        {transferWay === "return" ? (
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
                  {firstTransferEnd}
                </span>{" "}
                <span className="text-sm">
                  {transferCityNames[0]} international airport{" "}
                  {`(${transferCity[0]})`}
                </span>
              </div>
              {/* TIME BETWEEN FIRST TRANSFER START AND END */}
              <div className="flex items-center gap-5 text-xs">
                {transfer === "1"
                  ? calculateTimeDifference(firstTransferEnd, retEndTime)
                  : calculateTimeDifference(
                      firstTransferEnd,
                      secondTransferStart
                    )}
                <Luggage flightsData={flightsData} small={true} />
              </div>
              {/* FIRST TRANSFER END */}
              <div>
                {transferWay === "return" && transfer === "1" ? (
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
                      {secondTransferStart}
                    </span>{" "}
                    <span className="text-sm">
                      {transferCityNames[1]} international airport{" "}
                      {`(${transferCity[1]})`}
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
        {/* TRANSFER TIME IN ORANGE */}
        {transferWay === "return" && transfer === "2" ? (
          <div className="flex items-center gap-2 w-full">
            <div className="bg-orange-100 h-10 flex items-center pl-5 rounded-sm my-5 ml-28 w-full">
              <div className="flex gap-1 text-sm items-center font-medium text-orangeBrown">
                <img src={Clock} alt="" className="mr-3" />
                {calculateTimeDifference(
                  secondTransferStart,
                  secondTransferEnd
                )}
                <span>stop,</span>
                {transferCityNames[1]} <span>{`(${transferCity[1]})`}</span>
              </div>
            </div>
            {/* CHECK IF TRANSFER TAKES MORE THAN 1 HOUR AND DISPLAY LONG TRANSFER */}
            {calculateTimeDifference(
              secondTransferStart,
              secondTransferEnd
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
        {transferWay === "return" && transfer === "2" ? (
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
                  {secondTransferEnd}
                </span>{" "}
                <span className="text-sm">
                  {transferCityNames[1]} international airport{" "}
                  <span>{`(${transferCity[1]})`}</span>
                </span>
              </div>
              {/* TIME BETWEEN SECOND TRANSFER */}
              <div className="flex items-center gap-5 text-xs">
                {calculateTimeDifference(secondTransferEnd, retEndTime)}
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
