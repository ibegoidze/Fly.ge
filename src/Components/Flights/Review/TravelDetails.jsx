import FlightDetails from "./FlightDetails";
import Pricing from "./Pricing";

function TravelDetails({ selectedFlight }) {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-5 py-7">
        <div className="FLIGHTDETAILS w-full lg:w-2/3 shadow-lg">
          <FlightDetails selectedFlight={selectedFlight} />
        </div>
        <div className="PRICING w-full md:w-1/3">
          <Pricing />
        </div>
      </div>
      <div className="PERSONINCHARGE"></div>
      <div className="MAINPASSENGER"></div>
      <div className="INSURANCE"></div>
    </div>
  );
}

export default TravelDetails;
