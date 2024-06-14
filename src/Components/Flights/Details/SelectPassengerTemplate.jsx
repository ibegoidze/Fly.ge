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
          dispatch(setName(t("Irakli")));
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
          dispatch(setEmail("steveJobs123@apple.com"));
          dispatch(setPassportNumber("1234567891033"));
          dispatch(setBirthMonth("February"));
          dispatch(setBirthDay("24"));
          dispatch(setBirthYear("1955"));
          dispatch(setCountry("United States"));
          dispatch(setPassportIssueMonth("July"));
          dispatch(setPassportIssueDay("21"));
          dispatch(setPassportIssueYear("2018"));
          dispatch(setPassportExpiryMonth("March"));
          dispatch(setPassportExpiryDay("14"));
          dispatch(setPassportExpiryYear("2029"));
          dispatch(setMainPassengerPhone("110248806"));
          dispatch(setPassportIssuingAuthority("Passport Information Center"));
          dispatch(setSex("male"));
          break;
        case "Bill Gates":
          dispatch(setName("Bill"));
          dispatch(setSurname("Gates"));
          dispatch(setEmail("billGates@microsoft.com"));
          dispatch(setPassportNumber("2462462352322"));
          dispatch(setBirthMonth("Octomber"));
          dispatch(setBirthDay("28"));
          dispatch(setBirthYear("1955"));
          dispatch(setCountry("United States"));
          dispatch(setPassportIssueMonth("May"));
          dispatch(setPassportIssueDay("2"));
          dispatch(setPassportIssueYear("2015"));
          dispatch(setPassportExpiryMonth("April"));
          dispatch(setPassportExpiryDay("18"));
          dispatch(setPassportExpiryYear("2030"));
          dispatch(setMainPassengerPhone("105546815"));
          dispatch(setPassportIssuingAuthority("Passport Information Center"));
          dispatch(setSex("male"));
          break;
        case "Mark Zuckerberg":
          dispatch(setName("Mark"));
          dispatch(setSurname("Zuckerberg"));
          dispatch(setEmail("markZuckerberg@meta.com"));
          dispatch(setPassportNumber("36243634732422"));
          dispatch(setBirthMonth("May"));
          dispatch(setBirthDay("14"));
          dispatch(setBirthYear("1984"));
          dispatch(setCountry("United States"));
          dispatch(setPassportIssueMonth("September"));
          dispatch(setPassportIssueDay("2"));
          dispatch(setPassportIssueYear("2018"));
          dispatch(setPassportExpiryMonth("April"));
          dispatch(setPassportExpiryDay("18"));
          dispatch(setPassportExpiryYear("2030"));
          dispatch(setMainPassengerPhone("105546815"));
          dispatch(setPassportIssuingAuthority("Passport Information Center"));
          break;
        case "Jeff Bezos":
          dispatch(setName("Jeff"));
          dispatch(setSurname("Bezos"));
          dispatch(setEmail("markZuckerberg@meta.com"));
          dispatch(setPassportNumber("36243634732435"));
          dispatch(setBirthMonth("May"));
          dispatch(setBirthDay("14"));
          dispatch(setBirthYear("1984"));
          dispatch(setCountry("United States"));
          dispatch(setPassportIssueMonth("September"));
          dispatch(setPassportIssueDay("2"));
          dispatch(setPassportIssueYear("2018"));
          dispatch(setPassportExpiryMonth("April"));
          dispatch(setPassportExpiryDay("18"));
          dispatch(setPassportExpiryYear("2030"));
          dispatch(setMainPassengerPhone("105546815"));
          dispatch(setPassportIssuingAuthority("Passport Information Center"));
          break;
        case "---":
          dispatch(setName(""));
          dispatch(setSurname(""));
          dispatch(setEmail(""));
          dispatch(setPassportNumber(""));
          dispatch(setBirthMonth(""));
          dispatch(setBirthDay(""));
          dispatch(setBirthYear(""));
          dispatch(setCountry(""));
          dispatch(setPassportIssueMonth(""));
          dispatch(setPassportIssueDay(""));
          dispatch(setPassportIssueYear(""));
          dispatch(setPassportExpiryMonth(""));
          dispatch(setPassportExpiryDay(""));
          dispatch(setPassportExpiryYear(""));
          dispatch(setMainPassengerPhone(""));
          dispatch(setPassportIssuingAuthority(""));
          break;
        default:
          dispatch(setName(""));
          dispatch(setSurname(""));
          break;
      }
    },
    [dispatch, t]
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
