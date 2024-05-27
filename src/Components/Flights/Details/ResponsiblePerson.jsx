import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// IMPORTING IMAGES
import MailPic from "../../../assets/Flights/Details/MailPic.png";
import PhonePic from "../../../assets/Flights/Details/PhonePic.png";
import CompanyPic from "../../../assets/Flights/Details/CompanyPic.png";
import PostcodePic from "../../../assets/Flights/Details/PostcodePic.png";

const ResponsiblePerson = () => {
  // INITIALIZING TRANSLATION HOOK
  const { t } = useTranslation();

  // STATE DECLARATIONS
  const [selectedType, setSelectedType] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [organizationName, setOrganizationName] = useState("");
  const [isOrganizationNameValid, setIsOrganizationNameValid] = useState(false);
  const [postalCode, setPostalCode] = useState("");
  const [isPostalCodeValid, setIsPostalCodeValid] = useState(false);

  // EMAIL VALIDATION FUNCTION
  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  // PHONE VALIDATION FUNCTION
  const validatePhone = (input) => {
    const phoneRegex = /^[\d+\s]+$/;
    return phoneRegex.test(input) && input.replace(/\s/g, "").length >= 5;
  };

  // HANDLER FOR EMAIL CHANGE
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsEmailValid(validateEmail(inputEmail));
  };

  // HANDLER FOR PHONE CHANGE
  const handlePhoneChange = (e) => {
    const inputPhone = e.target.value;
    setPhone(inputPhone);
    setIsPhoneValid(validatePhone(inputPhone));
  };

  // HANDLER FOR ORGANIZATION NAME CHANGE
  const handleOrganizationNameChange = (e) => {
    const inputOrganizationName = e.target.value;
    setOrganizationName(inputOrganizationName);
    setIsOrganizationNameValid(inputOrganizationName.length > 0);
  };

  // HANDLER FOR POSTAL CODE CHANGE
  const handlePostalCodeChange = (e) => {
    const inputPostalCode = e.target.value;
    setPostalCode(inputPostalCode);
    setIsPostalCodeValid(/^\d+$/.test(inputPostalCode));
  };

  return (
    <div className="p-4 sm:w-2/3 bg-white mb-5 rounded-lg shadow-lg transition-all duration-300">
      {/* RESPONSIBLE PERSON TITLE */}
      <div className="text-lg font-semibold mb-7">{t("ResponsiblePerson")}</div>

      {/* TYPE SELECTION CHECKBOXES */}
      <div className="mb-4 flex flex-col space-y-2">
        {["physical", "legal"].map((type) => (
          <label key={type} className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              value={type}
              checked={selectedType === type}
              onChange={() => setSelectedType(type)}
              className="hidden"
            />
            <span
              className={`w-5 h-5 mt-1 mb-3 border-2 rounded-full flex items-center justify-center transition-colors duration-300 ${
                selectedType === type
                  ? "border-primaryBlue "
                  : "border-gray-300"
              }`}
            >
              {selectedType === type && (
                <span className={`w-3 h-3 rounded-full bg-primaryBlue`}></span>
              )}
            </span>
            <span
              className={`ml-5 mt-1 mb-3 font-medium text-sm ${
                selectedType === type ? "text-gray-500 " : "text-gray-400"
              }`}
            >
              {type === "physical" ? t("physicalPerson") : t("legalPerson")}
            </span>
          </label>
        ))}
      </div>

      {/* FORM FIELDS BASED ON SELECTED TYPE */}
      {selectedType && (
        <div className="grid grid-cols-2 gap-4 transition-all duration-500">
          <div>
            {/* EMAIL FIELD */}
            <label className="block mb-1 text-sm text-gray-500 font-semibold focus:outline-none">
              {t("email")}{" "}
              <span
                className={` ${
                  isEmailValid ? "text-green-500" : "text-red-500"
                }`}
              >
                {isEmailValid ? "✓" : "*"}
              </span>
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none pr-10"
              />
              <img
                src={MailPic}
                alt="Mail Icon"
                className="absolute right-2 top-3 w-5 h-5"
              />
            </div>
          </div>
          <div>
            {/* PHONE FIELD */}
            <label className="block mb-1 text-sm text-gray-500 font-semibold outline-none">
              {t("phone")}{" "}
              <span
                className={` ${
                  isPhoneValid ? "text-green-500" : "text-red-500"
                }`}
              >
                {isPhoneValid ? "✓" : "*"}
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="+995 555 555 5555"
                value={phone}
                onChange={handlePhoneChange}
                className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none pr-10"
              />
              <img
                src={PhonePic}
                alt="Phone Icon"
                className="absolute right-2 top-3 w-5 h-5"
              />
            </div>
          </div>
          {selectedType === "legal" && (
            <>
              <div>
                {/* ORGANIZATION NAME FIELD */}
                <label className="block mb-1 text-sm text-gray-500 font-semibold outline-none">
                  {t("organizationName")}{" "}
                  <span
                    className={` ${
                      isOrganizationNameValid
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {isOrganizationNameValid ? "✓" : "*"}
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Organization Name"
                    value={organizationName}
                    onChange={handleOrganizationNameChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none pr-10"
                  />
                  <img
                    src={CompanyPic}
                    alt="Company Icon"
                    className="absolute right-2 top-3 w-5 h-5"
                  />
                </div>
              </div>
              <div>
                {/* POSTAL CODE FIELD */}
                <label className="block mb-1 text-sm text-gray-500 font-semibold outline-none">
                  {t("postalCode")}{" "}
                  <span
                    className={` ${
                      isPostalCodeValid ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {isPostalCodeValid ? "✓" : "*"}
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="12345"
                    value={postalCode}
                    onChange={handlePostalCodeChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none pr-10"
                  />
                  <img
                    src={PostcodePic}
                    alt="Postcode Icon"
                    className="absolute right-2 top-3 w-5 h-5"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      )}
      <div className="my-5 text-sm text-gray-400 font-semibol">
        {t("validationMessage")}
      </div>
    </div>
  );
};

export default ResponsiblePerson;
