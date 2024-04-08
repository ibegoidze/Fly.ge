import React, { useState } from "react";

import FlightsNavigation from "../Components/Flights/Search/FlightsNavigation";
import Search from "../Components/Flights/Search/Search";

const Flight = () => {
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
          </div>
        )}
        {activeTab === "details" && <div>Details Content</div>}
        {activeTab === "review" && <div>Other Content</div>}
      </div>
    </div>
  );
};

export default Flight;
