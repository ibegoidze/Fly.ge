import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import HorisontalLinePic from "../../../assets/Flights/Details/HorisontalLine.png";
import {
  isValidName,
  isValidEmail,
  isValidCountry,
  isValidNumber,
  isValidBirthDate,
  isValidPassportIssueDate,
  isValidPassportExpireDate,
} from "../../../Store/SearchFlights/validationSlice";

function Pricing({ selectedFlight }) {
  const { t } = useTranslation();
  const mainPassenger = useSelector((state) => state.mainPassenger);
  const passengers = useSelector((state) => state.passengers.passengers);
  const insuranceType = useSelector(
    (state) => state.mainPassenger.mainPassengerInsurance
  );
  const flightPrice = selectedFlight.price;
  const prices = {
    Adult: flightPrice,
    Child: flightPrice,
    Disabled: flightPrice,
    Newborn: flightPrice,
  };

  const calculateTotalPrice = () => {
    const basePrice = Object.entries(passengers).reduce((acc, [key, value]) => {
      return acc + value.count * prices[key];
    }, 0);

    let insurancePrice = 0;
    switch (insuranceType) {
      case "premium":
        insurancePrice = 150;
        break;
      case "standard":
        insurancePrice = 20;
        break;
      case "withoutInsurance":
      default:
        insurancePrice = 0;
    }

    return basePrice + insurancePrice;
  };

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
      alert("All validations passed, proceed with booking!");
    } else {
      const failedMessage =
        "Validation failed for: " +
        failedValidations.join(", ") +
        ". Check details!";
      alert(failedMessage);
    }
  };

  return (
    <div className="relative mt-5 lg:mt-0 lg:ml-5">
      <div className="bg-white h-auto rounded-md relative overflow-hidden">
        <div className="flex justify-center flex-col p-5">
          {Object.entries(passengers).map(
            ([key, value]) =>
              value.count > 0 && (
                <div
                  className="flex justify-between gap-2 items-center"
                  key={key}
                >
                  <div className="flex items-center">
                    <span className="font-semibold text-lg">
                      {value.count}x
                    </span>
                    <span className="font-medium text-sm text-gray-500 ml-2">
                      {t(key)}
                    </span>
                  </div>
                  <span className="font-semibold text-lg">
                    ${value.count * prices[key]}
                  </span>
                </div>
              )
          )}
          <div className="flex justify-between mb-5">
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-lg">1x</span>
              <span className="font-medium text-sm text-gray-500">
                {t("Insurance")}
              </span>
            </div>
            <span className="font-semibold text-lg">
              $
              {insuranceType === "premium"
                ? 150
                : insuranceType === "standard"
                ? 20
                : 0}
            </span>
          </div>
          <img src={HorisontalLinePic} alt="Horizontal Line" />
          <div className="mt-7 flex justify-between">
            <span className="font-semibold">{t("Total")}:</span>
            <span className="font-semibold text-xl">
              ${calculateTotalPrice()}
            </span>
          </div>
          <button
            onClick={handleButtonClick}
            className="hover:bg-blue-700 mb-5 text-md w-full lg:px-16 transition-all duration-300 py-1.5 sm:py-2 mt-2 sm:mt-4 rounded-md text-white font-semibold flex items-center justify-center gap-4 bg-primaryBlue"
          >
            <span className="flex whitespace-nowrap">{t("continue")}</span>
          </button>
        </div>
        {[...Array(13)].map((_, index) => (
          <div
            key={index}
            className="absolute w-4 h-4 bg-backgroundGray rounded-full"
            style={{
              bottom: "-0.5rem",
              left: `${(100 / 13) * index + 100 / 26}%`,
              transform: "translateX(-50%)",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
