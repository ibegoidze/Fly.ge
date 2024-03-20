import React, { useState, useEffect, useRef } from "react";
import PassengerPic from "../../../assets/Tickets/images/Passengers.png";
import AdultPic from "../../../assets/Tickets/images/Adult.svg";
import ChildPic from "../../../assets/Tickets/images/Child.svg";
import BabyPic from "../../../assets/Tickets/images/Baby.svg";
import DisabledManSvg from "../../../assets/Tickets/images/Disabled.svg";

const Passengers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // DROPDOWN DATA
  const [passengers, setPassengers] = useState({
    ზრდასრული: { count: 1, description: "11 წლიდან", icon: AdultPic },
    ბავშვი: { count: 0, description: "2-11 წლის", icon: ChildPic },
    ჩვილი: { count: 0, description: "2  წლამდე", icon: BabyPic },
    შშმ: { count: 0, description: "", icon: DisabledManSvg },
  });

  const toggleDropdown = () => setIsOpen(!isOpen);

  // ADD PASSENGER
  const incrementPassenger = (type) => {
    setPassengers((prevPassengers) => ({
      ...prevPassengers,
      [type]: {
        ...prevPassengers[type],
        count: prevPassengers[type].count + 1,
      },
    }));
  };

  // REMOVE PASSENGER
  const decrementPassenger = (type) => {
    setPassengers((prevPassengers) => ({
      ...prevPassengers,
      [type]: {
        ...prevPassengers[type],
        count:
          prevPassengers[type].count > 0 ? prevPassengers[type].count - 1 : 0,
      },
    }));
  };

  // CLICK OUTSIDE CLOSING DROPDOWN
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // LOG COLLECTED DATA WITH SUBMIT BUTTON
  const handleSubmit = () => {
    const summary = Object.entries(passengers).reduce(
      (acc, [type, { count }]) => {
        acc[type] = count;
        return acc;
      },
      {}
    );
    console.log("Passenger counts:", summary);
    setIsOpen(false);
  };

  // RESET COUNTS WITH CANCEL BUTTON
  const resetCounts = () => {
    setPassengers((currentPassengers) => {
      const resetPassengers = {};
      Object.keys(currentPassengers).forEach((type) => {
        resetPassengers[type] = { ...currentPassengers[type], count: 0 };
      });
      return resetPassengers;
    });
    setIsOpen(false);
  };

  // RENDER DROPDOWN ELEMENTS
  const renderPassengerOptions = () => {
    return Object.entries(passengers).map(
      ([type, { count, description, icon }]) => (
        // TYPE ADULT BABY CHILD OR DISABLED WITH ICON AND DESCRIPTION
        <div
          key={type}
          className="px-4 py-2 hover:bg-gray-50 flex items-center text-custom-gray"
        >
          <img src={icon} alt={`${type} icon`} className="mr-2" />
          <div className="flex-grow">
            <span>{type}</span>
            {description && (
              <div className="text-gray-400 text-xs">{description}</div>
            )}
          </div>
          {/* DECREASE COUNT AND INCREASE */}
          <div className="flex items-center">
            <button
              onClick={() => decrementPassenger(type)}
              className="bg-gray-100 rounded-md px-1 py-1 mr-2 flex items-center justify-center active:bg-primaryBlue"
            >
              <span className="material-symbols-outlined text-custom-gray w-7 h-7 pt-0.5 active:text-white">
                remove
              </span>
            </button>
            <span className="bg-white rounded-md font-semibold w-9 h-9 flex items-center justify-center border border-custom-grey">
              {count}
            </span>
            <button
              onClick={() => incrementPassenger(type)}
              className="bg-gray-100 rounded-md px-1 py-1 ml-2 flex items-center justify-center active:bg-primaryBlue"
            >
              <span className="material-symbols-outlined text-custom-gray w-7 h-7 pt-0.5 active:text-white">
                add
              </span>
            </button>
          </div>
        </div>
      )
    );
  };

  return (
    <div className="inline-block text-left relative" ref={dropdownRef}>
      {/* PASSENGER DIV */}
      <div
        onClick={toggleDropdown}
        className="cursor-pointer flex items-center justify-between w-38 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        style={{ borderRadius: "0.375rem" }}
      >
        <img src={PassengerPic} alt="Passengers" className="w-4 h-4 mr-2" />
        <span className="flex-1 mr-2">მგზავრი</span>
        <span
          className="material-symbols-outlined transform transition duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          arrow_drop_down
        </span>
      </div>
      {/* DROPDOWN */}
      {isOpen && (
        <div
          className="absolute z-10 w-80 bg-white shadow-md transition-transform transform duration-300 ease-in-out overflow-hidden origin-top"
          style={{
            top: "100%",
            left: 0,
            borderRadius: "0 0 0.375rem 0.375rem",
          }}
        >
          {/* RENDERING PASSANGER TYPES */}
          {renderPassengerOptions()}
          {/* BUTTONS */}
          <div className="px-4 py-2 flex justify-between items-center">
            <button
              className="text-sm py-2.5 px-7 bg-transparent hover:bg-gray-100 rounded-md"
              onClick={resetCounts}
            >
              გაუქმება
            </button>
            <button
              className="text-sm py-2.5 px-7 bg-primaryBlue text-white hover:bg-blue-700 rounded-md"
              onClick={handleSubmit}
            >
              დასტური
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Passengers;
