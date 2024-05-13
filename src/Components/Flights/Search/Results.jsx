import React, { useState } from "react";
import Advertisement from "../../../assets/Flights/Search/Advertisement.png";

// IMPORT COMPONENTS
import DirectFlight from "./DirectFlight";
import VerticalLine from "../../../assets/Flights/Search/VerticalLine.png";
import UnilateralVerticalLine from "../../../assets/Flights/Search/UniVertical.png";
import BookButton from "./BookButton";
import Line from "./Line";
import TransferedFlight from "./TransferedFlight";
import SeeAllBar from "./SeeAllBar";
import { Pagination } from "@mui/material";
import PageSizeDropdown from "./PageSizeDropdown";
import SortDropdown from "./SortDropdown";

// DEFINE RESULTS COMPONENT
const Results = ({ flightsData }) => {
  // STATE FOR HANDLING OVERLAY AND BLURRED FLIGHT ID
  const [openOverlay, setOpenOverlay] = useState(null);
  const [blurredFlightId, setBlurredFlightId] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortOption, setSortOption] = useState("");

  // SORT RESULT ACCORDING TO SORTING DROPDOWN OPTION
  let sortedFlightsData = [...flightsData];
  if (sortOption === "Cheapest") {
    sortedFlightsData.sort((a, b) => a.price - b.price);
  } else if (sortOption === "Fastest") {
    const NONE = "none";
    sortedFlightsData.sort((a, b) => {
      const transferOrder = { [NONE]: -1, 1: 0, 2: 1 };
      return transferOrder[a.transfer] - transferOrder[b.transfer];
    });
  }

  // PAGINATION VARIABLES
  const indexOfLastFlight = page * pageSize;
  const indexOfFirstFlight = indexOfLastFlight - pageSize;
  const currentFlights = sortedFlightsData.slice(
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
    setBlurredFlightId(null);
  };

  // RESULTS QUANTITY
  const resultsCount = flightsData.length;

  // HANDLE SORT CHANGE
  const handleSortChange = (selectedOption) => {
    setSortOption(selectedOption);
  };

  // RENDER RESULTS COMPONENT
  return (
    <div
      className={`bg-backgroundGray pt-5  transition-all duration-700 ${
        // ADDING BLURRED EFFECT IF FLIGHT IS BLURRED
        blurredFlightId !== null ? " inset-0 bg-blue-950 bg-opacity-25   " : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-10">
          <div className="flex justify-between items-center">
            <div className="text-md font-medium text-gray-600 mb-5">
              Found {resultsCount} results
            </div>
            <SortDropdown handleSort={handleSortChange} />
          </div>
          {currentFlights.map((flight, index) => (
            <React.Fragment key={`flight-${flight.id}`}>
              {/* RENDER EACH FLIGHT COMPONENT */}
              <div
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
                              {/* BILATERAL FLIGHTS */}
                              {flight.way === "Bilateral" ? (
                                flight.transfer > 1 ? (
                                  <>
                                    {flight.transferWay === "both" ? (
                                      <>
                                        {flight.transfer === "3" ? (
                                          <>
                                            {flight.depSecondTransferStart ? (
                                              <>
                                                <TransferedFlight
                                                  flightsData={flight}
                                                  isReturn={false}
                                                />
                                                <DirectFlight
                                                  flightsData={flight}
                                                  isReturn={true}
                                                />
                                              </>
                                            ) : flight.retSecondTransferStart ? (
                                              <>
                                                <DirectFlight
                                                  flightsData={flight}
                                                  isReturn={false}
                                                />
                                                <TransferedFlight
                                                  flightsData={flight}
                                                  isReturn={true}
                                                />
                                              </>
                                            ) : (
                                              <>
                                                <TransferedFlight
                                                  flightsData={flight}
                                                  isReturn={false}
                                                />
                                                <TransferedFlight
                                                  flightsData={flight}
                                                  isReturn={true}
                                                />
                                              </>
                                            )}
                                          </>
                                        ) : (
                                          <>
                                            <TransferedFlight
                                              flightsData={flight}
                                              isReturn={false}
                                            />
                                            <TransferedFlight
                                              flightsData={flight}
                                              isReturn={true}
                                            />
                                          </>
                                        )}
                                      </>
                                    ) : (
                                      <div>
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
                                      </div>
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
                                )
                              ) : // UNILATERAL FLIGHTS
                              flight.transfer > 1 ? (
                                <div className=" mt-3">
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
                                </div>
                              ) : (
                                <div className=" mt-3">
                                  <DirectFlight
                                    flightsData={flight}
                                    isReturn={false}
                                  />
                                </div>
                              )}
                            </div>
                            {/* VERTICAL LINE */}
                            {flight.way === "Bilateral" ? (
                              <img
                                src={VerticalLine}
                                className="max-h-32 w-0.5"
                                alt=""
                              />
                            ) : (
                              <img
                                src={UnilateralVerticalLine}
                                className="max-h-20 w-0.5"
                                alt=""
                              />
                            )}
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
              {/* ADVERTISEMENT COMPONENT AFTER EVERY 7th ELEMENT */}
              {index % 10 === 5 && index < currentFlights.length - 1 && (
                <div
                  key={`additional-component-${flight.id}`}
                  className={`ADDITIONAL-COMPONENT pb-5 relative transition-all duration-300 ${
                    blurredFlightId !== null ? "opacity-75" : ""
                  }`}
                >
                  <img
                    src={Advertisement}
                    alt="advertisement"
                    className="rounded-lg"
                    style={{ width: "100%", height: "auto" }}
                  />
                  {/* Text container */}
                  <div className="absolute inset-y-0 left-0 flex items-center w-1/2 pl-5">
                    <span className="text-white font-medium text-xs sm:text-sm ">
                      პოეტური დაბნეულია მხუთავის ნიუანსით ჭრაჭუნი დასავლელ,
                      კინომონარქის ატრიალებდა, ეამა დანარჩენ ჯამაგირი დაამშვენა
                      დავიხსომო მოუღებდნენ.
                    </span>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
          {/* PAGINATION COMPONENT */}
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
                    backgroundColor: `${
                      blurredFlightId !== null ? "#5586ce" : "#2378e7"
                    }`,
                    "&:hover": {
                      backgroundColor: "#0056b3",
                    },
                  },
                  "& .MuiPaginationItem-page": {
                    gap: "5px",
                    fontWeight: "700",
                    borderColor: "#ddd",
                    zIndex: "10",
                    padding: "12px 30px",
                  },
                  "& .MuiPaginationItem-ellipsis": {
                    fontSize: "30px",
                    margin: "0 0 15px 0",
                  },
                  "& .MuiPaginationItem-root, & .MuiButtonBase-root": {
                    padding: "18px 14px",
                    borderColor: `${
                      blurredFlightId !== null ? "#aaa9a9" : "#ddd"
                    }`,

                    "&:hover": {
                      borderColor: "#ccc",
                    },
                  },
                }}
              />
            </div>
            {/* PAGE SIZE DROPDOWN */}
            <div className={`flex items-center gap-5 `}>
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

export default Results;
