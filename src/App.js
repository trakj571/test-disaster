import React, { useState } from "react";
import Header from "./components/Header/Header";
import Tab from "./components/Tab/Tab";
import "./App.css";
import { handleButtonClick, handleLanguageChange, handleLogin } from "./handlers";

function App() {
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("medium");
  const [language, setLanguage] = useState("EN"); // เริ่มต้นเป็นภาษาอังกฤษ
  const [clickedButton, setClickedButton] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const handleLoginWithArgs = () => handleLogin(setUserId, setIsLoggedIn, setClickedButton, language);

  return (
    <div className={`theme-${theme} font-size-${fontSize}`}>
      <Header
        onButtonClick={(button) => handleButtonClick(button, setClickedButton, handleLoginWithArgs, language)}
        language={language}
        onLanguageChange={() => handleLanguageChange(language, setLanguage, setClickedButton)}
        isLoggedIn={isLoggedIn}
        userId={userId} // ส่ง userId ไปยัง Header
      />
      <Tab clickedButton={clickedButton} language={language} />
    </div>
  );
}

export default App;
