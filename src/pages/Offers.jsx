import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import OffersNavigation from "../Components/Offers/Offers/OffersNavigation";
import OffersPage from "../Components/Offers/Offers/OffersPage";

function Offers() {
  const [activeTab, setActiveTab] = useState("search");
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(tab === "search" ? "/Offers" : `/Offers/${tab}`);
  };

  return (
    <div className="bg-bgGray">
      <OffersNavigation
        handleTabClick={handleTabClick}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <OffersPage />
      <Outlet />
    </div>
  );
}

export default Offers;
