import React from 'react';
import './CustomButton.css';
import NotificationsIcon from '@mui/icons-material/Notifications'; // เพิ่มการนำเข้าไอคอน

const CustomButton = ({ label, onClick, isCircle }) => {
  return (
    <button onClick={onClick} className={`custom-button ${isCircle ? 'circle-button' : ''}`}>
      {label === '🔔' ? <NotificationsIcon /> : label}
    </button>
  );
};

export default CustomButton;
