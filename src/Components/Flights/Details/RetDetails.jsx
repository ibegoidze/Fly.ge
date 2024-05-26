import { useTranslation } from "react-i18next";
import { calculateTimeDifference, formatDateWeek } from "../../../utility";

import CalendarPic from "../../../assets/Flights/Details/Calendar.png";
import AirplanePic from "../../../assets/Flights/Details/Airplane.png";
import PegasusPic from "../../../assets/Flights/Details/DuckLines.png";
import VerticalPic from "../../../assets/Flights/Details/VerticalLine.png";
import WaitClockGrayPic from "../../../assets/Flights/Details/WaitClockGray.png";
import WaitClockOrangePic from "../../../assets/Flights/Details/WaitClockOrange.png";

function RetDetails({ selectedFlight }) {
  const { t } = useTranslation();
  const {
    retStartTime,
    retEndTime,
    from,
    retTransferCityNames,
    to,
    retTransferCity,
    retFirstTransferStart,
    retFirstTransferEnd,
    retSecondTransferStart,
    retSecondTransferEnd,
    fromCityId,
  } = selectedFlight;
  return (
    <div className="w-full md:w-1/2">
      <div className="DURATION x RETURN flex justify-between items-center mb-5">
        <div className="font-medium">{t("Return")}</div>
        <div className="text-sm text-gray-500">
          {t("DURATION")}: {calculateTimeDifference(retStartTime, retEndTime)}
        </div>
      </div>
      <div className="DATE x CLASS flex justify-between">
        <div className="flex items-center gap-3">
          <img src={CalendarPic} alt="calendar" className="w-5 h-5" />
          <span className="font-medium text-sm">
            {formatDateWeek(selectedFlight.return)}
          </span>
        </div>
        <div className="text-sm text-gray-500 font-medium border p-1.5 rounded-md bg-gray-100 border-gray-400">
          {t(selectedFlight.class)}
        </div>
      </div>
      {/* FIRST BOX WITH ret START TIME */}
      <div className="flex relative">
        <div className="VERTICALLINE relative ml-2 h-full justify-center flex">
          <img src={VerticalPic} alt="" />
          <img
            src={AirplanePic}
            alt=""
            className="relative w-5 h-5  top-20 right-0.5 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="FIRST border border-1.5 border-gray-300 rounded-md w-full  mt-5 p-4 flex justify-between h-24">
          <div className="retTIME flex flex-col justify-between">
            <span>
              {retStartTime} <span className="text-gray-500">{t(to)}</span>
            </span>
            <span>
              {retFirstTransferStart ? retFirstTransferStart : retEndTime}{" "}
              {retTransferCityNames ? (
                <span className="text-gray-500">
                  {t(retTransferCityNames[0])}
                </span>
              ) : (
                <span className="text-gray-500">{t(from)}</span>
              )}
            </span>
          </div>
          <div className="flex justify-between flex-col items-end">
            <div className="IMAGE">
              <img src={PegasusPic} alt="" className="w-7 h-7" />
            </div>
            <div className="TIMEBETWEEN">
              {retFirstTransferStart ? (
                <span className="text-gray-500">
                  {calculateTimeDifference(retStartTime, retFirstTransferStart)}
                </span>
              ) : (
                <span className="text-gray-500">
                  {calculateTimeDifference(retStartTime, retEndTime)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* GRAY TRANSFER DURATION */}
      {retFirstTransferStart ? (
        <div className="flex items-center ">
          <span className="text-xs text-gray-400 font-semibold relative right-1 mr-1">
            {retTransferCity[0]}
          </span>
          <div className="border rounded-md py-2 items-center flex px-4 bg-boxGray gap-2 text-sm font-medium text-gray-500 w-full mr-2">
            <img src={WaitClockGrayPic} alt="" className="w-6 h-6" />
            <span>
              {t("stop")}{" "}
              {calculateTimeDifference(
                retFirstTransferStart,
                retFirstTransferEnd
              )}
            </span>
          </div>
          <div className="border border-orange-200 rounded-md py-2 flex items-center justify-center px-2 bg-boxOrange text-gray-500 w-16">
            <img src={WaitClockOrangePic} alt="" className="w-6 h-6" />
          </div>
        </div>
      ) : (
        <></>
      )}
      {retFirstTransferStart ? (
        <div>
          {/* CALENDAR DATE AND CLASS FIRST TRANSFER*/}
          <div className="DATE x CLASS flex justify-between mt-3">
            <div className="flex items-center gap-3">
              <img src={CalendarPic} alt="calendar" className="w-5 h-5" />
              <span className="font-medium text-sm">
                {formatDateWeek(selectedFlight.return)}
              </span>
            </div>
            <div className="text-sm text-gray-500 font-medium border p-1.5 rounded-md bg-boxGray border-gray-400">
              {t(selectedFlight.class)}
            </div>
          </div>
          {/* SECOND BOX WITH ret START TIME */}
          <div className="flex relative">
            <div className="VERTICALLINE relative ml-2 h-full justify-center flex">
              <img src={VerticalPic} alt="" />
              <img
                src={AirplanePic}
                alt=""
                className="relative w-5 h-5  top-20 right-0.5 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="FIRST border border-1.5 border-gray-300 rounded-md w-full  mt-5 p-4 flex justify-between h-24">
              <div className="retTIME flex flex-col justify-between">
                <span>
                  {retFirstTransferEnd}{" "}
                  <span className="text-gray-500">
                    {t(retTransferCityNames[0])}
                  </span>
                </span>
                <span>
                  {retSecondTransferStart ? retSecondTransferStart : retEndTime}{" "}
                  <span className="text-gray-500">
                    {retSecondTransferStart
                      ? t(retTransferCityNames[1])
                      : t(to)}
                  </span>
                </span>
              </div>
              <div className="flex justify-between flex-col items-end">
                <div className="IMAGE">
                  <img src={PegasusPic} alt="" className="w-7 h-7" />
                </div>
                <div className="TIMEBETWEEN">
                  {retSecondTransferStart ? (
                    <span className="text-gray-500">
                      {calculateTimeDifference(
                        retFirstTransferEnd,
                        retSecondTransferStart
                      )}
                    </span>
                  ) : (
                    <span className="text-gray-500">
                      {calculateTimeDifference(retFirstTransferEnd, retEndTime)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {retSecondTransferStart ? (
        <div>
          <div className="flex items-center ">
            <span className="text-xs text-gray-400 font-semibold relative right-1 mr-1">
              {retTransferCity[1]}
            </span>
            <div className="border rounded-md py-2 items-center flex px-4 bg-boxGray gap-2 text-sm font-medium text-gray-500 w-full mr-2">
              <img src={WaitClockGrayPic} alt="" className="w-6 h-6" />
              <span>
                {t("stop")}{" "}
                {calculateTimeDifference(
                  retSecondTransferStart,
                  retSecondTransferEnd
                )}
              </span>
            </div>
            <div className="border border-orange-200 rounded-md py-2 flex items-center justify-center px-2 bg-boxOrange text-gray-500 w-16">
              <img src={WaitClockOrangePic} alt="" className="w-6 h-6" />
            </div>
          </div>
          {/* CALENDAR DATE AND CLASS FIRST TRANSFER*/}
          <div className="DATE x CLASS flex justify-between mt-3">
            <div className="flex items-center gap-3">
              <img src={CalendarPic} alt="calendar" className="w-5 h-5" />
              <span className="font-medium text-sm">
                {formatDateWeek(selectedFlight.return)}
              </span>
            </div>
            <div className="text-sm text-gray-500 font-medium border p-1.5 rounded-md bg-boxGray border-gray-400">
              {t(selectedFlight.class)}
            </div>
          </div>
          <div className="flex relative">
            <div className="VERTICALLINE relative ml-2 h-full justify-center flex">
              <img src={VerticalPic} alt="" />
              <img
                src={AirplanePic}
                alt=""
                className="relative w-5 h-5  top-20 right-0.5 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="FIRST border border-1.5 border-gray-300 rounded-md w-full  mt-5 p-4 flex justify-between h-24">
              <div className="retTIME flex flex-col justify-between">
                <span>
                  {retSecondTransferEnd}{" "}
                  <span className="text-gray-500">
                    {t(retTransferCityNames[1])}
                  </span>
                </span>
                <span>
                  {retEndTime} <span className="text-gray-500">{t(from)}</span>
                </span>
              </div>
              <div className="flex justify-between flex-col items-end">
                <div className="IMAGE">
                  <img src={PegasusPic} alt="" className="w-7 h-7" />
                </div>
                <div className="TIMEBETWEEN">
                  {retSecondTransferStart ? (
                    <span className="text-gray-500">
                      {calculateTimeDifference(
                        retSecondTransferEnd,
                        retEndTime
                      )}
                    </span>
                  ) : (
                    <span className="text-gray-500"></span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <span className="text-xs text-gray-500 font-semibold relative right-1 mr-1">
        {fromCityId}
      </span>
    </div>
  );
}

export default RetDetails;
