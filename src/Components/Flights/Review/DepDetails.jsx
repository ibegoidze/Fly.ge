import { useTranslation } from "react-i18next";
import { calculateTimeDifference, formatDateWeek } from "../../../utility";

import CalendarPic from "../../../assets/Flights/Review/Calendar.png";
import AirplanePic from "../../../assets/Flights/Review/Airplane.png";
import VerticalPic from "../../../assets/Flights/Review/VerticalLine.png";
import BedPic from "../../../assets/Flights/Review/Bed.png";
import WaitClockGrayPic from "../../../assets/Flights/Review/WaitClockGray.png";
import WaitClockOrangePic from "../../../assets/Flights/Review/WaitClockOrange.png";
import PegasusPic from "../../../assets/Flights/Search/Pegasus.png";

function DepDetails({ selectedFlight }) {
  const { t } = useTranslation();
  const {
    depStartTime,
    depEndTime,
    departure,
    from,
    depTransferCityNames,
    to,
    depFirstTransferStart,
    depTransferCity,
    depFirstTransferEnd,
    depSecondTransferStart,
    depSecondTransferEnd,
    toCityId,
  } = selectedFlight;

  // CALCULATE NIGHTS BETWEEN DATES
  const calculateNights = (startDateStr, endDateStr) =>
    Math.floor(
      (new Date(endDateStr) - new Date(startDateStr)) / (1000 * 3600 * 24)
    );

  return (
    <div className="w-full md:w-1/2">
      {/* DEPARTURE AND FLIGHT DURATION */}
      <div className="DURATION x DEPARTURE flex justify-between items-center mb-5">
        <div className="font-medium">{t("Departure")}</div>
        <div className="text-sm text-gray-500">
          {t("DURATION")}: {calculateTimeDifference(depStartTime, depEndTime)}
        </div>
      </div>
      {/* CALENDAR DATE AND CLASS */}
      <div className="DATE x CLASS flex justify-between">
        <div className="flex items-center gap-3">
          <img src={CalendarPic} alt="calendar" className="w-5 h-5" />
          <span className="font-medium text-sm">
            {formatDateWeek(departure)}
          </span>
        </div>
        <div className="text-sm text-gray-500 font-medium border p-1.5 rounded-md bg-boxGray border-gray-400">
          {t(selectedFlight.class)}
        </div>
      </div>
      {/* FIRST BOX WITH DEP START TIME */}
      <div className="flex relative">
        <div className="VERTICALLINE relative ml-2 h-full justify-center flex">
          <img src={VerticalPic} alt="" />
          <img
            src={AirplanePic}
            alt=""
            className="relative w-5 h-5  top-20 right-0.5 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="FIRST border border-1.5 border-gray-400 rounded-md w-full  mt-5 p-4 flex justify-between h-24">
          <div className="DEPTIME flex flex-col justify-between">
            <span>
              {depStartTime} <span className="text-gray-500">{t(from)}</span>
            </span>
            <span>
              {depFirstTransferStart ? depFirstTransferStart : depEndTime}{" "}
              {depTransferCityNames ? (
                <span className="text-gray-500">
                  {t(depTransferCityNames[0])}
                </span>
              ) : (
                <span className="text-gray-500">{t(to)}</span>
              )}
            </span>
          </div>
          <div className="flex justify-between flex-col items-end">
            <div className="IMAGE">
              <img src={PegasusPic} alt="" className="w-7 h-7" />
            </div>
            <div className="TIMEBETWEEN">
              {depFirstTransferStart ? (
                <span className="text-gray-500">
                  {calculateTimeDifference(depStartTime, depFirstTransferStart)}
                </span>
              ) : (
                <span className="text-gray-500">
                  {calculateTimeDifference(depStartTime, depEndTime)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* GRAY TRANSFER DURATION */}
      {depFirstTransferStart ? (
        <div className="flex items-center ">
          <span className="text-xs text-gray-500 font-semibold relative right-1 mr-1">
            {depTransferCity[0]}
          </span>
          <div className="border rounded-md py-2 items-center flex px-4 bg-boxGray gap-2 text-sm font-medium text-gray-500 w-full mr-2">
            <img src={WaitClockGrayPic} alt="" className="w-6 h-6" />
            <span>
              {t("stop")}{" "}
              {calculateTimeDifference(
                depFirstTransferStart,
                depFirstTransferEnd
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
      {depFirstTransferStart ? (
        <div>
          {/* CALENDAR DATE AND CLASS FIRST TRANSFER*/}
          <div className="DATE x CLASS flex justify-between mt-3">
            <div className="flex items-center gap-3">
              <img src={CalendarPic} alt="calendar" className="w-5 h-5" />
              <span className="font-medium text-sm">
                {formatDateWeek(departure)}
              </span>
            </div>
            <div className="text-sm text-gray-500 font-medium border p-1.5 rounded-md bg-boxGray border-gray-400">
              {t(selectedFlight.class)}
            </div>
          </div>
          {/* SECOND BOX WITH DEP START TIME */}
          <div className="flex relative">
            <div className="VERTICALLINE relative ml-2 h-full justify-center flex">
              <img src={VerticalPic} alt="" />
              <img
                src={AirplanePic}
                alt=""
                className="relative w-5 h-5  top-20 right-0.5 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="FIRST border border-1.5 border-gray-400 rounded-md w-full  mt-5 p-4 flex justify-between h-24">
              <div className="DEPTIME flex flex-col justify-between">
                <span>
                  {depFirstTransferEnd}{" "}
                  <span className="text-gray-500">
                    {t(depTransferCityNames[0])}
                  </span>
                </span>
                <span>
                  {depSecondTransferStart ? depSecondTransferStart : depEndTime}{" "}
                  <span className="text-gray-500">
                    {depSecondTransferStart
                      ? t(depTransferCityNames[1])
                      : t(to)}
                  </span>
                </span>
              </div>
              <div className="flex justify-between flex-col items-end">
                <div className="IMAGE">
                  <img src={PegasusPic} alt="" className="w-7 h-7" />
                </div>
                <div className="TIMEBETWEEN">
                  {depSecondTransferStart ? (
                    <span className="text-gray-500">
                      {calculateTimeDifference(
                        depFirstTransferEnd,
                        depSecondTransferStart
                      )}
                    </span>
                  ) : (
                    <span className="text-gray-500">
                      {calculateTimeDifference(depFirstTransferEnd, depEndTime)}
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
      {depSecondTransferStart ? (
        <div>
          {/* /////////////////////////////// */}
          <div className="flex items-center ">
            <span className="text-xs text-gray-500 font-semibold relative right-1 mr-1">
              {depTransferCity[1]}
            </span>
            <div className="border rounded-md py-2 items-center flex px-4 bg-boxGray gap-2 text-sm font-medium text-gray-500 w-full mr-2">
              <img src={WaitClockGrayPic} alt="" className="w-6 h-6" />
              <span>
                {t("stop")}{" "}
                {calculateTimeDifference(
                  depSecondTransferStart,
                  depSecondTransferEnd
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
                {formatDateWeek(departure)}
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
            <div className="FIRST border border-1.5 border-gray-400 rounded-md w-full  mt-5 p-4 flex justify-between h-24">
              <div className="DEPTIME flex flex-col justify-between">
                <span>
                  {depSecondTransferEnd}{" "}
                  <span className="text-gray-500">
                    {t(depTransferCityNames[1])}
                  </span>
                </span>
                <span>
                  {depEndTime} <span className="text-gray-500">{t(to)}</span>
                </span>
              </div>
              <div className="flex justify-between flex-col items-end">
                <div className="IMAGE">
                  <img src={PegasusPic} alt="" className="w-7 h-7" />
                </div>
                <div className="TIMEBETWEEN">
                  {depSecondTransferStart ? (
                    <span className="text-gray-500">
                      {calculateTimeDifference(
                        depSecondTransferEnd,
                        depEndTime
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
      <div className="flex">
        <span className="text-xs text-gray-500 font-semibold relative right-1 mr-1">
          {toCityId}
        </span>
        <div className="border rounded-md py-2 items-center flex px-4 bg-bedDark gap-2 text-sm font-medium text-white w-full mr-2">
          <img src={BedPic} alt="" className="w-6 h-6" />
          <span>
            {calculateNights(departure, selectedFlight.return)}{" "}
            {t("nights stop")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DepDetails;
