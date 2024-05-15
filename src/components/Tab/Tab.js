import React from 'react';
import './Tab.css';

const Tab = ({ clickedButton, language }) => {
  const englishButtons = [
    "Color",
    "Font Size",
    "Thai",
    "English",
    "Notifications",
    "Create Account",
    "Login",
    "Home",
    "Dashboard",
    "Survey",
    "Change language"
  ];

  const thaiButtons = [
    "สี",
    "ขนาดฟอนต์",
    "ไทย",
    "อังกฤษ",
    "การแจ้งเตือน",
    "สร้างบัญชี",
    "เข้าสู่ระบบ",
    "หน้าหลัก",
    "แดชบอร์ด",
    "แบบสำรวจ",
    "เปลี่ยนภาษา"
  ];

  const getButtonText = (button) => {
    if (language === 'TH') {
      const index = englishButtons.indexOf(button);
      return index !== -1 ? thaiButtons[index] : button;
    } else {
      const index = thaiButtons.indexOf(button);
      return index !== -1 ? englishButtons[index] : button;
    }
  };

  return (
    <div className="tab-display">
      <h1>{language === 'TH' ? 'คุณกดปุ่ม:' : 'You clicked button:'} {getButtonText(clickedButton)}</h1>
    </div>
  );
};

export default Tab;
