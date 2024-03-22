import React, { useEffect, useState } from "react";

const DatePicker = ({ selectedDate, onDateSelect, selectedEndDate }) => {
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

  const currentMonthDays = generateCalendarDays(currentMonth);
  const nextMonth = addMonths(currentMonth, 1);
  const nextMonthDays = generateCalendarDays(nextMonth);

  return (
    <div className="bg-white p-4 rounded shadow-lg absolute w-full">
      <div className="grid grid-cols-2 gap-4">
        {[currentMonthDays, nextMonthDays].map((monthDays, index) => (
          <div key={index} className="flex flex-col">
            <div className="text-center font-bold">
              {index === 0
                ? currentMonth.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })
                : nextMonth.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
            </div>
            <div className="grid grid-cols-7 gap-1 mt-2 text-center">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, idx) => (
                <div key={idx} className="font-bold">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 mt-1">
              {monthDays.map((day, idx) => (
                <div
                  key={idx}
                  className={`cursor-pointer p-2 rounded-full ${
                    day
                      ? isSelected(day)
                        ? "bg-blue-500 text-white"
                        : isBetween(day, selectedDate, selectedEndDate)
                        ? "bg-blue-200"
                        : !isDisabled(day)
                        ? "text-black hover:bg-blue-100"
                        : "text-gray-400"
                      : "text-gray-400"
                  }`}
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
    </div>
  );
};

export default DatePicker;
