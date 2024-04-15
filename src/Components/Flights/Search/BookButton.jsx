import React from "react";
import { useSelector } from "react-redux";

function BookButton({ flightsData }) {
  const passengerSum = useSelector(
    (state) => state.passengerSummary.passengerCountSummary
  );

  // TOTAL PRICE ACCORDING TO PASSENGER QUANTITY
  const calculatePrice = () => {
    const totalPrice = flightsData.price * passengerSum;
    return totalPrice;
  };

  return (
    <div className="flex flex-col items-center justify-between p-4 pt-12">
      <div className="PRICE text-2xl font-semibold">{calculatePrice()}$</div>
      <button className="relative bg-blue-500 hover:bg-blue-700 text-md px-16  py-2 mt-8 rounded-md text-white font-semibold flex items-center justify-center gap-4 min-w-14">
        <span className="flex whitespace-nowrap">Reservation</span>
      </button>
    </div>
  );
}

export default BookButton;
