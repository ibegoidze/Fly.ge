import React from "react";
import { useTranslation } from "react-i18next";
import InfoBox from "./InfoBox";
import { roomsData, establishmentData } from "../../../static";

import WhiteBuildings from "../../../assets/Offers/Details/WhiteBuildings.png";
import RioHotel1 from "../../../assets/Offers/Details/qweqweqwe.png";
import RioHotel2 from "../../../assets/Offers/Details/Shezlong.png";
import RioHotel3 from "../../../assets/Offers/Details/Bedroom.png";

import DoubleBed from "../../../assets/Offers/Details/DoubleBed.png";
import DoublePerson from "../../../assets/Offers/Details/DoublePerson.png";
import Bath from "../../../assets/Offers/Details/Bath.png";
import Disabled from "../../../assets/Offers/Details/Disabled.png";
import Globe from "../../../assets/Offers/Details/Globe.png";

import UKFlag from "../../../assets/Global/images/united-kingdom.png";
import GerFlag from "../../../assets/Global/images/german-flag.png";
import ChinaFlag from "../../../assets/Offers/Details/ChinaFlag.png";

function Hotel() {
  const { t } = useTranslation();
  return (
    <div className="p-5 bg-white flex flex-col rounded shadow-lg gap-5">
      <div className="HEADING flex justify-between">
        <div className="HEADING flex items-center gap-5">
          <div className="bg-primaryBlue flex items-center justify-center rounded-md p-2">
            <img src={WhiteBuildings} alt="" className="w-5 h-5" />
          </div>
          <div className="font-semibold text-gray-800 sm:text-lg">
            {t("Luxury Room Double")}
          </div>
        </div>
      </div>
      <div className="IMAGES flex gap-2 h-52">
        <div className="w-1/2 h-full">
          <img
            src={RioHotel1}
            alt=""
            className="object-cover w-full h-full rounded-sm"
          />
        </div>
        <div className="w-1/4 h-full">
          <img
            src={RioHotel2}
            alt=""
            className="object-cover w-full h-full rounded-sm"
          />
        </div>
        <div className="w-1/4 h-full">
          <img
            src={RioHotel3}
            alt=""
            className="object-cover w-full h-full rounded-sm"
          />
        </div>
      </div>
      <div className="DESCRIPTION">
        <div className="text-gray-700 font-semibold">
          {t("Sea View Double Room")}
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="DETAILS sm:w-3/4">
            <div className="flex flex-wrap gap-2 mt-3">
              <InfoBox
                gray={true}
                border={false}
                input={t("Double Bed")}
                picture={DoubleBed}
              />
              <InfoBox
                gray={true}
                border={false}
                input={`2 ${t("Person")}`}
                picture={DoublePerson}
              />
              <InfoBox
                gray={true}
                border={false}
                input={`${t("Bathroom")}`}
                picture={Bath}
              />
              <InfoBox
                gray={true}
                border={false}
                input={t("Disabled")}
                picture={Disabled}
              />
            </div>
            <div className="mt-5 text-sm text-gray-500 font-medium">
              {t("Hotel Description")}
            </div>
          </div>
          <div className="LANGUAGES sm:w-1/4 flex flex-col gap-2">
            <InfoBox
              gray={true}
              border={false}
              input={"Languages Spoken"}
              picture={Globe}
            />
            <div className="flex gap-3 ml-3 text-sm items-center text-gray-500 font-medium">
              <span>
                <img src={UKFlag} alt="" className="w-5 h-6" />
              </span>
              <span>{t("English")}</span>
            </div>
            <div className="flex gap-3 ml-3 text-sm items-center text-gray-500 font-medium">
              <span>
                <img src={ChinaFlag} alt="" className="w-5 h-5" />
              </span>
              <span>{t("Chinese")}</span>
            </div>
            <div className="flex gap-3 ml-3 text-sm items-center text-gray-500 font-medium">
              <span>
                <img src={GerFlag} alt="" className="w-5 h-6" />
              </span>
              <span>{t("German")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="ROOM mt-5">
        <div className="text-gray-700 font-semibold">{t("Private Room")}</div>
        <div className="IMAGES grid grid-cols-2 md:grid-cols-4 gap-2 mt-5">
          {roomsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col  bg-gray-100 p-3 rounded-md"
            >
              <img
                src={item.image}
                alt={t(item.text)}
                className="w-4 h-4 object-cover rounded-md"
              />
              <div className=" mt-2 text-sm text-gray-500 font-medium">
                {t(item.text)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="ESTABLISHMENT">
        <div className="text-gray-700 font-semibold">{t("Establishment")}</div>
        <div className="IMAGES grid grid-cols-2 md:grid-cols-4 gap-2 mt-5">
          {establishmentData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col  bg-gray-100 p-3 rounded-md"
            >
              <img
                src={item.image}
                alt={t(item.text)}
                className="w-4 h-4 object-cover rounded-md"
              />
              <div className=" mt-2 text-sm text-gray-500 font-medium">
                {t(item.text)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="SERVICES"></div>
    </div>
  );
}

export default Hotel;
