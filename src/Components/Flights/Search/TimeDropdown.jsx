import React, { useState, useRef, useEffect } from "react";
import Slider from "@mui/material/Slider";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  setDepartureTime,
  setReturnTime,
} from "../../../Store/SearchFlights/timesSlice";

import DeparturePlane from "../../../assets/Tickets/images/AirportFrom.png";
import ReturnPlane from "../../../assets/Tickets/images/AirportTo.png";
import Arrows from "../../../assets/Flights/Search/twoWayArrow.png";

const TimeDropdown = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // ON MOBILE RESPONSIVE DROPDOWN OPENS IN CENTER
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { selectedFromAirport, selectedToAirport } = useSelector(
    (state) => state.airports
  );
  const { departureTime, returnTime } = useSelector((state) => state.times);

  // FUNCTION TO TOGGLE DROPDOWN VISIBILITY
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // CLICK OUTSIDE CLOSES THE DROPDOWN
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

  // HANDLE DEPARTURE TIME CHANGE
  const handleDepartureChange = (event, newValue) => {
    dispatch(setDepartureTime(newValue));
  };

  // HANDLE RETURN TIME CHANGE
  const handleReturnChange = (event, newValue) => {
    dispatch(setReturnTime(newValue));
  };

  // FORMAT HOUR DISPLAY
  const formatHour = (value) => {
    return `${value < 10 ? "0" + value : value}:00`;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* SELECTOR */}
      <div
        className={`cursor-pointer flex items-center justify-between w-46 px-2 lg:px-4 w-22 ${
          isOpen ? "text-blue-500" : "text-gray-600"
        } bg-gray-100 text-sm font-medium ${
          isOpen ? "rounded-t-md py-2" : "rounded-md py-2"
        } `}
        onClick={toggleDropdown}
      >
        {t("Time")}
        <span
          className="material-symbols-outlined transform transition duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          arrow_drop_down
        </span>
      </div>
      {/* DROPDOWN */}
      <div
        className={`absolute z-20 w-72 sm:w-80 shadow-sm bg-gray-100 rounded-md overflow-y-hidden transition-all duration-300
        ${isOpen ? "pacity-100" : "opacity-0 pointer-events-none"}`}
        style={{
          maxHeight: "250px",
          transform: windowWidth <= 768 ? "translateX(-71.5%)" : "none",
          borderRadius:
            windowWidth <= 768
              ? "0 0 0.375rem 0.375rem"
              : "0 0.375rem 0.375rem 0.375rem",
        }}
      >
        <div className="text-md font-medium text-gray-500 flex items-center gap-2 px-6 pt-5">
          {t(selectedFromAirport?.city) || "Departure"}{" "}
          <img src={Arrows} alt="" /> {t(selectedToAirport?.city) || "Return"}
        </div>
        <div className="px-6 py-2 sm:py-5 ">
          <div className="mb-2 sm:mb-4">
            <div className="flex items-center mb-3">
              <img src={DeparturePlane} alt="" className="mr-2" />
              <span className="text-gray-400 font-medium flex mx-1">
                {t("Departure")} -{" "}
              </span>
              <span className="text-primaryBlue font-medium">
                {formatHour(departureTime[0])} - {formatHour(departureTime[1])}
              </span>
            </div>
            {/* SLIDER FOR DEPARTURE TIME */}
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
              <img src={ReturnPlane} alt="" className="mr-2" />
              <span className="text-gray-400 font-medium flex mx-1">
                {t("Return")} -{" "}
              </span>
              <span className="text-primaryBlue font-medium">
                {formatHour(returnTime[0])} - {formatHour(returnTime[1])}
              </span>
            </div>
            {/* SLIDER FOR RETURN TIME */}
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
