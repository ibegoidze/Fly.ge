import React from "react";
import Airports from "../../Tickets/SearchFlights/Airports";
import DateSelector from "../../Tickets/SearchFlights/DateSelector";
import EconomyClass from "../../Tickets/SearchFlights/EconomyClass";
import OneWay from "../../Tickets/SearchFlights/OneWay";
import Passengers from "../../Tickets/SearchFlights/Passengers";
import SearchDropdown from "./SearchDropdown";
import FlightsButton from "./FlightsButton";
import Results from "./Results";

import { useDispatch, useSelector } from "react-redux";
import { setSearchResults } from "../../../Store/SearchFlights/searchResults";

function Search() {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchResults);

  const handleSearchData = (data) => {
    dispatch(setSearchResults(data));
  };

  return (
    <div className="z-10 relative">
      <div className=" bg-white h-auto w-full noto-sans-georgian shadow-lg">
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
                <SearchDropdown
                  selectorText="Transfer"
                  dropdownOptions={[
                    "No transfer",
                    "One transfer",
                    "Couple transfer",
                  ]}
                />
                <SearchDropdown
                  selectorText="Airlines"
                  dropdownOptions={[
                    "Pegasus",
                    "Georgian Airways",
                    "Wizzair",
                    "Turkish Airlines",
                  ]}
                />
                <SearchDropdown
                  selectorText="Times"
                  dropdownOptions={[
                    "No transfer",
                    "One transfer",
                    "Couple transfer",
                  ]}
                />
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
      <Results searchData={searchResults} />
    </div>
  );
}

export default Search;
