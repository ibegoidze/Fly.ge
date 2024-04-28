import { useSelector } from "react-redux";

function Luggage({ flightsData, small }) {
  const passengerSum = useSelector(
    (state) => state.passengerSummary.passengerCountSummary
  );

  return (
    <div className={`flex ${small ? "gap-2" : "gap-3"}`}>
      <div
        className={`rounded-full bg-gray-50 border px-${small ? "2" : "4"} py-${
          small ? "1" : "1.5"
        } font-medium text-${small ? "xs" : "sm"} text-gray-500 cursor-pointer`}
      >
        {flightsData.class}
      </div>
      <div
        className={`rounded-full bg-gray-50 border px-${small ? "2" : "4"} py-${
          small ? "1" : "1.5"
        } font-medium text-${small ? "xs" : "sm"} text-gray-500 cursor-pointer`}
      >
        {passengerSum} {passengerSum > 1 ? "passengers" : "passenger"}
      </div>
      <div
        className={`rounded-full bg-gray-50 border px-${small ? "2" : "4"} py-${
          small ? "1" : "1.5"
        } font-medium text-${
          small ? "xs" : "sm"
        } text-gray-500 cursor-pointer `}
      >
        luggage
      </div>
    </div>
  );
}

export default Luggage;
