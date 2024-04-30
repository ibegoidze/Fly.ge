import BOG from "../../../assets/Tickets/images/BOG.png";
import TBC from "../../../assets/Tickets/images/TBC.png";
import Credo from "../../../assets/Tickets/images/Credo.png";

function ExtentionLoan() {
  return (
    <div className="my-4">
      <div className="font-semibold mb-3">Online installments</div>
      <div className="flex gap-3">
        <div className="BOG flex gap-3 font-medium border border-bogOrange text-bogOrange rounded px-5 py-3 text-sm cursor pointer">
          <img src={BOG} alt="" className="w-6 h-5" /> Bank of Georgia
        </div>
        <div className="TBC flex gap-3 font-medium border border-tbcBlue text-tbcBlue rounded px-5 py-3 text-sm cursor pointer">
          <img src={TBC} alt="" className="w-5 h-5" /> TBC bank
        </div>
        <div className="CREDO flex gap-3 font-medium border border-credoRed text-credoRed rounded px-5 py-3 text-sm cursor pointer ">
          <img src={Credo} alt="" className="w-5 h-5" /> Credo bank
        </div>
      </div>
    </div>
  );
}

export default ExtentionLoan;
