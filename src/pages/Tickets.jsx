import Header from "../Components/Global/Header/Header";
import SearchFlights from "../Components/Tickets/SearchFlights/SearchFlights";
import EuropeDirection from "../Components/Tickets/FlightDirections/EuropeDirection";
import Partners from "../Components/Tickets/Partners/Partners";
import CustomizedOffers from "../Components/Tickets/CustomizedOffers/CustomizedOffers";

function Tickets() {
  return (
    <div>
      <Header />
      <SearchFlights />
      <EuropeDirection />
      <Partners />
      <CustomizedOffers />
    </div>
  );
}

export default Tickets;
