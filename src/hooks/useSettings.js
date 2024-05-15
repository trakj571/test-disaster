import { useState } from "react";

const useSettings = () => {
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("medium");
  const [language, setLanguage] = useState("EN"); // เริ่มต้นเป็นภาษาอังกฤษ

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "TH" ? "EN" : "TH"));
  };

  return { theme, fontSize, language, setTheme, setFontSize, toggleLanguage };
};

export default useSettings;