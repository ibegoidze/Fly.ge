import React, { useState, useRef, useEffect } from "react";
import Slider from "@mui/material/Slider";
import { useSelector, useDispatch } from "react-redux";
import {
  setDepartureTime,
  setReturnTime,
} from "../../../Store/SearchFlights/timesSlice";

const TimeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  const { departureTime, returnTime } = useSelector((state) => state.times);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDepartureChange = (event, newValue) => {
    dispatch(setDepartureTime(newValue));
  };

  const handleReturnChange = (event, newValue) => {
    dispatch(setReturnTime(newValue));
  };

  const formatHour = (value) => {
    return `${value < 10 ? "0" + value : value}:00`;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* SELECTOR */}
      <div
        className={`cursor-pointer flex items-center justify-between w-46 px-2 lg:px-4 ${
          isOpen ? "text-blue-500" : "text-gray-600"
        } bg-gray-100 text-sm font-medium ${
          isOpen ? "rounded-t-md py-2" : "rounded-md py-2"
        } `}
        onClick={toggleDropdown}
      >
        Time
        <span
          className="material-symbols-outlined transform transition duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          arrow_drop_down
        </span>
      </div>
      {/* DROPDOWN */}
      <div
        className={`absolute z-20 w-72 shadow-sm bg-gray-100 rounded-md overflow-y-hidden transition-all duration-300
    ${isOpen ? "max-h-52 opacity-100" : "max-h-0 opacity-0"}
  `}
        style={{ borderRadius: "0 0.375rem 0.375rem 0.375rem" }}
      >
        <div className="text-sm text-gray-500 flex items-center gap-2 px-6 pt-5">
          Departure <span>-</span> Return
        </div>
        <div className="px-6 py-5 ">
          <div className="mb-4">
            <div className="flex items-center mb-3">
              <span className="text-gray-400 font-medium flex mx-1">
                Departure -{" "}
              </span>
              <span className="text-primaryBlue font-medium">
                {formatHour(departureTime[0])} - {formatHour(departureTime[1])}
              </span>
            </div>
            <Slider
              size="small"
              value={departureTime}
              step={2}
              onChange={handleDepartureChange}
              valueLabelDisplay="auto"
              valueLabelFormat={formatHour}
              min={0}
              max={24}
            />
          </div>
          <div>
            <div className="flex items-center mb-3">
              <span className="text-gray-400 font-medium flex mx-1">
                Return -{" "}
              </span>
              <span className="text-primaryBlue font-medium">
                {formatHour(returnTime[0])} - {formatHour(returnTime[1])}
              </span>
            </div>
            <Slider
              size="small"
              value={returnTime}
              step={2}
              onChange={handleReturnChange}
              valueLabelDisplay="auto"
              valueLabelFormat={formatHour}
              min={0}
              max={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeDropdown;
