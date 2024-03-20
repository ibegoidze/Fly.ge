import React from "react";
import { NavLink } from "react-router-dom";
import TicketLogo from "../../../assets/Global/images/TicketLogo.png";
import LanguageDropDown from "./LanguageDropDown";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  // SET CURRENT ACTIVE NAVIGATION BLUE
  const getNavLinkClass = (isActive) =>
    isActive
      ? "text-primaryBlue font-medium"
      : "text-textDark font-medium text-gray-500 hover:text-primaryBlue transition duration-300";

  return (
    <header>
      {/* SECTION CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <BurgerMenu />
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
            {/* LANGUAGE DROPDOWN */}
            <LanguageDropDown />
            {/* BUTTON */}
            <button
              className="text-blue-500 border border-blue-500 hover:bg-blue-50 px-6 py-3 rounded font-semibold transition ease-in duration-150 "
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
