import React, { useState, useRef } from "react";
import { useClickOutside } from "../../../utility";

const PageSizeDropdown = ({ pageSizeOptions, pageSize, setPageSize }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setPageSize(option);
    setIsOpen(false);
  };

  // USEEFFECT CLICK OUTSIDE CLOSING THE DROPDOWN
  useClickOutside(dropdownRef, setIsOpen);

  return (
    <div
      className="text-left relative flex items-center gap-5"
      ref={dropdownRef}
    >
      <div
        onClick={toggleDropdown}
        className={`cursor-pointer flex gap-2 items-center w-20 justify-between px-2 lg:px-4 py-2 border border-gray-300 text-sm font-medium ${
          isOpen ? "text-blue-500" : "text-gray-700"
        } hover:bg-gray-50`}
        style={{ borderRadius: "0.375rem" }}
      >
        <span className="flex-1 ml-1">{pageSize}</span>

        <span
          className="material-symbols-outlined transform transition duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          arrow_drop_down
        </span>
      </div>

      <div
        className={`absolute shadow-md z-10 bg-backgroundGray w-full rounded-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{
          top: "100%",
          left: "0",
          maxHeight: isOpen ? "10rem" : "0",
          borderRadius: "0 0.375rem 0.375rem 0.375rem",
        }}
      >
        {pageSizeOptions.map((option) => (
          <div
            key={option}
            className="px-4 py-2 text-sm flex justify-center font-medium text-gray-700 hover:bg-gray-50 cursor-pointer items-center rounded-lg"
            onClick={() => handleOptionClick(option)}
          >
            <span>{option} </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageSizeDropdown;
