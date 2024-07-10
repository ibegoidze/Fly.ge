import React from "react";
// import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { offersData } from "../../../static";
import BannerContainer from "./BannerContainer";
import Transfer from "./Transfer";
import Hotel from "./Hotel";

function OffersDetails() {
  const { id } = useParams();
  // const { t } = useTranslation();

  // CURRENT OFFER
  const offer = offersData.find((offer) => offer.id === parseInt(id));

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-5 px-4 sm:px-6 lg:px-8 noto-sans-georgian py-5">
      <BannerContainer offer={offer} />
      <Transfer offer={offer} />
      <Hotel offer={offer} />
    </div>
  );
}

export default OffersDetails;
