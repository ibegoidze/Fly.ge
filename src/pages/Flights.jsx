import React, { useState } from "react";

import FlightsNavigation from "../Components/Flights/Search/FlightsNavigation";
import Search from "../Components/Flights/Search/Search";
import Results from "../Components/Flights/Search/Results";

const Flight = () => {
  // TABS
  const [activeTab, setActiveTab] = useState("search");
  const [searchData, setSearchData] = useState([]);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleSearchData = (data) => {
    setSearchData(data);
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
            <Search onSearchData={handleSearchData} />
            {/* <Results searchData={searchData} /> */}
          </div>
        )}
        {activeTab === "details" && <div>Details Content</div>}
        {activeTab === "review" && <div>Other Content</div>}
      </div>
    </div>
  );
};

export default Flight;
