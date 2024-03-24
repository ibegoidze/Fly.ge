import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const MonthDropdown = ({ currentMonth, onMonthChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const months = Array.from({ length: 12 }, (_, index) =>
    new Date(0, index).toLocaleString("default", { month: "long" })
  );
  const { t } = useTranslation();

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

  const handleMonthSelect = (monthIndex) => {
    onMonthChange(monthIndex);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <div
        className={`flex items-center justify-between cursor-pointer px-4 py-2 ${
          isOpen ? "text-blue-500" : "bg-white text-gray-900"
        } border border-gray-300 rounded-md w-36`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {t(`${months[currentMonth]}`)}
        <span
          className="material-symbols-outlined"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          arrow_drop_down
        </span>
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {months.map((month, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-textDark hover:text-primaryBlue"
              onClick={() => handleMonthSelect(index)}
            >
              {t(`${month}`)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MonthDropdown;
