import BookingPic from "../../../assets/Tickets/images/Booking.png";
import SearchIcon from "../../../assets/Tickets/images/search.png";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function SearchHotels() {
  const { t } = useTranslation();

  // COLLECT DATA FROM REDUX
  const { selectedMonth: checkInMonth, selectedDay: checkInDay } = useSelector(
    (state) => state.checkIn
  );
  const { selectedMonth: checkOutMonth, selectedDay: checkOutDay } =
    useSelector((state) => state.checkOut);
  const hotelDestination = useSelector((state) => state.hotelDestination.value);

  // ALERT COLLECTED DATA
  const alertCurrentDates = () => {
    alert(
      `Destination: ${hotelDestination}\nCheck-in: ${
        checkInMonth + 1
      }/${checkInDay}\nCheck-out: ${checkOutMonth + 1}/${checkOutDay}`
    );
  };

  return (
    <div className="flex justify-between items-end">
      <div>
        <img src={BookingPic} alt="Booking logo" />
      </div>
      <div>
        {" "}
        <button
          onClick={alertCurrentDates}
          className="bg-blue-500 hover:bg-blue-700 text-lg px-6 py-3  rounded-md text-white font-semibold flex items-center justify-center gap-4 min-w-14 min-h-14"
        >
          <img src={SearchIcon} alt="search icon" className="h-5 w-5" />
          <span className="hidden md:flex whitespace-nowrap">
            {t("Search Hotels")}
          </span>
        </button>
      </div>
    </div>
  );
}

export default SearchHotels;
