import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Pricing from "./Pricing";
import FlightDetails from "./FlightDetails";
import ResponsiblePerson from "./ResponsiblePerson";
import MainPassenger from "./MainPassenger";
import TravelInsurance from "./TravelInsurance";
import { useNavigate } from "react-router-dom";
import {
  isValidName,
  isValidEmail,
  isValidCountry,
  isValidNumber,
  isValidBirthDate,
  isValidPassportIssueDate,
  isValidPassportExpireDate,
} from "../../../Store/SearchFlights/validationSlice";
import { useSelector } from "react-redux";

function TravelDetails({ selectedFlight, handleContinueButtonClick }) {
  const { t } = useTranslation();
  const mainPassengerRef = useRef(null);
  const [validationError, setValidationError] = useState(false);
  const mainPassenger = useSelector((state) => state.mainPassenger);
  const navigate = useNavigate();

  // CONTINIUE BUTTON TWICE IN PRICING AND END OF DETAILS
  const handleButtonClick = () => {
    const validations = {
      name: isValidName(mainPassenger.name),
      surname: isValidName(mainPassenger.surname),
      email: isValidEmail(mainPassenger.email),
      country: isValidCountry(mainPassenger.country),
      phone: isValidNumber(mainPassenger.mainPassengerPhone, 6),
      passportNumber: isValidNumber(mainPassenger.passportNumber, 6),
      birthDate: isValidBirthDate(
        mainPassenger.birthDay,
        mainPassenger.birthMonth,
        mainPassenger.birthYear
      ),
      passportIssueDate: isValidPassportIssueDate(
        mainPassenger.passportIssueMonth,
        mainPassenger.passportIssueDay,
        mainPassenger.passportIssueYear
      ),
      passportExpiryDate: isValidPassportExpireDate(
        mainPassenger.passportExpiryMonth,
        mainPassenger.passportExpiryDay,
        mainPassenger.passportExpiryYear,
        mainPassenger.passportIssueMonth,
        mainPassenger.passportIssueDay,
        mainPassenger.passportIssueYear
      ),
    };

    const failedValidations = Object.entries(validations)
      .filter(([key, isValid]) => !isValid)
      .map(([key]) => key);

    if (failedValidations.length === 0) {
      handleContinueButtonClick(selectedFlight);
      setValidationError(false);
    } else {
      setValidationError(true);
      mainPassengerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // NAVIGATE BACK ONE PAGE
  const handleBack = () => {
    navigate(-1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row py-7">
        <div className="FLIGHTDETAILS w-full lg:w-2/3 shadow-lg">
          <FlightDetails selectedFlight={selectedFlight} rounded={true} />
        </div>
        <div className="PRICING w-full md:w-1/3">
          <Pricing
            selectedFlight={selectedFlight}
            mainPassengerRef={mainPassengerRef}
            setValidationError={setValidationError}
            handleContinueButtonClick={handleContinueButtonClick}
            handleButtonClick={handleButtonClick}
          />
        </div>
      </div>
      <div className="PERSONINCHARGE  ">
        <ResponsiblePerson />
      </div>
      <div className="MAINPASSENGER pb-7" ref={mainPassengerRef}>
        <MainPassenger validationError={validationError} />
      </div>
      <div className="INSURANCE  ">
        <TravelInsurance />
      </div>
      <div className="flex justify-between gap-5">
        <button
          onClick={handleBack}
          className="hover:bg-blue-700 mb-5 text-sm sm:text-md lg:px-16 transition-all duration-300 py-1.5 sm:py-2 rounded-md text-white font-semibold flex items-center justify-center gap-4 bg-primaryBlue w-full sm:w-52"
        >
          <span className="flex whitespace-nowrap">{t("returnBack")}</span>
        </button>
        <button
          onClick={handleButtonClick}
          className="hover:bg-blue-700 mb-5 text-sm sm:text-md lg:px-16 transition-all duration-300 py-1.5 sm:py-2 rounded-md text-white font-semibold flex items-center justify-center gap-4 bg-primaryBlue w-full sm:w-52"
        >
          <span className="flex whitespace-nowrap">{t("continue")}</span>
        </button>
      </div>
    </div>
  );
}

export default TravelDetails;
