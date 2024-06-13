import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import { isValidPassportExpireDate } from "../../../Store/SearchFlights/validationSlice";
import {
  months,
  daysData,
  expireYearsData,
  passportIssueAuthority,
} from "../../../static";
import { useTranslation } from "react-i18next";

function PassportExpireDate() {
  const { t } = useTranslation();
  const passportExpireMonth = useSelector(
    (state) => state.mainPassenger.passportExpiryMonth
  );
  const passportExpireDay = useSelector(
    (state) => state.mainPassenger.passportExpiryDay
  );
  const passportExpireYear = useSelector(
    (state) => state.mainPassenger.passportExpiryYear
  );

  const passportIssueMonth = useSelector(
    (state) => state.mainPassenger.passportIssueMonth
  );
  const passportIssueDay = useSelector(
    (state) => state.mainPassenger.passportIssueDay
  );
  const passportIssueYear = useSelector(
    (state) => state.mainPassenger.passportIssueYear
  );

  const passportAuthority = useSelector(
    (state) => state.mainPassenger.passportIssuingAuthority
  );

  const [isPassportExpireDateValid, setIsPassportExpireDateValid] =
    useState(false);
  const [isPassportAuthorityValid, setIsPassportAuthorityValid] =
    useState(false);

  useEffect(() => {
    setIsPassportExpireDateValid(
      isValidPassportExpireDate(
        passportExpireMonth,
        passportExpireDay,
        passportExpireYear,
        passportIssueMonth,
        passportIssueDay,
        passportIssueYear
      )
    );
  }, [
    passportExpireMonth,
    passportExpireDay,
    passportExpireYear,
    passportIssueMonth,
    passportIssueDay,
    passportIssueYear,
  ]);

  useEffect(() => {
    setIsPassportAuthorityValid(!!passportAuthority);
  }, [passportAuthority]);

  return (
    <div className="sm:gap-10 gap-2 my-5 flex flex-col sm:flex-row sm:items-center">
      <div className="sm:w-1/2">
        <div className="mb-1 text-sm text-gray-500 font-semibold outline-none flex gap-2">
          <span>{t("passportExpireDate")}</span>
          <span
            className={`${
              isPassportExpireDateValid ? "text-green-500" : "text-red-500"
            }`}
          >
            {isPassportExpireDateValid ? "✓" : "*"}
          </span>
        </div>
        <div className="flex gap-10">
          <div className="flex w-1/2">
            <div className="flex gap-2.5">
              <Dropdown
                title={"Month"}
                options={months}
                type="passportExpiryMonth"
                size="w-32"
              />
              <Dropdown
                title={"Day"}
                options={daysData}
                type="passportExpiryDay"
                size="w-20"
              />
              <Dropdown
                title={"Year"}
                options={expireYearsData}
                type="passportExpiryYear"
                size="w-24"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2.5 sm:w-1/2">
        <div className="w-full">
          <div className="mb-1 text-sm text-gray-500 font-semibold outline-none flex gap-2">
            <span>{t("passportIssuingAuthority")}</span>
            <span
              className={`${
                isPassportAuthorityValid ? "text-green-500" : "text-red-500"
              }`}
            >
              {isPassportAuthorityValid ? "✓" : "*"}
            </span>
          </div>
          <Dropdown
            title={"Passport Issuing Authority"}
            options={passportIssueAuthority}
            type="passportIssuingAuthority"
            size="full"
          />
        </div>
      </div>
    </div>
  );
}

export default PassportExpireDate;
