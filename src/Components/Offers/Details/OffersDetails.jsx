import React from "react";
import { useParams } from "react-router-dom";
import { offersData } from "../../../static";
import BannerContainer from "./BannerContainer";
import Transfer from "./Transfer";
import Hotel from "./Hotel";
import Trip from "./Trip";
import Pricing from "./Pricing";

function OffersDetails() {
  const { id } = useParams();
  // CURRENT OFFER
  const offer = offersData.find((offer) => offer.id === parseInt(id));

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-5 px-4 sm:px-6 lg:px-8 noto-sans-georgian py-5">
      <BannerContainer offer={offer} />
      <Transfer offer={offer} />
      <Hotel offer={offer} />
      <div className="flex flex-col sm:flex-row">
        <Trip offer={offer} />
        <Pricing offer={offer} />
      </div>
    </div>
  );
}

export default OffersDetails;
