import { useState } from "react";
import { NavLink } from "react-router-dom";
import LanguageDropDown from "./LanguageDropDown";
import { useTranslation } from "react-i18next";

function BurgerMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { t } = useTranslation();

  // STYLING NAVIGATION
  const getNavLinkClass = (isActive) =>
    isActive
      ? "text-primaryBlue font-medium hover:bg-blue-50 p-4"
      : "text-gray-500 hover:text-primaryBlue hover:bg-blue-50 p-4";

  return (
    <div className="w-20">
      {/* BURGER MENU 3 LINES */}
      <div
        className="block lg:hidden cursor-pointer"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <div className="h-1 w-6 bg-slate-600 my-1"></div>
        <div className="h-1 w-6 bg-slate-600 my-1"></div>
        <div className="h-1 w-6 bg-slate-600 my-1"></div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <div
        className={`fixed w-80 top-0 left-0 z-40 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <button
            className="p-4 text-black"
            onClick={() => setIsSidebarOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <div className="p-4">
            <LanguageDropDown alwaysVisible={true} />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col noto-sans-georgian">
          <NavLink
            to="/"
            className={({ isActive }) => getNavLinkClass(isActive)}
            onClick={() => setIsSidebarOpen(false)}
          >
            {t("Tickets")}
          </NavLink>
          <NavLink
            to="/Offers"
            className={({ isActive }) => getNavLinkClass(isActive)}
            onClick={() => setIsSidebarOpen(false)}
          >
            {t("Offers")}
          </NavLink>
          <NavLink
            to="/Blog"
            className={({ isActive }) => getNavLinkClass(isActive)}
            onClick={() => setIsSidebarOpen(false)}
          >
            {t("Blog")}
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) => getNavLinkClass(isActive)}
            onClick={() => setIsSidebarOpen(false)}
          >
            {t("Contact")}
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default BurgerMenu;
