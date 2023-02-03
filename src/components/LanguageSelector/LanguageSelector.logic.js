import { Translator } from "@infra/_exports";

const LanguageSelectorLogic = () => {
  const { changeLanguage, language } = Translator();
  const onLanguageChange = (e) => changeLanguage(e.target.value);

  return { language, onLanguageChange };
};

export default LanguageSelectorLogic;
