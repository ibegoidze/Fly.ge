import CovidRegulations from "./CovidRegulations";
import InfoReview from "./InfoReview";
import Payment from "./Payment";

function FlightReview({ selectedFlight }) {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 ">
      <div className="flex flex-col lg:flex-row py-7">
        <div className="w-full lg:w-2/3   flex flex-col gap-5">
          <InfoReview selectedFlight={selectedFlight} />
          <CovidRegulations />
        </div>
        <div className="PRICING w-full md:w-1/3">
          <Payment selectedFlight={selectedFlight} />
        </div>{" "}
      </div>
    </div>
  );
}

export default FlightReview;
