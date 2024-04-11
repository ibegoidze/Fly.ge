import React, { useState, useEffect, useRef } from "react";
import DatePicker from "./DatePicker";
import CalendarPic from "../../../assets/Tickets/images/Calendar.png";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  setDates as setReduxDates,
  setIsDepartureNext,
  resetDateSelection,
} from "../../../Store/SearchFlights/dateSlice";

const DateSelector = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selecting, setSelecting] = useState("departure");
  const calendarRef = useRef(null);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { dates, isDepartureNext } = useSelector(
    (state) => state.dateSelection
  );

  // FORMATING THE DATE IN SELECTOR
  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const dayName = d.toLocaleString("en-US", { weekday: "short" });
    const day = d.getDate();
    const monthName = d.toLocaleString("en-US", { month: "long" });
    return `${t(dayName)}, ${day} ${t(monthName)}`;
  };

  // HANDLE DATE SELECTION IN CALENDAR
  const handleDateSelect = (date) => {
    const newSelectedDate = new Date(date);
    const currentDepartureDate = dates.departure
      ? new Date(dates.departure)
      : null;
    if (currentDepartureDate && newSelectedDate < currentDepartureDate) {
      dispatch(setIsDepartureNext(false));
      dispatch(setReduxDates({ departure: date, return: null }));
    } else {
      const newDates = (() => {
        const currentReturnDate = dates.return ? new Date(dates.return) : null;
        if (selecting === "departure") {
          if (
            isDepartureNext ||
            (!currentDepartureDate && !currentReturnDate)
          ) {
            dispatch(setIsDepartureNext(false));
            return { departure: date, return: null };
          } else if (currentDepartureDate && currentReturnDate) {
            dispatch(setIsDepartureNext(true));
            return { departure: date, return: null };
          } else {
            dispatch(setIsDepartureNext(true));
            return { ...dates, return: date };
          }
        } else {
          if (newSelectedDate <= currentDepartureDate) {
            dispatch(setIsDepartureNext(false));
            return { departure: date, return: null };
          } else {
            dispatch(setIsDepartureNext(!isDepartureNext));
            return {
              departure: isDepartureNext ? date : dates.departure,
              return: isDepartureNext ? null : date,
            };
          }
        }
      })();
      dispatch(setReduxDates(newDates));
    }
  };

  // CLICK OUTSIDE CLOSES THE CALENDAR
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // CLEAR BUTTON
  const handleClearDates = () => {
    dispatch(resetDateSelection());
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
            {t("Departure")}
          </div>
          <div className="flex justify-between text-black text-md font-medium pb-2">
            {dates.departure
              ? formatDate(dates.departure)
              : t("Select Departure Date")}
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
          <div className="text-gray-400 text-sm w-full text-left ">
            {t("Return")}
          </div>
          <div className="flex justify-between text-black text-md font-medium pb-2">
            {dates.return ? formatDate(dates.return) : t("Select Return Date")}
            <img src={CalendarPic} alt="Calendar" className="w-5 h-5" />
          </div>
        </div>
        <div
          ref={calendarRef}
          className={`absolute z-20 bg-white shadow-lg rounded-lg w-full lg:w-[calc(100%+10rem)] transition-all duration-500 ease-in-out transform-gpu 
          ${showCalendar ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          style={{ right: "0", top: "67px" }}
        >
          <DatePicker
            selectedDate={dates.departure}
            selectedEndDate={dates.return}
            onDateSelect={handleDateSelect}
            isOpen={showCalendar}
            onSubmit={(departure, returnDate) => {
              dispatch(setReduxDates({ departure, return: returnDate }));
              setShowCalendar(false);
            }}
            onClear={handleClearDates}
          />
        </div>
      </div>
    </>
  );
};

export default DateSelector;
