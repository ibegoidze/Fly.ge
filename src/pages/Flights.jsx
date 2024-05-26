import React, { useState } from "react";
import FlightsNavigation from "../Components/Flights/Search/FlightsNavigation";
import Search from "../Components/Flights/Search/Search";
import Results from "../Components/Flights/Search/Results";
import { useSelector } from "react-redux";
import TravelDetails from "../Components/Flights/Review/TravelDetails";

const Flight = () => {
  const flightsData = useSelector((state) => state.searchResults);

  // TABS
  const [activeTab, setActiveTab] = useState("search");

  // SELECTED FLIGHT
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleBookButtonClick = (flight) => {
    setSelectedFlight(flight);
    setActiveTab("details");
  };

  return (
    <div className="noto-sans-georgian">
      <FlightsNavigation
        handleTabClick={handleTabClick}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* CONTENT */}
      <div className="tab-content">
        {activeTab === "search" && (
          <div>
            <Search />
            <Results
              flightsData={flightsData}
              onBookButtonClick={handleBookButtonClick}
            />
          </div>
        )}
        {activeTab === "details" && (
          <div className="bg-backgroundGray">
            <TravelDetails selectedFlight={selectedFlight} />
          </div>
        )}
        {activeTab === "review" && <div>Other Content</div>}
      </div>
    </div>
  );
};

export default Flight;
