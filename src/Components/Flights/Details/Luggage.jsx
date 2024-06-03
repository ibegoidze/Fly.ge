import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setMainPassengerLuggage,
  setMainPassengerLuggagePrice,
} from "../../../Store/User/mainPassengerSlice";
import { useTranslation } from "react-i18next";

import BackPackPic from "../../../assets/Flights/Details/BackPackPic.png";
import HandBagPic from "../../../assets/Flights/Details/HandBag.png";
import CasePic from "../../../assets/Flights/Details/TravelBag.png";
import OrangeBag from "../../../assets/Flights/Details/OrangeBag.png";

function Luggage() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const mainPassengerLuggage = useSelector(
    (state) => state.mainPassenger.mainPassengerLuggage
  );
  const [selectedLuggage, setSelectedLuggage] = useState(mainPassengerLuggage);

  const luggageOptions = [
    {
      title: t("standardLuggage"),
      size: "60 x 20 x 40 cm, 10kg",
      price: 0,
      pic: BackPackPic,
    },
    {
      title: t("mediumLuggage"),
      size: "70 x 25 x 50 cm, 15kg",
      price: 40,
      pic: HandBagPic,
    },
    {
      title: t("largeLuggage"),
      size: "78 x 28 x 52 cm, 20kg",
      price: 50,
      pic: CasePic,
    },
  ];

  const handleSelectLuggage = (option) => {
    setSelectedLuggage(option.title);
    dispatch(setMainPassengerLuggage(option.title));
    dispatch(setMainPassengerLuggagePrice(option.price));
  };

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-5 mb-4">
        <span className="font-medium">{t("luggage")}</span>
        <span className="text-sm text-gray-500">{t("chooseOneOption")}</span>
      </div>
      <div className="luggage-options">
        {luggageOptions.map((option) => (
          <div
            key={option.title}
            className={`luggage-option border rounded-md p-2.5 flex justify-between items-center mb-2.5 cursor-pointer ${
              selectedLuggage === option.title
                ? "border-blue-300 bg-blue-50"
                : "border-gray-300"
            }`}
            onClick={() => handleSelectLuggage(option)}
          >
            <div className="flex gap-5 items-center ml-2">
              <div
                className={`w-4 h-4 rounded-sm border-2 p-1 ${
                  selectedLuggage === option.title
                    ? "border-blue-500 text-blue-500"
                    : "border-gray-300 text-blue-500"
                } flex justify-center items-center`}
                onClick={() => handleSelectLuggage(option)}
              >
                {selectedLuggage === option.title ? (
                  <span className="text-blue-500 font-semibold  text-xl left-0.5 bottom-1 relative">
                    &#10003;
                  </span>
                ) : null}
              </div>
              <img src={option.pic} alt="" className="w-5 h-5" />
              <span className="text-sm text-gray-600 w-44 font-medium hidden sm:flex">
                {option.title}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{option.size}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex justify-end gap-2 font-semibold text-gray-600 w-10">
                ${option.price}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-boxOrange border rounded-lg p-5 flex gap-5 border-bogOrange mt-10">
        <img src={OrangeBag} alt="" className="w-5 h-5" />
        <span className="text-sm text-bogOrange font-medium">
          {t("enterDetails")}
        </span>
      </div>
    </div>
  );
}

export default Luggage;
