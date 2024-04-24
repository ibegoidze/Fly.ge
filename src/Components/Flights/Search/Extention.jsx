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
              {flightsData.depStartTime} {flightsData.from} international
              airport
            </div>
            <div>
              {flightsData.transferWay === "departure"
                ? calculateTimeDifference(
                    flightsData.depStartTime,
                    flightsData.firstTransferStart
                  )
                : calculateTimeDifference(
                    flightsData.depStartTime,
                    flightsData.depEndTime
                  )}
            </div>
            <div>
              {flightsData.transferWay === "departure"
                ? flightsData.firstTransferStart
                : flightsData.depEndTime}{" "}
              {flightsData.transferWay === "departure"
                ? flightsData.transferCity[0]
                : flightsData.to}{" "}
              international airport
            </div>
          </div>
        </div>

        <div className="DEPTRANSFERTIME">
          {flightsData.transferWay === "departure" ? (
            <div className="bg-orange-100">
              {calculateTimeDifference(
                flightsData.firstTransferStart,
                flightsData.firstTransferEnd
              )}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        {/* .................................... */}
        <div className="DEPEDETAILS2">
          {" "}
          {flightsData.transferWay === "departure" ? (
            <div className="DEPDETAILS1 flex">
              {/*  */}
              <div className="AIRLINELOGO flex flex-col">
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
                  {flightsData.firstTransferEnd} {flightsData.transferCity[0]}{" "}
                  international airport
                </div>
                <div>
                  {flightsData.transfer === "1"
                    ? calculateTimeDifference(
                        flightsData.firstTransferEnd,
                        flightsData.depEndTime
                      )
                    : calculateTimeDifference(
                        flightsData.firstTransferEnd,
                        flightsData.secondTransferStart
                      )}
                </div>
                {/* //////////////////////M/I/S/T/A/K/E////////////////////////// */}
                <div>
                  {flightsData.depEndTime} {flightsData.to} international
                  airport
                </div>
                {/* //////////////////////M/I/S/T/A/K/E////////////////////////// */}
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        {/* .................................... */}
        <div className="DEPEDETAILS3">
          {flightsData.transferWay === "departure" &&
          flightsData.transfer === "2" ? (
            <div className="bg-orange-100">
              {calculateTimeDifference(
                flightsData.secondTransferStart,
                flightsData.secondTransferEnd
              )}
            </div>
          ) : (
            <div></div>
          )}{" "}
          {flightsData.transferWay === "departure" &&
          flightsData.transfer === "2" ? (
            <div className="DEPDETAILS1 flex">
              {/*  */}
              <div className="AIRLINELOGO flex flex-col">
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
                  {flightsData.secondTransferEnd} {flightsData.transferCity[1]}{" "}
                  international airport
                </div>
                <div>
                  {calculateTimeDifference(
                    flightsData.secondTransferEnd,
                    flightsData.depEndTime
                  )}
                </div>
                <div>
                  {flightsData.depEndTime} {flightsData.to}
                  {` `}
                  international airport
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        {/* .................................... */}
      </div>
      <div className="DESTINATION"></div>
      <div className="RETURN"></div>
      <div className="HOME"></div>
      <div className="LOAN"></div>
    </div>
  );
}

export default Extention;
