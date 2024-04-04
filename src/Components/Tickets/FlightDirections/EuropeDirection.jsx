import React from "react";
import Card from "./Card";
import Parispic from "../../../assets/Tickets/images/Paris.png";
import bigParis from "../../../assets/Tickets/images/bigParis.png";
import LondonPic from "../../../assets/Tickets/images/London.png";
import BerlinPic from "../../../assets/Tickets/images/Berlin.png";
import TbilisiPic from "../../../assets/Tickets/images/Tbilisi.png";

import { useTranslation } from "react-i18next";

function EuropeDirection() {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-backgroundGray py-4 noto-sans-georgian">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-col sm:justify-between sm:flex-row  sm:mt-5 py-4">
        <div>
          <div className="font-bold text-md sm:text-xl text-textDark mb-2 text-center sm:text-start">
            {t("Flights to Europe")}
          </div>
          <div className="font-semibold text-gray-500 hidden sm:flex">
            {t("Low-cost flights from Georgia to Europe")}
          </div>
        </div>
        <div className="text-primaryBlue text-sm sm:text-md font-semibold flex justify-end items-end gap-1 cursor-pointer whitespace-nowrap ">
          {t("See all")}
          <span className="material-symbols-outlined ">chevron_right</span>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-5">
        <div className="w-full flex flex-col gap-5">
          <Card
            imageUrl={Parispic}
            city={t("Paris")}
            height={265}
            description={t("Sep 28 from $520")}
          />
          <Card
            imageUrl={LondonPic}
            city={t("London")}
            height={265}
            description={t("Feb 2 from $570")}
          />
          <Card
            imageUrl={BerlinPic}
            city={t("Berlin")}
            height={265}
            description={t("Oct 30 from $520")}
          />
        </div>
        <div className="w-full flex flex-col gap-5">
          <Card
            imageUrl={bigParis}
            city={t("Paris")}
            height={550}
            description={t("Oct 30 from $480")}
          />
          <Card
            imageUrl={TbilisiPic}
            city={t("Tbilisi")}
            height={265}
            description={t("Apr 3 from $720")}
          />
        </div>
      </div>
    </div>
  );
}

export default EuropeDirection;
