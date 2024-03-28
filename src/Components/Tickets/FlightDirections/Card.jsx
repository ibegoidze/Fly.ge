import React from "react";
import { useTranslation } from "react-i18next";

const Card = ({ imageUrl, city, height, description }) => {
  const { t } = useTranslation();
  return (
    <div className={`p-4 bg-white rounded `} style={{ height: `${height}px` }}>
      <div className={`relative rounded overflow-hidden shadow-lg h-full p-5`}>
        <div
          className="absolute inset-0 flex flex-col justify-end cursor-pointer"
          style={{ overflow: "hidden" }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-black opacity-95 bg-center transition-transform duration-700 ease-in-out transform-gpu scale-200 hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>

          {/* Content */}
          <div className="text-white px-6 py-4 flex justify-between items-end">
            <div>
              <div className="font-bold text-lg opacity-90">{city}</div>
              <div className="text-sm font-semibold opacity-85">
                {description}
              </div>
            </div>

            <button className="relative bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-7 rounded flex items-center ">
              {t("Reserve")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
