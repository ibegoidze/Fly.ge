import React from "react";
import { useTranslation } from "react-i18next";

import WhiteAirplane from "../../../assets/Offers/Details/WhiteAirplane.png";
import BlackAirplane from "../../../assets/Offers/Details/BlackAirplane.png";
import RioSm1 from "../../../assets/Offers/Details/RioSm1.png";
import RioSm2 from "../../../assets/Offers/Details/RioSm2.png";
import Arrows from "../../../assets/Offers/Details/Arrows.png";
import BlueLine from "../../../assets/Offers/Details/BlueLine.png";
import UsersPic from "../../../assets/Offers/Details/Users.png";
import Plane from "../../../assets/Tickets/images/OffersPlane.png";
import Car from "../../../assets/Tickets/images/OffersCar.png";
import City from "../../../assets/Tickets/images/OffersBuilding.png";
import Compass from "../../../assets/Tickets/images/OffersCompas.png";

function BannerContainer({ offer }) {
  const { t } = useTranslation();

  function getFirstThreeLetters(str) {
    // RETURN THE FIRST THREE LETTERS OF THE STRING
    return str.toUpperCase().substring(0, 3);
  }
  return (
    <div className="p-5 bg-white flex flex-col sm:flex-row rounded shadow-lg gap-10">
      {/* LEFT SIDE */}
      <div className="sm:w-1/2 flex flex-col justify-between">
        <div className="HEADING flex items-center gap-5">
          <div className="bg-primaryBlue flex items-center justify-center rounded-md p-2">
            <img src={WhiteAirplane} alt="" className="w-5 h-5" />
          </div>
          <div className="font-semibold text-gray-800 text-lg">
            {t("Offer")} {t(offer.card.cityName)}
          </div>
        </div>
        <div className="TEXT text-gray-500 text-sm font-medium flex flex-col gap-5 mt-5">
          <p>{t(offer.page.text1)}</p>
          <p>{t(offer.page.text2)}</p>
        </div>
        <div className="ICONS flex justify-between mt-10">
          <button className="text-sm sm:text-md bg-primaryBlue text-white rounded-md px-3 sm:px-5 py-3 hover:bg-blue-700 transition-all duration-300 font-medium">
            {t("Purchase a package")}
          </button>
          <div className="flex items-center gap-2 sm:gap-5">
            <span className="text-sm text-gray-500 font-medium hidden sm:flex">
              {t("contains")}
            </span>
            <div className="flex gap-2">
              <img src={Plane} alt="plane" className="w-8 h-8" />
              <img src={Car} alt="car" className="w-8 h-8" />
              <img src={City} alt="buildings" className="w-8 h-8" />
              <img
                src={Compass}
                alt="compass"
                className="w-8 h-8 hidden sm:flex"
              />
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="sm:w-1/2 flex flex-col justify-between">
        <div className="DIRECTION">
          <div className="flex justify-between text-sm text-gray-500 font-medium">
            <span>{t("Tbilisi")}</span>
            <span>{t(offer.card.cityName)}</span>
          </div>
          {/* FLIGHT LINE */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center">
              <span className="text-3xl text-gray-500 tracking-tighter">
                {getFirstThreeLetters(t("Tbilisi"))}
              </span>
            </div>
            <img src={BlueLine} alt="" className="min-w-12" />
            <img src={BlackAirplane} alt="" className="w-6 h-6" />
            <img src={BlueLine} alt="" className="min-w-12" />
            <div className="flex items-center">
              <span className="text-3xl text-gray-500 tracking-tight">
                {getFirstThreeLetters(t(offer.card.cityName))}
              </span>
            </div>
          </div>
        </div>
        <div className="DETAILS flex flex-col gap-5 mt-5">
          <div className="flex gap-2">
            <span className="text-gray-500 font-semibold text-">
              {offer.page.dates.departure}
            </span>
            <img src={Arrows} alt="" />
            <span className="text-gray-500 font-semibold text-">
              {offer.page.dates.return}
            </span>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center text-xs gap-2 border px-3 py-1 sm:py-2 rounded-md border-1.5 border-gray-300">
              <img src={Arrows} alt="" />
              <span>{t("Bilateral")}</span>
            </div>
            <div className="flex items-center text-xs gap-2 border px-1 sm:px-3 py-1 sm:py-2 rounded-md border-1.5 border-gray-300">
              <span>{t("Economy class")}</span>
            </div>
            <div className="flex items-center text-xs gap-2 border px-3 py-1 sm:py-2 rounded-md border-1.5 border-gray-300">
              <img src={UsersPic} alt="" />
              <span>{t("2")}</span>
            </div>
          </div>
        </div>
        <div className="IMAGES flex justify-between mt-5">
          <img src={RioSm2} alt="" className="w-1/2 max-h-40 rounded-md" />
          <img src={RioSm1} alt="" className="w-1/2 ml-4 max-h-40 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default BannerContainer;
