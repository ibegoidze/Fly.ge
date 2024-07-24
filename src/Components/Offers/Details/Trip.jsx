import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Compass from "../../../assets/Offers/Details/Compass.png";
import Rio1 from "../../../assets/Offers/Details/Rio1.jpg";
import Rio2 from "../../../assets/Offers/Details/Rio2.jpg";
import Rio3 from "../../../assets/Offers/Details/Rio3.jpg";
import Rio4 from "../../../assets/Offers/Details/Rio4.jpg";
import Rio5 from "../../../assets/Offers/Details/Rio5.jpg";
import Rio6 from "../../../assets/Offers/Details/Rio6.jpg";
import Rio7 from "../../../assets/Offers/Details/Rio7.jpg";
import Rio8 from "../../../assets/Offers/Details/Rio8.jpg";

import Calendar from "../../../assets/Offers/Details/Calendar.png";
import Flag from "../../../assets/Offers/Details/Flag.png";
import Ticket from "../../../assets/Offers/Details/Ticket.png";
import Cabin from "../../../assets/Offers/Details/Cabin.png";
import Spoon from "../../../assets/Offers/Details/Spoon.png";
import Backpack from "../../../assets/Offers/Details/Backpack.png";

function Trip({ offer }) {
  const { t } = useTranslation();
  const [mainImage, setMainImage] = useState(
    offer.page.cityImages[0] ? offer.page.cityImages[0] : Rio8
  );

  const [thumbnails, setThumbnails] = useState([
    offer.page.cityImages[1] ? offer.page.cityImages[1] : Rio1,
    offer.page.cityImages[2] ? offer.page.cityImages[2] : Rio2,
    offer.page.cityImages[3] ? offer.page.cityImages[3] : Rio3,
    offer.page.cityImages[4] ? offer.page.cityImages[4] : Rio4,
    offer.page.cityImages[5] ? offer.page.cityImages[5] : Rio5,
    offer.page.cityImages[6] ? offer.page.cityImages[6] : Rio6,
    offer.page.cityImages[7] ? offer.page.cityImages[7] : Rio7,
  ]);

  //  CLICK AND SWAP
  const handleThumbnailClick = (clickedImage) => {
    setThumbnails(
      thumbnails.map((image) => (image === clickedImage ? mainImage : image))
    );
    setMainImage(clickedImage);
  };

  const tripData = [
    {
      id: 1,
      image: Calendar,
      titleKey: "tourTitle1",
      textKey: "tourText1",
    },
    {
      id: 2,
      image: Flag,
      titleKey: "tourTitle2",
      textKey: "tourText2",
    },
    {
      id: 3,
      image: Ticket,
      titleKey: "tourTitle3",
      textKey: "tourText3",
    },
    {
      id: 4,
      image: Cabin,
      titleKey: "tourTitle4",
      textKey: "tourText4",
    },
    {
      id: 5,
      image: Spoon,
      titleKey: "tourTitle5",
      textKey: "tourText5",
    },
    {
      id: 6,
      image: Backpack,
      titleKey: "tourTitle6",
      textKey: "tourText6",
    },
  ];

  return (
    <div className="p-5 bg-white flex flex-col sm:w-2/3 rounded shadow-lg gap-5 mb-10">
      {/* LEFT SIDE */}
      <div className="sm:w-1/2 flex flex-col justify-between">
        <div className="HEADING flex items-center gap-5">
          <div className="bg-primaryBlue flex items-center justify-center rounded-md p-2">
            <img src={Compass} alt="" className="w-5 h-5" />
          </div>
          <div className="font-semibold text-gray-800 text-lg">
            {t("Offer")} {t(offer.card.cityName)}
          </div>
        </div>
        <div />
      </div>
      <div className="flex flex-col items-center w-full">
        {/* MAIN IMAGE */}
        <div className="w-full mb-4 transition-all duration-700">
          <img
            src={mainImage}
            alt="Main"
            className="w-full h-44 sm:h-96 object-cover transition-all duration-700 rounded-md"
          />
        </div>
        {/* THUMBNAILS */}
        <div className="flex gap-2 w-full">
          {thumbnails.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-10 sm:h-16 cursor-pointer object-cover rounded-md"
              style={{
                width: `calc((100% - (${thumbnails.length - 1} * 0.5rem)) / ${
                  thumbnails.length
                })`,
              }}
              onClick={() => handleThumbnailClick(thumbnail)}
            />
          ))}
        </div>
      </div>
      <div className="TEXT text-sm text-gray-500 font-medium">
        {t("tripToRio")}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tripData.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 p-2.5 flex flex-col rounded-md"
          >
            <img
              src={item.image}
              alt={t(item.titleKey)}
              className="w-5 h-5 mb-2"
            />
            <div className="font-semibold text-sm mb-2">{t(item.titleKey)}</div>
            <p className="text-xs text-gray-500 font-medium">
              {t(item.textKey)}
            </p>
          </div>
        ))}
      </div>
      <div className="ACTIVITIES">
        <div className="font-semibold mb-2">{t("important_activities")}</div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-500 font-medium">
            • {t("maracana_visit")}
          </p>
          <p className="text-sm text-gray-500 font-medium">
            • {t("taj_mahal_speech")}
          </p>
          <p className="text-sm text-gray-500 font-medium">
            • {t("resurrection_ritual")}
          </p>
          <p className="text-sm text-gray-500 font-medium">
            • {t("museum_discount_voucher")}
          </p>
        </div>
      </div>
      <div className="HERE">
        {/* ADDITION OF THE TIMELINE COMPONENT DIRECTLY HERE */}
        <div className="">
          {[
            { time: "05:00", text: t("Leave") },
            { time: "08:00", text: t("world_largest_football_stadium") },
            { time: "09:00", text: t("taj_mahal_3_minute_speech") },
            { time: "11:00", text: t("3_hour_journey") },
            { time: "01:00", text: t("dining") },
            { time: "03:00", text: t("hotel_return") },
          ].map((activity, index) => (
            <div className=" flex items-center space-x-2" key={index}>
              {/* TIME ELEMENT */}
              <div className="w-10 text-sm text-gray-700 font-medium">
                {activity.time}
              </div>

              {/* TEXT ELEMENT */}
              <div
                className={`w-full p-3 rounded-sm text-sm text-gray-700 font-medium ${
                  index % 2 === 0 ? "bg-gray-100" : ""
                }`}
              >
                {activity.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trip;
