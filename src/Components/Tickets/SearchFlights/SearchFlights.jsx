import React, { useState } from "react";
import Plane from "../../../assets/Tickets/images/Plane.png";
import Hotel from "../../../assets/Tickets/images/Hotel.png";
import Car from "../../../assets/Tickets/images/Car.png";
import SearchIcon from "../../../assets/Tickets/images/search.png";
// TAB 1 COMPONENTS
import OneWay from "./OneWay";
import Passengers from "./Passengers";
import EconomyClass from "./EconomyClass";
import Airports from "./Airports";
import DateSelector from "./DateSelector";
// TAB 2 COMPONENTS
import HotelDestination from "./HotelDestination";
import CheckInDate from "./CheckInDate";
import CheckOutDate from "./CheckOutDate";
import SearchHotels from "./SearchHotels";
// TAB 3 COMPONENT
import CarRental from "./CarRental";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function SearchFlight() {
  const [activeTab, setActiveTab] = useState("tab1");
  const { t } = useTranslation();

  // TAB 1 STATES
  const oneWayState = useSelector((state) => state.oneWay.oneWayState);
  const passengers = useSelector((state) => state.passengers.passengers);
  const selectedClass = useSelector((state) => state.class.selectedClass);
  const { dates } = useSelector((state) => state.dateSelection);
  const { selectedFromAirport, selectedToAirport } = useSelector(
    (state) => state.airports
  );

  // SET ACTIVE TAB
  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  // TRANSFORMING CURRENT STATE TO ENGLISH TO ALERT
  const stateMessage =
    oneWayState === "ცალმხრივი"
      ? "Bilateral"
      : oneWayState === "Einseitig" || oneWayState === "ორმხრივი"
      ? "Unilateral"
      : oneWayState;
  const classMessage =
    selectedClass === "Economy klasse" || selectedClass === "ეკონომ კლასი"
      ? "Economy class"
      : selectedClass === "Premium klasse" ||
        selectedClass === "პრემიუმ ეკონომ კლასი"
      ? "Premium class"
      : selectedClass === "Business klasse" || selectedClass === "ბიზნეს კლასი"
      ? "Business class"
      : selectedClass === "Erste klasse" || selectedClass === "პირველი კლასი"
      ? "First class"
      : selectedClass;

  // TAB 1 BUTTON FUNCTION COLLECT ALL THE DATA IN ALERT
  const handleSearchClick = () => {
    const passengersSummary = Object.entries(passengers)
      .filter(([_, data]) => data.count > 0)
      .map(([type, data]) => `${type}: ${data.count}`)
      .join(", ");
    alert(
      `Way: ${stateMessage}\nPassengers: ${passengersSummary}\nClass: ${classMessage}\nFrom: ${
        selectedFromAirport ? selectedFromAirport.name : "(not chosen)"
      } to ${
        selectedToAirport ? selectedToAirport.name : "(not chosen)"
      }\n Departure: ${dates.departure}\n Return: ${dates.return} `
    );
  };

  return (
    // SECTION CONTAINER
    <div className="bg-book-flight-cover bg-cover bg-center h-auto w-full noto-sans-georgian">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TITLE */}
        <div className="title text-white font-semibold text-3xl py-14 noto-sans-georgian">
          {t("Happiness gained from traveling")}
        </div>
        {/* FLIGHT BOOKING CONTAINER */}
        <div className="pb-16">
          {/* TABS CONTAINER */}
          <div className="flex">
            {/* TAB 1 */}
            <div
              className={`flex justify-center cursor-pointer w-1/5 md:px-12 px-5 py-4 min-w-20 font-medium text-sm rounded-tl-lg focus:outline-none ${
                activeTab === "tab1"
                  ? "bg-white text-textDark"
                  : "text-white bg-[#0000007A]"
              }`}
              onClick={() => changeTab("tab1")}
            >
              <div className="flex gap-2 justify-center items-center">
                <img
                  src={Plane}
                  alt="Plane"
                  className={`p-1.5 rounded-lg ${
                    activeTab === "tab1" ? "bg-primaryBlue" : "bg-none"
                  }`}
                />
                <span className="text-xs lg:text-sm hidden custom:block">
                  {t("Tickets")}
                </span>
              </div>
            </div>
            {/* TAB 2 */}
            <div
              className={`flex justify-center cursor-pointer w-1/5 px-5 py-4 min-w-20 font-medium text-sm focus:outline-none ${
                activeTab === "tab2"
                  ? "bg-white text-textDark"
                  : "text-white bg-[#0000007A]"
              }`}
              onClick={() => changeTab("tab2")}
            >
              <div className="flex gap-2 items-center">
                <img
                  src={Hotel}
                  alt="Plane "
                  className={`p-2 rounded-lg ${
                    activeTab === "tab2" ? "bg-primaryBlue" : "bg-none"
                  }`}
                />
                <span className="text-xs lg:text-sm hidden custom:block">
                  {t("Hotels")}
                </span>
              </div>
            </div>
            {/* TAB 3 */}
            <div
              className={`flex justify-center cursor-pointer px-5 py-4 min-w-20 font-medium rounded-tr-lg text-sm focus:outline-none ${
                activeTab === "tab3"
                  ? "bg-white text-textDark"
                  : "text-white bg-[#0000007A]"
              } custom:w-1/4 w-1/5`}
              onClick={() => changeTab("tab3")}
            >
              <div className="flex gap-2 items-center">
                <img
                  src={Car}
                  alt="Plane"
                  className={`p-2.5 rounded-lg ${
                    activeTab === "tab3" ? "bg-primaryBlue" : "bg-none"
                  }`}
                />
                <span className="text-xs lg:text-sm hidden custom:block">
                  {t("Car rental")}
                </span>
              </div>
            </div>
          </div>

          {/* TAB 1 CONTENT */}
          <div className="bg-white rounded-b-lg rounded-tr-lg p-4 h-auto lg:h-64">
            {activeTab === "tab1" && (
              <div className="">
                <div className="px-5 flex items-center justify-center lg:justify-start">
                  <OneWay />
                  <Passengers />
                  <EconomyClass />
                </div>
                <div className="px-5 py-2 flex gap-4 flex-col lg:flex-row ">
                  <Airports />
                  <DateSelector />
                </div>
                <div className="px-5 py-5 flex justify-between items-end">
                  <div className="text-sm text-gray-400 font-semibold">
                    {t("Search, book and purchase tickets for free in minutes")}
                  </div>
                  <div>
                    <button
                      onClick={handleSearchClick}
                      className="bg-blue-500 hover:bg-blue-700 text-lg px-5 py-3 rounded-md text-white font-semibold flex items-center justify-center gap-4 min-w-14 min-h-14"
                    >
                      <img
                        src={SearchIcon}
                        alt="search icon"
                        className="h-5 w-5"
                      />
                      <span className="hidden md:flex whitespace-nowrap">
                        {t("Search for tickets")}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* TAB 2 CONTENT */}
            {activeTab === "tab2" && (
              <div className="">
                <div className="px-4 mt-2 text-lg font-semibold text-textDark">
                  {t("Search hotels and more...")}
                </div>
                <div className="p-4 flex flex-col lg:flex-row gap-8">
                  <HotelDestination />
                  <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row w-full lg:w-2/4">
                    <CheckInDate title="Check-in Date" />
                    <CheckOutDate title="Check-out Date" />
                  </div>
                </div>
                <div className="px-4 py-2">
                  <SearchHotels />
                </div>
              </div>
            )}
            {/* TAB 3 CONTENT */}
            {activeTab === "tab3" && (
              <div className="p-4">
                <CarRental />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchFlight;
