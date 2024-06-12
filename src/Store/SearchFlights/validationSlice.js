import { createSlice } from "@reduxjs/toolkit";

export const validationSlice = createSlice({
  name: "validation",
  initialState: {},
  reducers: {},
});

// FUNCTION TO CHECK IF NAME IS VALID
const isValidName = (name) => {
  const regex =
    /^[a-zA-Z\u00C0-\u00FF\u0100-\u017F\u0410-\u044F\u10A0-\u10FF]{4,}$/;
  return regex.test(name);
};

// EMAIL VALIDATION FUNCTION
const isValidEmail = (input) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(input);
};

// FUNCTION TO CHECK IF INPUT CONSISTS ONLY OF NUMBERS AND HAS MINIMUM LENGTH
const isValidNumber = (input, minLength) => {
  const regex = new RegExp(`^[0-9]{${minLength},}$`);
  return regex.test(input);
};

// FUNCTION TO CHECK IF BIRTH DATE IS VALID
const isValidBirthDate = (birthMonth, birthDay, birthYear) => {
  return birthMonth && birthDay && birthYear && birthYear < 2006;
};

// FUNCTION TO CHECK IF COUNTRY IS VALID
const isValidCountry = (country) => {
  return !!country;
};

// FUNCTION TO CHECK IF GENDER IS VALID
const isValidGender = (gender) => {
  return !!gender;
};

// FUNCTION TO CHECK IF PASSPORT ISSUE DATE IS VALID
const isValidPassportIssueDate = (issueMonth, issueDay, issueYear) => {
  return issueMonth && issueDay && issueYear;
};

// FUNCTION TO CHECK IF PASSPORT ISSUE DATE IS VALID
const isValidPassportExpireDate = (
  expireMonth,
  expireDay,
  expireYear,
  issueMonth,
  issueDay,
  issueYear
) =>
  !expireMonth || !expireDay || !expireYear
    ? false
    : expireYear > issueYear
    ? true
    : expireYear === issueYear
    ? expireMonth > issueMonth
      ? true
      : expireMonth === issueMonth
      ? expireDay >= issueDay
      : false
    : false;

// EXPORT VALIDATION FUNCTIONS TO USE IN COMPONENTS
export {
  isValidName,
  isValidEmail,
  isValidNumber,
  isValidBirthDate,
  isValidCountry,
  isValidGender,
  isValidPassportIssueDate,
  isValidPassportExpireDate,
};

export default validationSlice.reducer;
