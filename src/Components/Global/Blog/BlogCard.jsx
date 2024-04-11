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
      <div className="flex flex-col xs:flex-row gap-3 text-sm py-3">
        <span className="bg-backgroundGray text-xs px-2 py-1.5  rounded font-semibold text-gray-500 cursor-pointer">
          {technology}
        </span>
        <span className="bg-backgroundGray text-xs px-2 py-1.5  rounded font-semibold text-gray-500 cursor-pointer">
          {technology}
        </span>
      </div>
      <div className="font-bold text-lg">{title}</div>
      <div className="py-2 font-semibold text-gray-400 text-sm  pb-5">
        {text}
      </div>
      <div className="flex-grow"></div>{" "}
      <div className="flex justify-between items-center border-t-2">
        <div className="flex gap-4 text-sm pt-3 pb-2 text-gray-400 font-semibold">
          <div>
            {seen} {t("seen")}
          </div>
          <div>
            {comment} {t("comment")}
          </div>
        </div>
        <img src={BlogFavPic} alt="heart" className="w-7 h-7 cursor-pointer" />
      </div>
    </div>
  );
}

export default OfferCard;
