import DepDetails from "./DepDetails";
import RetDetails from "./RetDetails";

function FlightDetails({ selectedFlight }) {
  return (
    <div className="bg-white rounded-lg p-5 flex flex-col md:flex-row gap-5">
      <DepDetails selectedFlight={selectedFlight} />
      <RetDetails selectedFlight={selectedFlight} />
    </div>
  );
}

export default FlightDetails;
