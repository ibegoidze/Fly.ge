import React, { useState, useEffect, useRef } from "react";
import DatePicker from "./DatePicker";
import CalendarPic from "../../../assets/Tickets/images/Calendar.png";

const DateSelector = () => {
  const [dates, setDates] = useState({ departure: null, return: null });
  const [showCalendar, setShowCalendar] = useState(false);
  const [selecting, setSelecting] = useState("departure");
  const calendarRef = useRef(null);
  const [isDepartureNext, setIsDepartureNext] = useState(true);

  // DATES SHOWN IN SELECTORS
  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const dayName = d.toLocaleString("en-US", { weekday: "short" });
    const day = d.getDate();
    const monthName = d.toLocaleString("en-US", { month: "long" });
    return `${dayName}, ${day} ${monthName}`;
  };
  // SELECTING THE CALENDAR DATES
  const handleDateSelect = (date) => {
    setDates((prevDates) => {
      const newSelectedDate = new Date(date);
      const currentDepartureDate = prevDates.departure
        ? new Date(prevDates.departure)
        : null;
      return currentDepartureDate && newSelectedDate < currentDepartureDate
        ? (setIsDepartureNext(false), { departure: date, return: null })
        : (() => {
            const currentReturnDate = prevDates.return
              ? new Date(prevDates.return)
              : null;
            return selecting === "departure"
              ? isDepartureNext
                ? (setIsDepartureNext(false), { departure: date, return: null })
                : currentDepartureDate && currentReturnDate
                ? (setIsDepartureNext(true), { departure: date, return: null })
                : (setIsDepartureNext(true), { ...prevDates, return: date })
              : !currentDepartureDate && !currentReturnDate
              ? (isDepartureNext
                  ? setIsDepartureNext(false)
                  : setIsDepartureNext(true),
                {
                  departure: isDepartureNext ? date : null,
                  return: isDepartureNext ? null : date,
                })
              : newSelectedDate <= currentDepartureDate
              ? (setIsDepartureNext(false), { departure: date, return: null })
              : (isDepartureNext
                  ? setIsDepartureNext(false)
                  : setIsDepartureNext(true),
                {
                  departure: isDepartureNext ? date : prevDates.departure,
                  return: isDepartureNext ? null : date,
                });
          })();
    });
  };

  // CLICK OUTSIDE CLOSES THE DATEPICKER
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {}, [dates]);

  const handleCancel = () => {
    setDates({ departure: null, return: null });
    setShowCalendar(false);
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
        <div
          className="w-full lg:w-1/2 h-full border-b lg:border-r flex flex-col justify-between px-2 py-1 cursor-pointer"
          onClick={() => {
            setShowCalendar(true);
            setSelecting("departure");
          }}
        >
          <div className="text-gray-400 text-sm w-full text-left ">
            Departure
          </div>
          <div className="flex justify-between text-black text-md font-semibold pb-2">
            {dates.departure
              ? formatDate(dates.departure)
              : "Select Departure Date"}
            <img src={CalendarPic} alt="Calendar" className="w-5 h-5" />
          </div>
        </div>
        <div
          className="w-full lg:w-1/2 h-full flex border-b flex-col justify-between px-2 py-1 cursor-pointer"
          onClick={() => {
            setShowCalendar(true);
            setSelecting("return");
          }}
        >
          <div className="text-gray-400 text-sm w-full text-left ">Return</div>
          <div className="flex justify-between text-black text-md font-semibold pb-2">
            {dates.return ? formatDate(dates.return) : "Select Return Date"}
            <img src={CalendarPic} alt="Calendar" className="w-5 h-5" />
          </div>
        </div>
        {showCalendar && (
          <div
            ref={calendarRef}
            className="absolute z-20 bg-white shadow-lg rounded-lg w-full lg:w-[calc(100%+10rem)]"
            style={{ right: "0", top: "0" }}
          >
            <DatePicker
              selectedDate={dates.departure}
              selectedEndDate={dates.return}
              onDateSelect={handleDateSelect}
              onCancel={handleCancel}
              onSubmit={(departure, returnDate) => {
                setDates({ departure, return: returnDate });
                setShowCalendar(false);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default DateSelector;
