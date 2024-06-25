import React from "react";
import Card from "./Card";
import Parispic from "../../../assets/Tickets/images/Paris.png";
import bigParis from "../../../assets/Tickets/images/bigParis.png";
import LondonPic from "../../../assets/Tickets/images/London.png";
import BerlinPic from "../../../assets/Tickets/images/Berlin.png";
import TbilisiPic from "../../../assets/Tickets/images/Tbilisi.png";
import NewYorkPic from "../../../assets/Tickets/images/newYork.png";
import RomePic from "../../../assets/Tickets/images/Rome.png";
import PraguePic from "../../../assets/Tickets/images/Prague.png";
import BarcelonaPic from "../../../assets/Tickets/images/barcelona.png";
import AthenPic from "../../../assets/Tickets/images/Athen.png";

import { useTranslation } from "react-i18next";

function AllDirections() {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-backgroundGray py-4 noto-sans-georgian">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-col sm:justify-between sm:flex-row  sm:mt-5 py-4">
        <div>
          <div className="font-semibold text-md sm:text-xl text-textDark mb-2 text-center sm:text-start">
            {t("Flights to all directions")}
          </div>
          <div className="font-medium text-gray-500 hidden sm:flex">
            {t("Low-cost flights from Georgia to Europe")}
          </div>
        </div>
        <div className="text-primaryBlue text-sm sm:text-md font-medium flex justify-end items-end gap-1 whitespace-nowrap ">
          <div className="flex text-xs items-center cursor-pointer">
            {t("See all")}
            <span className="material-symbols-outlined text-sm">
              chevron_right
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-5 ">
        <div className="max-w-6xl mx-auto  flex  sm:flex-row gap-5 w-full sm:w-1/2">
          <div className="w-full flex flex-col gap-5">
            <Card
              imageUrl={Parispic}
              city={t("Paris")}
              tailwindHeight="h-44"
              description={t("Sep 28 from $520")}
            />
            <Card
              imageUrl={LondonPic}
              city={t("London")}
              tailwindHeight="h-44"
              description={t("Feb 2 from $570")}
            />
            <Card
              imageUrl={BerlinPic}
              city={t("Berlin")}
              tailwindHeight="h-44"
              description={t("Oct 30 from $520")}
            />
          </div>
          <div className="w-full flex flex-col gap-5">
            <Card
              imageUrl={bigParis}
              city={t("Paris")}
              tailwindHeight="h-full"
              description={t("Oct 30 from $480")}
            />
            <Card
              imageUrl={TbilisiPic}
              city={t("Tbilisi")}
              tailwindHeight="h-44"
              description={t("Apr 3 from $720")}
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex  sm:flex-row gap-5 w-full sm:w-1/2">
          <div className="w-full flex flex-col gap-5 ">
            <Card
              imageUrl={NewYorkPic}
              city={t("New york")}
              tailwindHeight="h-full" // TAILWIND HEIGHT CLASS
              description={t("Oct 30 from $480")}
            />
            <Card
              imageUrl={AthenPic}
              city={t("Athen")}
              tailwindHeight="h-44" // TAILWIND HEIGHT CLASS
              description={t("Oct 30 from $520")}
            />
          </div>
          <div className="w-full flex flex-col gap-5 ">
            <Card
              imageUrl={PraguePic}
              city={t("Prague")}
              tailwindHeight="h-44" // TAILWIND HEIGHT CLASS
              description={t("Sep 28 from $520")}
            />
            <Card
              imageUrl={RomePic}
              city={t("Rome")}
              tailwindHeight="h-44" // TAILWIND HEIGHT CLASS
              description={t("Apr 3 from $720")}
            />
            <Card
              imageUrl={BarcelonaPic}
              city={t("Barcelona")}
              tailwindHeight="h-44" // TAILWIND HEIGHT CLASS
              description={t("Feb 2 from $570")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllDirections;
