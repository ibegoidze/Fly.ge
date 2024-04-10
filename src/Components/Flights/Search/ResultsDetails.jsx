import BlueLine from "../../../assets/Flights/Search/BlueLine.png";
import BlueDot from "../../../assets/Flights/Search/BlueDot.png";
import PlaneLogo from "../../../assets/Flights/Search/PlaneLogo.png";
import PegasusPic from "../../../assets/Flights/Search/Pegasus.png";
import DuckPic from "../../../assets/Flights/Search/Duck.png";

function ResultsDetails({ searchData, isReturn }) {
  // FORMAT DATE FROM NUMBERS TO DAY AND MONTH NAME
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="flex justify-around items-start mb-5">
      {/* IMAGE DIV */}
      <div className="flex-none">
        <img
          src={isReturn ? DuckPic : PegasusPic}
          alt={isReturn ? "duck" : "pegasus"}
        />
      </div>
      {/* DATE */}
      <div className="flex-none flex w-20 flex-col justify-center">
        <div className="font-semibold text-gray-500">
          {formatDate(isReturn ? searchData.return : searchData.departure)}
        </div>
        <span className="text-sm font-medium text-gray-500">
          {isReturn ? "Return" : "Departure"}
        </span>
      </div>
      {/* TIME / CITY */}
      <div className="flex-none flex flex-col w-20 justify-center">
        <div className="font-semibold text-textDark">
          {isReturn ? "09:30" : "07:00"}
        </div>
        <div className="text-sm font-medium text-gray-500">
          {isReturn ? searchData.to : searchData.from}
        </div>
      </div>
      {/* FLIGHT LINE */}
      <div className="flex flex-col justify-start flex-none gap-2">
        <div className="DEPARTURE">
          <div className="flex items-end justify-center">
            <div>
              <img
                src={PlaneLogo}
                alt="plane"
                style={{
                  position: "relative",
                  top: "2px",
                }}
              />
              <span className="absolute ml-6 text-xs mt-0.5 text-gray-500 font-semibold">
                1 transfer :
              </span>
            </div>
            <img
              src={BlueLine}
              className="h-0.5 w-20 relative"
              style={{ bottom: "5px" }}
              alt="blue line"
            />
            <div className="flex items-center justify-center">
              <span className="mb-8 absolute text-xs text-gray-500 font-semibold">
                3 hr, 20
              </span>
              <img src={BlueDot} alt="blue line" />
              <span className="mt-9 absolute text-xs text-gray-400 font-semibold">
                DIRECT
              </span>
            </div>
            <img
              src={BlueLine}
              className="h-0.5 w-20 relative"
              style={{ bottom: "5px" }}
              alt="blue line"
            />
            <img src={BlueDot} alt="blue line" />
          </div>
        </div>
      </div>
      {/* TIME / CITY */}
      <div className="flex flex-col justify-center w-20">
        <div className="font-semibold text-textDark">
          {isReturn ? "11:00" : "09:10"}
        </div>
        <span className="text-sm font-medium text-gray-500">
          {isReturn ? searchData.from : searchData.to}
        </span>
      </div>
    </div>
  );
}

export default ResultsDetails;
