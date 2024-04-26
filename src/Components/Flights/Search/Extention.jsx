import ExtentionDetails from "./ExtentionDetails";

function Extention({ flightsData }) {
  return (
    <div>
      <div className="DESTINATION"></div>
      <ExtentionDetails flightsData={flightsData} />
      <div className="RETURN"></div>
      <div className="HOME"></div>
      <div className="LOAN"></div>
    </div>
  );
}

export default Extention;
