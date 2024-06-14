import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import InputTemplate from "./InputTemplate";
import {
  isValidPassportIssueDate,
  isValidNumber,
} from "../../../Store/SearchFlights/validationSlice";
import { months, daysData, yearsData } from "../../../static";
import InfoPic from "../../../assets/Flights/Details/InformationIcon.png";
import { useTranslation } from "react-i18next";

function PassportIssueDate() {
  const { t } = useTranslation();
  const passportIssueMonth = useSelector(
    (state) => state.mainPassenger.passportIssueMonth
  );
  const passportIssueDay = useSelector(
    (state) => state.mainPassenger.passportIssueDay
  );
  const passportIssueYear = useSelector(
    (state) => state.mainPassenger.passportIssueYear
  );

  const [isPassportIssueDateValid, setIsPassportIssueDateValid] =
    useState(false);

  useEffect(() => {
    setIsPassportIssueDateValid(
      isValidPassportIssueDate(
        passportIssueMonth,
        passportIssueDay,
        passportIssueYear
      )
    );
  }, [passportIssueMonth, passportIssueDay, passportIssueYear]);

  return (
    <div className="sm:gap-10 gap-2 my-3 sm:my-5 flex flex-col sm:flex-row sm:items-center">
      <div className=" sm:w-1/2">
        <div className="mb-1 text-sm text-gray-500 font-semibold outline-none flex gap-2">
          <span>{t("passportIssueDate")}</span>
          <span
            className={`${
              isPassportIssueDateValid ? "text-green-500" : "text-red-500"
            }`}
          >
            {isPassportIssueDateValid ? "✓" : "*"}
          </span>
        </div>
        <div className="flex gap-10">
          <div className="flex w-full w-1/2">
            <div className="flex gap-2.5  w-full">
              <Dropdown
                title={t("Month")}
                options={months}
                type="passportIssueMonth"
                size="w-2/4 min-w-32"
              />
              <div className="w-1/2 flex gap-2.5">
                <Dropdown
                  title={t("Day")}
                  options={daysData}
                  type="passportIssueDay"
                  size="w-1/2"
                />
                <Dropdown
                  title={t("Year")}
                  options={yearsData}
                  type="passportIssueYear"
                  size="w-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:w-1/2">
        <div className="w-full">
          <InputTemplate
            title={t("passportNumber")}
            placeholder={t("passportNumber")}
            icon={InfoPic}
            validationFunction={(input) => isValidNumber(input, 9)}
            inputType="passportNumber"
            width="full"
          />
        </div>
      </div>
    </div>
  );
}

export default PassportIssueDate;
