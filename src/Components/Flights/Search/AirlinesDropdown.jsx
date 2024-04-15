import React, { useState, useEffect, useRef } from "react";
import Switch from "@mui/material/Switch";

const AirlinesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const selectorRef = useRef(null);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Initialize windowWidth
  const [isSelected, setIsSelected] = useState(false);
  const label = { inputProps: { "aria-label": "Switch demo" } };

  // TOGGLE DROPDOWN VISIBILITY
  const toggleDropdown = () => setIsOpen((prevState) => !prevState);

  // HANDLE WINDOW RESIZE
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Update windowWidth on resize
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // HANDLE CLICK OUTSIDE DROPDOWN
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        event.target !== selectorRef.current
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectorRef]);

  // Handle airline selection
  const handleAirlineSelection = (airline) => {
    setSelectedAirlines((prev) =>
      prev.includes(airline)
        ? prev.filter((selectedAirline) => selectedAirline !== airline)
        : [...prev, airline]
    );
  };

  // Toggle switch to select/deselect all airlines
  const toggleSwitch = () => {
    if (isSelected) {
      // Deselect all airlines
      setIsSelected(false);
      setSelectedAirlines([]);
    } else {
      // Select all airlines
      setIsSelected(true);
      setSelectedAirlines(["Airline 1", "Airline 2", "Airline 3"]);
    }
  };

  return (
    <div className="relative">
      {/* SELECTOR */}
      <div
        ref={selectorRef}
        className={`cursor-pointer flex items-center justify-between w-46 px-2 lg:px-4 ${
          isOpen ? "text-blue-500" : "text-gray-600"
        } bg-gray-100 text-sm font-medium ${
          isOpen ? "rounded-t-md py-2" : "rounded-md py-2"
        } `}
        onClick={toggleDropdown}
      >
        Airlines
        <span
          className="material-symbols-outlined transform transition duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          arrow_drop_down
        </span>
      </div>
      {/* DROPDOWN */}
      <div
        ref={dropdownRef}
        className={`absolute z-20 w-52 h-96 transition-all shadow-lg duration-300 bg-gray-100 rounded-md overflow-hidden whitespace-nowrap ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          left: windowWidth <= 768 ? "50%" : undefined,
          transform: windowWidth <= 768 ? "translateX(-50%)" : "none",
          borderRadius: "0 0 0.375rem 0.375rem",
          maxHeight: "200px",
          overflowY: "auto",
        }}
      >
        {/* CHECKBOX OPTIONS */}
        <div className="flex justify-between items-center px-4">
          <div>All Airlines</div>
          <Switch
            value="checkedA"
            inputProps={{ "aria-label": "Switch A" }}
            className="text-red-200"
            onClick={toggleSwitch}
            // color="gray-200"
          />
        </div>
        <div className="flex flex-col px-4 py-2">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleAirlineSelection("Airline 1")}
          >
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primaryBlue mr-2"
              checked={selectedAirlines.includes("Airline 1")}
              onChange={() => {}}
            />
            <span className="text-sm text-gray-600">Airline 1</span>
          </div>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleAirlineSelection("Airline 2")}
          >
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primaryBlue mr-2"
              checked={selectedAirlines.includes("Airline 2")}
              onChange={() => {}}
            />
            <span className="text-sm text-gray-600">Airline 2</span>
          </div>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleAirlineSelection("Airline 3")}
          >
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primaryBlue mr-2"
              checked={selectedAirlines.includes("Airline 3")}
              onChange={() => {}}
            />
            <span className="text-sm text-gray-600">Airline 3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirlinesDropdown;
