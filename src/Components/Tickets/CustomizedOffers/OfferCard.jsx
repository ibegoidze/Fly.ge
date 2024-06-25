import Plane from "../../../assets/Tickets/images/OffersPlane.png";
import Car from "../../../assets/Tickets/images/OffersCar.png";
import City from "../../../assets/Tickets/images/OffersBuilding.png";
import Compass from "../../../assets/Tickets/images/OffersCompas.png";
import Time from "../../../assets/Tickets/images/OffersTime.png";

import { useTranslation } from "react-i18next";

function OfferCard({ imageUrl, sale, city, price }) {
  const { t } = useTranslation();
  return (
    <div className=" p-3 bg-white w-full md:w-1/3 flex flex-col rounded-lg shadow-xl ">
      <div className="relative h-32 sm:h-72 overflow-hidden">
        <div
          className="bg-cover bg-center h-full w-full cursor-pointer transition-transform duration-700 transform scale-100 hover:scale-105"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <span className="absolute top-4 bg-offerBlack text-white text-sm font-semibold px-4 py-2 rounded-tr-md rounded-br-md">
          {t("Top offers")}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <div className="pl-4 flex items-center font-semibold text-sm bg-center w-20 h-7 mt-5 sale-frame cursor-pointer">
          {sale}
        </div>
        <div className="flex mt-5 gap-2">
          <img src={Plane} alt="plane" className="w-8 h-8 cursor-pointer" />
          <img src={Car} alt="car" className="w-8 h-8 cursor-pointer" />
          <img src={City} alt="buildings" className="w-8 h-8 cursor-pointer" />
          <img src={Compass} alt="compass" className="w-8 h-8 cursor-pointer" />
        </div>
      </div>
      <div className="border-b-2 border-gray-200 border-solid pb-4">
        <div className="font-semibold text-lg mt-4 text-gray-500 pb-1">
          {city}
        </div>
        <div className="text-sm font-medium text-gray-400">
          {t("Promotional text that helps you")}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 mt-4 border border-orange-500 border-solid bg-orange-100 rounded px-2 py-1 cursor-pointer">
          <img src={Time} alt="Clock" />
          <span className="text-sm font-medium text-orange-500">
            5 {t("Days")}
          </span>
        </div>
        <div className="flex gap-4 items-end mt-5">
          <div className="relative">
            <div className="font-medium text-gray-400">1500</div>
            <div className="absolute inset-y-1/2 left-0 right-0 bottom-2.5 border-b border-solid  border-gray-400"></div>
          </div>
          <div className="text-2xl font-semibold text-gray-500">{price}</div>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
