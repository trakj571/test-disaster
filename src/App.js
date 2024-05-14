import React, { useState } from "react";
import Header from "./components/Header/Header";
import Tab from "./components/Tab/Tab";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("medium");
  const [language, setLanguage] = useState("EN"); // เริ่มต้นเป็นภาษาอังกฤษ
  const [clickedButton, setClickedButton] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const handleButtonClick = (button) => {
    if (button === "เข้าสู่ระบบ" || button === "Login") {
      handleLogin();
    } else {
      setClickedButton(button);
    }
  };

  const handleLanguageChange = () => {
    const newLanguage = language === "TH" ? "EN" : "TH";
    setLanguage(newLanguage);
  };

  const handleLogin = () => {
    const fakeUserId = "12345"; // กำหนดค่า fakeUserId ที่นี่
    setUserId(fakeUserId);
    setIsLoggedIn(true);
    setClickedButton(language === "TH" ? "เข้าสู่ระบบ" : "Login");
  };

  return (
    <div className={`theme-${theme} font-size-${fontSize}`}>
      <Header
        onButtonClick={handleButtonClick}
        language={language}
        onLanguageChange={handleLanguageChange}
        isLoggedIn={isLoggedIn}
        userId={userId} // ส่ง userId ไปยัง Header
      />
      <Tab clickedButton={clickedButton} language={language} />
    </div>
  );
}

export default App;
