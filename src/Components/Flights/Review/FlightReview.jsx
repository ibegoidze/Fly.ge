import { useTranslation } from "react-i18next";
import CovidRegulations from "./CovidRegulations";
import InfoReview from "./InfoReview";
import Payment from "./Payment";
import { useNavigate } from "react-router-dom";

function FlightReview({ selectedFlight }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pb-1">
      <div className="flex flex-col lg:flex-row py-7">
        <div className="w-full lg:w-2/3 flex flex-col gap-5">
          <InfoReview selectedFlight={selectedFlight} />
          <CovidRegulations />
        </div>
        <div className="PRICING w-full md:w-1/3">
          <Payment selectedFlight={selectedFlight} />
        </div>
      </div>
      <button
        onClick={handleBack}
        className="hover:bg-blue-700 mb-5 text-md lg:px-16 transition-all duration-300 py-1.5 sm:py-2 rounded-md text-white font-semibold flex items-center justify-center gap-4 bg-primaryBlue w-full sm:w-52"
      >
        <span className="flex whitespace-nowrap">{t("returnBack")}</span>
      </button>
    </div>
  );
}

export default FlightReview;
