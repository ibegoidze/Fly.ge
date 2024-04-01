import React, { useState, useEffect, useRef } from "react";
import arrowOneWay from "../../../assets/Tickets/images/arrowOneWay.png";
import arrowTwoWay from "../../../assets/Tickets/images/arrowTwoWay.png";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { setDropdownOption } from "../../../Store/SearchFlights/OneWaySlice";

const OneWay = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  // REDUX STATE
  const oneWayState = useSelector((state) => state.oneWay.oneWayState);

  // TRANSLATING INITIAL STATE
  useEffect(() => {
    dispatch(setDropdownOption(t("Bilateral")));
  }, [dispatch, t, i18n.language]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // SWITCH OPTION UPDATES REDUX STORE
  const switchOption = (option) => {
    dispatch(setDropdownOption(option));
    setIsOpen(false);
  };

  const getIcon = () =>
    oneWayState === t("Bilateral") ? arrowTwoWay : arrowOneWay;

  const options = [
    { value: "Bilateral", label: t("Bilateral"), icon: arrowTwoWay },
    { value: "Unilateral", label: t("Unilateral"), icon: arrowOneWay },
  ];

  // ON MOBILE SIZE DROPDOWN OPENS IN CENTER
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // CLICK OUTSIDE CLOSES THE DROPDOWN
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="inline-block text-left relative" ref={dropdownRef}>
      <div
        onClick={toggleDropdown}
        className={`cursor-pointer flex items-center justify-between px-2 lg:px-4 py-2 bg-white text-sm font-medium ${
          isOpen ? "text-blue-500" : "text-gray-700"
        } hover:bg-gray-50`}
        style={{ borderRadius: "0.375rem" }}
      >
        <img
          src={getIcon()}
          alt="Flight Type Icon"
          className="w-4 mr-0 lg:mr-2"
        />
        {windowWidth > 768 ? (
          <span className="flex-1">{oneWayState}</span>
        ) : null}
        <span
          className="material-symbols-outlined transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          arrow_drop_down
        </span>
      </div>
      <div
        className={`absolute shadow-md z-10 w-40 bg-white rounded-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{
          top: "100%",
          left: windowWidth <= 768 ? "50%" : "0",
          transform: windowWidth <= 768 ? "translateX(-50%)" : "none",
          maxHeight: isOpen ? "10rem" : "0",
        }}
      >
        {options
          .filter((option) => option.label !== oneWayState)
          .map((option) => (
            <div
              key={option.value}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center rounded-lg"
              onClick={() => switchOption(option.label)}
            >
              <img
                src={option.icon}
                alt={`${option.value} Icon`}
                className="w-4 mr-2"
              />
              <span>{option.label}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OneWay;
