import TurkishAirlinesLogo from "../../../assets/Flights/Search/TurkishExtention.png";
import Circle from "../../../assets/Flights/Search/ExCircle.png";
import Line from "../../../assets/Flights/Search/ExLine.png";
import Clock from "../../../assets/Flights/Search/Clock.png";
import LongTime from "../../../assets/Flights/Search/LongTime.png";

import Luggage from "./Luggage";
import { useTranslation } from "react-i18next";

function ExtentionDeparture({ flightsData }) {
  const { t } = useTranslation();
  // FORMAT DATE
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    return `${day} ${t(month)}`;
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
      ? `${minutes} ${t("min")}`
      : minutes === 0
      ? `${hours} ${t("hr")}`
      : `${hours} ${t("hr")}, ${minutes}`;
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
    <div className="md:ml-32 mb-5">
      {/* HEADER */}
      <div className="RETURN text-medium font-semibold mb-5 text-textDark">
        {t("Departure")}
      </div>
      {/* ONE WAY */}
      <div className="DEPDETAILS1 flex">
        {/* DATE AND IMAGE ON THE LEFT */}
        <div className="AIRLINELOGO flex flex-col mr-5 sm:mr-14">
          <div className="font-medium text-gray-500 text-sm">
            {formatDate(departure)}
          </div>
          <div className="h-full flex w-14 sm:w-20 items-center">
            <img src={TurkishAirlinesLogo} alt="" className="w-full sm:w-20" />
          </div>
        </div>
        {/* LINE */}
        <div className="LINE flex flex-col items-center gap-1 pt-1 pb-1">
          <img src={Circle} alt="" />
          <img src={Line} alt="" className="h-16 sm:h-22 w-0.5" />
          <img src={Circle} alt="" />
        </div>
        {/* RIGHT SIDE */}
        <div className="TIMES flex flex-col justify-between ml-2 sm:ml-5 text-gray-500 font-medium">
          {/* DEP START TIME AND CITY */}
          <div className="flex items-center gap-2">
            <span className="text-textDark font-semibold">{depStartTime}</span>{" "}
            <span className="text-xs sm:text-sm">
              {t(from)} {t("international airport")}{" "}
              {` (${flightsData.fromCityId})`}
            </span>
          </div>
          {/* TIME BETWEEN DEP START AND DEPEND OR FIRST TRANSFER */}
          <div className="text-xs flex items-center gap-5">
            {transferWay === "departure" || transferWay === "both"
              ? calculateTimeDifference(depStartTime, depFirstTransferStart)
              : calculateTimeDifference(depStartTime, depEndTime)}
            <div className="hidden sm:flex ">
              <Luggage flightsData={flightsData} small={true} />
            </div>
          </div>
          {/* FIRST TRANSFER END*/}
          <div className="flex  items-center gap-2">
            {transferWay === "departure" || transferWay === "both" ? (
              <span className="text-textDark font-semibold">
                {depFirstTransferStart}
              </span>
            ) : (
              <span className="text-textDark font-semibold">{depEndTime}</span>
            )}{" "}
            <span className="text-xs sm:text-sm">
              {transferWay === "departure" || transferWay === "both"
                ? t(depTransferCityNames[0])
                : t(to)}{" "}
              {t("international airport")}
              {transferWay === "departure" || transferWay === "both" ? (
                <span className="text-xs sm:text-sm">{` (${depTransferCity[0]})`}</span>
              ) : (
                <span className="text-sm">{` (${toCityId})`}</span>
              )}
            </span>
          </div>
        </div>
      </div>
      {/* TRANSFER TIME IN ORANGE */}
      <div className="DEPTRANSFERTIME sm:ml-28">
        {transferWay === "departure" || transferWay === "both" ? (
          <div className="bg-orange-100 h-10 flex items-center pl-5 rounded-sm my-5">
            <div className="flex gap-1 text-sm items-center font-medium text-orangeBrown">
              <img src={Clock} alt="" className="mr-3" />
              {calculateTimeDifference(
                depFirstTransferStart,
                depFirstTransferEnd
              )}
              <span>{t("stop")},</span>
              {t(depTransferCityNames[0])}{" "}
              <span>{`(${t(depTransferCity[0])})`}</span>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {/* FIRST TRANSFER  */}
      <div className="DEPEDETAILS2">
        {transferWay === "departure" || transferWay === "both" ? (
          <div className="DEPDETAILS1 flex">
            {/* AIRLINE LOGO */}
            <div className="AIRLINELOGO flex flex-col mr-5 sm:mr-14">
              <div className="h-full flex w-14 sm:w-20 items-center">
                <img
                  src={TurkishAirlinesLogo}
                  alt=""
                  className="w-full sm:w-20"
                />
              </div>
            </div>
            {/* LINE */}
            <div className="LINE flex flex-col items-center gap-1 pt-1 pb-1">
              <img src={Circle} alt="" />
              <img src={Line} alt="" className="h-16 sm:h-22 w-0.5" />
              <img src={Circle} alt="" />
            </div>
            {/* FIRST TRANSFER START TIME AND CITY */}
            <div className="TIMES flex flex-col justify-between ml-2 sm:ml-5 text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-textDark font-semibold">
                  {depFirstTransferEnd}
                </span>{" "}
                <span className="text-xs sm:text-sm">
                  {t(depTransferCityNames[0])} {t("international airport")}{" "}
                  {`(${depTransferCity[0]})`}
                </span>
              </div>
              {/* TIME BETWEEN FIRST TRANSFER START AND END */}
              <div className="flex items-center gap-5 text-xs">
                {depTransferCity
                  ? calculateTimeDifference(depFirstTransferEnd, depEndTime)
                  : calculateTimeDifference(
                      depFirstTransferEnd,
                      depSecondTransferStart
                    )}
                <div className="hidden sm:flex ">
                  <Luggage flightsData={flightsData} small={true} />
                </div>
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
                      {t(to)} airport {`(${toCityId})`}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-textDark font-semibold">
                      {depSecondTransferStart
                        ? depSecondTransferStart
                        : depEndTime}
                    </span>{" "}
                    <span className="text-xs sm:text-sm">
                      {depTransferCityNames[1]
                        ? t(depTransferCityNames[1])
                        : t(to)}{" "}
                      {t("international airport")}{" "}
                      {depTransferCity[1]
                        ? `(${depTransferCity[1]})`
                        : `(${toCityId})`}
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
        {depSecondTransferStart ? (
          <div className="flex items-center gap-2 w-full">
            <div className="bg-orange-100 h-10 flex items-center pl-5 rounded-sm my-5 sm:ml-28 w-full">
              <div className="flex gap-1 text-sm items-center font-medium text-orangeBrown">
                <img src={Clock} alt="" className="mr-3" />
                {calculateTimeDifference(
                  depSecondTransferStart,
                  depSecondTransferEnd
                )}
                <span>{t("stop")},</span>
                {t(depTransferCityNames[1])}{" "}
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
                <span className="hidden sm:flex">{t("Long")}</span>
              </div>
            ) : null}
          </div>
        ) : (
          <div></div>
        )}{" "}
        {depSecondTransferStart ? (
          <div className="DEPDETAILS1 flex">
            {/* AIRLINES LOGO */}
            <div className="AIRLINELOGO flex flex-col mr-5 sm:mr-14">
              <div className="h-full flex w-14 sm:w-20 items-center">
                <img
                  src={TurkishAirlinesLogo}
                  alt=""
                  className="w-full sm:w-20"
                />
              </div>
            </div>
            {/* LINE */}
            <div className="LINE flex flex-col items-center gap-1 pt-1 pb-1">
              <img src={Circle} alt="" />
              <img src={Line} alt="" className="h-16 sm:h-22 w-0.5" />
              <img src={Circle} alt="" />
            </div>
            {/* SECOND TRANSFER START */}
            <div className="TIMES flex flex-col justify-between ml-2 sm:ml-5 text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-textDark font-semibold">
                  {depSecondTransferEnd}
                </span>{" "}
                <span className="text-xs sm:text-sm">
                  {t(depTransferCityNames[1])} {t("international airport")}{" "}
                  <span>{`(${depTransferCity[1]})`}</span>
                </span>
              </div>
              {/* TIME BETWEEN SECOND TRANSFER */}
              <div className="flex items-center gap-5 text-xs">
                {calculateTimeDifference(depSecondTransferEnd, depEndTime)}
                <div className="hidden sm:flex ">
                  <Luggage flightsData={flightsData} small={true} />
                </div>
              </div>
              {/* SECOND TRANSFER END */}
              <div className="flex items-center gap-2">
                <span className="text-textDark font-semibold">
                  {depEndTime}
                </span>{" "}
                <span className="text-xs sm:text-sm">
                  {t(to)} {t("international airport")}{" "}
                  <span>{`(${toCityId})`}</span>
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
