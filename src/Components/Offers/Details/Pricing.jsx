import React from "react";
import { useTranslation } from "react-i18next";
import HorisontalLinePic from "../../../assets/Flights/Details/HorisontalLine.png";

import Plane from "../../../assets/Tickets/images/OffersPlane.png";
import Car from "../../../assets/Tickets/images/OffersCar.png";
import City from "../../../assets/Tickets/images/OffersBuilding.png";
import Compass from "../../../assets/Tickets/images/OffersCompas.png";

function Pricing({ offer }) {
  const { t } = useTranslation();

  return (
    <div className="relative mt-5 lg:mt-0 lg:ml-5">
      <div className="bg-white rounded-md relative overflow-hidden">
        <div className="flex justify-center flex-col p-5 gap-3">
          <div className="flex justify-between gap-5 items-center">
            <div className="flex items-center mb-1">
              <span className="font-semibold text-lg">1x</span>
              <span className="font-medium text-sm text-gray-500 ml-2">
                {t("TICKET")}
              </span>
            </div>
            <span className="font-semibold text-lg">
              <img src={Plane} alt="" />
            </span>
          </div>

          <div className="flex justify-between ">
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-lg">1x</span>
              <span className="font-medium text-sm text-gray-500">
                {t("TRANSFER_SERVICE")}
              </span>
            </div>
            <span className="font-semibold text-lg">
              <img src={Car} alt="" />
            </span>
          </div>

          <div className="flex justify-between ">
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-lg">1x</span>
              <span className="font-medium text-sm text-gray-500">
                {t("HOTEL_TICKET")}
              </span>
            </div>
            <span className="font-semibold text-lg">
              <img src={City} alt="" />
            </span>
          </div>

          <div className="flex justify-between ">
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-lg">1x</span>
              <span className="font-medium text-sm text-gray-500">
                {t("TOUR")}
              </span>
            </div>
            <span className="font-semibold text-lg">
              <img src={Compass} alt="" />
            </span>
          </div>

          <img src={HorisontalLinePic} alt="Horizontal Line" />

          <div className="mt-7 flex justify-between">
            <div className="pl-4 flex items-center font-semibold text-sm bg-center w-20 h-7 sale-frame">
              -{offer.card.salePercentage}%
            </div>
            <div className="flex gap-4 items-end">
              <div className="relative">
                <div className="font-medium text-gray-400">
                  {offer.card.newPrice}
                </div>
                <div className="absolute inset-y-1/2 left-0 right-0 bottom-2.5 border-b border-solid border-gray-400"></div>
              </div>
              <div className="sm:text-2xl font-semibold text-gray-600">
                ${offer.card.oldPrice}
              </div>
            </div>
          </div>
          <button className="hover:bg-blue-700 mb-5 text-md w-full lg:px-16 transition-all duration-300 py-1.5 sm:py-2 mt-2 sm:mt-4 rounded-md text-white font-semibold flex items-center justify-center gap-4 bg-primaryBlue">
            <span className="flex whitespace-nowrap">
              {t("PACKAGE_PURCHASE")}
            </span>
          </button>
        </div>
        {[...Array(13)].map((_, index) => (
          <div
            key={index}
            className="absolute w-4 h-4 bg-backgroundGray rounded-full"
            style={{
              bottom: "-0.5rem",
              left: `${(100 / 13) * index + 100 / 26}%`,
              transform: "translateX(-50%)",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
