import React, { useState, useEffect, useRef } from "react";
import arrowOneWay from "../../../assets/Tickets/images/arrowOneWay.png";
import arrowTwoWay from "../../../assets/Tickets/images/arrowTwoWay.png";
import { useTranslation } from "react-i18next";

const Dropdown = () => {
  const { t, ready } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(() =>
    t("Bilateral", { defaultValue: "Bilateral" })
  );
  const dropdownRef = useRef(null);

  // CHANGE STATE WHEN LANGUAGE IS CHANGED
  useEffect(() => {
    if (ready) {
      setSelectedOption(t("Bilateral"));
    }
  }, [t, ready]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const switchOption = () => {
    setSelectedOption((currentOption) =>
      currentOption === t("Bilateral") ? t("Unilateral") : t("Bilateral")
    );
    setIsOpen(false);
  };

  const getIcon = () =>
    selectedOption === t("Bilateral") ? arrowTwoWay : arrowOneWay;

  return (
    <div
      className="inline-block text-left relative w-1/6"
      style={{ borderRadius: "0.375rem" }}
      ref={dropdownRef}
    >
      <div
        onClick={toggleDropdown}
        className="cursor-pointer flex items-center justify-between w-40 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        style={{
          borderRadius: isOpen ? "0.375rem 0.375rem 0 0" : "0.375rem",
        }}
      >
        <img src={getIcon()} alt="Flight Type Icon" className="w-4 mr-2" />
        <span className="flex-1">{selectedOption}</span>
        <span
          className="material-symbols-outlined transform transition duration-300 ml-2"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          arrow_drop_down
        </span>
      </div>
      <div
        className={`absolute shadow-md z-10 w-40 transition-all ease-in-out duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{
          top: "100%",
          left: 0,
          borderRadius: "0 0 0.375rem 0.375rem",
        }}
        onClick={switchOption}
      >
        <div
          className="px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center"
          style={{ borderRadius: "0.375rem" }}
        >
          <img
            src={selectedOption === t("Bilateral") ? arrowOneWay : arrowTwoWay}
            alt="Option Icon"
            className="w-4 mr-2"
          />
          <span>
            {selectedOption === t("Bilateral")
              ? t("Unilateral")
              : t("Bilateral")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
