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

  const city = hotelDestination;
  const checkin = `2024-${checkInMonth + 1}-${checkInDay}`;
  const checkout = `2024-${checkOutMonth + 1}-${checkOutDay}`;

  const constructBookingURL = () => {
    return `https://www.booking.com/searchresults.en-gb.html?ss=${city}+City&ssne=${city}+City&ssne_untouched=${city}+City&label=gen173nr-1FCAEoggI46AdIM1gEaFKIAQGYAQm4ARjIAQzYAQHoAQH4AQuIAgGoAgS4ApvLrLAGwAIB0gIkNTFlZWRiZjItNGY2Ni00ODhlLTkxYTAtZDAxMWExN2U3ZWE42AIG4AIB&sid=fdebce085025ed6443ad34f3f0d87257&aid=304142&lang=en-gb&sb=1&src_elem=sb&src=searchresults&dest_id=900047975&dest_type=city&checkin=${checkin}&checkout=${checkout}&group_adults=1&no_rooms=1&group_children=0`;
  };

  const openBookingPage = () => {
    const url = constructBookingURL();
    window.open(url, "_blank");
  };

  return (
    <div className="flex justify-between items-end">
      <div>
        <img src={BookingPic} alt="Booking logo" />
      </div>
      <div>
        {" "}
        <button
          onClick={openBookingPage}
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
