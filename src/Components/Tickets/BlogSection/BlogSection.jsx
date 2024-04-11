import BlogCard from "../../Global/Blog/BlogCard";
import BlogFlowersPIc from "../../../assets/Tickets/images/BlogFlowers.png";
import BlogWindowPIc from "../../../assets/Tickets/images/BlogWindow.png";
import BlogRocksPIc from "../../../assets/Tickets/images/BlogRocks.png";
import { useTranslation } from "react-i18next";

function BlogSection() {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-backgroundGray py-4 pb-16 noto-sans-georgian">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-col sm:justify-between sm:flex-row  sm:mt-5 py-4">
        <div>
          <div className="font-semibold text-md sm:text-xl text-textDark mb-2 text-center sm:text-start">
            {t("Check out our blog")}
          </div>
        </div>
        <div className="text-primaryBlue text-sm sm:text-md font-medium flex justify-end items-end gap-1 whitespace-nowrap ">
          <div className="flex text-xs items-center cursor-pointer">
            {t("See all")}
            <span className="material-symbols-outlined text-sm">
              chevron_right
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-5">
        <BlogCard
          imageUrl={BlogFlowersPIc}
          technology={t("Technology")}
          title={t("Free internet and interesting offers")}
          text={t(
            "Lorem Ipsu put on the work Rite of Wrath in the can with the advanced barren half of the contact swelling..."
          )}
          seen={"12"}
          comment={"5"}
        />
        <BlogCard
          imageUrl={BlogWindowPIc}
          technology={t("Technology")}
          title={t("New Year's discounts and low-cost flights")}
          text={t(
            "Lorem Ipsu put on the work Rite of Wrath in the can with the advanced barren half of the contact swelling..."
          )}
          seen={"48"}
          comment={"39"}
        />
        <BlogCard
          imageUrl={BlogRocksPIc}
          technology={t("Technology")}
          title={t("Free internet and interesting offers")}
          text={t(
            "Lorem Ipsu put on the work Rite of Wrath in the can with the advanced barren half of the contact swelling..."
          )}
          seen={"15"}
          comment={"3"}
        />
      </div>
    </div>
  );
}

export default BlogSection;
