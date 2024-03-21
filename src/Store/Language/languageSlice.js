import { createSlice } from "@reduxjs/toolkit";
import GeoFlag from "../../assets/Global/images/GeoFlag.png";

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    languageCode: "ka",
    flagImage: GeoFlag,
  },
  reducers: {
    setLanguage: (state, action) => {
      state.languageCode = action.payload.languageCode;
      state.flagImage = action.payload.flagImage;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
