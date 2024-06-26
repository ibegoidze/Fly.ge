import React from "react";
import Card from "./Card";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ObjectGenerator from "../../../objectGenerator";
import { useDispatch } from "react-redux";
import { setSearchResults } from "../../../Store/SearchFlights/searchResults.js";

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

// NAVIGATE TO FLIGHTS PAGE AND FILTER THE FLIGHTS ACCORDING TO CARD INFO
function AllDirections() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCardClick = (city, dates) => {
    const [departure, returnDate] = dates;
    const generator = new ObjectGenerator(
      "Tbilisi",
      city,
      departure,
      returnDate
    );
    const generatedFlights = generator.generateObjects();
    dispatch(setSearchResults(generatedFlights));
    navigate(
      `/Flights/search?from=Tbilisi&to=${city}&checkin=${departure}&checkout=${returnDate}`
    );
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

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
        <div className="text-primaryBlue text-sm sm:text-md font-medium flex justify-end items-end gap-1 whitespace-nowrap">
          <div className="flex text-xs items-center cursor-pointer">
            {t("See all")}
            <span className="material-symbols-outlined text-sm">
              chevron_right
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-3">
        <div className="max-w-6xl mx-auto  flex  sm:flex-row gap-3 w-full sm:w-1/2">
          <div className="w-full flex flex-col gap-3">
            <Card
              imageUrl={Parispic}
              city={t("Paris")}
              tailwindHeight="h-44"
              description={t("Sep 28 from $520")}
              dates={["2024-09-28", "2024-10-05"]}
              onClick={() =>
                handleCardClick("Paris", ["2024-09-28", "2024-10-05"])
              }
            />
            <Card
              imageUrl={LondonPic}
              city={t("London")}
              tailwindHeight="h-44"
              description={t("Feb 2 from $570")}
              dates={["2024-10-02", "2024-10-09"]}
              onClick={() =>
                handleCardClick("London", ["2024-10-02", "2024-10-09"])
              }
            />
            <Card
              imageUrl={BerlinPic}
              city={t("Berlin")}
              tailwindHeight="h-44"
              description={t("Oct 30 from $520")}
              dates={["2024-10-30", "2024-11-06"]}
              onClick={() =>
                handleCardClick("Berlin", ["2024-10-30", "2024-11-06"])
              }
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <Card
              imageUrl={bigParis}
              city={t("Paris")}
              tailwindHeight="h-full"
              description={t("Oct 30 from $480")}
              dates={["2024-10-30", "2024-11-06"]}
              onClick={() =>
                handleCardClick("Paris", ["2024-10-30", "2024-11-06"])
              }
            />
            <Card
              imageUrl={TbilisiPic}
              city={t("Tbilisi")}
              tailwindHeight="h-44"
              description={t("Nov 3 from $720")}
              dates={["2024-11-03", "2024-11-10"]}
              onClick={() =>
                handleCardClick("Tbilisi", ["2024-11-03", "2024-11-10"])
              }
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex  sm:flex-row gap-3 w-full sm:w-1/2">
          <div className="w-full flex flex-col gap-3">
            <Card
              imageUrl={NewYorkPic}
              city={t("New York")}
              tailwindHeight="h-full"
              description={t("Dec 25 from $480")}
              dates={["2024-12-25", "2025-01-01"]}
              onClick={() =>
                handleCardClick("New York", ["2024-12-25", "2025-01-01"])
              }
            />
            <Card
              imageUrl={AthenPic}
              city={t("Athen")}
              tailwindHeight="h-44"
              description={t("Oct 30 from $520")}
              dates={["2024-10-30", "2024-11-06"]}
              onClick={() =>
                handleCardClick("Athen", ["2024-10-30", "2024-11-06"])
              }
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <Card
              imageUrl={PraguePic}
              city={t("Prague")}
              tailwindHeight="h-44"
              description={t("Sep 28 from $520")}
              dates={["2024-09-28", "2024-10-05"]}
              onClick={() =>
                handleCardClick("Prague", ["2024-09-28", "2024-10-05"])
              }
            />
            <Card
              imageUrl={RomePic}
              city={t("Rome")}
              tailwindHeight="h-44"
              description={t("Dec 3 from $720")}
              dates={["2024-12-03", "2024-12-10"]}
              onClick={() =>
                handleCardClick("Rome", ["2024-12-03", "2024-12-10"])
              }
            />
            <Card
              imageUrl={BarcelonaPic}
              city={t("Barcelona")}
              tailwindHeight="h-44"
              description={t("Dec 15 from $570")}
              dates={["2024-12-15", "2024-12-22"]}
              onClick={() =>
                handleCardClick("Barcelona", ["2024-12-15", "2024-12-22"])
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllDirections;
