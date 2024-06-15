import InfoReview from "./InfoReview";

function FlightReview({ selectedFlight }) {
  return (
    <div>
      <InfoReview selectedFlight={selectedFlight} />
    </div>
  );
}

export default FlightReview;
