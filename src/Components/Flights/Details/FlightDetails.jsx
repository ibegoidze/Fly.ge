import { useTranslation } from "react-i18next";

import DepDetails from "./DepDetails";
import RetDetails from "./RetDetails";

import BlueCheckpointPic from "../../../assets/Flights/Details/BlueCheckpoint.png";

function FlightDetails({ selectedFlight, rounded }) {
  const { t } = useTranslation();
  return (
    <div
      className={`bg-white p-5 ${
        rounded ? "rounded-lg" : "rounded-tl-lg rounded-tr-lg"
      } `}
    >
      <div className="flex flex-col md:flex-row gap-5">
        <DepDetails selectedFlight={selectedFlight} />
        <RetDetails selectedFlight={selectedFlight} />
      </div>
      <div className="border border-solid border-primaryBlue text-primaryBlue mt-5 bg-boxBlue rounded-md px-5 py-2 flex gap-2 items-center">
        <img src={BlueCheckpointPic} alt="" className="h-5 w-5" />{" "}
        {t("informationalMessageAboutCheckin")}
      </div>
    </div>
  );
}

export default FlightDetails;
