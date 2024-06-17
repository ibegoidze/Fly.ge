import React, { useRef, useState } from "react";
import { useClickOutside } from "../../../utility";
import { useTranslation } from "react-i18next";

import BankPic from "../../../assets/Flights/Review/BankPic.png";

function BankDropdown({ selectedBank, onChangeBank, banks }) {
  const { t } = useTranslation();
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className="relative w-full mt-4 mb-1" ref={dropdownRef}>
      <div
        className={`w-full px-5 py-3 border border-gray-300 rounded-md text-sm focus:outline-none cursor-pointer flex justify-between items-center ${
          isOpen ? "text-blue-500" : "text-gray-700"
        }`}
        onClick={toggleDropdown}
      >
        {selectedBank ? (
          <div className="flex items-center gap-3">
            <img
              className="w-5 h-5"
              src={selectedBank.image}
              alt={selectedBank.name}
            />
            <span className={`text-${selectedBank.textClass} font-medium`}>
              {selectedBank.name}
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <img className="w-5 h-5" src={BankPic} alt="bank" />
            <span className="text-gray-700 font-medium">
              {t("Select a Bank")}
            </span>
          </div>
        )}
        <span
          className="material-symbols-outlined transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          arrow_drop_down
        </span>
      </div>
      <div
        className={`absolute z-30 text-sm shadow-md w-full bg-white rounded-lg transition-all duration-300 overflow-hidden
    ${
      isOpen
        ? "opacity-100 max-h-64 overflow-y-auto custom-scrollbar"
        : "opacity-0 max-h-0"
    }`}
        style={{ top: "100%" }}
      >
        {banks.map((bank, index) => (
          <div
            key={index}
            onClick={() => {
              onChangeBank(bank);
              setIsOpen(false);
            }}
            className={`px-5 py-3 hover:bg-blue-50 transition-all duration-100 cursor-pointer ${
              selectedBank && selectedBank.name === bank.name
                ? "bg-blue-50"
                : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <img className="w-5 h-5" src={bank.image} alt={bank.name} />
              <span className={` text-${bank.textClass} font-medium`}>
                {bank.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BankDropdown;
