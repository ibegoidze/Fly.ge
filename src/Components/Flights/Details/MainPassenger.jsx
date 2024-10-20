import React from "react";
import { useTranslation } from "react-i18next";

import SelectPassengerTemplate from "./SelectPassengerTemplate";
import BirthDateLayout from "./BirthDateLayout";
import PassportIssueDate from "./PassportIssueDate";
import PassportExpireDate from "./PassportExpireDate";
import PersonName from "./PersonName";
import ContactDetails from "./ContactDetails";
import Luggage from "./Luggage";

import BlueInformationPic from "../../../assets/Flights/Details/BlueInformation.png";

function MainPassenger({ validationError }) {
  const { t } = useTranslation();

  return (
    <div className="p-4 xl:w-2/3 bg-white mb-5 rounded-lg shadow-lg transition-all duration-300">
      <div className="text-lg font-semibold mb-10">1. {t("MainPassenger")}</div>

      {validationError ? (
        <div className="bg-red-50 border rounded-lg p-5 flex gap-5 border-warningRed mt-10">
          <span className="material-symbols-outlined text-red-500 w-5 h-5">
            info
          </span>
          <span className="text-sm text-warningRed font-medium">
            {t("fillFormsCorrectly")}
          </span>
        </div>
      ) : (
        <div className="bg-boxBlue border rounded-lg p-5 flex gap-5 border-tbcBlue mt-10">
          <img src={BlueInformationPic} alt="" className="w-5 h-5" />
          <span className="text-sm text-tbcBlue font-medium">
            {t("enterDetails")}
          </span>
        </div>
      )}
      <SelectPassengerTemplate />
      <PersonName />
      <ContactDetails />
      <BirthDateLayout />
      <PassportIssueDate />
      <PassportExpireDate />
      <Luggage />
      <div className="mt-10 text-sm text-gray-400 font-semibol">
        {t("validationMessage")}
      </div>
    </div>
  );
}

export default MainPassenger;
