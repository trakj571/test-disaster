export const handleButtonClick = (button, setClickedButton, handleLogin, language) => {
  if (button === 'เข้าสู่ระบบ' || button === 'Login') {
    handleLogin();
  } else if (button === '🔔') {
    setClickedButton(language === 'TH' ? 'การแจ้งเตือน' : 'Notifications');
  } else {
    setClickedButton(button);
  }
};

export const handleLanguageChange = (language, setLanguage, onButtonClick) => {
  const newLanguage = language === 'TH' ? 'EN' : 'TH';
  setLanguage(newLanguage);
  onButtonClick(newLanguage === 'TH' ? 'เปลี่ยนภาษา' : 'Change language');
};

export const handleLogin = (setUserId, setIsLoggedIn, setClickedButton, language) => {
  const fakeUserId = '12345'; // กำหนดค่า fakeUserId ที่นี่
  setUserId(fakeUserId);
  setIsLoggedIn(true);
  setClickedButton(language === 'TH' ? 'เข้าสู่ระบบ' : 'Login');
};
