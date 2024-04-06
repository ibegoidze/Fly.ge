import car1 from "../../../assets/Tickets/images/car1.png";
import car2 from "../../../assets/Tickets/images/car2.png";
import SearchIcon from "../../../assets/Tickets/images/search.png";
import { useTranslation } from "react-i18next";

function CarRental() {
  const { t } = useTranslation();

  const navigateToWebsite = () => {
    window.open("https://www.myauto.ge/en/", "_blank");
  };

  return (
    <div className="flex flex-col justify-between">
      <div className="font-bold text-textDark">
        {t("Search hundreds of rental car sites at once for car rental deals")}
      </div>
      <div className="flex justify-between items-end mt-11">
        <div className="flex gap-16">
          <img
            src={car1}
            alt="car 1"
            className="hidden xs:flex w-2/4 min-w-56"
          />
          <img src={car2} alt="car 2" className="hidden lg:flex" />
        </div>
        <div>
          <button
            onClick={navigateToWebsite}
            className="bg-blue-500 hover:bg-blue-700 text-lg px-6 py-3  rounded-md text-white font-semibold flex items-center justify-center gap-4 min-w-16 min-h-14"
          >
            <img src={SearchIcon} alt="search icon" className="h-5 w-5" />
            <span className="hidden md:flex whitespace-nowrap">
              {t("Explore car deals")}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarRental;
