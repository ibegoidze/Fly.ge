import { useTranslation } from "react-i18next";
import BlogFavPic from "../../../assets/Tickets/images/BlogFav.png";

function OfferCard({ imageUrl, title, text, technology, seen, comment }) {
  const { t } = useTranslation();
  return (
    <div className="p-3 bg-white w-full md:w-1/3 flex flex-col rounded-lg shadow-xl">
      <div
        className="bg-cover pt-4 bg-center h-64 cursor-pointer transition-background-size duration-300 hover:bg-zoom"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {" "}
      </div>
      <div className="flex gap-3 text-sm py-3">
        <span className="bg-backgroundGray px-2 py-1.5 rounded font-semibold text-gray-500 cursor-pointer">
          {technology}
        </span>
        <span className="bg-backgroundGray px-2 py-1.5 rounded font-semibold text-gray-500 cursor-pointer">
          {technology}
        </span>
      </div>
      <div className="font-bold text-lg">{title}</div>
      <div className="py-2 font-semibold text-gray-400 text-sm border-b-2 pb-5">
        {text}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 text-sm pt-3 pb-2 text-gray-400 font-semibold">
          <div>{seen} ნახვა</div>
          <div>{comment} კომენტარი</div>
        </div>
        <img src={BlogFavPic} alt="heart" className="w-7 h-7 cursor-pointer" />
      </div>
    </div>
  );
}

export default OfferCard;
