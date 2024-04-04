import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  setCheckOutMonth,
  setCheckOutDay,
} from "../../../Store/SearchFlights/checkSlice";
import { months } from "../../../static";

const CheckOutDate = ({ title }) => {
  const [isMonthOpen, setIsMonthOpen] = useState(false);
  const [isDayOpen, setIsDayOpen] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { selectedMonth: checkOutMonth, selectedDay: checkOutDay } =
    useSelector((state) => state.checkOut);
  const dropdownRef = useRef(null);

  // SELECT MONTH
  const handleMonthSelect = (index) => {
    dispatch(setCheckOutMonth(index));
    setIsMonthOpen(false);
    setIsDayOpen(false);
  };

  // SELECT DAY
  const handleDaySelect = (day) => {
    dispatch(setCheckOutDay(day));
    setIsDayOpen(false);
    setIsMonthOpen(false);
  };

  // EACH MONTH GETS AS MUCH DAYS AS THERE ARE
  const daysInMonth = new Date(
    new Date().getFullYear(),
    checkOutMonth + 1,
    0
  ).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

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

  return (
    <div className="relative flex flex-col w-full " ref={dropdownRef}>
      <div className="mb-2 text-sm text-gray-500 font-semibold">
        {t(title)}
        <span className="text-red-600 pl-1">*</span>
      </div>
      <div className="flex gap-4 sm:gap-2">
        <div className="relative ">
          <div
            className={`bg-white border border-borderGray rounded-md py-2 px-3 cursor-pointer text-sm flex gap-2 whitespace-nowrap font-semibold ${
              isMonthOpen ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={() => {
              setIsMonthOpen(!isMonthOpen);
              setIsDayOpen(false);
            }}
          >
            {months[checkOutMonth]} {new Date().getFullYear()}
            <span
              className="material-symbols-outlined transform transition duration-300 flex"
              style={{
                transform: isMonthOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              arrow_drop_down
            </span>
          </div>
          {isMonthOpen && (
            <div className="absolute top-full left-0 bg-white border border-gray-300 text-sm rounded-md w-full z-30">
              {months.map((month, index) => (
                <div
                  key={index}
                  className={`cursor-pointer hover:bg-lightBlue py-1 px-3 font-semibold ${
                    checkOutMonth === index
                      ? "text-primaryBlue"
                      : "text-gray-500"
                  }`}
                  onClick={() => handleMonthSelect(index)}
                >
                  {month}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <div className="relative">
            <div
              className={`bg-white border border-gray-300 rounded-md py-2 px-4 cursor-pointer text-sm flex items-center h-full font-semibold ${
                isDayOpen ? "text-blue-500" : "text-gray-500"
              }`}
              onClick={() => {
                setIsDayOpen(!isDayOpen);
                setIsMonthOpen(false);
              }}
            >
              {checkOutDay}
              <span
                className="material-symbols-outlined transform transition duration-300 flex items-center"
                style={{
                  transform: isDayOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                arrow_drop_down
              </span>
            </div>
            {isDayOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-md text-sm grid grid-cols-6 px-1 gap-1 w-32 z-50">
                {daysArray.map((day) => (
                  <div
                    key={day}
                    className={`cursor-pointer hover:bg-blue-100 px-2 flex justify-center rounded w-full font-semibold text-gray-500 ${
                      checkOutDay === day ? "text-primaryBlue" : ""
                    }`}
                    onClick={() => handleDaySelect(day)}
                  >
                    {day}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutDate;
