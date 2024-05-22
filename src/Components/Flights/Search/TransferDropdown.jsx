import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setTransferFilter } from "../../../Store/SearchFlights/transferSlice";
import { useTranslation } from "react-i18next";

const TransferDropdown = ({ selectorText }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const selectorRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedTransfer, setSelectedTransfer] = useState("Any");

  // TOGGLE DROPDOWN VISIBILITY
  const toggleDropdown = () => setIsOpen((prevState) => !prevState);

  // HANDLE CHANGE OF TRANSFER
  const handleTransferChange = (transferName) => {
    setSelectedTransfer(transferName);
    setIsOpen(false);
    dispatch(setTransferFilter(transferName));
  };

  // HANDLE WINDOW RESIZE
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
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

  return (
    <div className="relative">
      {/* SELECTOR */}
      <div
        ref={selectorRef}
        className={`cursor-pointer flex items-center justify-between w-46 px-2 lg:px-4 ${
          isOpen ? "text-blue-500" : "text-gray-600"
        } bg-gray-100 text-xs sm:text-sm font-medium ${
          isOpen ? "rounded-t-md py-2" : "rounded-md py-2"
        } `}
        onClick={toggleDropdown}
      >
        {t(selectorText)}
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
        className={`absolute z-20 w-42 transition-all shadow-lg duration-300 bg-gray-100 rounded-md overflow-hidden whitespace-nowrap  ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          left: windowWidth <= 768 ? "50%" : undefined,
          transform: windowWidth <= 768 ? "translateX(-24.5%)" : "none",
          borderRadius: "0 0.375rem 0.375rem 0.375rem",
          maxHeight: "200px",
        }}
      >
        {/* OPTIONS */}
        <div
          className={`flex items-center px-4 py-2 cursor-pointer ${
            selectedTransfer === "Any" ? " text-white" : ""
          }`}
          onClick={() => handleTransferChange("Any")}
        >
          <div
            className={`rounded-full w-5 h-5 border-2 flex justify-center items-center mr-2 ${
              selectedTransfer === "Any"
                ? "border-primaryBlue"
                : "border-gray-400"
            }`}
          >
            {/* IF CURRENT OPTION IS ACTIVE, SHOW BLUE CIRCLE */}
            {selectedTransfer === "Any" && (
              <div className="bg-primaryBlue rounded-full w-3 h-3"></div>
            )}
          </div>
          <span className="text-sm text-gray-600">{t("Any quantity")}</span>
        </div>
        <div
          className={`flex items-center px-4 py-2 cursor-pointer ${
            selectedTransfer === "none" ? " text-white" : ""
          }`}
          onClick={() => handleTransferChange("none")}
        >
          <div
            className={`rounded-full w-5 h-5 border-2 flex justify-center items-center mr-2 ${
              selectedTransfer === "none"
                ? "border-primaryBlue"
                : "border-gray-400"
            }`}
          >
            {/* IF CURRENT OPTION IS ACTIVE, SHOW BLUE CIRCLE */}
            {selectedTransfer === "none" && (
              <div className="bg-primaryBlue rounded-full w-3 h-3"></div>
            )}
          </div>
          <span className="text-sm text-gray-600">{t("Without transfer")}</span>
        </div>
        <div
          className={`flex items-center px-4 py-2 cursor-pointer ${
            selectedTransfer === "1" ? " text-white" : ""
          }`}
          onClick={() => handleTransferChange("1")}
        >
          <div
            className={`rounded-full w-5 h-5 border-2 flex justify-center items-center mr-2 ${
              selectedTransfer === "1"
                ? "border-primaryBlue"
                : "border-gray-400"
            }`}
          >
            {/* IF CURRENT OPTION IS ACTIVE, SHOW BLUE CIRCLE */}
            {selectedTransfer === "1" && (
              <div className="bg-primaryBlue rounded-full w-3 h-3"></div>
            )}
          </div>
          <span className="text-sm text-gray-600">{t("1 or without")}</span>
        </div>
        <div
          className={`flex items-center px-4 py-2 cursor-pointer ${
            selectedTransfer === "2" ? " text-white" : ""
          }`}
          onClick={() => handleTransferChange("2")}
        >
          <div
            className={`rounded-full w-5 h-5 border-2 flex justify-center items-center mr-2 ${
              selectedTransfer === "2"
                ? "border-primaryBlue"
                : "border-gray-400"
            }`}
          >
            {/* IF CURRENT OPTION IS ACTIVE, SHOW BLUE CIRCLE */}
            {selectedTransfer === "2" && (
              <div className="bg-primaryBlue rounded-full w-3 h-3"></div>
            )}
          </div>
          <span className="text-sm text-gray-600">{t("2 or without")}</span>
        </div>
      </div>
    </div>
  );
};

export default TransferDropdown;
