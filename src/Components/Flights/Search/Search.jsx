import React from "react";
import Airports from "../../Tickets/SearchFlights/Airports";
import DateSelector from "../../Tickets/SearchFlights/DateSelector";
import EconomyClass from "../../Tickets/SearchFlights/EconomyClass";
import OneWay from "../../Tickets/SearchFlights/OneWay";
import Passengers from "../../Tickets/SearchFlights/Passengers";
import FlightsButton from "./FlightsButton";
import Results from "./Results";
import TransferDropdown from "./TransferDropdown";
import AirlinesDropdown from "./AirlinesDropdown";

import { useDispatch, useSelector } from "react-redux";
import { setSearchResults } from "../../../Store/SearchFlights/searchResults";
import TimeDropdown from "./TimeDropdown";

function Search() {
  const dispatch = useDispatch();
  const flightsData = useSelector((state) => state.searchResults);

  const handleSearchData = (data) => {
    dispatch(setSearchResults(data));
  };
  return (
    <div className="z-10 relative">
      <div className=" bg-white h-auto w-full noto-sans-georgian ">
        <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
          <div className="bg-white rounded-b-lg rounded-tr-lg p-4 h-auto ">
            <div className="sm:px-5 flex items-center justify-center lg:justify-start">
              <OneWay />
              <Passengers />
              <EconomyClass />
            </div>
            <div className="sm:px-5 py-2 flex gap-4 flex-col lg:flex-row ">
              <Airports />
              <DateSelector />
            </div>
            <div className="sm:px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-400 font-semibold flex gap-2">
                {" "}
                <TransferDropdown selectorText="Transfer" />
                <AirlinesDropdown />
                <TimeDropdown />
              </div>
              <div>
                {/* FILTER BUTTON */}
                <FlightsButton onSearchData={handleSearchData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* RESULTS COMPONENT */}
      <Results flightsData={flightsData} />
    </div>
  );
}

export default Search;
