import BOG from "../../../assets/Tickets/images/BOG.png";
import TBC from "../../../assets/Tickets/images/TBC.png";
import Credo from "../../../assets/Tickets/images/Credo.png";

import { useTranslation } from "react-i18next";

function ExtentionLoan() {
  const { t } = useTranslation();
  return (
    <div className="my-4">
      <div className="font-semibold mb-3">{t("Online installments")}</div>
      <div className="flex gap-3">
        <div className="BOG flex items-center gap-3 font-medium border border-bogOrange text-bogOrange rounded px-2 lg:px-5 py-2 lg:py-2 text-xs sm:text-sm cursor-pointer">
          <img src={BOG} alt="" className="w-6 h-5 hidden lg:flex" /> Bank of
          Georgia
        </div>
        <div className="TBC flex items-center gap-3 font-medium border border-tbcBlue text-tbcBlue rounded px-2 lg:px-5 py-2 lg:py-2 text-xs sm:text-sm cursor-pointer">
          <img src={TBC} alt="" className="w-5 h-5 hidden lg:flex" /> TBC bank
        </div>
        <div className="CREDO flex items-center gap-3 font-medium border border-credoRed text-credoRed rounded px-2 lg:px-5 py-2 lg:py-2 text-xs sm:text-sm cursor-pointer ">
          <img src={Credo} alt="" className="w-5 h-5 hidden lg:flex" /> Credo
          bank
        </div>
      </div>
    </div>
  );
}

export default ExtentionLoan;
