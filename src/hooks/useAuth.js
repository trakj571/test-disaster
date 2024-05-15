import { useState } from "react";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const login = () => {
    const fakeUserId = "12345"; // กำหนดค่า fakeUserId ที่นี่
    setUserId(fakeUserId);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUserId(null);
    setIsLoggedIn(false);
  };

  return { isLoggedIn, userId, login, logout };
};

export default useAuth;
