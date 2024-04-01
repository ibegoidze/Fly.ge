import Header from "../Components/Global/Header/Header";
import SearchFlights from "../Components/Tickets/SearchFlights/SearchFlights";
import EuropeDirection from "../Components/Tickets/FlightDirections/EuropeDirection";
import Partners from "../Components/Tickets/Partners/Partners";
import CustomizedOffers from "../Components/Tickets/CustomizedOffers/CustomizedOffers";
import AllDirections from "../Components/Tickets/FlightDirections/AllDirections";
import ExploreAdventure from "../Components/Tickets/ExploreAdventure/ExploreAdventure";
import BlogSection from "../Components/Tickets/BlogSection/BlogSection";
import Footer from "../Components/Global/Footer/Footer";

function Tickets() {
  return (
    <div>
      <Header />
      <SearchFlights />
      <EuropeDirection />
      <Partners />
      <CustomizedOffers />
      <AllDirections />
      <ExploreAdventure />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default Tickets;
