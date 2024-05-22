import React, { useState, useEffect, useRef } from "react";
import PassengerPic from "../../../assets/Tickets/images/Passengers.png";
import AdultPic from "../../../assets/Tickets/images/Adult.svg";
import ChildPic from "../../../assets/Tickets/images/Child.svg";
import BabyPic from "../../../assets/Tickets/images/Baby.svg";
import DisabledManSvg from "../../../assets/Tickets/images/Disabled.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "../../../Store/SearchFlights/passengerSlice";
import { useTranslation } from "react-i18next";
import { useClickOutside } from "../../../utility";

const Passengers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const passengers = useSelector((state) => state.passengers.passengers);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSubmit = () => {
    setIsOpen(false);
  };

  const icons = {
    Adult: AdultPic,
    Child: ChildPic,
    Newborn: BabyPic,
    Disabled: DisabledManSvg,
  };

  // USEEFFECT CLICK OUTSIDE CLOSING THE DROPDOWN
  useClickOutside(dropdownRef, setIsOpen);

  const renderPassengerOptions = () => {
    return Object.entries(passengers).map(([type, { count, description }]) => (
      <div
        key={type}
        className="px-4 py-2 hover:bg-gray-50 flex items-center text-custom-gray"
      >
        <img src={icons[type]} alt={`${type} icon`} className="mr-2" />
        <div className="flex-grow">
          <span>{t(type)}</span>
          <div className="text-gray-400 text-xs">{t(description)}</div>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => dispatch(decrement(type))}
            className="bg-gray-100 rounded-md px-1 py-1 mr-2 flex items-center justify-center active:bg-primaryBlue"
          >
            <span className="material-symbols-outlined text-custom-gray w-7 h-7 pt-0.5 active:text-white">
              remove
            </span>
          </button>
          <span className="bg-white rounded-md font-medium w-9 h-9 flex items-center justify-center border border-custom-grey">
            {count}
          </span>
          <button
            onClick={() => dispatch(increment(type))}
            className="bg-gray-100 rounded-md px-1 py-1 ml-2 flex items-center justify-center active:bg-primaryBlue"
          >
            <span className="material-symbols-outlined text-custom-gray w-7 h-7 pt-0.5 active:text-white">
              add
            </span>
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="inline-block text-left relative" ref={dropdownRef}>
      {/* SELECTOR */}
      <div
        onClick={toggleDropdown}
        className={`cursor-pointer flex items-center justify-between w-38 px-2 lg:px-4 py-2 bg-white text-sm font-medium ${
          isOpen ? "text-blue-500" : "text-gray-700"
        } hover:bg-gray-50 rounded-md`}
        style={{ borderRadius: "0.375rem" }}
      >
        <img src={PassengerPic} alt="Passengers" className="w-4 h-4 mr-2" />
        <span className="hidden md:inline flex-1 mr-2">{t("Passenger")}</span>
        <span
          className="material-symbols-outlined transform transition duration-300 ml-0 lg:ml-2"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          arrow_drop_down
        </span>
      </div>
      {/* DROPDOWN */}
      <div
        className={`absolute z-10 w-80 bg-white shadow-md transition-all duration-300 overflow-hidden origin-top
          ${isOpen ? "opacity-100" : "opacity-0"} `}
        style={{
          top: "100%",
          left: windowWidth <= 768 ? "50%" : undefined,
          transform: windowWidth <= 768 ? "translateX(-50%)" : "none",
          borderRadius: "0 0 0.375rem 0.375rem",
          height: isOpen ? "auto" : "0",
        }}
      >
        {/* RENDERING PASSENGER TYPES */}
        {renderPassengerOptions()}
        {/* BUTTONS */}
        <div className="px-4 py-2 flex justify-between items-center">
          <button
            className="text-sm py-2.5 px-7 bg-transparent hover:bg-gray-100 rounded-md"
            onClick={() => dispatch(reset())}
          >
            {t("Cancel")}
          </button>
          <button
            className="text-sm py-2.5 px-7 bg-primaryBlue text-white hover:bg-blue-700 rounded-md"
            onClick={handleSubmit}
          >
            {t("Submit")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Passengers;
