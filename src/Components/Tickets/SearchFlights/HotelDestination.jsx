import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDestination } from "../../../Store/SearchFlights/HotelDestinationSlice";
import destinationIcon from "../../../assets/Tickets/images/destinationIcon.png";
import { useTranslation } from "react-i18next";

const HotelDestination = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const hotelDestination = useSelector((state) => state.hotelDestination.value);
  const { selectedToAirport } = useSelector((state) => state.airports);

  useEffect(() => {
    if (selectedToAirport && selectedToAirport.name) {
      dispatch(setDestination(selectedToAirport.city));
    }
  }, [selectedToAirport, dispatch]);

  // SETS REDUX STATE
  const handleChange = (event) => {
    dispatch(setDestination(event.target.value));
  };

  return (
    <div className="w-full lg:w-2/4">
      <div className="text-sm font-medium text-gray-500 mb-2">
        {t("Destination")}
      </div>
      <div className="flex items-center border rounded-md border-borderGray border-solid  py-1 px-2">
        <img src={destinationIcon} alt="destination icon" className="px-1" />
        <input
          id="Hotel destination input"
          type="text"
          placeholder={t("Choose your destination")}
          value={hotelDestination}
          onChange={handleChange}
          className="outline-none py-2 text-sm font-medium w-full "
        />
      </div>
    </div>
  );
};

export default HotelDestination;
