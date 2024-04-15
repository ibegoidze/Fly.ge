import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setTransferFilter } from "../../../Store/SearchFlights/transferSlice";

const TransferFilter = ({ selectorText }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const selectorRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedTransfer, setSelectedTransfer] = useState(null);

  const toggleDropdown = () => setIsOpen((prevState) => !prevState);

  const handleTransferChange = (transferName) => {
    setSelectedTransfer(transferName);
    setIsOpen(false);
    dispatch(setTransferFilter(transferName));
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  return (
    <div className="relative">
      <div
        ref={selectorRef}
        className={`cursor-pointer flex items-center justify-between w-46 px-2 lg:px-4 bg-gray-100 text-sm  font-medium ${
          isOpen
            ? "text-blue-500 rounded-t-md  py-3"
            : "text-gray-600 rounded-md py-2"
        } `}
        onClick={toggleDropdown}
      >
        {selectorText}
        <span
          className="material-symbols-outlined transform transition duration-300 "
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          arrow_drop_down
        </span>
      </div>

      <div
        ref={dropdownRef}
        className={`absolute z-10 w-42 transition-all shadow-lg duration-300 bg-gray-100  rounded-md overflow-hidden whitespace-nowrap ${
          isOpen ? "opacity-100  " : "opacity-0"
        }`}
        style={{
          top: "100%",
          left: windowWidth <= 768 ? "50%" : undefined,
          transform: windowWidth <= 768 ? "translateX(-50%)" : "none",
          borderRadius: "0 0 0.375rem 0.375rem",
          height: isOpen ? "auto" : "0",
        }}
      >
        <div
          className="flex items-center px-4 py-2 cursor-pointer "
          onClick={() => handleTransferChange("Any")}
        >
          <span className="text-sm text-gray-600">Any</span>
        </div>
        <div
          className="flex items-center px-4 py-2 cursor-pointer "
          onClick={() => handleTransferChange("1")}
        >
          <span className="text-sm text-gray-600">1</span>
        </div>
        <div
          className="flex items-center px-4 py-2 cursor-pointer "
          onClick={() => handleTransferChange("2")}
        >
          <span className="text-sm text-gray-600">2</span>
        </div>
        <div
          className="flex items-center px-4 py-2 cursor-pointer "
          onClick={() => handleTransferChange("none")}
        >
          <span className="text-sm text-gray-600">none</span>
        </div>
      </div>
    </div>
  );
};

export default TransferFilter;
