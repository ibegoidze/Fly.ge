import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  surname: "",
  email: "",
  passportNumber: "",
  birthMonth: "",
  birthDay: "",
  birthYear: "",
  country: "",
  sex: "",
  passportIssueMonth: "",
  passportIssueDay: "",
  passportIssueYear: "",
  passportExpiryMonth: "",
  passportExpiryDay: "",
  passportExpiryYear: "",
  passportIssuingAuthority: "",
  mainPassengerPhone: "",
  mainPassengerLuggage: "", // ADD MAIN PASSENGER LUGGAGE
  mainPassengerLuggagePrice: 0, // ADD MAIN PASSENGER LUGGAGE PRICE
};

const mainPassengerSlice = createSlice({
  name: "mainPassenger",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSurname: (state, action) => {
      state.surname = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassportNumber: (state, action) => {
      state.passportNumber = action.payload;
    },
    setBirthMonth: (state, action) => {
      state.birthMonth = action.payload;
    },
    setBirthDay: (state, action) => {
      state.birthDay = action.payload;
    },
    setBirthYear: (state, action) => {
      state.birthYear = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setSex: (state, action) => {
      state.sex = action.payload;
    },
    setPassportIssueMonth: (state, action) => {
      state.passportIssueMonth = action.payload;
    },
    setPassportIssueDay: (state, action) => {
      state.passportIssueDay = action.payload;
    },
    setPassportIssueYear: (state, action) => {
      state.passportIssueYear = action.payload;
    },
    setPassportExpiryMonth: (state, action) => {
      state.passportExpiryMonth = action.payload;
    },
    setPassportExpiryDay: (state, action) => {
      state.passportExpiryDay = action.payload;
    },
    setPassportExpiryYear: (state, action) => {
      state.passportExpiryYear = action.payload;
    },
    setPassportIssuingAuthority: (state, action) => {
      state.passportIssuingAuthority = action.payload;
    },
    setMainPassengerPhone: (state, action) => {
      state.mainPassengerPhone = action.payload;
    },
    setMainPassengerLuggage: (state, action) => {
      state.mainPassengerLuggage = action.payload;
    }, // ADD SET MAIN PASSENGER LUGGAGE
    setMainPassengerLuggagePrice: (state, action) => {
      state.mainPassengerLuggagePrice = action.payload;
    }, // ADD SET MAIN PASSENGER LUGGAGE PRICE
  },
});

export const {
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
  setMainPassengerLuggage,
  setMainPassengerLuggagePrice,
} = mainPassengerSlice.actions;
export default mainPassengerSlice.reducer;
