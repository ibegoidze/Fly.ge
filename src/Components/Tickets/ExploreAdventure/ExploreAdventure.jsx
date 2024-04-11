import GirlFixed from "../../../assets/Tickets/images/GirlFixedn.png";
import BlueCover from "../../../assets/Tickets/images/BlueCover.png";
import { useTranslation } from "react-i18next";

function ExploreAdventure() {
  const { t } = useTranslation();
  return (
    <div className="bg-backgroundGray flex flex-col-reverse md:flex-row relative py-5 md:pt-32 gap-20 md:gap-10 lg:gap-3 justify-center items-center md:justify-start noto-sans-georgian">
      <div className="w-full md:w-1/2 relative ">
        <img
          src={BlueCover}
          alt="blue background"
          className="h-40 md:h-72 w-full md:w-[calc(100%-10px)] "
        />
        <img
          src={GirlFixed}
          alt="girl"
          className="absolute bottom-0 h-56 md:h-96 min-h-44 min-w-56 left-1/2 transform -translate-x-1/2 md:left-[calc(10%)] lg:left-[calc(30%)] 2xl:left-[calc(50%)] md:transform-none"
        />
      </div>
      <div className="w-full px-15 md:px-0 flex flex-col justify-center md:justify-start md:w-96  ">
        <div className="text-center md:text-start text-lg font-semibold text-textDark">
          {t("Discover adventures")}
        </div>
        <div className="text-sm text-center md:text-start text-gray-500 font-medium px-5 md:px-0">
          {t(
            "Helping you create a variety of adventures in your life and Simplifying the search and decision process is our mission. If Traveling is your nature, you often have to visit different countries or If you are looking for special moments, places to discover and Marking on the personal map, unforgettable shots in your life and It will be imprinted as memories, get to know our blog - discover and bookmark A new location on the travel map, get to know the culture of the peoples of the world and Choose the most interesting for you."
          )}
        </div>
      </div>
    </div>
  );
}

export default ExploreAdventure;
