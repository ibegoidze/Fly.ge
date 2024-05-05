import React, { useState, useEffect, useRef } from "react";

const PageSizeDropdown = ({ pageSizeOptions, pageSize, setPageSize }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setPageSize(option);
    setIsOpen(false);
  };

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
        <span className="flex-1">{pageSize}</span>
        <span
          className="material-symbols-outlined transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        ></span>
      </div>
      <div
        className={`absolute shadow-md z-10  bg-white rounded-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{
          top: "100%",
          left: "0",
          maxHeight: isOpen ? "10rem" : "0",
        }}
      >
        {pageSizeOptions.map((option) => (
          <div
            key={option}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center rounded-lg"
            onClick={() => handleOptionClick(option)}
          >
            <span>{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageSizeDropdown;
