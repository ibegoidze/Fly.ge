import SearchFlights from "../Components/Tickets/SearchFlights/SearchFlights";
import AllDirections from "../Components/Tickets/FlightDirections/AllDirections";
import Partners from "../Components/Tickets/Partners/Partners";
import CustomizedOffers from "../Components/Tickets/CustomizedOffers/CustomizedOffers";
import ExploreAdventure from "../Components/Tickets/ExploreAdventure/ExploreAdventure";
import BlogSection from "../Components/Tickets/BlogSection/BlogSection";

function Tickets() {
  return (
    <div>
      <SearchFlights />
      <AllDirections />
      <Partners />
      <CustomizedOffers />
      <ExploreAdventure />
      <BlogSection />
    </div>
  );
}

export default Tickets;
