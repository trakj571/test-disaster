import React from 'react';
import './CustomButton.css';

const CustomButton = ({ label, onClick }) => {
  return (
    <button onClick={() => onClick(label)} className="custom-button">
      {label}
    </button>
  );
};

export default CustomButton;
