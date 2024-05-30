import InputTemplate from "./InputTemplate";
import { isValidName } from "../../../utility";

import UserPic from "../../../assets/Flights/Details/UserIcon.png";
import InfoPic from "../../../assets/Flights/Details/InformationIcon.png";

function PersonName() {
  return (
    <div className="flex gap-10 my-3">
      <InputTemplate
        title={"name"}
        placeholder={"name"}
        icon={UserPic}
        validationFunction={isValidName}
        inputType="name"
      />
      <InputTemplate
        title={"surname"}
        placeholder={"surname"}
        icon={InfoPic}
        validationFunction={isValidName}
        inputType="surname"
      />
    </div>
  );
}

export default PersonName;
