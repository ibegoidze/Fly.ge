import InputTemplate from "./InputTemplate";
import { isValidEmail, isValidNumber } from "../../../utility";

import InfoPic from "../../../assets/Flights/Details/InformationIcon.png";
import MailPic from "../../../assets/Flights/Details/MailPic.png";

function ContactDetails() {
  return (
    <div className="flex gap-10">
      <InputTemplate
        title={"mail"}
        placeholder={"mail"}
        icon={MailPic}
        validationFunction={isValidEmail}
        inputType="email"
      />
      <InputTemplate
        title={"Passport number"}
        placeholder={"Passport number"}
        icon={InfoPic}
        validationFunction={(input) => isValidNumber(input, 7)}
        inputType="passportNumber"
      />
    </div>
  );
}

export default ContactDetails;
