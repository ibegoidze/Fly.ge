import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import TicketLogo from "../../assets/Global/images/TicketLogo.png";
import GeoFlag from "../../assets/Global/images/flag.png";
import UKFlag from "../../assets/Global/images/united-kingdom.png";
import GerFlag from "../../assets/Global/images/german-flag.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState(GeoFlag);
  const [selectedLang, setSelectedLang] = useState("ქარ");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getNavLinkClass = (isActive) =>
    `text-textDark font-medium text-gray-500 ${
      isActive ? "text-hoverBlue" : "hover:text-hoverBlue"
    } transition duration-700`;

  const handleSelectLanguage = (flag, lang) => {
    setSelectedFlag(flag);
    setSelectedLang(lang);
    setIsDropdownOpen(false); // Close the dropdown
  };

  // Defining dropdown options
  const dropdownOptions = [
    { flag: GeoFlag, lang: "ქარ", alt: "Georgian Flag" },
    { flag: UKFlag, lang: "Eng", alt: "UK Flag" },
    { flag: GerFlag, lang: "Ger", alt: "German Flag" },
  ];

  return (
    <header>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <a href="/" className="flex items-center">
            <img
              className="h-4 w-auto sm:h-6"
              src={TicketLogo}
              alt="Your Logo"
            />
          </a>
          <div className="flex items-center space-x-4">
            <nav className="flex space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                ავიაბილეთები
              </NavLink>
              <NavLink
                to="/Offers"
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                შეთავაზებები
              </NavLink>
              <NavLink
                to="/Blog"
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                ბლოგი
              </NavLink>
              <NavLink
                to="/Contact"
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                დაგვიკავშირდით
              </NavLink>
            </nav>
            <div className="relative" ref={dropdownRef}>
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex cursor-pointer items-center space-x-3"
              >
                <img
                  src={selectedFlag}
                  alt="Selected Flag"
                  className="sm:h-6"
                />
                <span className="font-medium">{selectedLang}</span>
              </div>
              {isDropdownOpen && (
                <div
                  className="absolute mt-1 w-48 bg-white rounded-b-md z-10 right-0 top-full"
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
                          <img
                            src={option.flag}
                            alt={option.alt}
                            className="h-6"
                          />
                          <span className="font-medium">{option.lang}</span>
                        </div>
                      )
                  )}
                </div>
              )}
            </div>
            <button
              className="text-blue-500 border border-blue-500 hover:bg-blue-50 px-6 py-3 rounded font-semibold transition ease-in duration-150"
              style={{ borderRadius: "8px" }}
            >
              შესვლა
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
