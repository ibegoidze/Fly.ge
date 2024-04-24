import { useState } from "react";
import { useSelector } from "react-redux";
import Extention from "./Extention";

function SeeAllBar({ flightsData }) {
  const [openFlightId, setOpenFlightId] = useState(null);
  const passengerSum = useSelector(
    (state) => state.passengerSummary.passengerCountSummary
  );
  const toggleExtension = (flightId) => {
    setOpenFlightId(openFlightId === flightId ? null : flightId);
  };
  return (
    <div>
      <div className="SEEALL h-12 flex justify-between px-5 items-center ">
        <div className="flex gap-3">
          <div className="rounded-full bg-gray-50 border px-4 py-1.5 font-medium text-sm text-gray-500 cursor-pointer">
            {flightsData.class}
          </div>
          <div className="rounded-full bg-gray-50 border px-4 py-1.5 font-medium text-sm text-gray-500 cursor-pointer">
            {passengerSum} {passengerSum > 1 ? "passengers" : "passenger"}
          </div>
          <div className="rounded-full bg-gray-50 border px-4 py-1.5 font-medium text-sm text-gray-500 cursor-pointer">
            luggage
          </div>
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
          openFlightId === flightsData.id ? "max-h-screen" : "max-h-0"
        }`}
      >
        <Extention flightsData={flightsData} />
      </div>
    </div>
  );
}

export default SeeAllBar;
