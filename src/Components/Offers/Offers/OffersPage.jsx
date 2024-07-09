import React from "react";
import OfferCard from "../../Tickets/CustomizedOffers/OfferCard";
import { useTranslation } from "react-i18next";
import { offersData } from "../../../static";

import Offerspic from "../../../assets/Offers/OffersPage/OffersPic.png";

function OffersPage() {
  const { t } = useTranslation();
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 noto-sans-georgian">
      <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-lg my-5 p-3">
        {/* LEFT SIDE */}
        <div className="sm:w-1/2">
          <div className="p-4 flex flex-col">
            <div className="text-xl text-gray-800 font-medium">
              {t("Offers and sales")}
            </div>
            {/* ADDITIONAL TEXT ABOUT OFFERS */}
            <div className="mt-2 text-gray-600 text-sm">
              {t(
                "Discover amazing deals and discounts on a variety of travel packages and services. Whether you're planning a vacation or a business trip, our offers are designed to provide you with the best value for your money."
              )}
            </div>
            {/* BULLET POINTS ABOUT OFFERS */}
            <div className="mt-4">
              <ul className="list-disc list-inside text-gray-600 text-sm">
                <li>{t("Exclusive discounts on flights and hotels.")}</li>
                <li>{t("Special packages for family vacations.")}</li>
                <li>
                  {t("Last-minute deals on a wide range of destinations.")}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="sm:w-1/2">
          <img src={Offerspic} alt="" className="w-full h-full" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {offersData.map((offer) => (
          <OfferCard
            key={offer.id}
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
  );
}

export default OffersPage;
