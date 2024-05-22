import { t } from "i18next";
import { useEffect } from "react";

// FORMAT DATE FUNCTION // TAKES STING REPRESENTING A DATE TUNRS INTO A 25 MAY FORMAT // USED IN DirectFlights, TransferedFlights, ExtentionDeparture and ExtentionReturn
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  return `${day} ${t(month)}`;
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

// CLICK OUTSIDE CLOSING THE DROPDOWNS
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
