import Translator from "@/infrastructure/Translator";
import React from "react";

const LanguageSelector = () => {
  const { changeLanguage, language } = Translator();

  const onChange = (e) => changeLanguage(e.target.value);

  return (
    <div>
      <select value={language} onChange={onChange}>
        <option value="es">Spanish</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
