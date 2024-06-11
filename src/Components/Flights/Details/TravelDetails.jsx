import Pricing from "./Pricing";
import FlightDetails from "./FlightDetails";
import ResponsiblePerson from "./ResponsiblePerson";
import MainPassenger from "./MainPassenger";
import TravelInsurance from "./TravelInsurance";

function TravelDetails({ selectedFlight }) {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row py-7">
        <div className="FLIGHTDETAILS w-full lg:w-2/3 shadow-lg">
          <FlightDetails selectedFlight={selectedFlight} />
        </div>
        <div className="PRICING w-full md:w-1/3">
          <Pricing selectedFlight={selectedFlight} />
        </div>
      </div>
      <div className="PERSONINCHARGE  ">
        <ResponsiblePerson />
      </div>
      <div className="MAINPASSENGER pb-7">
        <MainPassenger />
      </div>
      <div className="INSURANCE pb-7">
        <TravelInsurance />
      </div>
    </div>
  );
}

export default TravelDetails;
