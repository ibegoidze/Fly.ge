import React from "react";
import { useTranslation } from "react-i18next";

import WhiteAirplane from "../../../assets/Offers/Details/WhiteAirplane.png";
import Plane from "../../../assets/Tickets/images/OffersPlane.png";
import Car from "../../../assets/Tickets/images/OffersCar.png";
import City from "../../../assets/Tickets/images/OffersBuilding.png";
import Compass from "../../../assets/Tickets/images/OffersCompas.png";

function BannerContainer({ offer }) {
  const { t } = useTranslation();
  return (
    <div className="p-5 bg-white flex flex-col sm:flex-row rounded shadow-lg gap-10">
      {/* LEFT SIDE */}
      <div className="sm:w-1/2 flex flex-col">
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
            <span className="text-sm text-gray-500 font-medium">
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
      <div className="sm:w-1/2 bg-green-200 ">
        <div className="DIRECTION"></div>
        <div className="DETAILS"></div>
        <div className="IMAGES"></div>
      </div>
    </div>
  );
}

export default BannerContainer;
