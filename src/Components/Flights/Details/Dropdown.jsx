import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBirthMonth,
  setBirthDay,
  setBirthYear,
  setCountry,
  setSex,
  setPassportIssueMonth,
  setPassportIssueDay,
  setPassportIssueYear,
  setPassportExpiryMonth,
  setPassportExpiryDay,
  setPassportExpiryYear,
  setPassportIssuingAuthority,
} from "../../../Store/User/mainPassengerSlice";
import { useClickOutside } from "../../../utility";
import { useTranslation } from "react-i18next";

const Dropdown = ({ title, options, type, size = "w-full" }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const selectedValue = useSelector((state) => state.mainPassenger[type]);
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // CUSTOM HOOK TO CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const handleChange = (value) => {
    switch (type) {
      case "birthMonth":
        dispatch(setBirthMonth(value));
        break;
      case "birthDay":
        dispatch(setBirthDay(value));
        break;
      case "birthYear":
        dispatch(setBirthYear(value));
        break;
      case "country":
        dispatch(setCountry(value));
        break;
      case "sex":
        dispatch(setSex(value));
        break;
      case "passportIssueMonth":
        dispatch(setPassportIssueMonth(value));
        break;
      case "passportIssueDay":
        dispatch(setPassportIssueDay(value));
        break;
      case "passportIssueYear":
        dispatch(setPassportIssueYear(value));
        break;
      case "passportExpiryMonth":
        dispatch(setPassportExpiryMonth(value));
        break;
      case "passportExpiryDay":
        dispatch(setPassportExpiryDay(value));
        break;
      case "passportExpiryYear":
        dispatch(setPassportExpiryYear(value));
        break;
      case "passportIssuingAuthority":
        dispatch(setPassportIssuingAuthority(value));
        break;
      default:
        break;
    }
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={`relative ${size}`} ref={dropdownRef}>
      <div
        className={`w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none cursor-pointer flex justify-between items-center ${
          isOpen ? "text-blue-500" : "text-gray-700"
        }`}
        onClick={toggleDropdown}
      >
        {t(selectedValue) || `${t(title)}`}
        <span
          className="material-symbols-outlined transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          arrow_drop_down
        </span>
      </div>
      <div
        className={`absolute text-sm shadow-md z-50 w-full bg-white rounded-lg transition-all duration-300 overflow-hidden ${
          isOpen
            ? "opacity-100 max-h-64 overflow-y-auto custom-scrollbar"
            : "opacity-0 max-h-0"
        }`}
        style={{
          top: "100%",
          padding: "0.5rem 0",
        }}
      >
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleChange(option)}
            className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
          >
            {t(option)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
