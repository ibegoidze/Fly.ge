import React, { useState, useEffect, useRef } from "react";
import GeoFlag from "../../../assets/Global/images/flag.png";
import UKFlag from "../../../assets/Global/images/united-kingdom.png";
import GerFlag from "../../../assets/Global/images/german-flag.png";
import { motion } from "framer-motion";

function LanguageDropDown({ alwaysVisible = false }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState(GeoFlag);
  const [selectedLang, setSelectedLang] = useState("ქარ");
  const dropdownRef = useRef(null);
  // HANDLE MOUSE CLICK CLOSING A DROPDOWN
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // SETTING LANGUAGE ICON
  const handleSelectLanguage = (flag, lang) => {
    setSelectedFlag(flag);
    setSelectedLang(lang);
    setIsDropdownOpen(false);
  };

  // LANGUAGE DATA
  const dropdownOptions = [
    { flag: GeoFlag, lang: "ქარ", alt: "Georgian Flag" },
    { flag: UKFlag, lang: "Eng", alt: "UK Flag" },
    { flag: GerFlag, lang: "Ger", alt: "German Flag" },
  ];

  // DROPDOWN ANIMATION
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
  return (
    <div>
      {" "}
      {/* LANGUAGE DROPDOWN */}
      <div
        className={`relative ${alwaysVisible ? "" : "hidden lg:block"}`}
        ref={dropdownRef}
      >
        <div
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex cursor-pointer items-center space-x-3"
        >
          <img src={selectedFlag} alt="Selected Flag" className="h-6 w-6" />
          <span className="font-medium">{selectedLang}</span>
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
                option.lang !== selectedLang && (
                  <div
                    key={option.lang}
                    className="flex items-center space-x-3 p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() =>
                      handleSelectLanguage(option.flag, option.lang)
                    }
                  >
                    <img src={option.flag} alt={option.alt} className="h-6" />
                    <span className="font-medium">{option.lang}</span>
                  </div>
                )
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default LanguageDropDown;
