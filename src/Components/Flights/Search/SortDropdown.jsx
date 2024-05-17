import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import BestOnes from "../../../assets/Flights/Search/BestOnes.png";

const SortDropdown = ({ handleSort, currentFlights }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Best");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    handleSort(option);
    setSelectedOption(option);
    setIsOpen(false);
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

  return (
    <div>
      {currentFlights.length === 0 ? (
        <div></div>
      ) : (
        <div className="relative mb-5" ref={dropdownRef}>
          <div
            onClick={toggleDropdown}
            className={`flex items-center gap-2 justify-between cursor-pointer px-2 lg:px-4 py-2 text-sm font-medium text-gray-500 ${
              isOpen ? "bg-white text-primaryBlue rounded-t-md" : " rounded-md"
            }`}
          >
            <img src={BestOnes} alt="" className="w-6 h-6" />
            <span>{selectedOption}</span>
            <span
              className={`material-symbols-outlined transform transition duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              arrow_drop_down
            </span>
          </div>
          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-md -mt-px">
              {selectedOption !== "Best" && (
                <div
                  className={`px-4 py-2 text-sm pl-5 font-medium text-gray-500 hover:bg-gray-100 cursor-pointer ${
                    selectedOption === "Best" ? "font-bold" : ""
                  }`}
                  onClick={() => handleOptionClick("Best")}
                >
                  {t("Best")}
                </div>
              )}
              {selectedOption !== "Cheapest" && (
                <div
                  className={`px-4 py-2 text-sm pl-5 font-medium text-gray-500 hover:bg-gray-100 cursor-pointer ${
                    selectedOption === "Cheapest" ? "font-bold" : ""
                  }`}
                  onClick={() => handleOptionClick("Cheapest")}
                >
                  {t("Cheapest")}
                </div>
              )}
              {selectedOption !== "Fastest" && (
                <div
                  className={`px-4 py-2 text-sm pl-5 font-medium text-gray-500 hover:bg-gray-100 cursor-pointer ${
                    selectedOption === "Fastest" ? "font-bold" : ""
                  }`}
                  onClick={() => handleOptionClick("Fastest")}
                >
                  {t("Fastest")}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
