import React, { useEffect, useState } from "react";
import RaceArrows from "../../../assets/Tickets/images/RaceArrows.png";

const DatePicker = ({
  selectedDate,
  onDateSelect,
  selectedEndDate,
  onCancel,
  onSubmit,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [localSelectedDate, setLocalSelectedDate] = useState(selectedDate);
  const [localSelectedEndDate, setLocalSelectedEndDate] =
    useState(selectedEndDate);

  const startOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth(), 1);
  const endOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const addMonths = (date, months) =>
    new Date(date.getFullYear(), date.getMonth() + months, 1);

  const formatDate = (date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;

  const isSelected = (date) => {
    return (
      formatDate(date) === formatDate(new Date(localSelectedDate)) ||
      formatDate(date) === formatDate(new Date(localSelectedEndDate))
    );
  };

  useEffect(() => {
    setLocalSelectedDate(selectedDate);
    setLocalSelectedEndDate(selectedEndDate);
  }, [selectedDate, selectedEndDate]);

  const isBetween = (date, start, end) => {
    if (!start || !end) return false;
    const startDate = new Date(
      formatDate(new Date(start || localSelectedDate))
    );
    const endDate = new Date(formatDate(new Date(end || localSelectedEndDate)));
    const checkDate = new Date(formatDate(date));
    return checkDate > startDate && checkDate < endDate;
  };

  const isDisabled = (day) => day < new Date().setHours(0, 0, 0, 0);

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

    start.setDate(1);

    while (days.length % 7 !== 0) {
      days.push(null);
    }

    return days;
  };

  const navigateMonths = (direction) => {
    const newMonth = addMonths(currentMonth, direction);
    setCurrentMonth(newMonth);
  };

  const calculateNights = () => {
    if (!localSelectedDate || !localSelectedEndDate) return 0;
    const startDate = new Date(localSelectedDate);
    const endDate = new Date(localSelectedEndDate);
    const timeDiff = endDate - startDate;
    const daysDiff = timeDiff / (1000 * 3600 * 24);
    return daysDiff;
  };
  const currentMonthDays = generateCalendarDays(currentMonth);
  const nextMonth = addMonths(currentMonth, 1);
  const nextMonthDays = generateCalendarDays(nextMonth);

  return (
    <div className="bg-white p-4 rounded shadow-lg absolute w-full">
      <div className="flex justify-between items-center mb-4">
        {/* Previous Month Button */}
        <button
          onClick={() => navigateMonths(-1)}
          className="text-lg p-2 rounded hover:bg-gray-200"
        >
          &lt;
        </button>

        {/* Current Month Label */}
        <span className="text-lg font-semibold">
          {currentMonth.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </span>

        {/* Night Counter */}
        <span className="text-lg font-semibold">
          {calculateNights()} Nights
        </span>

        {/* Next Month Label */}
        <span className="text-lg font-semibold">
          {nextMonth.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </span>

        {/* Next Month Button */}
        <button
          onClick={() => navigateMonths(1)}
          className="text-lg p-2 rounded hover:bg-gray-200"
        >
          &gt;
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[currentMonthDays, nextMonthDays].map((monthDays, index) => (
          <div key={index} className="flex flex-col">
            <div className="grid grid-cols-7 text-center">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (day, idx) => (
                  <div key={idx} className="font-bold">
                    {day}
                  </div>
                )
              )}
            </div>
            <div className="grid grid-cols-7">
              {monthDays.map((day, idx) => (
                <div
                  key={idx}
                  className={`cursor-pointer ${
                    day
                      ? isSelected(day)
                        ? "bg-primaryBlue text-white rounded-sm"
                        : isBetween(day, selectedDate, selectedEndDate)
                        ? "bg-lightBlue"
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
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="icondiv flex justify-center items-center px-2 py-2 rounded bg-lightBlue">
            <img src={RaceArrows} alt="Race arrows" />
          </div>
          <div className="racediv">From - To</div>
        </div>
        <div className="flex justify-end items-center space-x-2">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-black  py-2 px-4 rounded"
            onClick={() => {
              setLocalSelectedDate(null);
              setLocalSelectedEndDate(null);
              onCancel();
            }}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded"
            onClick={() => {
              onSubmit(localSelectedDate, localSelectedEndDate);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
