import React, { useState } from "react";

import FlightsNavigation from "../Components/Flights/Search/FlightsNavigation";
import Search from "../Components/Flights/Search/Search";
import Results from "../Components/Flights/Search/Results";
import { useSelector } from "react-redux";

const Flight = () => {
  const flightsData = useSelector((state) => state.searchResults);
  // TABS
  const [activeTab, setActiveTab] = useState("search");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
            <Results flightsData={flightsData} />
          </div>
        )}
        {activeTab === "details" && <div>Details Content</div>}
        {activeTab === "review" && <div>Other Content</div>}
      </div>
    </div>
  );
};

export default Flight;
