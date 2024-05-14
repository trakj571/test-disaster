import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './Header.css';

const Header = ({ onButtonClick, language, onLanguageChange, isLoggedIn }) => {
  const handleThemeChange = () => {
    onButtonClick('Color');
  };

  const handleFontSizeChange = () => {
    onButtonClick('Aa+');
  };

  return (
    <header className="header">
      <img src="icon_.png" alt="Icon" className="header-icon" />
      <div className="button-group main-buttons">
        {isLoggedIn ? (
          <>
            <CustomButton label={language === 'TH' ? 'หน้าหลัก' : 'Home'} onClick={onButtonClick} />
            <CustomButton label={language === 'TH' ? 'แดชบอร์ด' : 'Dashboard'} onClick={onButtonClick} />
            <CustomButton label={language === 'TH' ? 'แบบสำรวจ' : 'Survey'} onClick={onButtonClick} />
          </>
        ) : (
          <>
            <CustomButton label="Color" onClick={handleThemeChange} />
            <CustomButton label="Aa+" onClick={handleFontSizeChange} />
            <CustomButton label={language === 'TH' ? 'TH' : 'EN'} onClick={onLanguageChange} />
            <CustomButton label="🔔" onClick={onButtonClick} />
            <CustomButton label={language === 'TH' ? 'สร้างบัญชี' : 'Create Account'} onClick={onButtonClick} />
            <CustomButton label={language === 'TH' ? 'เข้าสู่ระบบ' : 'Login'} onClick={onButtonClick} />
          </>
        )}
      </div>
      {isLoggedIn && (
        <div className="button-group right-buttons">
          <CustomButton label="Color" onClick={handleThemeChange} />
          <CustomButton label="Aa+" onClick={handleFontSizeChange} />
          <CustomButton label={language === 'TH' ? 'TH' : 'EN'} onClick={onLanguageChange} />
          <CustomButton label="🔔" onClick={onButtonClick} />
          <CustomButton label={<i className="fa fa-user"></i>} onClick={onButtonClick} />
        </div>
      )}
    </header>
  );
};

export default Header;
