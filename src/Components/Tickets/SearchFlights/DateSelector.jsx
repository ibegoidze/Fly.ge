import React, { useState, useEffect, useRef } from "react";
import DatePicker from "./DatePicker";
import CalendarPic from "../../../assets/Tickets/images/Calendar.png";

const DateSelector = () => {
  const [dates, setDates] = useState({ departure: null, return: null });
  const [showCalendar, setShowCalendar] = useState(false);
  const [selecting, setSelecting] = useState("departure");
  const calendarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const dayName = d.toLocaleString("en-US", { weekday: "short" });
    const day = d.getDate();
    const monthName = d.toLocaleString("en-US", { month: "long" });
    return `${dayName}. ${day} ${monthName}`;
  };

  const handleDateSelect = (date) => {
    if (selecting === "departure") {
      setDates({ ...dates, departure: date });
      setSelecting("return");
    } else if (selecting === "return") {
      setDates({ ...dates, return: date });
      setShowCalendar(false);
      setSelecting("");
    }
  };

  return (
    <>
      {showCalendar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-10"
          onClick={() => setShowCalendar(false)}
        ></div>
      )}
      <div className="flex justify-center items-center lg:border border-solid border-borderGray rounded-md w-full lg:w-2/4 relative flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-full border-b lg:border-r flex flex-col justify-between px-2 py-1">
          <div className="text-gray-400 text-sm w-full text-left cursor-pointer">
            Departure
          </div>
          <div
            className="flex justify-between text-black text-md font-semibold cursor-pointer pb-2"
            onClick={() => {
              setShowCalendar(true);
              setSelecting("departure");
            }}
          >
            {dates.departure
              ? formatDate(dates.departure)
              : "Select Departure Date"}
            <img src={CalendarPic} alt="Calendar" className="w-5 h-5" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full flex border-b flex-col justify-between px-2 py-1">
          <div className="text-gray-400 text-sm w-full text-left cursor-pointer">
            Return
          </div>
          <div
            className="flex justify-between text-black text-md font-semibold cursor-pointer pb-2"
            onClick={() => {
              setShowCalendar(true);
              setSelecting("return");
            }}
          >
            {dates.return ? formatDate(dates.return) : "Select Return Date"}
            <img src={CalendarPic} alt="Calendar" className="w-5 h-5" />
          </div>
        </div>
        {showCalendar && (
          <div
            ref={calendarRef}
            className="absolute z-20 bg-white shadow-lg rounded-lg w-full lg:w-[calc(100%+7rem)]"
            style={{ right: "0", top: "0" }}
          >
            <DatePicker
              selectedDate={
                selecting === "departure" ? dates.departure : dates.return
              }
              onDateSelect={handleDateSelect}
            />
          </div>
        )}
        <div></div>
      </div>
    </>
  );
};

export default DateSelector;
