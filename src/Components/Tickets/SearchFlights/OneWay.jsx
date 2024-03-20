import React, { useState, useEffect, useRef } from "react";
import arrowOneWay from "../../../assets/Tickets/images/arrowOneWay.png";
import arrowTwoWay from "../../../assets/Tickets/images/arrowTwoWay.png";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("ორმხრივი");
  const dropdownRef = useRef(null);

  // TOGGLE DROPDOWN
  const toggleDropdown = () => setIsOpen(!isOpen);
  // CHANGE OPTIONS
  const switchOption = () => {
    setSelectedOption((currentOption) =>
      currentOption === "ორმხრივი" ? "ცალმხრივი" : "ორმხრივი"
    );
    setIsOpen(false);
  };
  // CLICK OUTSIDE CLOSES DROPDOWN
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getIcon = () =>
    selectedOption === "ორმხრივი" ? arrowTwoWay : arrowOneWay;

  return (
    // SECTION CONTAINER
    <div
      className="inline-block text-left relative"
      style={{ borderRadius: "0.375rem" }}
      ref={dropdownRef}
    >
      {/* VISIBLE OPTION */}
      <div
        onClick={toggleDropdown}
        className="cursor-pointer flex items-center justify-between w-40 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        style={{
          borderRadius: isOpen ? "0.375rem 0.375rem 0 0" : "0.375rem",
        }}
      >
        <img src={getIcon()} alt="Flight Type Icon" className="w-4 mr-2" />
        <span className="flex-1">{selectedOption}</span>
        <span
          className="material-symbols-outlined transform transition duration-300 ml-2 "
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          arrow_drop_down
        </span>
      </div>
      {/* DROPDOWN OPTION */}
      <div
        className={`absolute shadow-md z-10 w-40 transition-all ease-in-out duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } overflow-hidden`}
        style={{
          top: "100%",
          left: 0,
          borderRadius: "0 0 0.375rem 0.375rem",
        }}
        onClick={switchOption}
      >
        <div className="px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center">
          <img
            src={selectedOption === "ორმხრივი" ? arrowOneWay : arrowTwoWay}
            alt="Option Icon"
            className="w-4 mr-2"
          />
          <span>
            {selectedOption === "ორმხრივი" ? "ცალმხრივი" : "ორმხრივი"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
