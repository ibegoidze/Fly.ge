import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMainPassengerInsurance } from "../../../Store/User/mainPassengerSlice";
import { useTranslation } from "react-i18next";

import BlueInformationPic from "../../../assets/Flights/Details/BlueInformation.png";
import GrayInformationPic from "../../../assets/Flights/Details/InformationGray.png";
import GoldShieldPic from "../../../assets/Flights/Details/ShieldGold.png";
import BlueShildPic from "../../../assets/Flights/Details/ShieldBlue.png";
import GrayShieldPic from "../../../assets/Flights/Details/ShieldGray.png";
import CircleCkeckWhite from "../../../assets/Flights/Details/CircleCkeckWhite.png";
import CircleCheckBlue from "../../../assets/Flights/Details/CircleCkeckBlue.png";

function TravelInsurance() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const selectedInsurance = useSelector(
    (state) => state.mainPassenger.mainPassengerInsurance
  );

  const handleInsuranceChange = (insuranceType) => {
    dispatch(setMainPassengerInsurance(insuranceType));
  };

  return (
    <div className="bg-white p-5 mb-5 rounded-lg shadow-lg flex flex-col">
      <div className="TITLE flex justify-between">
        <div className="text-lg font-semibold mb-5">{t("travelInsurance")}</div>
        <div className="hidden md:flex  text-gray-500 text-sm font-medium gap-3 ">
          <span>{t("textLabel")}</span>{" "}
          <img src={GrayInformationPic} alt="" className="w-5 h-5" />
        </div>
      </div>
      <div className="mb-5 text-sm text-gray-400 font-semibol">
        {t("choosePackage")}
      </div>
      <div className="bg-boxBlue border rounded-lg p-3 flex gap-2 border-tbcBlue">
        <img src={BlueInformationPic} alt="" className="w-5 h-5" />
        <span className="text-sm text-tbcBlue font-medium">
          {t("covidCoverage")}
        </span>
      </div>
      {/* OPTIONS */}
      <div className="HERE flex sm:text-xs xl:text:md justify-between mt-5 border rounded py-2 border-gray-300 gap-6">
        <label className="flex items-center w-1/3 ml-11 gap-2">
          <input
            autoComplete="off"
            className="w-4 h-4"
            type="radio"
            name="insurance"
            value="premium"
            checked={selectedInsurance === "premium"}
            onChange={() => handleInsuranceChange("premium")}
          />
          <div className="flex  items-center gap-2  font-medium">
            <img src={GoldShieldPic} alt="" className="w-5 h-5" />
            <span className="text-sm sm:text-md"> {t("premium")}</span>
            <span className="text-green-500">+150$</span>
          </div>
        </label>
        <label className="hidden md:flex items-center w-1/3 ml-11 gap-2">
          <input
            autoComplete="off"
            className="w-4 h-4"
            type="radio"
            name="insurance"
            value="standard"
            checked={selectedInsurance === "standard"}
            onChange={() => handleInsuranceChange("standard")}
          />
          <div className="flex  items-center gap-2  font-medium">
            <img src={BlueShildPic} alt="" className="w-5 h-5" />
            <span className="text-sm"> {t("standard")}</span>
            <span className="text-green-500">+20$</span>
          </div>
        </label>
        <label className="hidden md:flex items-center w-1/3 ml-11 gap-2">
          <input
            autoComplete="off"
            className="w-4 h-4"
            type="radio"
            name="insurance"
            value="withoutInsurance"
            checked={selectedInsurance === "withoutInsurance"}
            onChange={() => handleInsuranceChange("withoutInsurance")}
          />
          <div className="flex  items-center gap-2  font-medium">
            <img src={GrayShieldPic} alt="" className="w-5 h-5" />
            <span className="text-sm"> {t("withoutInsurance")}</span>
            <span className="text-gray-500">+0$</span>
          </div>
        </label>
      </div>
      {/* BOXES */}
      <div className="flex flex-col md:flex-row justify-between gap-6 mt-5 ">
        <div className="md:w-1/3 rounded-lg bg-insuranceGray  flex justify-center flex-col px-10 py-10 gap-5">
          <div className="text-xs xl:text-sm text-white flex gap-5 ">
            <img src={CircleCkeckWhite} alt="" className="w-5 h-5" />
            <span>{t("medicalHelp")}</span>
          </div>
          <div className="text-xs xl:text-sm text-white flex gap-5 ">
            <img src={CircleCkeckWhite} alt="" className="w-5 h-5" />
            <span>
              <span>{t("travelCancellation")}</span>
            </span>
          </div>
          <div className="text-xs xl:text-sm text-white flex gap-5 ">
            <img src={CircleCkeckWhite} alt="" className="w-5 h-5" />
            <span>{t("assistanceService")}</span>
          </div>
          <div className="text-xs xl:text-sm text-white flex gap-5 ">
            <img src={CircleCkeckWhite} alt="" className="w-5 h-5" />
            <span>{t("lostLuggage")}</span>
          </div>
          <div className="text-xs xl:text-sm text-white flex gap-5 ">
            <img src={CircleCkeckWhite} alt="" className="w-5 h-5" />
            <span>{t("flightInsurance")}</span>
          </div>
        </div>
        <div className="HERE flex md:hidden border rounded py-2 border-gray-300">
          <label className="flex  items-center w-1/3 ml-11 gap-2 sm:text-xs xl:text:md">
            <input
              autoComplete="off"
              className="w-4 h-4"
              type="radio"
              name="insuranceMob"
              value="standard"
              checked={selectedInsurance === "standard"}
              onChange={() => handleInsuranceChange("standard")}
            />
            <div className="flex  items-center gap-2  font-medium">
              <img src={BlueShildPic} alt="" className="w-5 h-5" />
              <span className="text-sm sm:text-md"> {t("standard")}</span>
              <span className="text-green-500">+20$</span>
            </div>
          </label>
        </div>
        <div className="md:w-1/3 rounded-lg bg-lightBlue text-primaryBlue  flex flex-col px-10 py-10 gap-5">
          <div className="text-xs xl:text-sm  flex gap-5 ">
            <img src={CircleCheckBlue} alt="" className="w-5 h-5" />
            <span>{t("assistanceService")}</span>
          </div>
          <div className="text-xs xl:text-sm  flex gap-5 ">
            <img src={CircleCheckBlue} alt="" className="w-5 h-5" />
            <span>
              <span>{t("lostLuggage")}</span>
            </span>
          </div>
          <div className="text-xs xl:text-sm  flex gap-5 ">
            <img src={CircleCheckBlue} alt="" className="w-5 h-5" />
            <span>{t("flightInsurance")}</span>
          </div>
        </div>
        <div className="HERE flex md:hidden border rounded py-2 border-gray-300">
          <label className="flex items-center ml-11 gap-2 sm:text-xs xl:text:md">
            <input
              autoComplete="off"
              className="w-4 h-4"
              type="radio"
              name="insuranceMob"
              value="withoutInsurance"
              checked={selectedInsurance === "withoutInsurance"}
              onChange={() => handleInsuranceChange("withoutInsurance")}
            />
            <div className="flex  items-center gap-2  font-medium">
              <img src={GrayShieldPic} alt="" className="w-5 h-5" />
              <span className="text-sm sm:text-md">
                {" "}
                {t("withoutInsurance")}
              </span>
              <span className="text-gray-500">+0$</span>
            </div>
          </label>
        </div>
        <div className="md:w-1/3 rounded-lg "></div>
      </div>
      <div className="mt-5 text-sm text-gray-400 font-semibol">
        {t("validationMessage")}
      </div>
    </div>
  );
}

export default TravelInsurance;
