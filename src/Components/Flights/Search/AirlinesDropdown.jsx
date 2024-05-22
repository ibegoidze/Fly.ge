import { useState, useRef } from "react";
import Switch from "@mui/material/Switch";
import {
  toggleAllAirlines,
  toggleAirlineSelection,
} from "../../../Store/SearchFlights/airlinesSlice";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useClickOutside } from "../../../utility";
import { airlines } from "../../../static.js";

const AirlinesDropdown = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const selectedAirlines = useSelector(
    (state) => state.airlines.selectedAirlines
  );
  const selectorRef = useSelector((state) => state.airlines.selectorRef);
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  // USEEFFECT CLICK OUTSIDE CLOSING THE DROPDOWN
  useClickOutside(dropdownRef, setIsOpen);

  // TOGGLE SELECT ALL SWITCH IN DROPDOWN
  const toggleSwitch = () => {
    dispatch(toggleAllAirlines());
  };

  // SELECTING EACH AIRLINE
  const handleAirlineSelection = (airline) => {
    dispatch(toggleAirlineSelection(airline));
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* SELECTOR */}
      <div
        ref={selectorRef}
        className={`cursor-pointer flex items-center justify-between w-46 px-2 lg:px-4 overflow-y-hidden ${
          isOpen ? "text-blue-500" : "text-gray-600"
        } bg-gray-100 text-xs sm:text-sm font-medium ${
          isOpen ? "rounded-t-md py-2" : "rounded-md py-2"
        } `}
        onClick={() => {
          setIsOpen((prevState) => !prevState);
        }}
      >
        {t("Airlines")}
        <span
          className="material-symbols-outlined transform transition duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          arrow_drop_down
        </span>
      </div>
      {/* DROPDOWN */}
      <div
        className={`absolute z-20 w-64 transition-all shadow-lg duration-300 bg-gray-100 rounded-md overflow-y-hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } sm:left-auto left-1/2 transform sm:transform-none -translate-x-1/2`}
        style={{
          maxHeight: "250px",
          borderRadius: "0 0.375rem 0.375rem 0.375rem",
        }}
      >
        <div className="h-96" style={{ maxHeight: "250px" }}>
          {/* CHECKBOX OPTIONS */}
          <div className="flex justify-between items-center text-sm px-4">
            <div className="text-gray-500 text-xs sm:text-sm ">
              {t("All Airlines")}
            </div>
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
