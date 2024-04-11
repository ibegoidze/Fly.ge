import React, { useState, useEffect, useRef } from "react";
import GeoFlag from "../../../assets/Global/images/flag.png";
import UKFlag from "../../../assets/Global/images/united-kingdom.png";
import GerFlag from "../../../assets/Global/images/german-flag.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../../Store/Language/languageSlice";

function LanguageDropDown({ alwaysVisible = false }) {
  const dispatch = useDispatch();
  const { languageCode, flagImage } = useSelector((state) => state.language);
  const { i18n } = useTranslation();
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // DROPDOWN OPTIONS
  const dropdownOptions = [
    { flag: GeoFlag, lang: "ქარ", i18nLang: "ka", alt: "Georgian Flag" },
    { flag: UKFlag, lang: "Eng", i18nLang: "en", alt: "UK Flag" },
    { flag: GerFlag, lang: "Deu", i18nLang: "de", alt: "German Flag" },
  ];

  // UPDATE LOCAL COMPONENT STATE WHEN REDUX STATE IS CHANGED
  useEffect(() => {
    const selectedOption = dropdownOptions.find(
      (option) => option.i18nLang === languageCode
    );
    if (selectedOption) {
      setSelectedFlag(selectedOption.flag);
      setSelectedLang(selectedOption.lang);
    }
  }, [languageCode]);

  // CLICKING OUTSIDE THE DROPDOWN WILL CLOSE IT
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // SELECT LANGUAGE
  const handleSelectLanguage = (flag, lang, i18nLang) => {
    dispatch(setLanguage({ languageCode: i18nLang, flagImage: flag }));
    i18n.changeLanguage(i18nLang);
    setIsDropdownOpen(false);
  };

  // OPEN/CLOSE DROPDOWN
  const dropdownVariants = {
    open: {
      opacity: 1,
      maxHeight: 500,
      transition: {
        opacity: { duration: 0.2, ease: "linear" },
        maxHeight: { duration: 0.2, ease: "linear" },
      },
    },
    closed: {
      opacity: 0,
      maxHeight: 0,
      transition: {
        opacity: { duration: 0.2, ease: "linear" },
        maxHeight: { duration: 0.2, ease: "linear" },
      },
    },
  };

  // LOCAL COMPONENT STATE
  const [selectedFlag, setSelectedFlag] = useState(flagImage);
  const [selectedLang, setSelectedLang] = useState(
    dropdownOptions.find((option) => option.i18nLang === languageCode)?.lang
  );

  return (
    <div
      className={`relative ${alwaysVisible ? "" : "hidden lg:block"}`}
      ref={dropdownRef}
    >
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex cursor-pointer items-center space-x-3"
      >
        <img src={selectedFlag} alt="Selected Flag" className="h-6 w-6 " />
        <span className="font-medium  text-sm noto-sans-georgian ">
          {selectedLang}
        </span>
      </div>
      {isDropdownOpen && (
        <motion.div
          className="absolute mt-1 w-48 bg-white rounded-b-md z-10 right-0 top-full overflow-hidden"
          initial="closed"
          animate={isDropdownOpen ? "open" : "closed"}
          variants={dropdownVariants}
          style={{
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05)",
          }}
        >
          {dropdownOptions.map(
            (option) =>
              option.i18nLang !== i18n.language && (
                <div
                  key={option.i18nLang}
                  className="flex items-center space-x-3 p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() =>
                    handleSelectLanguage(
                      option.flag,
                      option.lang,
                      option.i18nLang
                    )
                  }
                >
                  <img src={option.flag} alt={option.alt} className="h-6" />
                  <span className="font-medium noto-sans-georgian  text-sm">
                    {option.lang}
                  </span>
                </div>
              )
          )}
        </motion.div>
      )}
    </div>
  );
}

export default LanguageDropDown;
