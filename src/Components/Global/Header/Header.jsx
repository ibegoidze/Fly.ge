import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import TicketLogo from "../../../assets/Global/images/TicketLogo.png";
import LanguageDropDown from "./LanguageDropDown";
import BurgerMenu from "./BurgerMenu";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const getNavLinkClass = (isActive) =>
    isActive
      ? "text-primaryBlue font-medium"
      : "text-textDark font-medium text-gray-500 hover:text-primaryBlue transition duration-300 ";

  const isTicketsActive =
    location.pathname === "/" || location.pathname === "/Flights" || location.pathname === "/Flights/search" || location.pathname === "/Flights/details"|| location.pathname === "/Flights/review";

  return (
    <header className={`sticky top-0 bg-white z-50`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {windowWidth < 1024 ? <BurgerMenu /> : null}
          <a href="/" className="flex items-center">
            <img
              className="h-4 w-auto sm:h-6 z-10"
              src={TicketLogo}
              alt="Your Logo"
            />
          </a>
          <div className="flex items-center space-x-4">
            <nav className="space-x-4 hidden text-sm  lg:block noto-sans-georgian">
              <NavLink to="/" className={getNavLinkClass(isTicketsActive)}>
                {t("Tickets")}
              </NavLink>
              <NavLink
                to="/Offers"
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                {t("Offers")}
              </NavLink>
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
            <LanguageDropDown />
            <button
              className="text-blue-500 border text-xs sm:text-sm border-blue-500 hover:bg-blue-50 px-2 py-2 sm:px-6 sm:py-3 rounded font-medium transition ease-in duration-150 noto-sans-georgian"
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
