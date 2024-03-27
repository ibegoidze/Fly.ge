import React, { useEffect, useState } from "react";
import MonthDropdown from "./MonthDropdown";
import RaceArrows from "../../../assets/Tickets/images/RaceArrows.png";
import NightsPic from "../../../assets/Tickets/images/nightspic.png";
import { useTranslation } from "react-i18next";

const DatePicker = ({
  selectedDate,
  onDateSelect,
  selectedEndDate,
  onClear,
  onSubmit,
  isOpen,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [localSelectedDate, setLocalSelectedDate] = useState(selectedDate);
  const [localSelectedEndDate, setLocalSelectedEndDate] =
    useState(selectedEndDate);
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // UTILITY FUNCTIONS FOR DATE HANDLING
  const startOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth(), 1);
  const endOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const addMonths = (date, months) =>
    new Date(date.getFullYear(), date.getMonth() + months, 1);

  // FORMAT DATE IN STRING
  const formatDate = (date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;

  // CHECK IF DATE IS START OR END
  const isSelected = (date) => {
    return (
      formatDate(date) === formatDate(new Date(localSelectedDate)) ||
      formatDate(date) === formatDate(new Date(localSelectedEndDate))
    );
  };

  // UPDATE LOCAL DATE WHEN PROPS CHANGE
  useEffect(() => {
    setLocalSelectedDate(selectedDate);
    setLocalSelectedEndDate(selectedEndDate);
  }, [selectedDate, selectedEndDate]);

  // UPDATE CURRENT MONTH BASED ON DEPARTURE
  useEffect(() => {
    if (isOpen && selectedDate) {
      const selectedMonth = new Date(selectedDate);
      setCurrentMonth(
        new Date(selectedMonth.getFullYear(), selectedMonth.getMonth())
      );
    }
  }, [isOpen]);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // CHECK IF DATE IS BETWEEN START AND END DATE
  const isBetween = (date, start, end) => {
    if (!start || !end) return false;
    const startDate = new Date(
      formatDate(new Date(start || localSelectedDate))
    );
    const endDate = new Date(formatDate(new Date(end || localSelectedEndDate)));
    const checkDate = new Date(formatDate(date));
    return checkDate > startDate && checkDate < endDate;
  };

  // CHECK IF DAY IS BEFORE CURRENT DATE
  const isDisabled = (day) => day < new Date().setHours(0, 0, 0, 0);

  // GENERATE CALENDAR DAYS
  const generateCalendarDays = (start) => {
    let days = [];
    const startDayOfMonth = startOfMonth(start);
    const endDayOfMonth = endOfMonth(start);
    for (let i = 0; i < startDayOfMonth.getDay(); i++) {
      days.push(null);
    }
    for (
      let day = new Date(startDayOfMonth);
      day <= endDayOfMonth;
      day.setDate(day.getDate() + 1)
    ) {
      days.push(new Date(day));
    }
    while (days.length % 7 !== 0) {
      days.push(null);
    }
    return days;
  };

  // NAVIGATE FROM CURRENT MONTH
  const navigateMonths = (direction) => {
    const newMonth = addMonths(currentMonth, direction);
    setCurrentMonth(newMonth);
  };

  // CALCULATION OF THE NEXT MONTH BASED ON THE CURRENT MONTH
  const nextMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1
  );

  // CALCULATE NITGTS NUMBER
  const calculateNights = () => {
    if (!localSelectedDate || !localSelectedEndDate) return 0;
    const startDate = new Date(localSelectedDate);
    const endDate = new Date(localSelectedEndDate);
    const timeDiff = endDate - startDate;
    const daysDiff = timeDiff / (1000 * 3600 * 24);
    return daysDiff;
  };

  // GENERATE DAYS FOR THE CURRENT AND NEXT MONTH
  const currentMonthDays = generateCalendarDays(currentMonth);
  const nextMonthDays = generateCalendarDays(nextMonth);

  return (
    // MAIN CONTAINER
    <div className="bg-white p-4 rounded shadow-lg absolute w-full">
      {/* TOP CONTROL BAR WITH MONTH NAVIGATION AND NIGHTS COUNTER */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => navigateMonths(-1)}
          className="flex items-center justify-center text-lg p-2 rounded bg-gray-200"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        {/* CURRENT MONTH SELECTOR */}
        <div className="month-selection">
          <MonthDropdown
            currentMonth={currentMonth.getMonth()}
            onMonthChange={(monthIndex) => {
              setCurrentMonth(new Date(currentMonth.getFullYear(), monthIndex));
            }}
          />
        </div>
        {/* NUMBER OF NIGHTS */}
        <span className="hidden text-md font-semibold md:flex items-center  bg-primaryBlue text-white p-2.5 rounded gap-2 cursor-pointer">
          <img src={NightsPic} alt="Bed" /> {calculateNights()} {t("Nights")}
        </span>
        {/* // NEXT MONTH SELECTOR */}
        <div className="month-selection hidden md:flex">
          <MonthDropdown
            currentMonth={nextMonth.getMonth()}
            onMonthChange={(monthIndex) => {
              setCurrentMonth(new Date(currentMonth.getFullYear(), monthIndex));
            }}
          />
        </div>
        <button
          onClick={() => navigateMonths(1)}
          className="flex items-center justify-center text-lg p-2 rounded bg-gray-200"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
      {/* // CALENDAR GRID FOR CURRENT AND NEXT MONTH */}
      <div
        className={`grid ${
          windowWidth < 768 ? "grid-cols-1" : "grid-cols-2"
        } gap-4`}
      >
        {[currentMonthDays]
          .concat(windowWidth >= 768 ? [nextMonthDays] : [])
          .map((monthDays, index) => (
            <div key={index} className="flex flex-col">
              {/* WEEKDAY LABELS HEADER */}
              <div className="grid grid-cols-7 text-center">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day, idx) => (
                    <div key={idx} className="text-gray-300 font-semibold mb-5">
                      {day}
                    </div>
                  )
                )}
              </div>
              {/* DAYS GRID */}
              <div className="grid grid-cols-7">
                {monthDays.map((day, idx) => (
                  <div
                    key={idx}
                    className={`cursor-pointer font-semibold ${
                      day
                        ? isSelected(day)
                          ? "bg-primaryBlue text-white rounded-sm"
                          : isBetween(day, selectedDate, selectedEndDate)
                          ? "bg-lightBlue text-primaryBlue"
                          : !isDisabled(day)
                          ? "text-black hover:bg-blue-100"
                          : "text-gray-400"
                        : "text-gray-400"
                    } flex items-center justify-center w-full`}
                    style={{ width: "100%", height: "2.5rem" }}
                    onClick={() => {
                      if (day && !isDisabled(day)) {
                        const formattedDay = formatDate(day);
                        setLocalSelectedDate(formattedDay);
                        onDateSelect(formattedDay);
                      }
                    }}
                  >
                    {day ? day.getDate() : ""}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* // BOTTOM CONTROL BAR FOR CANCELLING OR SUBMITTING THE SELECTED DATES */}
      <div className="flex justify-between items-center mt-5">
        <div className="items-center gap-3 hidden md:flex">
          <div className="icondiv flex justify-center items-center px-2 py-2 rounded bg-lightBlue">
            <img src={RaceArrows} alt="Race arrows" />
          </div>
          <div className="text-primaryBlue font-semibold w-32">From - To</div>
        </div>
        {/* // CANCEL AND SUBMIT BUTTONS */}
        <div className="flex justify-between md:justify-end items-center space-x-2 w-full ">
          <div
            className="bg-gray-200 hover:bg-gray-300 text-gray-500 font-semibold px-2 py-1 md:py-2 md:px-6 rounded cursor-pointer"
            onClick={onClear}
          >
            {t("Clear")}
          </div>
          <div
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold  px-2 py-1 md:py-2 md:px-6 rounded"
            onClick={() => {
              onSubmit(localSelectedDate, localSelectedEndDate);
            }}
          >
            {t("Submit")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
