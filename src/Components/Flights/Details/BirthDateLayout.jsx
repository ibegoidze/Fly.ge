import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import { useTranslation } from "react-i18next";
import {
  isValidBirthDate,
  isValidCountry,
  isValidGender,
} from "../../../Store/SearchFlights/validationSlice";

import { months, daysData, yearsData, countriesData } from "../../../static";

function BirthDateLayout() {
  const { t } = useTranslation();
  const birthMonth = useSelector((state) => state.mainPassenger.birthMonth);
  const birthDay = useSelector((state) => state.mainPassenger.birthDay);
  const birthYear = useSelector((state) => state.mainPassenger.birthYear);
  const country = useSelector((state) => state.mainPassenger.country);
  const gender = useSelector((state) => state.mainPassenger.sex);
  const genderData = [t("male"), t("female"), t("other")];

  const [isBirthDateValid, setIsBirthDateValid] = useState(false);
  const [isCountryValid, setIsCountryValid] = useState(false);
  const [isGenderValid, setIsGenderValid] = useState(false);

  useEffect(() => {
    setIsBirthDateValid(isValidBirthDate(birthMonth, birthDay, birthYear));
  }, [birthMonth, birthDay, birthYear]);

  useEffect(() => {
    setIsCountryValid(isValidCountry(country));
  }, [country]);

  useEffect(() => {
    setIsGenderValid(isValidGender(gender));
  }, [gender]);

  return (
    <div className="md:gap-10 gap-2 md:mb-5 flex flex-col sm:flex-row md:items-center w-full">
      <div className="sm:w-1/2">
        <div className="mb-1 text-sm text-gray-500 font-semibold outline-none flex gap-2">
          <span>{t("birthDate")}</span>
          <span
            className={`${
              isBirthDateValid ? "text-green-500" : "text-red-500"
            }`}
          >
            {isBirthDateValid ? "✓" : "*"}
          </span>
        </div>
        <div className="flex gap-10">
          <div className="flex w-full w-1/2">
            <div className="flex gap-2.5  w-full">
              <Dropdown
                title={t("Month")}
                options={months}
                type="birthMonth"
                size="w-2/4 min-w-32"
              />
              <div className="w-1/2 flex gap-2.5">
                <Dropdown
                  title={t("Day")}
                  options={daysData}
                  type="birthDay"
                  size="w-1/2"
                />
                <Dropdown
                  title={"Year"}
                  options={yearsData}
                  type="birthYear"
                  size="w-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2.5 w-full sm:w-1/2">
        <div className="w-2/4 ">
          <div className="mb-1 text-sm text-gray-500 font-semibold outline-none flex gap-2">
            <span>{t("citizenship")}</span>
            <span
              className={`${
                isCountryValid ? "text-green-500" : "text-red-500"
              }`}
            >
              {isCountryValid ? "✓" : "*"}
            </span>
          </div>
          <Dropdown
            title={"Country"}
            options={countriesData}
            type="country"
            size=""
          />
        </div>
        <div className="w-2/4">
          <div className="mb-1 text-sm text-gray-500 font-semibold outline-none flex gap-2">
            <span>{t("Gender")}</span>
            <span
              className={`${isGenderValid ? "text-green-500" : "text-red-500"}`}
            >
              {isGenderValid ? "✓" : "*"}
            </span>
          </div>
          <Dropdown
            title={t("Gender")}
            options={genderData}
            type="sex"
            size=""
          />
        </div>
      </div>
    </div>
  );
}

export default BirthDateLayout;
