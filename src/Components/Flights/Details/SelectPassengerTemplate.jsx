import Dropdown from "./Dropdown";
import { useTranslation } from "react-i18next";
import { templateNames } from "../../../static";
import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setSurname,
  setEmail,
  setPassportNumber,
  setBirthMonth,
  setBirthDay,
  setBirthYear,
  setCountry,
  setSex,
  setPassportIssueMonth,
  setPassportIssueDay,
  setPassportIssueYear,
  setPassportExpiryMonth,
  setPassportExpiryDay,
  setPassportExpiryYear,
  setPassportIssuingAuthority,
  setMainPassengerPhone,
} from "../../../Store/User/mainPassengerSlice";
import { useEffect, useCallback } from "react";

function SelectPassengerTemplate() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const mainPassengerTemplate = useSelector(
    (state) => state.mainPassenger.mainPassengerTemplate
  );

  const handleTemplateChange = useCallback(
    (selectedTemplate) => {
      console.log("Selected template:", selectedTemplate);
      switch (selectedTemplate) {
        case "Irakli Begoidze":
          dispatch(setName("Irakli"));
          dispatch(setSurname("Begoidze"));
          dispatch(setEmail("begobegoidze@gmail.com"));
          dispatch(setPassportNumber("12345678910"));
          dispatch(setBirthMonth("July"));
          dispatch(setBirthDay("31"));
          dispatch(setBirthYear("1998"));
          dispatch(setCountry("Georgia"));
          dispatch(setPassportIssueMonth("June"));
          dispatch(setPassportIssueDay("15"));
          dispatch(setPassportIssueYear("2020"));
          dispatch(setPassportExpiryMonth("December"));
          dispatch(setPassportExpiryDay("31"));
          dispatch(setPassportExpiryYear("2028"));
          dispatch(setMainPassengerPhone("557351535"));
          dispatch(setPassportIssuingAuthority("Department of State"));
          dispatch(setSex("male"));
          break;
        case "Steve Jobs":
          dispatch(setName("Steve"));
          dispatch(setSurname("Jobs"));
          break;
        case "Bill Gates":
          dispatch(setName("Bill"));
          dispatch(setSurname("Gates"));
          break;
        case "Mark Zuckerberg":
          dispatch(setName("Mark"));
          dispatch(setSurname("Zuckerberg"));
          break;
        case "Jeff Bezos":
          dispatch(setName("Jeff"));
          dispatch(setSurname("Bezos"));
          break;
        default:
          dispatch(setName(""));
          dispatch(setSurname(""));
          break;
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (mainPassengerTemplate) {
      handleTemplateChange(mainPassengerTemplate);
    }
  }, [mainPassengerTemplate, handleTemplateChange]);

  return (
    <div className="my-10">
      <div className="mb-2">{t("Passenger Template Selection")}</div>
      <Dropdown
        title={t("Name, Surname")}
        options={templateNames}
        type="mainPassengerTemplate"
        size="w-full"
      />
    </div>
  );
}

export default SelectPassengerTemplate;
