// CREATING A TRIANGLE THAT WILL BE POSITIONED AT THE BOTTOM LINE OF FLIGHTNAVIGATION DIV AND WILL BE CENTERED ON THE CURRENTLY ACTIVE TAB

import React, { useRef, useEffect, useState } from "react";
import ArrowPic from "../../../assets/Flights/Search/Arrow.png";
import ActiveArrowPic from "../../../assets/Flights/Search/ActiveArrow.png";
import { useTranslation } from "react-i18next";

function FlightsNavigation({ setActiveTab, activeTab, handleTabClick }) {
  const { t } = useTranslation();
  const [topPosition, setTopPosition] = useState(0);
  const navigationRef = useRef(null);
  const activeTabRef = useRef(null);
  const triangleRef = useRef(null);

  useEffect(() => {
    const headerHeight = document.querySelector("header").offsetHeight;
    setTopPosition(headerHeight);
  }, []);

  useEffect(() => {
    if (activeTabRef.current && triangleRef.current) {
      const activeTabRect = activeTabRef.current.getBoundingClientRect();
      const navigationRect = navigationRef.current.getBoundingClientRect();
      const center =
        activeTabRect.left - navigationRect.left + activeTabRect.width / 2;
      triangleRef.current.style.left = `${center}px`;
    }
  }, [activeTab]);

  return (
    <div
      ref={navigationRef}
      className="bg-navBg"
      style={{ top: `0`, position: "relative" }}
    >
      {/* NAVIGATION */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 sm:gap-5 bg-navBg py-4 text-xs sm:text-sm font-medium relative whitespace-nowrap flex">
        <div
          ref={activeTab === "search" ? activeTabRef : null}
          className={`flex items-center ${
            activeTab === "search"
              ? "active text-white"
              : "hidden xs:flex text-gray-300"
          } cursor-pointer`}
          onClick={() => handleTabClick("search")}
        >
          <span>{t("Search")}</span>
          {activeTab === "search" && (
            <img src={ActiveArrowPic} alt="Active Arrow" className="w-5" />
          )}
          {activeTab !== "search" && (
            <img src={ArrowPic} alt="Arrow" className="w-5" />
          )}
        </div>
        <div
          ref={activeTab === "details" ? activeTabRef : null}
          className={`flex items-center ${
            activeTab === "details"
              ? "active text-white"
              : "hidden xs:flex text-gray-300"
          } cursor-pointer`}
          onClick={() => handleTabClick("details")}
        >
          <span>{t("Travel details")}</span>
          {activeTab === "details" && (
            <img src={ActiveArrowPic} alt="Active Arrow" className="w-5" />
          )}
          {activeTab !== "details" && (
            <img src={ArrowPic} alt="Arrow" className="w-5" />
          )}
        </div>
        <div
          ref={activeTab === "review" ? activeTabRef : null}
          className={`flex items-center ${
            activeTab === "review"
              ? "active text-white"
              : "hidden xs:flex text-gray-300"
          } cursor-pointer`}
          onClick={() => handleTabClick("review")}
        >
          <span>{t("Review and payment")}</span>
          {activeTab === "review" && (
            <img src={ActiveArrowPic} alt="Active Arrow" className="w-5" />
          )}
          {activeTab !== "review" && (
            <img src={ArrowPic} alt="Arrow" className="w-5" />
          )}
        </div>
      </div>
      {/* TRIANGLE */}
      {activeTab && (
        <div
          ref={triangleRef}
          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 border-t-4 border-r-4 ${
            activeTab === "search" ? "border-white" : "border-backgroundGray"
          } -rotate-45 bg-transparent transition-all duration-300`}
        ></div>
      )}
    </div>
  );
}

export default FlightsNavigation;
