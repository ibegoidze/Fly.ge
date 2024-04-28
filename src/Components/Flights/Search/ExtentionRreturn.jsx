import DuckLines from "../../../assets/Flights/Search/DuckLines.png";
import Circle from "../../../assets/Flights/Search/ExCircle.png";
import Line from "../../../assets/Flights/Search/ExLine.png";
import Clock from "../../../assets/Flights/Search/Clock.png";

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
  } = flightsData;

  return (
    <div className="ml-32 my-5">
      {/* HEADER */}
      <div className="RETURN text-lg font-medium mb-5">Return</div>
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
          <img src={Line} alt="" className="h-28 w-0.5" />
          <img src={Circle} alt="" />
        </div>
        {/* RIGHT SIDE */}
        <div className="TIMES flex flex-col justify-between ml-5 text-gray-500 font-medium">
          {/* RETURN START TIME AND CITY */}
          <div>
            <span className="text-textDark font-semibold">{retStartTime}</span>{" "}
            {to} international airport
          </div>
          {/* TIME BETWEEN RET START AND RETEND OR FIRST TRANSFER */}
          <div className="text-sm">
            {transferWay === "return"
              ? calculateTimeDifference(retStartTime, firstTransferStart)
              : calculateTimeDifference(retStartTime, retEndTime)}
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
            {transferWay === "return" ? transferCity[0] : from} international
            airport
          </div>
        </div>
      </div>
      {/* TRANSFER TIME IN ORANGE */}
      <div className="DEPTRANSFERTIME ml-28">
        {transferWay === "return" ? (
          <div className="bg-orange-100 h-10 flex items-center pl-5 rounded-sm my-5">
            <div className="flex">
              <img src={Clock} alt="" className="mr-3" />
              {calculateTimeDifference(
                firstTransferStart,
                firstTransferEnd
              )}{" "}
              {transferCity[0]}
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
              <img src={Line} alt="" className="h-28 w-0.5" />
              <img src={Circle} alt="" />
            </div>
            {/* FIRST TRANSFER START TIME AND CITY */}
            <div className="TIMES flex flex-col justify-between ml-5 text-gray-500 font-medium">
              <div>
                <span className="text-textDark font-semibold">
                  {firstTransferEnd}
                </span>{" "}
                {transferCity[0]} international airport
              </div>
              {/* TIME BETWEEN FIRST TRANSFER START AND END */}
              <div>
                {transfer === "1"
                  ? calculateTimeDifference(firstTransferEnd, retEndTime)
                  : calculateTimeDifference(
                      firstTransferEnd,
                      secondTransferStart
                    )}
              </div>
              {/* FIRST TRANSFER END */}
              <div>
                {transferWay === "return" && transfer === "1" ? (
                  <div>
                    <span className="text-textDark font-semibold">
                      {retEndTime}
                    </span>{" "}
                    {from} international airport
                  </div>
                ) : (
                  <div>
                    <span className="text-textDark font-semibold">
                      {secondTransferStart}
                    </span>{" "}
                    {transferCity[1]} international airport
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
          <div className="bg-orange-100 h-10 flex items-center pl-5 rounded-sm my-5 ml-28">
            <div className="flex">
              <img src={Clock} alt="" className="mr-3" />
              {calculateTimeDifference(
                secondTransferStart,
                secondTransferEnd
              )}{" "}
              {transferCity[1]}
            </div>
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
              <img src={Line} alt="" className="h-28 w-0.5" />
              <img src={Circle} alt="" />
            </div>
            {/* SECOND TRANSFER START */}
            <div className="TIMES flex flex-col justify-between ml-5 text-gray-500 font-medium">
              <div>
                <span className="text-textDark font-semibold">
                  {secondTransferEnd}
                </span>{" "}
                {transferCity[1]} international airport
              </div>
              {/* TIME BETWEEN SECOND TRANSFER */}
              <div>
                {calculateTimeDifference(secondTransferEnd, retEndTime)}
              </div>
              {/* SECOND TRANSFER END */}
              <div>
                <span className="text-textDark font-semibold">
                  {retEndTime}
                </span>{" "}
                {from}
                {` `}
                international airport
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
