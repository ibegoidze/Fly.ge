import FaceMaskPic from "../../../assets/Flights/Review/FaceMask.png";
import CovidPic from "../../../assets/Flights/Review/Covid.png";

function CovidRegulations() {
  return (
    <div className="bg-white h-full shadow-lg rounded-lg p-4">
      <div className="flex items-center space-x-2">
        <span className="h-8 w-8 bg-primaryBlue rounded flex items-center justify-center">
          <img
            src={FaceMaskPic}
            alt="Face Mask"
            className="h-6 w-6 object-cover"
          />
        </span>
        <span className="text-lg font-medium">Covid-19 Regulations</span>
      </div>
      <div className="bg-backgroundGray rounded flex gap-5 mt-5 p-2">
        <img src={CovidPic} alt="" />
        <div className="text-xs sm:text-sm font-medium text-gray-600 flex flex-col justify-between">
          <span>
            ინფორმაცია გამგზავრების მსურველი საქართველოს მოქალაქეებისათვის
          </span>
          <span>www.geoconsul.gov.ge</span>
        </div>
      </div>
    </div>
  );
}

export default CovidRegulations;
