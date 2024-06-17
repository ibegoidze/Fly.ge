import InfoReview from "./InfoReview";
import Payment from "./Payment";

function FlightReview({ selectedFlight }) {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 ">
      <div className="flex flex-col lg:flex-row py-7 ">
        <InfoReview selectedFlight={selectedFlight} />
        <div className="PRICING w-full md:w-1/3 h-96">
          <Payment selectedFlight={selectedFlight} />
        </div>{" "}
      </div>
    </div>
  );
}

export default FlightReview;
