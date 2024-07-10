import React from "react";
import { useTranslation } from "react-i18next";

export default function InfoBox({ picture, input, border, gray }) {
  const { t } = useTranslation();
  return (
    <span
      className={`inline-flex items-center text-xs gap-2  px-3 py-1 sm:py-2 rounded-md cursor-pointer ${
        border ? "border border-gray-300" : ""
      } font-medium text-gray-500 ${gray ? "bg-gray-100" : ""}`}
    >
      {picture ? <img src={picture} alt="" className="w-5 h-5" /> : <></>}
      {input ? <span>{t(input)}</span> : <></>}
    </span>
  );
}
