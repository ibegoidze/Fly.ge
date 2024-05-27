import { useTranslation } from "react-i18next";

import HorisontalLinePic from "../../../assets/Flights/Details/HorisontalLine.png";

function Pricing() {
  const { t } = useTranslation();
  return (
    <div className="relative mt-5 lg:mt-0 lg:ml-5">
      <div className="bg-white h-64 rounded-md relative overflow-hidden">
        {/* Content */}
        <div className="flex justify-center flex-col p-5">
          <div className="flex justify-between mb-4">
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-lg">1x</span>{" "}
              <span className="font-medium text-sm text-gray-500">
                {t("Adult")}
              </span>
            </div>
            <span className="font-semibold text-lg">569.00$</span>
          </div>
          <div className="flex justify-between mb-5">
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-lg">1x</span>
              <span className="font-medium text-sm text-gray-500">
                {t("Adult")}
              </span>
            </div>
            <span className="font-semibold text-lg">320.00$</span>
          </div>
          <img src={HorisontalLinePic} alt="" />
          <div className="mt-7 flex justify-between">
            <span className="font-semibold">{t("Total")}:</span>
            <span className="font-semibold text-xl">889.65$</span>
          </div>
          <button className="hover:bg-blue-700 text-md w-full lg:px-16 transition-all duration-300 py-1.5 sm:py-2 mt-2 sm:mt-4 rounded-md text-white font-semibold flex items-center justify-center gap-4 bg-primaryBlue">
            <span className="flex whitespace-nowrap">{t("Reservation")}</span>
          </button>
        </div>

        {/* Balls */}
        {[...Array(13)].map((_, index) => (
          <div
            key={index}
            className="absolute w-4 h-4 bg-backgroundGray rounded-full"
            style={{
              bottom: "-0.5rem",
              left: `${(100 / 13) * index + 100 / 26}%`,
              transform: "translateX(-50%)",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
