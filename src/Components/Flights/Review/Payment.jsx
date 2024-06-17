import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import HorisontalLinePic from "../../../assets/Flights/Details/HorisontalLine.png";
import BankDropdown from "./BankDropdown";
import TermsOfService from "./TermsOfService";

import BOG from "../../../assets/Tickets/images/BOG.png";
import TBC from "../../../assets/Tickets/images/TBC.png";
import Credo from "../../../assets/Tickets/images/Credo.png";

function Payment({ selectedFlight }) {
  const { t } = useTranslation();
  const passengers = useSelector((state) => state.passengers.passengers);
  const insuranceType = useSelector(
    (state) => state.mainPassenger.mainPassengerInsurance
  );
  const [selectedBank, setSelectedBank] = useState(null);

  const banks = [
    { name: "Bank of Georgia", image: BOG, textClass: "bogOrange" },
    { name: "TBC Bank", image: TBC, textClass: "tbcBlue" },
    { name: "Credo Bank", image: Credo, textClass: "credoRed" },
  ];

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

  const handleButtonClick = () => {};

  return (
    <div className="relative mt-5 lg:mt-0 lg:ml-5 ">
      <div className="bg-white rounded-md relative overflow-hidden ">
        <div className="flex justify-center flex-col p-5">
          {Object.entries(passengers).map(
            ([key, value]) =>
              value.count > 0 && (
                <div
                  className="flex justify-between gap-5 items-center"
                  key={key}
                >
                  <div className="flex items-center mb-1">
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
          <BankDropdown
            banks={banks}
            selectedBank={selectedBank}
            onChangeBank={setSelectedBank}
          />
          <button
            onClick={handleButtonClick}
            className={`mb-5 text-md w-full lg:px-16 transition-all duration-300 py-1.5 sm:py-2 mt-2 sm:mt-4 rounded-md text-white font-semibold flex items-center justify-center gap-4 bg-${
              selectedBank ? selectedBank.textClass : "primaryBlue"
            }`}
          >
            <span className="flex whitespace-nowrap">{t("continue")}</span>
          </button>
          <TermsOfService />
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

export default Payment;
