import React from "react";
import OfferCard from "../../Tickets/CustomizedOffers/OfferCard";
import { useTranslation } from "react-i18next";
import { offersData } from "../../../static";

function OffersPage() {
  const { t } = useTranslation();
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {offersData.map((offer) => (
          <OfferCard
            key={offer.id} // UNIQUE KEY FOR EACH OFFER
            imageUrl={offer.card.image} // IMAGE URL
            sale={`${offer.card.salePercentage}%`} // SALE PERCENTAGE
            city={t(offer.card.cityName)} // CITY NAME
            price={`$${offer.card.newPrice}`} // NEW PRICE
          />
        ))}
      </div>
    </div>
  );
}

export default OffersPage;
