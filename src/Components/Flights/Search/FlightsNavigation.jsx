import React from "react";
import ArrowPic from "../../../assets/Flights/Search/Arrow.png";
import ActiveArrowPic from "../../../assets/Flights/Search/ActiveArrow.png";
import ActivePic from "../../../assets/Flights/Search/Active.png";
import { useTranslation } from "react-i18next";

function FlightsNavigation({ setActiveTab, activeTab, handleTabClick }) {
  const { t } = useTranslation();
  return (
    <div className="bg-navBg">
      {/* NAVIGATION */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8  sm:gap-5 bg-navBg  py-5 text-xs sm:text-sm font-semibold relative whitespace-nowrap  flex">
        <div
          className={`flex items-center  ${
            activeTab === "search"
              ? "active  text-white"
              : "hidden xs:flex text-gray-300"
          } cursor-pointer`}
          onClick={() => handleTabClick("search")}
        >
          <div className="flex justify-center">
            <span>{t("Search")}</span>
            {activeTab === "search" && (
              <div className="absolute top-14">
                <img src={ActivePic} alt="" />
              </div>
            )}
          </div>
          {activeTab === "search" && (
            <img src={ActiveArrowPic} alt="Active Arrow" className="w-5" />
          )}
          {activeTab !== "search" && (
            <img src={ArrowPic} alt="Arrow" className="w-5" />
          )}
        </div>
        <div
          className={`flex items-center  ${
            activeTab === "details"
              ? "active  text-white"
              : "hidden xs:flex text-gray-300"
          } cursor-pointer`}
          onClick={() => handleTabClick("details")}
        >
          <div className="flex justify-center">
            <span>{t("Travel details")}</span>
            {activeTab === "details" && (
              <div className="absolute top-14">
                <img src={ActivePic} alt="" />
              </div>
            )}
          </div>
          {activeTab === "details" && (
            <img src={ActiveArrowPic} alt="Active Arrow" className="w-5" />
          )}
          {activeTab !== "details" && (
            <img src={ArrowPic} alt="Arrow" className="w-5" />
          )}
        </div>
        <div
          className={`flex items-center  ${
            activeTab === "review"
              ? "active  text-white"
              : "hidden xs:flex text-gray-300"
          } cursor-pointer`}
          onClick={() => handleTabClick("review")}
        >
          <div className="flex justify-center">
            <span>{t("Review and payment")}</span>
            {activeTab === "review" && (
              <div className="absolute top-14">
                <img src={ActivePic} alt="" />
              </div>
            )}
          </div>
          {activeTab === "review" && (
            <img src={ActiveArrowPic} alt="Active Arrow" className="w-5" />
          )}
          {activeTab !== "review" && (
            <img src={ArrowPic} alt="Arrow" className="w-5" />
          )}
        </div>
      </div>
    </div>
  );
}

export default FlightsNavigation;
