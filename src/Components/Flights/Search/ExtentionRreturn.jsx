import DuckLines from "../../../assets/Flights/Search/DuckLines.png";
import Circle from "../../../assets/Flights/Search/ExCircle.png";
import Line from "../../../assets/Flights/Search/ExLine.png";
import Clock from "../../../assets/Flights/Search/Clock.png";
import LongTime from "../../../assets/Flights/Search/LongTime.png";

import Luggage from "./Luggage";
import { useTranslation } from "react-i18next";
import { formatDate, calculateTimeDifference } from "../../../utility";

function ExtentionDetails({ flightsData }) {
  const { t } = useTranslation();
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
    <div className="md:ml-32 my-5">
      {/* HEADER */}
      <div className="RETURN text-medium font-semibold mb-5 text-textDark">
        {t("Return")} {formatDate(flightsData.return)}
      </div>
      {/* ONE WAY */}
      <div className="RETURN DETAILS flex">
        {/* DATE AND IMAGE ON THE LEFT */}
        <div className="AIRLINELOGO flex flex-col mr-5 sm:mr-14">
          <div className="font-medium text-gray-500 hidden sm:flex text-sm">
            {formatDate(flightsData.return)}
          </div>
          <div className="h-full flex w-14 sm:w-20 items-center">
            <img src={DuckLines} alt="" className="w-full sm:w-20" />
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
          {/* RETURN START TIME AND CITY */}
          <div className="flex items-center gap-2">
            <span className="text-textDark font-semibold">{retStartTime}</span>{" "}
            <span className="text-xs sm:text-sm">
              {t(to)} {t("international airport")}{" "}
              {` (${flightsData.toCityId})`}
            </span>
          </div>
          {/* TIME BETWEEN RET START AND RETEND OR FIRST TRANSFER */}
          <div className="text-xs flex items-center gap-5">
            {transferWay === "return" || transferWay === "both"
              ? calculateTimeDifference(retStartTime, retFirstTransferStart)
              : calculateTimeDifference(retStartTime, retEndTime)}
            <div className="hidden sm:flex ">
              <Luggage flightsData={flightsData} small={true} />
            </div>
          </div>
          {/* RETEND OR FIRST TRANSFER */}
          <div className="flex  items-center gap-2">
            {transferWay === "return" || transferWay === "both" ? (
              <span className="text-textDark font-semibold">
                {retFirstTransferStart}
              </span>
            ) : (
              <span className="text-textDark font-semibold">{retEndTime}</span>
            )}{" "}
            <span className="text-xs sm:text-sm">
              {transferWay === "return" || transferWay === "both"
                ? t(retTransferCityNames[0])
                : t(to)}{" "}
              international airport
              {transferWay === "return" || transferWay === "both" ? (
                <span className="text-xs sm:text-sm">{` (${retTransferCity[0]})`}</span>
              ) : (
                <span className="text-sm">{` (${fromCityId})`}</span>
              )}
            </span>
          </div>
        </div>
      </div>
      {/* TRANSFER TIME IN ORANGE */}
      <div className="DEPTRANSFERTIME sm:ml-28">
        {transferWay === "return" || transferWay === "both" ? (
          <div className="bg-orange-100 h-10 flex items-center pl-5 rounded-sm my-5">
            <div className="flex gap-1 text-sm items-center font-medium text-orangeBrown">
              <img src={Clock} alt="" className="mr-3" />
              {calculateTimeDifference(
                retFirstTransferStart,
                retFirstTransferEnd
              )}
              <span>{t("stop")},</span>
              {t(retTransferCityNames[0])}{" "}
              <span>{`(${t(retTransferCity[0])})`}</span>
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
            <div className="AIRLINELOGO flex flex-col mr-5 sm:mr-14">
              <div className="h-full flex w-14 sm:w-20 items-center">
                <img src={DuckLines} alt="" className="w-full sm:w-20" />
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
                  {retFirstTransferEnd}
                </span>{" "}
                <span className="text-xs sm:text-sm">
                  {t(retTransferCityNames[0])} {t("international airport")}{" "}
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
                <div className="hidden sm:flex ">
                  <Luggage flightsData={flightsData} small={true} />
                </div>
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
                      {t(from)} airport {`(${fromCityId})`}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-textDark font-semibold">
                      {retSecondTransferStart
                        ? retSecondTransferStart
                        : retEndTime}
                    </span>{" "}
                    <span className="text-xs sm:text-sm">
                      {retTransferCityNames[1]
                        ? t(retTransferCityNames[1])
                        : t(to)}{" "}
                      {t("international airport")}{" "}
                      {retTransferCity[1]
                        ? `(${retTransferCity[1]})`
                        : `(${fromCityId})`}
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
            <div className="bg-orange-100 h-10 flex items-center pl-5 rounded-sm my-5 sm:ml-28 w-full">
              <div className="flex gap-1 text-sm items-center font-medium text-orangeBrown">
                <img src={Clock} alt="" className="mr-3" />
                {calculateTimeDifference(
                  retSecondTransferStart,
                  retSecondTransferEnd
                )}
                <span>{t("stop")},</span>
                {t(retTransferCityNames[1])}{" "}
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
                <span className="hidden sm:flex">{t("Long")}</span>
              </div>
            ) : null}
          </div>
        ) : (
          <div></div>
        )}{" "}
        {retSecondTransferStart ? (
          <div className="DEPDETAILS1 flex">
            {/* AIRLINES LOGO */}
            <div className="AIRLINELOGO flex flex-col mr-5 sm:mr-14">
              <div className="h-full flex w-14 sm:w-20 items-center">
                <img src={DuckLines} alt="" className="w-full sm:w-20" />
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
                  {retSecondTransferEnd}
                </span>{" "}
                <span className="text-xs sm:text-sm">
                  {t(retTransferCityNames[1])} {t("international airport")}{" "}
                  <span>{`(${retTransferCity[1]})`}</span>
                </span>
              </div>
              {/* TIME BETWEEN SECOND TRANSFER */}
              <div className="flex items-center gap-5 text-xs">
                {calculateTimeDifference(retSecondTransferEnd, retEndTime)}{" "}
                <div className="hidden sm:flex ">
                  <Luggage flightsData={flightsData} small={true} />
                </div>
              </div>
              {/* SECOND TRANSFER END */}
              <div className="flex items-center gap-2">
                <span className="text-textDark font-semibold">
                  {retEndTime}
                </span>{" "}
                <span className="text-xs sm:text-sm">
                  {t(from)} {t("international airport")}{" "}
                  <span>{`(${fromCityId})`}</span>
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
