import Header from "../Components/Global/Header/Header";
import SearchFlights from "../Components/Tickets/SearchFlights/SearchFlights";
import EuropeDirection from "../Components/Tickets/FlightDirections/EuropeDirection";

function Tickets() {
  return (
    <div>
      <Header />
      <SearchFlights />
      <EuropeDirection />
    </div>
  );
}

export default Tickets;
