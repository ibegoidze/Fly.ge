// IMPORT REACT AND USESTATE FROM REACT
import React, { useState } from "react";

// IMPORT COMPONENTS
import DirectFlight from "./DirectFlight";
import VerticalLine from "../../../assets/Flights/Search/VerticalLine.png";
import BookButton from "./BookButton";
import Line from "./Line";
import TransferedFlight from "./TransferedFlight";
import SeeAllBar from "./SeeAllBar";
import { Pagination } from "@mui/material";
import PageSizeDropdown from "./PageSizeDropdown"; // Import PageSizeDropdown component

// DEFINE RESULTS COMPONENT
const Results = ({ flightsData }) => {
  // STATE FOR HANDLING OVERLAY AND BLURRED FLIGHT ID
  const [openOverlay, setOpenOverlay] = useState(null);
  const [blurredFlightId, setBlurredFlightId] = useState(null);
  const [page, setPage] = useState(1); // State for current page
  const [pageSize, setPageSize] = useState(10); // State for page size

  // Constants for pagination
  const indexOfLastFlight = page * pageSize;
  const indexOfFirstFlight = indexOfLastFlight - pageSize;
  const currentFlights = flightsData.slice(
    indexOfFirstFlight,
    indexOfLastFlight
  );

  // FUNCTION TO TOGGLE OVERLAY
  const toggleOverlay = (flightId) => {
    setOpenOverlay(openOverlay === flightId ? null : flightId);
    setBlurredFlightId(openOverlay === flightId ? null : flightId);
  };

  // HANDLE PAGE CHANGE
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // RENDER RESULTS COMPONENT
  return (
    <div
      className={`bg-backgroundGray pt-10  transition-all duration-700 ${
        // ADDING BLURRED EFFECT IF FLIGHT IS BLURRED
        blurredFlightId !== null ? " inset-0 bg-blue-950 bg-opacity-25   " : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-10">
          {currentFlights.map((flight, index) => (
            // RENDER EACH FLIGHT COMPONENT
            <div
              key={flight.id}
              className={`mb-4 rounded-lg p-4 bg-white shadow-md ${
                // ADDING OPACITY TRANSITION IF FLIGHT IS BLURRED
                blurredFlightId !== null && blurredFlightId !== flight.id
                  ? "opacity-60 transition-all duration-700"
                  : ""
              }`}
            >
              <ul>
                <li>
                  <div className="ENTIREDIV">
                    <div className="TOPPART flex flex-col">
                      <div className="flex">
                        <div className="FLIGHINFORMATION flex pt-5 w-5/6 bg-white gap-5">
                          <div className="w-full">
                            {flight.transfer > 1 ? (
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
                      <Line blurredFlightId={blurredFlightId} />
                      <SeeAllBar
                        flightsData={flight}
                        openOverlay={openOverlay}
                        toggleOverlay={toggleOverlay}
                        setBlurredFlightId={setBlurredFlightId}
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          ))}
          {/* RENDER PAGINATION COMPONENT */}
          <div className="flex items-center justify-between mt-10">
            <div>
              <Pagination
                count={Math.ceil(flightsData.length / pageSize)}
                variant="outlined"
                shape="rounded"
                color="primary"
                page={page}
                onChange={handlePageChange}
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "#000",
                  },
                  "& .Mui-selected": {
                    color: "#fff",
                    backgroundColor: "#227bee",
                    "&:hover": {
                      backgroundColor: "#0056b3",
                    },
                  },
                  "& .MuiPaginationItem-page": {
                    gap: "5px",
                    fontWeight: "700",
                    borderColor: "#ddd",
                    padding: "12px 30px",
                  },
                  "& .MuiPaginationItem-ellipsis": {
                    fontSize: "30px",
                    margin: "0 0 15px 0",
                  },
                  "& .MuiPaginationItem-root, & .MuiButtonBase-root": {
                    padding: "18px 14px",
                    borderColor: "#ddd",
                    "&:hover": {
                      borderColor: "#ccc",
                    },
                  },
                }}
              />
            </div>
            {/* Render PageSizeDropdown component */}
            <div className="flex items-center gap-5">
              <span className="text-gray-500 font-medium text-sm">
                Ticket quantity
              </span>
              <PageSizeDropdown
                pageSizeOptions={[10, 20, 50]}
                pageSize={pageSize}
                setPageSize={setPageSize}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// EXPORT RESULTS COMPONENT
export default Results;
