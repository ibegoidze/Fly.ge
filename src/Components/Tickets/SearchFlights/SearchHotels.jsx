import BookingPic from "../../../assets/Tickets/images/Booking.png";
import SearchIcon from "../../../assets/Tickets/images/search.png";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function SearchHotels() {
  const { t } = useTranslation();

  // COLLECT DATA FROM REDUX
  // const { selectedMonth: checkInMonth, selectedDay: checkInDay } = useSelector(
  //   (state) => state.checkIn
  // );
  // const { selectedMonth: checkOutMonth, selectedDay: checkOutDay } =
  //   useSelector((state) => state.checkOut);
  const hotelDestination = useSelector((state) => state.hotelDestination.value);

  const city = encodeURIComponent(hotelDestination);

  // const checkin = `2024-${checkInMonth + 1}-${checkInDay}`;
  // const checkout = `2024-${checkOutMonth + 1}-${checkOutDay}`;

  const constructBookingURL = () => {
    return `https://www.booking.com/${city}`;
  };
  //https://www.booking.com/searchresults.en-gb.html?ss=Berlin&ssne=Berlin&ssne_untouched=Berlin&efdco=1&label=socnet_fb_fp_20131026berlin&sid=fdebce085025ed6443ad34f3f0d87257&aid=304142&lang=en-gb&sb=1&src_elem=sb&src=city&dest_id=-1746443&dest_type=city&checkin=2024-05-16&checkout=2024-05-25&group_adults=2&no_rooms=1&group_children=0&sb_travel_purpose=leisure
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
        <button
          onClick={openBookingPage}
          className="bg-blue-500 hover:bg-blue-700 text-lg px-6 py-3 rounded-md text-white font-medium flex items-center justify-center gap-4 min-w-14 min-h-14"
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

//https://www.booking.com/searchresults.en-gb.html?
//ss=London&
//ssne=Batumi&
//ssne_untouched=Batumi&
//efdco=1&
//label=gen173nr-1FCAEoggI46AdIM1gEaFKIAQGYAQm4ARjIAQzYAQHoAQH4AQuIAgGoAgS4At3pubAGwAIB0gIkNTc0MDNlNzEtNDk2Mi00YzJmLWI4ZGItMjBiOWY4MmRmOTVk2AIG4AIB& //////////////
//sid=fdebce085025ed6443ad34f3f0d87257& 4b34112dc54ccc3d568dbd2d99d3abb7
//aid=304142&lang=en-gb& //////////////////
//sb=1&
//src_elem=sb&
//src=index&
//dest_id=-2601889&
//dest_type=city&
//ac_position=0&
//ac_click_type=b&
//ac_langcode=en&
//ac_suggestion_list_length=5&
//search_selected=true&
//search_pageview_id=f60643af242300e2&
//ac_meta=GhBmNjA2NDNhZjI0MjMwMGUyIAAoATICZW46BkxvbmRvbkAASgBQAA%3D%3D&
//checkin=2024-05-08&
//checkout=2024-05-15&
//group_adults=2&
//no_rooms=1&
//group_children=0
