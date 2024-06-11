import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import HorisontalLinePic from "../../../assets/Flights/Details/HorisontalLine.png";

function Pricing(selectedFlight) {
  const { t } = useTranslation();
  const passengers = useSelector((state) => state.passengers.passengers);
  const flightPrice = selectedFlight.selectedFlight.price;
  const prices = {
    Adult: flightPrice,
    Child: flightPrice,
    Disabled: flightPrice,
    Newborn: flightPrice,
  };

  const calculateTotalPrice = () => {
    return Object.entries(passengers).reduce((acc, [key, value]) => {
      return acc + value.count * prices[key];
    }, 0);
  };

  return (
    <div className="relative mt-5 lg:mt-0 lg:ml-5">
      <div className="bg-white h-auto rounded-md relative overflow-hidden">
        {/* CONTENT */}
        <div className="flex justify-center flex-col p-5">
          <div className="flex flex-col ">
            {Object.entries(passengers).map(
              ([key, value]) =>
                value.count > 0 && (
                  <div
                    className="flex justify-between gap-2 items-center "
                    key={key}
                  >
                    <div className="flex items-center">
                      <span className="font-semibold text-lg">
                        {value.count}x
                      </span>
                      <span className="font-medium text-sm text-gray-500 ml-2">
                        {t(key)}
                      </span>
                    </div>
                    <span className="font-semibold text-lg">
                      ${value.count * prices[key]}
                    </span>
                  </div>
                )
            )}
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-lg">1x</span>
              <span className="font-medium text-sm text-gray-500">
                {t("Insurance")}
              </span>
            </div>
            <span className="font-semibold text-lg">$320.00</span>
          </div>
          <img src={HorisontalLinePic} alt="Horizontal Line" />
          <div className="mt-7 flex justify-between">
            <span className="font-semibold">{t("Total")}:</span>
            <span className="font-semibold text-xl">
              ${calculateTotalPrice() + 320.0}
            </span>
          </div>
          <button className="hover:bg-blue-700 text-md w-full lg:px-16 transition-all duration-300 py-1.5 sm:py-2 mt-2 sm:mt-4 rounded-md text-white font-semibold flex items-center justify-center gap-4 bg-primaryBlue">
            <span className="flex whitespace-nowrap">{t("Reservation")}</span>
          </button>
        </div>

        {/* BALLS */}
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
