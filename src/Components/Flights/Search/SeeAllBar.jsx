import { useState } from "react";
import { useSelector } from "react-redux";

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
      <div className="SEEALL h-12 flex justify-between px-5 items-center cursor-pointer">
        <div className="flex gap-3">
          <div className="rounded-full bg-gray-50 border px-4 py-1.5 font-medium text-sm text-gray-500 ">
            {flightsData.class}
          </div>
          <div className="rounded-full bg-gray-50 border px-4 py-1.5 font-medium text-sm text-gray-500 ">
            {passengerSum} {passengerSum > 1 ? "passengers" : "passenger"}
          </div>
          <div className="rounded-full bg-gray-50 border px-4 py-1.5 font-medium text-sm text-gray-500 ">
            luggage
          </div>
        </div>
        <div
          className="SEEALL h-12 flex justify-end items-center text-sm font-medium text-primaryBlue"
          onClick={() => toggleExtension(flightsData.id)}
        >
          See all
        </div>
      </div>
      <div
        className={`EXTENTION bg-purple-200 ${
          openFlightId === flightsData.id
            ? "transition-all ease-in duration-300 h-96 "
            : "transition-all ease-out duration-300 h-0"
        }`}
      ></div>
    </div>
  );
}

export default SeeAllBar;
