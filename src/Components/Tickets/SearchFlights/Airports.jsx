import React, { useEffect, useState } from "react";
import AirportFrom from "../../../assets/Tickets/images/AirportFrom.png";
import AirportTo from "../../../assets/Tickets/images/AirportTo.png";
import SwitchIcon from "../../../assets/Tickets/images/SwitchIcon.png";
import FromPic from "../../../assets/Tickets/images/From.png";
import ToPic from "../../../assets/Tickets/images/To.png";
import { airports } from "../../../static";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedFromAirport,
  setSelectedToAirport,
  setSearchTermFrom,
  setSearchTermTo,
  setIsRotating,
} from "../../../Store/SearchFlights/airportsSlice";

const AirportSelector = ({
  labelKey,
  onAirportSelect,
  airportIcon,
  excludeAirport,
  backgroundImage,
  selectedAirport,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const { t } = useTranslation();

  // PUT SELECTED AIRPORT STATE IN SEARCHBAR
  useEffect(() => {
    if (selectedAirport) {
      setSearchTerm(`${selectedAirport.name} (${selectedAirport.id})`);
    } else {
      setSearchTerm("");
    }
  }, [selectedAirport]);

  const handleSelect = (airport) => {
    onAirportSelect(airport);
    setSearchTerm(`${airport.name} ${airport.id}`);
    setShowDropdown(false);
  };

  // DROPDOWN SHOWING FIRST 5 ELEMENTS IN AIRPORTS DATA
  const getFilteredAirports = () => {
    return airports
      .filter(
        (airport) =>
          (airport.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            airport.id.toLowerCase().includes(searchTerm.toLowerCase())) &&
          (!excludeAirport || airport.id !== excludeAirport.id)
      )
      .slice(0, 5);
  };
  const filteredAirports = getFilteredAirports();

  // CLEARING INPUT CLEARS ITS STATE
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowDropdown(!!value);
    if (!value.trim()) {
      onAirportSelect(null);
    }
  };

  // FOR RESPONSIVE
  const useScreenWidthBelow = (width) => {
    const [isBelow, setIsBelow] = useState(window.innerWidth < width);

    useEffect(() => {
      const handleResize = () => setIsBelow(window.innerWidth < width);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [width]);

    return isBelow;
  };
  const isScreenWidthBelow1024 = useScreenWidthBelow(1024);
  // CREATING FLIGHT SEARCH COMPONENT
  return (
    // SEARCHBAR
    <div
      className="relative rounded-md w-full"
      style={{
        backgroundImage: isScreenWidthBelow1024
          ? "none"
          : `url(${backgroundImage})`,
        backgroundSize: "100% 100%",
        borderBottom: isScreenWidthBelow1024 ? "1px solid #d1d5db" : "none",
      }}
    >
      <div className="py-3 pl-2">
        <label
          htmlFor={labelKey}
          className="block text-xs font-medium text-gray-500 px-3"
        >
          {t(labelKey)}
        </label>
        <div className="flex items-center px-3">
          <img src={airportIcon} className="h-5 w-5 mr-2" alt="Airport Icon" />
          <input
            id={labelKey}
            className="block w-full pl-1 pr-10s py-1 bg-transparent rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={searchTerm}
            onChange={handleChange}
            onFocus={() => setShowDropdown(filteredAirports.length > 0)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
            placeholder={t("Choose the airport")}
          />
        </div>
        {/* DROPDOWN */}
        <div
          className={`transition-all duration-300 absolute z-10 mt-3 left-0 right-0 bg-white shadow-lg max-h-60 overflow-hidden rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm ${
            showDropdown && filteredAirports.length > 0
              ? "opacity-100"
              : "opacity-0"
          }`}
          style={{
            height: showDropdown && filteredAirports.length > 0 ? "auto" : "0",
          }}
        >
          {filteredAirports.map((airport) => (
            <div
              key={airport.id}
              className="flex items-center text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
              onClick={() => handleSelect(airport)}
            >
              <span className="text-md font-semibold mr-1">{airport.name}</span>
              <span className="text-xs font-bold text-gray-500 px-2 py-1 rounded">
                {airport.id}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Airports = () => {
  const dispatch = useDispatch();
  const {
    selectedFromAirport,
    selectedToAirport,
    searchTermFrom,
    searchTermTo,
    isRotating,
  } = useSelector((state) => state.airports);

  // SWITCH ICON
  const handleRotate = () => {
    if (selectedFromAirport && selectedToAirport) {
      dispatch(setSelectedFromAirport(selectedToAirport));
      dispatch(setSelectedToAirport(selectedFromAirport));
      dispatch(setSearchTermFrom(searchTermTo));
      dispatch(setSearchTermTo(searchTermFrom));
      dispatch(setIsRotating(true));
      setTimeout(() => dispatch(setIsRotating(false)), 500);
    }
  };

  // UPDATE THE SELECTED AIRPORT STATE WITH THE NEWLY SELECTED AIRPORT
  const handleAirportSelect = (airport, type) => {
    if (type === "From") {
      dispatch(setSelectedFromAirport(airport));
      dispatch(
        setSearchTermFrom(airport ? `${airport.name} (${airport.id})` : "")
      );
    } else {
      dispatch(setSelectedToAirport(airport));
      dispatch(
        setSearchTermTo(airport ? `${airport.name} (${airport.id})` : "")
      );
    }
  };

  // CONSOL LOG DATA WHEN BOTH AIRPORTS ARE SELECTED
  useEffect(() => {
    if (selectedFromAirport && selectedToAirport) {
      const flightData = {
        from: selectedFromAirport.name,
        to: selectedToAirport.name,
      };
      console.log("Flight data:", flightData);
    }
  }, [selectedFromAirport, selectedToAirport]);

  // RENDER FROM AIRPORT SWITCH ICON AND TO AIRPORT
  return (
    // FLIGHT FROM SEARCHBAR
    <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-1 relative lg:w-2/4">
      <AirportSelector
        labelKey="From"
        onAirportSelect={(airport) => handleAirportSelect(airport, "From")}
        excludeAirport={selectedToAirport}
        airportIcon={AirportFrom}
        backgroundImage={FromPic}
        selectedAirport={selectedFromAirport}
        searchTerm={searchTermFrom}
        setSearchTerm={setSearchTermFrom}
      />
      {/* SWITCH ICON */}
      <div
        className={`absolute w-5 h-5 bg-white rounded-full flex justify-center items-center cursor-pointer ${
          isRotating ? "animate-rotate" : ""
        }`}
        onClick={handleRotate}
      >
        <img src={SwitchIcon} alt="Switch" className="w-4 h-3" />
      </div>
      {/* FLIGHT TO SEARCHBAR */}
      <AirportSelector
        labelKey="To"
        onAirportSelect={(airport) => handleAirportSelect(airport, "To")}
        excludeAirport={selectedFromAirport}
        airportIcon={AirportTo}
        backgroundImage={ToPic}
        selectedAirport={selectedToAirport}
        searchTerm={searchTermTo}
        setSearchTerm={setSearchTermTo}
      />
    </div>
  );
};

export default Airports;
