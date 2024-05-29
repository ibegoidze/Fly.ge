import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Dropdown from "./Dropdown";

import {
  months,
  daysData,
  yearsData,
  countriesData,
  genderData,
} from "../../../static";

// Validation functions
const isValidBirthDate = (birthMonth, birthDay, birthYear) => {
  return birthMonth && birthDay && birthYear && birthYear < 2006;
};

const isValidCountry = (country) => {
  return !!country;
};

const isValidGender = (gender) => {
  return !!gender;
};

function BirthDateLayout() {
  const birthMonth = useSelector((state) => state.mainPassenger.birthMonth);
  const birthDay = useSelector((state) => state.mainPassenger.birthDay);
  const birthYear = useSelector((state) => state.mainPassenger.birthYear);
  const country = useSelector((state) => state.mainPassenger.country);
  const gender = useSelector((state) => state.mainPassenger.sex);

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
    <div className="gap-10 my-5 flex items-center">
      <div>
        <div className="mb-1 text-sm text-gray-500 font-semibold outline-none flex gap-2">
          <span>Birth date</span>
          <span
            className={`${
              isBirthDateValid ? "text-green-500" : "text-red-500"
            }`}
          >
            {isBirthDateValid ? "✓" : "*"}
          </span>
        </div>
        <div className="flex gap-10">
          <div className="flex w-1/2">
            <div className="flex gap-2.5">
              <Dropdown
                title={"Month"}
                options={months}
                type="birthMonth"
                size="w-32"
              />
              <Dropdown
                title={"Day"}
                options={daysData}
                type="birthDay"
                size="w-20"
              />
              <Dropdown
                title={"Year"}
                options={yearsData}
                type="birthYear"
                size="w-24"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2.5 w-full">
        <div>
          <div className="mb-1 text-sm text-gray-500 font-semibold outline-none flex gap-2">
            <span>Citizenship</span>
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
            size="w-52"
          />
        </div>
        <div>
          <div className="mb-1 text-sm text-gray-500 font-semibold outline-none flex gap-2">
            <span>Gender</span>
            <span
              className={`${isGenderValid ? "text-green-500" : "text-red-500"}`}
            >
              {isGenderValid ? "✓" : "*"}
            </span>
          </div>
          <Dropdown
            title={"Gender"}
            options={genderData}
            type="sex"
            size="w-28"
          />
        </div>
      </div>
    </div>
  );
}

export default BirthDateLayout;
