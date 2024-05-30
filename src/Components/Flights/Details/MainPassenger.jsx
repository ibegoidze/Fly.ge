import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import BirthDateLayout from "./BirthDateLayout";
import PassportIssueDate from "./PassportIssueDate";

import PassportExpireDate from "./PassportExpireDate";
import PersonName from "./PersonName";
import ContactDetails from "./ContactDetails";

function MainPassenger() {
  const { t } = useTranslation();
  const mainPassenger = useSelector((state) => state.mainPassenger);

  useEffect(() => {
    console.log("Current Main Passenger Information:", mainPassenger);
  }, [mainPassenger]);

  return (
    <div className="p-4 sm:w-2/3 bg-white mb-5 rounded-lg shadow-lg transition-all duration-300">
      <span className="text-lg font-semibold">1. {t("MainPassenger")}</span>
      <PersonName />
      <ContactDetails />
      <BirthDateLayout />
      <PassportIssueDate />
      <PassportExpireDate />
    </div>
  );
}

export default MainPassenger;
