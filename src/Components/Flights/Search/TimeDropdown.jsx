import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const TimeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(0); // Initial slider value
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const formatHour = (value) => {
    const hour = Math.floor(value / 60);
    return `${hour < 10 ? "0" + hour : hour}:00`;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* SELECTOR */}
      <div
        className="cursor-pointer flex items-center justify-between w-32 px-2 lg:px-4 overflow-y-hidden text-gray-600 bg-gray-100 text-sm font-medium rounded-md py-2"
        onClick={toggleDropdown}
      >
        Time
        <span
          className="material-symbols-outlined transform transition duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          arrow_drop_down
        </span>
      </div>
      {/* DROPDOWN */}
      {isOpen && (
        <div className="absolute z-20 w-52 h-52 shadow-lg duration-300 bg-gray-100 rounded-md overflow-y-hidden">
          <Box sx={{ p: 2 }}>
            <Slider
              className="w-full mt-16"
              aria-label="Time"
              defaultValue={sliderValue}
              value={sliderValue}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              ValueLabelComponent={(props) => (
                <ValueLabel {...props} formatHour={formatHour} />
              )}
              step={60}
              min={0}
              max={1440}
            />
          </Box>
        </div>
      )}
    </div>
  );
};

const ValueLabel = ({ children, open, value, formatHour }) => {
  return (
    <Typography
      component="span"
      sx={{
        left: `${(value / 1440) * 100}%`,
        position: "absolute",
        top: -30,
        transform: "translateX(-50%)",
        whiteSpace: "nowrap",
      }}
      className={open ? "MuiSlider-valueLabelOpen" : ""}
    >
      {formatHour(value)}
    </Typography>
  );
};

export default TimeDropdown;
