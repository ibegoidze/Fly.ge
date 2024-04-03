import React from "react";
import Card from "./Card";

import NewYorkPic from "../../../assets/Tickets/images/newYork.png";
import RomePic from "../../../assets/Tickets/images/Rome.png";
import PraguePic from "../../../assets/Tickets/images/Prague.png";
import BarcelonaPic from "../../../assets/Tickets/images/barcelona.png";
import AthenPic from "../../../assets/Tickets/images/Athen.png";

import { useTranslation } from "react-i18next";

function EuropeDirection() {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-backgroundGray py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-col sm:justify-between sm:flex-row  sm:mt-5 py-4">
        <div>
          <div className="font-bold text-md sm:text-xl text-textDark mb-2 text-center sm:text-start">
            {t("Flights to all directions")}
          </div>
          <div className="font-semibold text-gray-500 hidden sm:flex">
            {t("Low-budget flights from Georgia to any direction")}
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
            imageUrl={NewYorkPic}
            city={t("New york")}
            height={550}
            description={t("Oct 30 from $480")}
          />
          <Card
            imageUrl={AthenPic}
            city={t("Athen")}
            height={265}
            description={t("Oct 30 from $520")}
          />
        </div>
        <div className="w-full flex flex-col gap-5">
          <Card
            imageUrl={PraguePic}
            city={t("Prague")}
            height={265}
            description={t("Sep 28 from $520")}
          />
          <Card
            imageUrl={RomePic}
            city={t("Rome")}
            height={265}
            description={t("Apr 3 from $720")}
          />
          <Card
            imageUrl={BarcelonaPic}
            city={t("Barcelona")}
            height={265}
            description={t("Feb 2 from $570")}
          />
        </div>
      </div>
    </div>
  );
}

export default EuropeDirection;
