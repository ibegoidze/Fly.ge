import OfferCard from "./OfferCard";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { offersData } from "../../../static";
function CustomizedOffers() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="w-full bg-backgroundGray py-4 pb-9 noto-sans-georgian">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-col sm:justify-between sm:flex-row  sm:mt-5 py-2 sm:py-4">
        <div>
          <div className="font-semibold text-md sm:text-xl text-textDark mb-2 text-center sm:text-start">
            {t("Offers tailored to you")}
          </div>
          <div className="font-medium text-gray-500 hidden sm:flex">
            {t("All services in one space will make your trip unforgettable")}
          </div>
        </div>
        <div className="text-primaryBlue text-sm sm:text-md font-medium flex justify-end items-end gap-1 whitespace-nowrap ">
          <div
            className="flex text-xs items-center cursor-pointer"
            onClick={() => {
              navigate("/Offers");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {t("See all")}
            <span className="material-symbols-outlined text-sm">
              chevron_right
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {offersData.slice(0, 3).map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              imageUrl={offer.card.image}
              sale={`${offer.card.salePercentage}%`}
              city={t(offer.card.cityName)}
              price={`$${offer.card.newPrice}`}
              days={offer.card.days}
              cardText={offer.page.cardText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomizedOffers;
