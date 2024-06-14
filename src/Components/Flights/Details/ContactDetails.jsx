import React, { useRef, useState, useEffect } from "react"; // IMPORT USEEFFECT
import { useDispatch, useSelector } from "react-redux";
import InputTemplate from "./InputTemplate";
import {
  isValidEmail,
  isValidNumber,
} from "../../../Store/SearchFlights/validationSlice";
import { setMainPassengerPhone } from "../../../Store/User/mainPassengerSlice";
import { useTranslation } from "react-i18next";
import { useClickOutside } from "../../../utility";

import MailPic from "../../../assets/Flights/Details/MailPic.png";
import GeoFlag from "../../../assets/Global/images/flag.png";
import UKFlag from "../../../assets/Global/images/united-kingdom.png";
import GerFlag from "../../../assets/Global/images/german-flag.png";

const countryCode = [
  { name: "Georgia", code: "GE", dialCode: "995", flag: GeoFlag },
  { name: "United States", code: "US", dialCode: "1", flag: UKFlag },
  { name: "Germany", code: "GER", dialCode: "44", flag: GerFlag },
];

function ContactDetails() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const mainPassengerPhone = useSelector(
    (state) => state.mainPassenger.mainPassengerPhone
  );
  const mainPassengerTemplate = useSelector(
    (state) => state.mainPassenger.mainPassengerTemplate
  );
  const [selectedCountry, setSelectedCountry] = useState(countryCode[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const dropdownRef = useRef(null);
  const selectorRef = useRef(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  // HANDLE TEMPLATE CHANGES
  useEffect(() => {
    if (
      ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Jeff Bezos"].includes(
        mainPassengerTemplate
      )
    ) {
      const usa = countryCode.find(
        (country) => country.name === "United States"
      );
      setSelectedCountry(usa);
    } else if (mainPassengerTemplate === "Irakli Begoidze") {
      const geo = countryCode.find((country) => country.name === "Georgia");
      setSelectedCountry(geo);
    }
  }, [mainPassengerTemplate, dispatch]);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    dispatch(setMainPassengerPhone(""));
    setIsOpen(false);
    setIsValid(false);
  };

  const handlePhoneNumberChange = (event) => {
    const input = event.target.value;
    const dialCode = `+${selectedCountry.dialCode}`;
    let phoneNumber = input.startsWith(dialCode)
      ? input.slice(dialCode.length)
      : input.replace(/\D/g, "");

    // VALIDATE PHONE NUMBER WITH MINIMUM LENGTH OF 6
    setIsValid(isValidNumber(phoneNumber, 6));
    dispatch(setMainPassengerPhone(phoneNumber));
  };

  const handleKeyDown = (event) => {
    const input = event.target.value;
    const dialCode = `+${selectedCountry.dialCode}`;
    if (
      input === dialCode &&
      (event.key === "Backspace" || event.key === "Delete")
    ) {
      event.preventDefault();
    }
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mb-3 sm:mb-5">
      <InputTemplate
        title={"mail"}
        placeholder={"mail"}
        icon={MailPic}
        validationFunction={isValidEmail}
        inputType="email"
        width="w-full sm:w-1/2"
      />
      <div className="w-full sm:w-1/2">
        <label
          className="mb-1 text-sm text-gray-500 font-semibold outline-none"
          htmlFor="MainPassengerPhone"
        >
          {t("phoneNumber")}{" "}
          <span className={`${isValid ? "text-green-500" : "text-red-500"}`}>
            {isValid ? "✓" : "*"}
          </span>
        </label>
        <div
          className="flex items-center border border-gray-300 rounded relative mt-1"
          ref={dropdownRef}
        >
          <div
            className="border-r pl-2 pr-4  cursor-pointer flex items-center"
            onClick={toggleDropdown}
            ref={selectorRef}
          >
            <img src={selectedCountry.flag} alt="" className="w-5 h-5" />
            <span
              className="material-symbols-outlined transform duration-300 ml-1"
              style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              arrow_drop_down
            </span>
          </div>
          <input
            id="MainPassengerPhone"
            name="MainPassengerPhone"
            autoComplete="tel"
            type="text"
            placeholder="Phone number"
            value={`+${selectedCountry.dialCode}${mainPassengerPhone}`}
            onChange={handlePhoneNumberChange}
            onKeyDown={handleKeyDown}
            className="w-full px-3 py-3 py-full  h-full  text-sm focus:outline-none pr-10"
          />
          <div
            className={`absolute text-sm shadow-md z-50 rounded-lg transition-all duration-300 overflow-hidden ${
              isOpen
                ? "opacity-100 max-h-64 overflow-y-auto custom-scrollbar"
                : "opacity-0 max-h-0"
            }`}
            style={{
              top: "100%",
              left: selectorRef.current
                ? `${selectorRef.current.offsetLeft}px`
                : "0",
              width: selectorRef.current
                ? `${selectorRef.current.offsetWidth}px`
                : "auto",
              padding: "0.5rem 0",
            }}
          >
            {countryCode.map((country) => (
              <div
                key={country.code}
                onClick={() => handleCountryChange(country)}
                className="px-3 py-2 hover:bg-gray-200 cursor-pointer flex items-center bg-white"
              >
                <img src={country.flag} alt="" className="w-5 h-5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
