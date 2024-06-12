import InputTemplate from "./InputTemplate";
import { isValidName } from "../../../Store/SearchFlights/validationSlice";

import UserPic from "../../../assets/Flights/Details/UserIcon.png";
import InfoPic from "../../../assets/Flights/Details/InformationIcon.png";

function PersonName() {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 my-3">
      <InputTemplate
        title={"name"}
        placeholder={"name"}
        icon={UserPic}
        validationFunction={isValidName}
        inputType="name"
        width="w-full sm:w-1/2"
      />
      <InputTemplate
        title={"surname"}
        placeholder={"surname"}
        icon={InfoPic}
        validationFunction={isValidName}
        inputType="surname"
        width="w-full sm:w-1/2"
      />
    </div>
  );
}

export default PersonName;
