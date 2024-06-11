import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import FlightsNavigation from "../Components/Flights/Search/FlightsNavigation";
import Search from "../Components/Flights/Search/Search";
import Results from "../Components/Flights/Search/Results";
import TravelDetails from "../Components/Flights/Details/TravelDetails";

const Flights = () => {
  const flightsData = useSelector((state) => state.searchResults);
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState("search");
  const [selectedFlight, setSelectedFlight] = useState(null);

  useEffect(() => {
    const currentTab = location.pathname.split("/").pop();
    setActiveTab(currentTab || "search");
  }, [location]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/Flights/${tab}`);
  };

  const handleBookButtonClick = (flight) => {
    setSelectedFlight(flight);
    navigate(`/Flights/details`);
  };

  return (
    <div className="noto-sans-georgian bg-backgroundGray">
      <FlightsNavigation
        handleTabClick={handleTabClick}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="tab-content">
        <Routes>
          <Route
            path="search"
            element={
              <div>
                <Search />
                <Results
                  flightsData={flightsData}
                  onBookButtonClick={handleBookButtonClick}
                />
              </div>
            }
          />
          <Route
            path="details"
            element={
              selectedFlight ? (
                <TravelDetails selectedFlight={selectedFlight} />
              ) : (
                <div>No flight selected</div>
              )
            }
          />
          <Route path="review" element={<div>Other Content</div>} />
          <Route path="/" element={<div>Select a tab</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default Flights;