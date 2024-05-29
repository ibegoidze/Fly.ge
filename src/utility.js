import { t } from "i18next";
import { useEffect } from "react";

// FORMAT DATE FUNCTION // TAKES STING REPRESENTING A DATE TUNRS INTO A 25 MAY FORMAT // USED IN DirectFlights, TransferedFlights, ExtentionDeparture and ExtentionReturn
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  return `${day} ${t(month)}`;
};
export const formatDateWeek = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const weekday = date.toLocaleString("default", { weekday: "long" });

  // RETURN FORMATTED DATE INCLUDING THE WEEKDAY
  return `${t(weekday)}, ${day} ${t(month)}`;
};

// CALCULATE TIME DIFFERENCE FUNCTION BETWEEN TWO STRING DATES // USED IN DirectFlights, TransferedFlights, ExtentionDeparture and ExtentionReturn
export const calculateTimeDifference = (start, end) => {
  const startTime = new Date(`2024-01-01 ${start}`);
  const endTime = new Date(`2024-01-01 ${end}`);
  const difference = endTime.getTime() - startTime.getTime();
  const hours = Math.floor(difference / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  return hours === 0 && minutes === 0
    ? ""
    : hours === 0
    ? `${minutes} ${t("min")}`
    : minutes === 0
    ? `${hours} ${t("hr")}`
    : `${hours} ${t("hr")}, ${minutes}`;
};

// CLICK OUTSIDE CLOSING THE DROPDOWNS // USED IN MOST OF DROPDOWNS
export const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
};

// FUNCTION TO CHECK IF TEXT CONSISTS ONLY OF LETTERS AND IS MORE THAN 3 LETTERS
export const isValidName = (name) => {
  const regex = /^[a-zA-Z]{4,}$/;
  return regex.test(name);
};

// EMAIL VALIDATION FUNCTION
export const isValidEmail = (input) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(input);
};

// FUNCTION TO CHECK IF INPUT CONSISTS ONLY OF NUMBERS AND HAS MINIMUM LENGTH
export const isValidNumber = (input, minLength) => {
  const regex = new RegExp(`^[0-9]{${minLength},}$`);
  return regex.test(input);
};

// CHECK IF MAINPASSENGER IS MORE THAN 18
export const isValidBirthDate = (birthMonth, birthDay, birthYear) => {
  return birthMonth && birthDay && birthYear && birthYear < 2006;
};
