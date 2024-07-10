import React from "react";
import { useTranslation } from "react-i18next";
import InfoBox from "./InfoBox";

import WhiteCar from "../../../assets/Offers/Details/WhiteCar.png";
import TakeOffPlane from "../../../assets/Offers/Details/TakeOffPlane.png";
import GrayInfo from "../../../assets/Offers/Details/GrayInfo.png";
import GrayClock from "../../../assets/Offers/Details/GrayClock.png";
import Calendar from "../../../assets/Offers/Details/Calendar.png";
import Buildings from "../../../assets/Offers/Details/Buildings.png";
import Clock from "../../../assets/Offers/Details/Clock.png";

import CarPic from "../../../assets/Offers/Details/CarPic.png";
import Snow from "../../../assets/Offers/Details/Snow.png";
import Person from "../../../assets/Offers/Details/Person.png";
import Bag from "../../../assets/Offers/Details/Bag.png";
import Road from "../../../assets/Offers/Details/Road.png";

import GrayLine from "../../../assets/Offers/Details/GrayLine.png";
import BedPic from "../../../assets/Offers/Details/Bed.png";
import Bus from "../../../assets/Offers/Details/Bus.png";
import Disabled from "../../../assets/Offers/Details/Disabled.png";
import BlueInformationPic from "../../../assets/Flights/Details/BlueInformation.png";

function Transfer({ offer }) {
  const { t } = useTranslation();
  return (
    <div className="p-5 bg-white flex flex-col rounded shadow-lg gap-5">
      <div className="HEADING flex justify-between">
        <div className="HEADING flex items-center gap-5">
          <div className="bg-primaryBlue flex items-center justify-center rounded-md p-2">
            <img src={WhiteCar} alt="" className="w-5 h-5" />
          </div>
          <div className="font-semibold text-gray-800 text-lg">
            {t("Transfer")}
          </div>
        </div>
      </div>
      <div className="AIRPORT">
        <div className="DETAILS flex flex-col sm:flex-row sm:gap-2">
          <div className="flex flex-col gap-2">
            <div className="flex items-center text-sm text-gray-500 font-medium gap-2">
              <span>{t("Airport")}</span>
              <img src={GrayInfo} alt="" className="w-5 h-5" />
            </div>
            <div className="flex gap-2">
              <InfoBox
                border={true}
                input={offer.page.airport}
                picture={TakeOffPlane}
              />
              <InfoBox border={true} picture={GrayClock} />
            </div>
          </div>
          <div className="flex flex-col xs:flex-row sm:gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center text-sm text-gray-500 font-medium gap-2">
                <span className="hidden sm:flex">{t("Hotel")}</span>
                <img src={GrayInfo} alt="" className="w-5 h-5 hidden sm:flex" />
              </div>
              <div className="flex gap-2">
                <InfoBox
                  border={true}
                  input={offer.page.hotel}
                  picture={Buildings}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center text-sm text-gray-500 font-medium gap-2">
                <span className="hidden sm:flex">{t("Date")}</span>
              </div>
              <div className="flex gap-2">
                <InfoBox
                  border={true}
                  input={offer.page.dates.departure}
                  picture={Calendar}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 hidden sm:flex">
              <div className="flex items-center text-sm text-gray-500 font-medium gap-2">
                <span className="hidden sm:flex">{t("Time")}</span>
              </div>
              <div className="flex gap-2">
                <InfoBox border={true} input={" 22:00"} picture={Clock} />
              </div>
            </div>
          </div>
        </div>
        <div className="GRAY BOXES flex flex-col sm:flex-row gap-2 mt-2">
          <div className="flex gap-2">
            <InfoBox
              border={false}
              gray={true}
              input={t("Economy class")}
              picture={CarPic}
            />
            <InfoBox
              border={false}
              gray={true}
              input={t("Climate control")}
              picture={Snow}
            />
          </div>
          <div className="flex gap-2">
            <InfoBox
              border={false}
              gray={true}
              input={`2 ${t("Passenger")}`}
              picture={Person}
            />
            <InfoBox border={false} gray={true} input={"1"} picture={Bag} />
            <InfoBox border={false} gray={true} input={"20.6"} picture={Road} />
          </div>
        </div>
      </div>
      <div className="NIGHTS flex items-center ">
        <img src={GrayLine} alt="" className="min-w-12" />
        <div className="rounded-3xl border border-gray-300 flex items-center justify-center gap-2 py-1.5 text-sm text-gray-500 font-medium min-w-32">
          <img src={BedPic} alt="" />
          <span>28 {t("Nights")}</span>
        </div>
        <img src={GrayLine} alt="" className="min-w-12" />
      </div>
      <div className="HOTEL">
        <div className="DETAILS flex flex-col sm:flex-row sm:gap-2">
          <div className="flex flex-col gap-2">
            <div className="flex items-center text-sm text-gray-500 font-medium gap-2">
              <span>{t("Hotel")}</span>
              <img src={GrayInfo} alt="" className="w-5 h-5" />
            </div>
            <div className="flex gap-2">
              <InfoBox
                border={true}
                input={offer.page.hotel}
                picture={Buildings}
              />
              <InfoBox border={true} picture={GrayClock} />
            </div>
          </div>
          <div className="flex flex-col xs:flex-row sm:gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center text-sm text-gray-500 font-medium gap-2">
                <span className="hidden sm:flex">{t("Airport")}</span>
                <img src={GrayInfo} alt="" className="w-5 h-5 hidden sm:flex" />
              </div>
              <div className="flex gap-2">
                <InfoBox
                  border={true}
                  input={offer.page.airport}
                  picture={TakeOffPlane}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center text-sm text-gray-500 font-medium gap-2">
                <span className="hidden sm:flex">{t("Date")}</span>
              </div>
              <div className="flex gap-2">
                <InfoBox
                  border={true}
                  input={offer.page.dates.departure}
                  picture={Calendar}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 hidden sm:flex">
              <div className="flex items-center text-sm text-gray-500 font-medium gap-2">
                <span className="hidden sm:flex">{t("Time")}</span>
              </div>
              <div className="flex gap-2">
                <InfoBox border={true} input={" 22:00"} picture={Clock} />
              </div>
            </div>
          </div>
        </div>
        <div className="GRAY BOXES flex flex-col sm:flex-row gap-2 mt-2">
          <div className="flex gap-2">
            <InfoBox
              border={false}
              gray={true}
              input={t("Bus")}
              picture={Bus}
            />
            <InfoBox
              border={false}
              gray={true}
              input={`2 ${t("Person")}`}
              picture={Person}
            />
          </div>
          <div className="flex gap-2">
            <InfoBox
              border={false}
              gray={true}
              input={` ${t("Disabled")}`}
              picture={Disabled}
            />
            <InfoBox border={false} gray={true} input={"1"} picture={Bag} />
            <InfoBox border={false} gray={true} input={"20.6"} picture={Road} />
          </div>
        </div>
      </div>
      <div className="INFO">
        <div className="bg-boxBlue border rounded-lg p-3 flex gap-5 border-tbcBlue ">
          <img src={BlueInformationPic} alt="" className="w-5 h-5" />
          <span className="text-sm text-tbcBlue font-medium">
            {t("covidCoverage")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
