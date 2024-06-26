import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import planeql from "../../../assets/Tickets/images/planeTrail.png";

const Card = ({ imageUrl, city, tailwindHeight, description, onClick }) => {
  const { t } = useTranslation();

  // OVERLAY APPEARS ON HOVER
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`p-2 bg-white rounded shadow-lg ${tailwindHeight}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div
        className={`relative rounded overflow-hidden h-full `}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-end cursor-pointer">
          {/* OVERLAY */}
          <div
            className={`absolute inset-0 bg-black ${
              hovered ? "opacity-30" : "opacity-5"
            } transition-opacity duration-700`}
          ></div>

          {/* CONTENT */}
          <div
            className={`absolute bottom-14 inset-0 flex flex-col justify-end ${
              hovered ? "opacity-100" : "opacity-0"
            } transition-opacity duration-700`}
          >
            <div className="px-3 sm:px-5 text-white opacity-90 font-medium text-sm sm:text:base">
              {t("Tbilisi")}
            </div>
            <img src={planeql} alt="" className="opacity-80 w-1/2 px-6" />
          </div>

          <div className="text-white px-3 sm:px-5 py-4 flex justify-between items-end">
            <div>
              <div className="font-semibold text-lg opacity-90 text-sm sm:text:base">
                {city}
              </div>
              <div className="text-sm font-medium opacity-85 text-xs sm:text:base">
                {description}
              </div>
            </div>

            {/* <button className="relative bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium py-2 px-7 rounded flex items-center">
              {t("Reserve")}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
