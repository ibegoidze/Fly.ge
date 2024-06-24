import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import FlightsNavigation from "../Components/Flights/Search/FlightsNavigation";
import Search from "../Components/Flights/Search/Search";
import Results from "../Components/Flights/Search/Results";
import TravelDetails from "../Components/Flights/Details/TravelDetails";
import FlightReview from "../Components/Flights/Review/FlightReview";

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

  // USED IN SEARCH
  const handleBookButtonClick = (flight) => {
    setSelectedFlight(flight);
    navigate(`/Flights/details?flightId=${flight.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // USED IN DETAILS PRICING
  const handleContinueButtonClick = (flight) => {
    setSelectedFlight(flight);
    navigate(`/Flights/review?flightId=${flight.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
                <Search flightsData={flightsData} />
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
                <TravelDetails
                  selectedFlight={selectedFlight}
                  handleContinueButtonClick={handleContinueButtonClick}
                />
              ) : (
                <div>No flight selected</div>
              )
            }
          />
          <Route
            path="review"
            element={
              selectedFlight ? (
                <FlightReview selectedFlight={selectedFlight} />
              ) : (
                <div>not selected</div>
              )
            }
          />
          <Route path="/" element={<div>Select a tab</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default Flights;
