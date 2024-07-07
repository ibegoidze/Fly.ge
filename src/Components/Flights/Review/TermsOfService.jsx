import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

function TermsOfService() {
  const { t } = useTranslation();
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // CLICK OUTSIDE CLOSING
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <div className="mt-3 text-sm">
      <label className="flex items-center gap-1">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="mr-2 h-4 w-4"
        />
        <span>{t("agree")}</span>
        <span
          className="text-blue-600 cursor-pointer hover:underline"
          onClick={toggleModal}
        >
          {t("TermsOfService")}
        </span>
        .
      </label>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className="bg-white p-5 rounded-lg shadow-lg max-w-lg w-full m-4"
          >
            <h3 className="text-lg font-bold mb-4">Terms of Service</h3>
            <p className="text-sm mb-4">
              YOU AGREE THAT THIS IS THE BEST WEB APPLICATION EVER!
            </p>
            <button
              onClick={toggleModal}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Sure
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TermsOfService;
