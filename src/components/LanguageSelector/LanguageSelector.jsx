import React from "react";
import LanguageSelectorLogic from "./LanguageSelector.logic";

const LanguageSelector = () => {
  const { language, onLanguageChange } = LanguageSelectorLogic();
  return (
    <div>
      <select value={language} onChange={onLanguageChange}>
        <option value="es">Spanish</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
