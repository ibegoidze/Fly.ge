import PegasusPic from "../../../assets/Tickets/images/Pegasus.png";
import RyanairPic from "../../../assets/Tickets/images/Ryanair.png";
import GAirwaysPic from "../../../assets/Tickets/images/GeorgianAirways.png";
import WizzAirPic from "../../../assets/Tickets/images/WizzAir.png";
import TurkishPic from "../../../assets/Tickets/images/TurkishAirlines.png";

import { useTranslation } from "react-i18next";

function Partners() {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-backgroundGray py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col mt-5 py-4">
        <div className="text-xl font-bold text-textDark pb-10">
          {t("Partner airline companies")}{" "}
        </div>
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="flex gap-5 w-full sm:w-2/5">
            <div className="flex items-center justify-center shadow-xl w-1/2  h-28  rounded-lg bg-white px-4 cursor-pointer">
              <img src={PegasusPic} alt="pegasus" />
            </div>
            <div className="flex items-center justify-center shadow-xl w-1/2 h-28  rounded-lg bg-white px-4 cursor-pointer">
              <img src={RyanairPic} alt="pegasus" />
            </div>
          </div>
          <div className="flex gap-5 w-full sm:w-2/5">
            <div className="flex items-center justify-center shadow-xl w-1/2  h-28  rounded-lg bg-white px-4 cursor-pointer">
              <img src={GAirwaysPic} alt="pegasus" />
            </div>
            <div className="flex items-center justify-center shadow-xl w-1/2 h-28  rounded-lg bg-white px-4 cursor-pointer">
              <img src={WizzAirPic} alt="pegasus" />
            </div>
          </div>
          <div className="hidden sm:flex items-center justify-center shadow-xl w-1/5 h-28  rounded-lg bg-white px-4 cursor-pointer">
            <img src={TurkishPic} alt="pegasus" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
