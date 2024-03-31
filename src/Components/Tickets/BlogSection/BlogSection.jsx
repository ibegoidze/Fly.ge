import BlogCard from "../../Global/Blog/BlogCard";
import BlogFlowersPIc from "../../../assets/Tickets/images/BlogFlowers.png";
import BlogWindowPIc from "../../../assets/Tickets/images/BlogWindow.png";
import BlogRocksPIc from "../../../assets/Tickets/images/BlogRocks.png";

function BlogSection() {
  return (
    <div className="w-full bg-backgroundGray py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-col sm:justify-between sm:flex-row items-end mt-5 py-4">
        <div>
          <div className="font-bold text-xl text-textDark mb-2">
            გაეცანით ჩვენს ბლოგს
          </div>
        </div>
        <div className="text-primaryBlue font-semibold flex items-center gap-1 cursor-pointer whitespace-nowrap">
          {"See all"}
          <span className="material-symbols-outlined ">chevron_right</span>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-5">
        <BlogCard
          imageUrl={BlogFlowersPIc}
          technology={"ტექნოლოგია"}
          title={"უფასო ინტერნეტი და საინტერესო შემოთავაზებები"}
          text={
            "ლორემ იპსუმ ნამუშევარი შერისხვას წირვა ჩაიცვა ქილვაში კონტაქტის მოწინავე უნაყოფო ნახევრით იბერებოდა..."
          }
          seen={"12"}
          comment={"5"}
        />
        <BlogCard
          imageUrl={BlogWindowPIc}
          technology={"ტექნოლოგია"}
          title={"საახალწლო ფასდაკლებები და დაბალტარიფიანი ფრენები"}
          text={
            "ლორემ იპსუმ ნამუშევარი შერისხვას წირვა ჩაიცვა ქილვაში კონტაქტის მოწინავე უნაყოფო ნახევრით იბერებოდა..."
          }
          seen={"48"}
          comment={"39"}
        />
        <BlogCard
          imageUrl={BlogRocksPIc}
          technology={"ტექნოლოგია"}
          title={"რანდომ ტექსტი ლორემ იპსუმ დოლორეს ჰერმანეს"}
          text={
            "ლორემ იპსუმ ნამუშევარი შერისხვას წირვა ჩაიცვა ქილვაში კონტაქტის მოწინავე უნაყოფო ნახევრით იბერებოდა..."
          }
          seen={"15"}
          comment={"3"}
        />
      </div>
    </div>
  );
}

export default BlogSection;
