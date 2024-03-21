import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TicketLogo from "../../../assets/Global/images/TicketLogo.png";
import LanguageDropDown from "./LanguageDropDown";
import BurgerMenu from "./BurgerMenu";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // LANGUAGE TRANSLATION
  const { t } = useTranslation();
  // SET CURRENT ACTIVE NAVIGATION BLUE
  const getNavLinkClass = (isActive) =>
    isActive
      ? "text-primaryBlue font-medium"
      : "text-textDark font-medium text-gray-500 hover:text-primaryBlue transition duration-300";

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header>
      {/* SECTION CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {windowWidth < 1024 ? <BurgerMenu /> : null}
          {/* FLY.GE LOGO */}
          <a href="/" className="flex items-center">
            <img
              className="h-4 w-auto sm:h-6"
              src={TicketLogo}
              alt="Your Logo"
            />
          </a>

          {/* NAV LAN BUTTON CONTAINER */}
          <div className="flex items-center space-x-4">
            {/* NAVIGATION */}
            <nav className=" space-x-4 hidden lg:block">
              <NavLink
                to="/"
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                {t("Tickets")}
              </NavLink>
              <NavLink
                to="/Offers"
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                {t("Offers")}
              </NavLink>
              {/* <h1>{t("Welcome to React")}</h1> */}
              <NavLink
                to="/Blog"
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                {t("Blog")}
              </NavLink>
              <NavLink
                to="/Contact"
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                {t("Contact")}
              </NavLink>
            </nav>
            {/* LANGUAGE DROPDOWN */}
            <LanguageDropDown />
            {/* BUTTON */}
            <button
              className="text-blue-500 border border-blue-500 hover:bg-blue-50 px-6 py-3 rounded font-semibold transition ease-in duration-150"
              style={{ borderRadius: "8px" }}
            >
              {t("Sign in")}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
