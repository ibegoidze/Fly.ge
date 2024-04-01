import GirlFixed from "../../../assets/Tickets/images/GirlFixedn.png";
import BlueCover from "../../../assets/Tickets/images/BlueCover.png";

function ExploreAdventure() {
  return (
    <div className="bg-backgroundGray flex relative py-5 md:pt-32 md:gap-10 lg:gap-3 justify-center md:justify-start">
      <div className="w-1/2 relative hidden md:flex">
        <img
          src={BlueCover}
          style={{ width: "calc(100% - 10px)" }}
          alt="blue background"
          className=" h-56 sm:h-72 min-h-44"
        />
        <img
          src={GirlFixed}
          alt="girl"
          className="absolute bottom-0 h-72 sm:h-96 min-h-44 min-w-64"
          style={{ left: "60%", transform: "translateX(-50%)" }}
        />
      </div>
      <div className="w-full px-12 md:px-0 flex flex-col justify-center md:justify-start md:w-96  ">
        <div className="text-center md:text-start text-lg font-bold text-textDark">
          აღმოაჩინე თავგადასავლები
        </div>
        <div className="text-sm text-center md:text-start text-gray-500 font-semibold px-5 md:px-0">
          დღეს, ეტიჰად არენაზე ქალაქელები პეპ გვარდიოლას თავკაცობით
          დაუპირისპირდებიან მაურინიოს ნ საჩემპიონო ბრძოლისათვის უკანასკნელი
          ქულები აართვან მათ. დღეს, ეტიჰად არენაზე ქალაქელები პეპ ნ საჩემპიონო
          ბრძოლისათვის უკანასკნელი ქულები აართვან მათ. მეცდებიან საჩემპიონო
          ბრძოლისათვის უკანასკნელი ქულები აართვან მათ. დღეს, ეტიჰად არენაზე
          ქალაქელები პეპ გვარდიოლას თავკაცობით დაუპირისპირდებიან მაურინიოს
          შეგირდებს და შეეცდებიან საჩემპიონო ბრძოლისათვის უკანასკნელი ქულები
          აართვან მათ.
        </div>
      </div>
    </div>
  );
}

export default ExploreAdventure;
