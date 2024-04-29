import { useState } from "react";
import Extention from "./Extention";
import Luggage from "./Luggage";

function SeeAllBar({ flightsData }) {
  const [openFlightId, setOpenFlightId] = useState(null);
  const [hideLuggage, setHideLuggage] = useState(false);
  // TOGGLE EXTENTION
  const toggleExtension = (flightId) => {
    setOpenFlightId(openFlightId === flightId ? null : flightId);
    setHideLuggage(!hideLuggage);
  };

  return (
    <div>
      <div className="SEEALL h-12 flex justify-between px-5 items-center">
        <div
          className={`${
            hideLuggage ? "opacity-0" : "opacity-100"
          } transition-all duration-100`}
        >
          <Luggage flightsData={flightsData} />
        </div>
        <div
          className="SEEALL h-12 flex justify-end items-center text-sm font-medium text-primaryBlue cursor-pointer"
          onClick={() => toggleExtension(flightsData.id)}
        >
          See all
        </div>
      </div>
      <div
        className={`EXTENTION  overflow-hidden transition-all ease-in duration-500 delay-0 ${
          openFlightId === flightsData.id ? "max-h-auto" : "max-h-0"
        }`}
      >
        <Extention flightsData={flightsData} />
      </div>
    </div>
  );
}

export default SeeAllBar;
