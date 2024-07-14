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
  const [mainImage, setMainImage] = useState(Rio1);

  const [thumbnails, setThumbnails] = useState([
    Rio2,
    Rio3,
    Rio4,
    Rio5,
    Rio6,
    Rio7,
    Rio8,
  ]);

  // HANDLE IMAGE CLICK AND SWAP
  const handleThumbnailClick = (clickedImage) => {
    setThumbnails(
      thumbnails.map((image) => (image === clickedImage ? mainImage : image))
    ); // SWAP CLICKED IMAGE WITH MAIN IMAGE
    setMainImage(clickedImage); // UPDATE MAIN IMAGE
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
    <div className="p-5 bg-white flex flex-col sm:w-2/3 rounded shadow-lg gap-5">
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
            className="w-full h-44 sm:h-96 object-cover transition-all duration-700  rounded-md "
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
            className="border border-gray-300 p-4 flex flex-col "
          >
            <img
              src={item.image}
              alt={t(item.titleKey)}
              className="w-5 h-5 mb-4"
            />
            <div className="font-bold mb-2">{t(item.titleKey)}</div>
            <p className="text-sm text-gray-500 font-medium">
              {t(item.textKey)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trip;
