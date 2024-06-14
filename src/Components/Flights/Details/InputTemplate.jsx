import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setSurname,
  setEmail,
  setPassportNumber,
} from "../../../Store/User/mainPassengerSlice";

function InputTemplate({
  title,
  placeholder,
  icon,
  validationFunction,
  inputType,
  width = "1/2",
}) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.mainPassenger[inputType]);
  const [isValid, setIsValid] = useState(false);

  // USE EFFECT HOOK TO VALIDATE INPUT VALUE WHENEVER IT CHANGES
  useEffect(() => {
    setIsValid(validationFunction(inputValue));
  }, [inputValue, validationFunction]);

  // HANDLE INPUT CHANGE AND DISPATCH APPROPRIATE ACTION BASED ON INPUT TYPE
  const handleInputChange = (e) => {
    const value = e.target.value;
    setIsValid(validationFunction(value));
    switch (inputType) {
      case "name":
        dispatch(setName(value));
        break;
      case "surname":
        dispatch(setSurname(value));
        break;
      case "email":
        dispatch(setEmail(value));
        break;
      case "passportNumber":
        dispatch(setPassportNumber(value));
        break;
      default:
        break;
    }
  };

  return (
    <div className={`w-${width}`}>
      <div>
        <label
          className="mb-1 text-sm text-gray-500 font-semibold outline-none"
          htmlFor={inputType}
        >
          {t(title)}{" "}
          <span className={`${isValid ? "text-green-500" : "text-red-500"}`}>
            {isValid ? "✓" : "*"}
          </span>
        </label>
        <div className="relative mt-1">
          <input
            autoComplete="off"
            id={inputType}
            name={inputType}
            type="text"
            placeholder={t(placeholder)}
            value={t(inputValue)}
            onChange={handleInputChange}
            className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none pr-10"
          />
          <img
            src={icon}
            alt="Input Icon"
            className="absolute right-2 top-3 w-5 h-5"
          />
        </div>
      </div>
    </div>
  );
}

export default InputTemplate;
