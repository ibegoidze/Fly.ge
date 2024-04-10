import React from "react";
import ResultsDetails from "./ResultsDetails";
import VerticalLine from "../../../assets/Flights/Search/VerticalLine.png";

const Results = ({ searchData }) => {
  return (
    <div className="bg-backgroundGray pt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="">
          {searchData.map((flight) => (
            <div
              key={flight.id}
              className="mb-4 rounded-lg p-4 bg-white shadow-md   "
            >
              <ul>
                <li>
                  <div className="ENTIREDIV">
                    <div className="TOPPART flex flex-col">
                      <div className="flex">
                        <div className="FLIGHINFORMATION flex py-5 w-4/6 bg-white gap-5">
                          <div className="w-full">
                            <ResultsDetails
                              searchData={flight}
                              isReturn={false}
                            />
                            <ResultsDetails
                              searchData={flight}
                              isReturn={true}
                            />
                          </div>
                          <img
                            src={VerticalLine}
                            className="h-32 w-0.5"
                            alt=""
                          />
                        </div>
                        <div className="PRICEANDBOOK w-2/6  "></div>
                      </div>
                      <div className="IMAGE bg-blue-200 h-16"></div>
                      <div className="SEEALL bg-yellow-200 h-16"></div>
                    </div>
                    <div className="EXTENTION bg-purple-200 h-96"></div>
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
