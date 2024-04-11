import OfferCard from "./OfferCard";
import HimalayPic from "../../../assets/Tickets/images/HimalayOffers.png";
import PraguePic from "../../../assets/Tickets/images/PragueOffers.png";
import ViennaPic from "../../../assets/Tickets/images/ViennaOffers.png";
import { useTranslation } from "react-i18next";
function CustomizedOffers() {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-backgroundGray py-4 noto-sans-georgian">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-col sm:justify-between sm:flex-row  sm:mt-5 py-4">
        <div>
          <div className="font-semibold text-md sm:text-xl text-textDark mb-2 text-center sm:text-start">
            {t("Offers tailored to you")}
          </div>
          <div className="font-medium text-gray-500 hidden sm:flex">
            {t("All services in one space will make your trip unforgettable")}
          </div>
        </div>
        <div className="text-primaryBlue text-sm sm:text-md font-medium flex justify-end items-end gap-1 whitespace-nowrap ">
          <div className="flex text-xs items-center cursor-pointer">
            {t("See all")}
            <span className="material-symbols-outlined text-sm">
              chevron_right
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-5">
        <OfferCard
          imageUrl={HimalayPic}
          sale={"35%"}
          city={t("Himalay")}
          price={"$305"}
        />
        <OfferCard
          imageUrl={PraguePic}
          sale={"45%"}
          city={t("Prague")}
          price={"$420"}
        />{" "}
        <OfferCard
          imageUrl={ViennaPic}
          sale={"45%"}
          city={t("Vienna")}
          price={"$505"}
        />
      </div>
    </div>
  );
}

export default CustomizedOffers;
