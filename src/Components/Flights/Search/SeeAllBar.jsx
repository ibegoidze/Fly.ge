import React, { useState, useRef, useEffect } from "react";
import Extention from "./Extention";
import Luggage from "./Luggage";

function SeeAllBar({
  flightsData,
  openOverlay,
  toggleOverlay,
  setBlurredFlightId,
}) {
  const [openFlightId, setOpenFlightId] = useState(null);
  const [hideLuggage, setHideLuggage] = useState(false);
  const [seeAllText, setSeeAllText] = useState("See all");
  const containerRef = useRef(null);
  const liRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        liRef.current &&
        openFlightId &&
        !isClickOnScrollbar(event) &&
        !liRef.current.contains(event.target) &&
        !containerRef.current.contains(event.target)
      ) {
        setOpenFlightId(null);
        setHideLuggage(false);
        toggleOverlay(null);
        setBlurredFlightId(null);
        setSeeAllText("See all");
      }
    };

    const isClickOnScrollbar = (event) => {
      if (event.target instanceof HTMLElement) {
        return (
          event.target.offsetWidth !== event.target.clientWidth ||
          event.target.offsetHeight !== event.target.clientHeight
        );
      }
      return false;
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef, toggleOverlay, setBlurredFlightId, openFlightId]);

  const toggleExtension = (flightId) => {
    setOpenFlightId(openFlightId === flightId ? null : flightId);
    setHideLuggage(!hideLuggage);
    toggleOverlay(flightId);
    setBlurredFlightId(openFlightId === flightId ? null : flightId);
    setSeeAllText(openFlightId === flightId ? "See all" : "See less");
  };

  return (
    <div ref={containerRef}>
      <div
        ref={liRef}
        className="SEEALL h-12 flex justify-between sm:px-5 items-center"
      >
        <div
          className={`${
            hideLuggage ? "opacity-0" : "opacity-100"
          } transition-all duration-100`}
        >
          <Luggage flightsData={flightsData} small={true} />
        </div>
        <div
          className="SEEALL h-12 flex justify-end items-center text-xs sm:text-sm font-medium text-primaryBlue cursor-pointer"
          onClick={() => toggleExtension(flightsData.id)}
        >
          {seeAllText}
        </div>
      </div>
      <div
        className={`EXTENTION  overflow-hidden transition-all ease-in duration-700 delay-0 ${
          openFlightId === flightsData.id ? "maxHeight" : "max-h-0"
        }`}
      >
        <Extention flightsData={flightsData} />
      </div>
    </div>
  );
}

export default SeeAllBar;
