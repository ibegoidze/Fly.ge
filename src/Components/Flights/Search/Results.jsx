import React, { useState } from "react";
import DirectFlight from "./DirectFlight";
import VerticalLine from "../../../assets/Flights/Search/VerticalLine.png";
import BookButton from "./BookButton";
import Line from "./Line";
import TransferedFlight from "./TransferedFlight";
import { useSelector } from "react-redux";
import SeeAllBar from "./SeeAllBar";

const Results = ({ flightsData }) => {
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
                            {flight.transfer > 1 ? (
                              // CONDITIONALLY RENDER TRANSFEREDFLIGHTS IF TRANSFER IS MORE THAN 1
                              <>
                                {flight.transferWay === "departure" ? (
                                  <TransferedFlight
                                    flightsData={flight}
                                    isReturn={false}
                                  />
                                ) : (
                                  <DirectFlight
                                    flightsData={flight}
                                    isReturn={false}
                                  />
                                )}
                                {flight.transferWay === "return" ? (
                                  <TransferedFlight
                                    flightsData={flight}
                                    isReturn={true}
                                  />
                                ) : (
                                  <DirectFlight
                                    flightsData={flight}
                                    isReturn={true}
                                  />
                                )}
                              </>
                            ) : (
                              <>
                                <DirectFlight
                                  flightsData={flight}
                                  isReturn={false}
                                />
                                <DirectFlight
                                  flightsData={flight}
                                  isReturn={true}
                                />
                              </>
                            )}
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
                      <SeeAllBar flightsData={flight} />
                    </div>
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
