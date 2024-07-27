import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Plane from "../../../assets/Tickets/images/OffersPlane.png";
import Car from "../../../assets/Tickets/images/OffersCar.png";
import City from "../../../assets/Tickets/images/OffersBuilding.png";
import Compass from "../../../assets/Tickets/images/OffersCompas.png";
import Time from "../../../assets/Tickets/images/OffersTime.png";

// FUNCTION TO TRUNCATE TEXT IF IT EXCEEDS 50 CHARACTERS
const truncateText = (text, maxLength = 50) => {
  if (text.length <= maxLength) return text;
  return (
    <span>
      {text.substring(0, maxLength)}
      <span className="text-blue-400 cursor-pointer">...See all</span>
    </span>
  );
};

function OfferCard({ offer }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(
      `/Offers/details/${offer.id}/${encodeURIComponent(offer.card.cityName)}`
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="p-1.5 sm:p-3 bg-white flex sm:flex-col rounded-lg shadow-xl cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative sm:h-44 w-1/2 sm:w-full sm:h-72 overflow-hidden ">
        <div
          className="bg-cover bg-center h-full w-full transition-transform duration-700 transform scale-100 hover:scale-110 sm:rounded-tr-md rounded-tl-md rounded-br-md rounded-bl-md"
          style={{ backgroundImage: `url(${offer.card.image})` }}
        ></div>
        <span className="absolute top-4 bg-offerBlack text-white text-xs sm:text-sm font-semibold px-2 sm:px-4 py-2 rounded-tr-md rounded-br-md">
          {t("Top offers")}
        </span>
      </div>
      <div className="w-2/3 sm:w-full sm:mt-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="pl-4 flex items-center font-semibold text-sm bg-center w-20 h-7 sale-frame">
            {`${offer.card.salePercentage}%`}
          </div>
          <div className="hidden sm:flex sm:mt gap-2">
            <img src={Plane} alt="plane" className="w-8 h-8" />
            <img src={Car} alt="car" className="w-8 h-8" />
            <img src={City} alt="buildings" className="w-8 h-8" />
            <img src={Compass} alt="compass" className="w-8 h-8" />
          </div>
        </div>
        <div className="border-b-2 border-gray-200 border-solid pb-4 ml-2 sm:ml-0">
          <div className="font-semibold sm:text-md mt-1 sm:mt-2 text-gray-800 pb-1">
            {/* {t(offer.card.cityName)} */}
          </div>
          <div className="text-xs sm:text-sm font-medium text-gray-500">
            {truncateText(t(offer.page.cardText))}
          </div>
        </div>
        <div className="flex justify-end sm:justify-between sm:items-center">
          <div className="hidden sm:flex items-center gap-2 mt-4 border border-orange-500 border-solid bg-orange-100 rounded px-2 py-1">
            <img src={Time} alt="Clock" />
            <span className="text-sm font-medium text-orange-500">
              {/* {offer.card.days ? offer.card.days : 5} {t("Days")} */}
            </span>
          </div>
          <div className="flex gap-4 items-end mt-2 sm:mt-5">
            <div className="relative">
              <div className="font-medium text-gray-400">
                ${offer.card.oldPrice}
              </div>
              <div className="absolute inset-y-1/2 left-0 right-0 bottom-2.5 border-b border-solid border-gray-400"></div>
            </div>
            <div className="sm:text-2xl font-semibold text-gray-600">
              ${offer.card.newPrice}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
