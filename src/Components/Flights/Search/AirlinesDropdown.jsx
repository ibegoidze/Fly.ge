import React, { useEffect, useRef, useState } from "react"; // USESTATE FOR MANAGING OPEN/CLOSE STATE
import { useSelector, useDispatch } from "react-redux";
import Switch from "@mui/material/Switch";
import {
  toggleDropdown,
  toggleAllAirlines,
  toggleAirlineSelection,
  closeDropdown,
} from "../../../Store/SearchFlights/airlinesSlice";

const AirlinesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedAirlines = useSelector(
    (state) => state.airlines.selectedAirlines
  );
  const windowWidth = useSelector((state) => state.airlines.windowWidth);
  const selectorRef = useSelector((state) => state.airlines.selectorRef);
  const dispatch = useDispatch();

  const dropdownRef = useRef(null);

  // CLICK OUTSIDE CLOSES DROPDOWN
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(closeDropdown());
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dispatch]);

  const toggleSwitch = () => {
    dispatch(toggleAllAirlines());
  };

  const handleAirlineSelection = (airline) => {
    dispatch(toggleAirlineSelection(airline));
  };
  const toggleDropdown = () => (isOpen ? setIsOpen(false) : setIsOpen(true));
  const airlines = [
    "Pegasus",
    "Turkish Airlines",
    "Wizzair",
    "Georgian Airways",
    "Ryanair",
    "Emirates",
    "Lufthansa",
    "Delta Air Lines",
    "British Airways",
    "Air France",
    "Qatar Airways",
    "Singapore Airlines",
  ];
  console.log("Selected Airlines:", selectedAirlines);
  return (
    <div className="relative">
      {/* SELECTOR */}
      <div
        ref={selectorRef}
        className={`cursor-pointer flex items-center justify-between w-46 px-2 lg:px-4 overflow-y-hidden ${
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
        className={`absolute z-20 w-52 transition-all shadow-lg duration-300 bg-gray-100 rounded-md overflow-y-hidden  ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          left: windowWidth <= 768 ? "50%" : undefined,
          transform: windowWidth <= 768 ? "translateX(-50%)" : "none",
          borderRadius: "0 0 0.375rem 0.375rem",
          overflow: "hidden",
        }}
      >
        <div className="h-96" style={{ maxHeight: "250px" }}>
          {/* CHECKBOX OPTIONS */}
          <div className="flex justify-between items-center px-4">
            <div>All Airlines</div>
            <Switch
              id="Switch"
              value="checkedA"
              inputProps={{ "aria-label": "Switch A" }}
              className="text-red-200"
              checked={selectedAirlines.length === airlines.length}
              onChange={toggleSwitch}
            />
          </div>
          <div className="flex flex-col px-4 py-2 gap-4 h-52 overflow-y-auto custom-scrollbar w-[calc(100%-4px)]">
            {airlines.map((airline, index) => (
              <div
                key={index}
                className="flex items-center cursor-pointer"
                onClick={() => handleAirlineSelection(airline)}
              >
                <input
                  id={airline}
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-primaryBlue mr-3"
                  checked={selectedAirlines.includes(airline)}
                  onChange={() => {}}
                />
                <span className="text-sm text-gray-600 font-medium ">
                  {airline}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirlinesDropdown;
