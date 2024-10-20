import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  setCheckInMonth,
  setCheckInDay,
} from "../../../Store/SearchFlights/checkSlice";
import { months } from "../../../static";

const CheckInDate = ({ title }) => {
  const [isMonthOpen, setIsMonthOpen] = useState(false);
  const [isDayOpen, setIsDayOpen] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { selectedMonth: checkInMonth, selectedDay: checkInDay } = useSelector(
    (state) => state.checkIn
  );
  const dropdownRef = useRef(null);

  // SELECT MONTH
  const handleMonthSelect = (index) => {
    dispatch(setCheckInMonth(index));
    setIsMonthOpen(false);
    setIsDayOpen(false);
  };

  // SELECT DAY
  const handleDaySelect = (day) => {
    dispatch(setCheckInDay(day));
    setIsDayOpen(false);
    setIsMonthOpen(false);
  };

  // CLICK OUTSIDE CLOSES THE DROPDOWN
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsMonthOpen(false);
      setIsDayOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const daysInMonth = new Date(
    new Date().getFullYear(),
    checkInMonth + 1,
    0
  ).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="relative flex flex-col w-full" ref={dropdownRef}>
      <div className="mb-2 text-sm text-gray-500 font-medium">
        {t(title)}
        <span className="text-red-600 pl-1">*</span>
      </div>
      {/* MONTH */}
      <div className="flex gap-4 sm:gap-2">
        <div className="relative">
          <div
            className={`bg-white border border-borderGray rounded-md py-2 px-3 cursor-pointer text-sm flex gap-2 whitespace-nowrap font-medium ${
              isMonthOpen ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={() => {
              setIsMonthOpen(!isMonthOpen);
              setIsDayOpen(false);
            }}
          >
            {months[checkInMonth]} {new Date().getFullYear()}
            <span
              className="material-symbols-outlined transform transition duration-300 flex"
              style={{
                transform: isMonthOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              arrow_drop_down
            </span>
          </div>
          <div
            className={`absolute top-full left-0 bg-white border border-gray-300 text-sm rounded-md w-full z-30 transition-all duration-500
              ${isMonthOpen ? "opacity-100" : "opacity-0"}`}
          >
            {months.map((month, index) => (
              <div
                style={{
                  display: isMonthOpen ? "flex" : "none",
                }}
                key={index}
                className={`cursor-pointer hover:bg-lightBlue py-1 px-3 font-medium ${
                  checkInMonth === index ? "text-primaryBlue" : "text-gray-500"
                }`}
                onClick={() => handleMonthSelect(index)}
              >
                {month}
              </div>
            ))}
          </div>
        </div>
        {/* DAY */}
        <div className="relative">
          <div className="relative">
            <div
              className={`bg-white border border-gray-300 rounded-md py-2 px-4 cursor-pointer text-sm flex items-center h-full font-medium ${
                isDayOpen ? "text-blue-500" : "text-gray-500"
              }`}
              onClick={() => {
                setIsDayOpen(!isDayOpen);
                setIsMonthOpen(false);
              }}
            >
              {checkInDay}
              <span
                className="material-symbols-outlined transform transition duration-300 flex items-center"
                style={{
                  transform: isDayOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                arrow_drop_down
              </span>
            </div>
            <div
              className={`absolute top-full left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-md text-sm grid grid-cols-6 w-36 z-30 transition-all duration-300  
                ${isDayOpen ? "opacity-100 h-auto" : "opacity-0 h-0"}`}
            >
              {daysArray.map((day) => (
                <div
                  key={day}
                  className={`cursor-pointer hover:bg-blue-100 px-auto py-1 flex justify-center items-center rounded w-full font-medium text-gray-500 ${
                    checkInDay === day ? "text-primaryBlue bg-blue-100" : ""
                  }`}
                  style={{
                    display: isDayOpen ? "flex" : "none",
                  }}
                  onClick={() => handleDaySelect(day)}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckInDate;
