
export const handleThemeChange = (onButtonClick) => {
  onButtonClick('Color');
};

export const handleFontSizeChange = (onButtonClick) => {
  onButtonClick('Aa+');
};

export const handleLanguageChange = (language, onLanguageChange, onButtonClick) => {
  const newLanguage = language === 'TH' ? 'EN' : 'TH';
  onLanguageChange(newLanguage);
  onButtonClick(newLanguage);
};
