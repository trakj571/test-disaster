import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './Header.css';

const Header = ({ onButtonClick, language, onLanguageChange, isLoggedIn, userId }) => {
  const handleThemeChange = () => {
    onButtonClick('Color');
  };

  const handleFontSizeChange = () => {
    onButtonClick('Aa+');
  };

  const handleLanguageChange = () => {
    onLanguageChange();
    onButtonClick(language === 'TH' ? 'เปลี่ยนภาษา' : 'Change language');
  };

  return (
    <header className="header">
      <img src="icon_.png" alt="Icon" className="header-icon" />
      <div className="button-group left-buttons">
        {isLoggedIn && (
          <>
            <CustomButton label={language === 'TH' ? 'หน้าหลัก' : 'Home'} onClick={() => onButtonClick(language === 'TH' ? 'หน้าหลัก' : 'Home')} />
            <CustomButton label={language === 'TH' ? 'แดชบอร์ด' : 'Dashboard'} onClick={() => onButtonClick(language === 'TH' ? 'แดชบอร์ด' : 'Dashboard')} />
            <CustomButton label={language === 'TH' ? 'แบบสำรวจ' : 'Survey'} onClick={() => onButtonClick(language === 'TH' ? 'แบบสำรวจ' : 'Survey')} />
          </>
        )}
      </div>
      <div className="button-group right-buttons">
        {!isLoggedIn ? (
          <>
            <CustomButton label="Color" onClick={handleThemeChange} isCircle={true} />
            <CustomButton label="Aa+" onClick={handleFontSizeChange} isCircle={true} />
            <CustomButton label={language === 'TH' ? 'TH' : 'EN'} onClick={handleLanguageChange} isCircle={true} />
            <CustomButton label="🔔" onClick={() => onButtonClick('🔔')} isCircle={true} />
            <CustomButton label={language === 'TH' ? 'สร้างบัญชี' : 'Create Account'} onClick={() => onButtonClick(language === 'TH' ? 'สร้างบัญชี' : 'Create Account')} />
            <CustomButton label={language === 'TH' ? 'เข้าสู่ระบบ' : 'Login'} onClick={() => onButtonClick(language === 'TH' ? 'เข้าสู่ระบบ' : 'Login')} />
          </>
        ) : (
          <>
            <CustomButton label="Color" onClick={handleThemeChange} isCircle={true} />
            <CustomButton label="Aa+" onClick={handleFontSizeChange} isCircle={true} />
            <CustomButton label={language === 'TH' ? 'TH' : 'EN'} onClick={handleLanguageChange} isCircle={true} />
            <CustomButton label="🔔" onClick={() => onButtonClick('🔔')} isCircle={true} />
            <CustomButton label={<i className="fas fa-user"></i>} onClick={() => onButtonClick('User')} isCircle={true} />
            {userId && <div className="user-id">User ID: {userId}</div>}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
