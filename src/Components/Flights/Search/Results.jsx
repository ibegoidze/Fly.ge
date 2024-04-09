import React from "react";
import { useSelector } from "react-redux";
import ResultsContainer from "../../../assets/Flights/Search/ResultContainer.png";

const Results = ({ searchData }) => {
  const passengers = useSelector((state) => state.passengers.passengers);

  const totalPassengersCount = Object.values(passengers).reduce(
    (total, passenger) => total + passenger.count,
    0
  );

  return (
    <div className="bg-backgroundGray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="">
          {searchData.map((flight) => (
            <div
              key={flight.id}
              className="mb-4 rounded-lg p-4  h-72 "
              style={{
                backgroundImage: `url(${ResultsContainer})`,
                backgroundSize: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <ul>
                <li>
                  <span className="font-semibold">From:</span> {flight.from},
                  <span className="font-semibold"> To:</span> {flight.to},
                  <span className="font-semibold"> Departure:</span>{" "}
                  {flight.departure},
                  <span className="font-semibold"> Return:</span>{" "}
                  {flight.return},<span className="font-semibold"> Way:</span>{" "}
                  {flight.way},<span className="font-semibold"> Class:</span>{" "}
                  {flight.class},
                  <span className="font-semibold"> Total Price:</span> $
                  {flight.price * totalPassengersCount}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
