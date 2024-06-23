import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import GoldShieldPic from "../../../assets/Flights/Review/GoldShield.png";
import GrayShieldPic from "../../../assets/Flights/Review/GrayShield.png";
import BlueShieldPic from "../../../assets/Flights/Review/BlueShield.png";
import MailPic from "../../../assets/Flights/Review/Mail.png";
import PassportNumberPic from "../../../assets/Flights/Review/PassportNumber.png";
import SmartPhonePic from "../../../assets/Flights/Review/Smartphone.png";

import USFlag from "../../../assets/Global/images/world.png";
import GeoFlag from "../../../assets/Global/images/flag.png";
import UKFlag from "../../../assets/Global/images/united-kingdom.png";
import GerFlag from "../../../assets/Global/images/german-flag.png";

import BackPackPic from "../../../assets/Flights/Details/BackPackPic.png";
import HandBagPic from "../../../assets/Flights/Details/HandBag.png";
import CasePic from "../../../assets/Flights/Details/TravelBag.png";

function InfoReview({ selectedFlight }) {
  const { t } = useTranslation();

  const {
    name,
    surname,
    country,
    birthMonth,
    birthDay,
    birthYear,
    passportNumber,
    passportIssueMonth,
    passportIssueDay,
    passportIssueYear,
    email,
    mainPassengerPhone,
    mainPassengerInsurance,
    mainPassengerLuggage,
  } = useSelector((state) => state.mainPassenger);

  const monthToNumber = (month) => {
    const months = {
      january: 1,
      february: 2,
      march: 3,
      april: 4,
      may: 5,
      june: 6,
      july: 7,
      august: 8,
      september: 9,
      october: 10,
      november: 11,
      december: 12,
    };
    return months[month.toLowerCase()] || "Unknown";
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-3 bg-white rounded-bl-lg rounded-br-lg p-4 shadow-lg rounded-lg">
      <div className="flex flex-col  space-y-4">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-2 text-gray-500 font-medium">
          <img
            className="w-5 h-5"
            src={
              country === "United States"
                ? USFlag
                : country === "Georgia"
                ? GeoFlag
                : country === "Germany"
                ? GerFlag
                : country === "United Kingdom"
                ? UKFlag
                : GeoFlag
            }
            alt="Country"
          />
          <div>
            {t(name)} {t(surname)}
          </div>
          <span className="text-xs text-gray-400 font-light">
            {birthDay}-{monthToNumber(birthMonth)}-{birthYear}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-500 font-medium">
          <img
            className="w-5 h-5"
            src={PassportNumberPic}
            alt="Passport Icon"
          />
          <div>{passportNumber}</div>
          <span className="text-xs text-gray-400 font-light">
            {passportIssueDay}-{monthToNumber(passportIssueMonth)}-
            {passportIssueYear}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-500 font-medium">
          <img className="w-5 h-5" src={MailPic} alt="Email Icon" />
          <div>{email}</div>
        </div>
        <div className="flex items-center gap-2 text-gray-500 font-medium">
          <img className="w-5 h-5" src={SmartPhonePic} alt="Phone Icon" />
          <div>{mainPassengerPhone}</div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 text-gray-500 font-medium">
          <img
            className="w-5 h-5"
            src={
              mainPassengerInsurance === "premium"
                ? GoldShieldPic
                : mainPassengerInsurance === "standard"
                ? BlueShieldPic
                : GrayShieldPic
            }
            alt="Insurance Icon"
          />
          <div>{t(mainPassengerInsurance)}</div>
        </div>
        <div className="flex items-center gap-2 text-gray-500 font-medium">
          <img
            className="w-5 h-5"
            src={
              mainPassengerLuggage === "Standard"
                ? BackPackPic
                : mainPassengerLuggage === "Medium"
                ? HandBagPic
                : mainPassengerLuggage === "Large"
                ? CasePic
                : null
            }
            alt="Luggage Icon"
          />

          <div>{t(mainPassengerLuggage)}</div>
        </div>
      </div>
    </div>
  );
}

export default InfoReview;
