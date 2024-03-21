import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const EconomyClass = () => {
  const { t, ready } = useTranslation();
  const [selectedClass, setSelectedClass] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  // CLICK OUTSIDE OF COMPONENT CLOSES IT
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
  useEffect(() => {
    if (ready) {
      setSelectedClass(t("Economy class"));
    }
  }, [t, ready]);
  // CLASSES DATA
  const classes = [
    t("Economy class"),
    t("Premium class"),
    t("Business class"),
    t("First class"),
  ];
  // CHANGE CLASS
  const handleClassChange = (className) => {
    setSelectedClass(className);
    setIsOpen(false);
  };

  return (
    // SECTION CONTAINER
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* TOP DIV */}
      <div
        className="cursor-pointer flex items-center justify-between w-46 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="truncate">{selectedClass}</span>
        <span
          className="material-symbols-outlined transform transition duration-300 ml-2"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          arrow_drop_down
        </span>
      </div>
      {/* DROPDOWN */}
      {isOpen && (
        <div className="absolute z-10 mt-1 w-60 bg-white shadow-lg rounded-md overflow-hidden">
          {classes.map((className, index) => (
            <div
              key={className}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-50"
              onClick={() => handleClassChange(className)}
            >
              <div
                className={`rounded-full w-5 h-5 border-2 flex justify-center items-center mr-2 ${
                  selectedClass === className
                    ? "border-primaryBlue"
                    : "border-gray-400"
                }`}
              >
                {selectedClass === className && (
                  <div className="bg-primaryBlue rounded-full w-3 h-3"></div>
                )}
              </div>
              <span className="text-sm text-gray-700">{t(className)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EconomyClass;
