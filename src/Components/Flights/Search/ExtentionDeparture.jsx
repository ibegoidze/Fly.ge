import TurkishAirlinesLogo from "../../../assets/Flights/Search/TurkishExtention.png";
import Circle from "../../../assets/Flights/Search/ExCircle.png";
import Line from "../../../assets/Flights/Search/ExLine.png";
import Clock from "../../../assets/Flights/Search/Clock.png";

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
    transferCity,
    firstTransferStart,
    firstTransferEnd,
    secondTransferStart,
    secondTransferEnd,
  } = flightsData;

  return (
    <div className="ml-32 my-5">
      {/* HEADER */}
      <div className="RETURN text-lg font-medium mb-5">Departure</div>
      {/* ONE WAY */}
      <div className="DEPDETAILS1 flex">
        {/* DATE AND IMAGE ON THE LEFT */}
        <div className="AIRLINELOGO flex flex-col mr-14">
          <div className="font-medium text-gray-500 text-sm">
            {formatDate(departure)}
          </div>
          <div className="h-full flex items-center">
            <img src={TurkishAirlinesLogo} alt="" />
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
          {/* DEP START TIME AND CITY */}
          <div>
            <span className="text-textDark font-semibold">{depStartTime}</span>{" "}
            {from} international airport
          </div>
          {/* TIME BETWEEN DEP START AND DEPEND OR FIRST TRANSFER */}
          <div className="text-sm">
            {transferWay === "departure"
              ? calculateTimeDifference(depStartTime, firstTransferStart)
              : calculateTimeDifference(depStartTime, depEndTime)}
          </div>
          {/* DEPEND OR FIRST TRANSFER */}
          <div>
            {transferWay === "departure" ? (
              <span className="text-textDark font-semibold">
                {firstTransferStart}
              </span>
            ) : (
              <span className="text-textDark font-semibold">{depEndTime}</span>
            )}{" "}
            {transferWay === "departure" ? transferCity[0] : to} international
            airport
          </div>
        </div>
      </div>
      {/* TRANSFER TIME IN ORANGE */}
      <div className="DEPTRANSFERTIME ml-28">
        {transferWay === "departure" ? (
          <div className="bg-orange-100 h-10 flex items-center pl-5 rounded-sm my-5">
            <div className="flex">
              <img src={Clock} alt="" className="mr-3" />
              {calculateTimeDifference(firstTransferStart, firstTransferEnd)}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {/* FIRST TRANSFER */}
      <div className="DEPEDETAILS2">
        {" "}
        {transferWay === "departure" ? (
          <div className="DEPDETAILS1 flex">
            {/* AIRLINE LOGO */}
            <div className="AIRLINELOGO flex flex-col justify-center mr-14">
              <img src={TurkishAirlinesLogo} alt="" />
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
                  ? calculateTimeDifference(firstTransferEnd, depEndTime)
                  : calculateTimeDifference(
                      firstTransferEnd,
                      secondTransferStart
                    )}
              </div>
              {/* FIRST TRANSFER END */}
              <div>
                {transferWay === "departure" && transfer === "1" ? (
                  <div>
                    <span className="text-textDark font-semibold">
                      {depEndTime}
                    </span>{" "}
                    {to} airport
                  </div>
                ) : (
                  <div>
                    <span className="text-textDark font-semibold">
                      {secondTransferStart}
                    </span>{" "}
                    {transferCity[1]} airport
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
        {transferWay === "departure" && transfer === "2" ? (
          <div className="bg-orange-100 h-10 flex items-center pl-5 rounded-sm my-5 ml-28">
            <div className="flex">
              <img src={Clock} alt="" className="mr-3" />
              {calculateTimeDifference(secondTransferStart, secondTransferEnd)}
            </div>
          </div>
        ) : (
          <div></div>
        )}{" "}
        {transferWay === "departure" && transfer === "2" ? (
          <div className="DEPDETAILS1 flex">
            {/* AIRLINES LOGO */}
            <div className="AIRLINELOGO flex flex-col justify-center mr-14">
              <img src={TurkishAirlinesLogo} alt="" />
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
                {calculateTimeDifference(secondTransferEnd, depEndTime)}
              </div>
              {/* SECOND TRANSFER END */}
              <div>
                <span className="text-textDark font-semibold">
                  {depEndTime}
                </span>{" "}
                {to}
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

export default ExtentionDeparture;
