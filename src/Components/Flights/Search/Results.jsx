import React, { useState } from "react";
import ResultsDetails from "./ResultsDetails";
import VerticalLine from "../../../assets/Flights/Search/VerticalLine.png";
import BookButton from "./BookButton";
import Line from "./Line";

const Results = ({ flightsData }) => {
  const [openFlightId, setOpenFlightId] = useState(null);

  const toggleExtension = (flightId) => {
    setOpenFlightId(openFlightId === flightId ? null : flightId);
  };

  return (
    <div className="bg-backgroundGray pt-10 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          {flightsData.map((flight) => (
            <div
              key={flight.id}
              className="mb-4 rounded-lg p-4 bg-white shadow-md"
            >
              <ul>
                <li>
                  <div className="ENTIREDIV">
                    <div className="TOPPART flex flex-col">
                      <div className="flex">
                        <div className="FLIGHINFORMATION flex pt-5 w-5/6 bg-white gap-5">
                          <div className="w-full">
                            <ResultsDetails
                              flightsData={flight}
                              isReturn={false}
                            />
                            <ResultsDetails
                              flightsData={flight}
                              isReturn={true}
                            />
                          </div>
                          <img
                            src={VerticalLine}
                            className="h-32 w-0.5"
                            alt=""
                          />
                        </div>
                        <div className="PRICEANDBOOK w-2/6 ">
                          <BookButton flightsData={flight} />
                        </div>
                      </div>
                      <Line />
                      <div className="SEEALL h-12 flex justify-between px-5 items-center cursor-pointer">
                        <div className="flex gap-5">
                          <div className="rounded-full bg-gray-50 border px-4 py-1.5 font-medium text-sm text-gray-500 ">
                            class
                          </div>
                          <div className="rounded-full bg-gray-50 border px-4 py-1.5 font-medium text-sm text-gray-500 ">
                            passengers
                          </div>
                          <div className="rounded-full bg-gray-50 border px-4 py-1.5 font-medium text-sm text-gray-500 ">
                            luggage
                          </div>
                        </div>
                        <div
                          className="SEEALL h-12 flex justify-end items-center text-sm font-medium text-primaryBlue"
                          onClick={() => toggleExtension(flight.id)}
                        >
                          See all
                        </div>
                      </div>
                    </div>
                    <div
                      className={`EXTENTION bg-purple-200 ${
                        openFlightId === flight.id
                          ? "transition-all ease-in duration-300 h-96 "
                          : "transition-all ease-out duration-300 h-0"
                      }`}
                    ></div>
                  </div>
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
