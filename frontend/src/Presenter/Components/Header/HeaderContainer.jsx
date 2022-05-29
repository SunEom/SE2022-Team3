import React, { useEffect, useState } from "react";
import HeaderPresenter from "./HeaderPresenter";
import { signOut } from "firebase/auth";
import { authService } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { getUserState, logoutDispatch, userStateSubscribe } from "../../../reduxAccess";
import { removeIdToken } from "../../../localStorageAccess";

const HeaderContainer = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const onLogoutButtonClick = () => {
    removeIdToken();
    logoutDispatch();
    signOut(authService);
    navigate("/login", { replace: true });
  };

  const onLogoClick = () => {
    navigate("/", { replace: false });
  };

  useEffect(() => {
    let userData = getUserState();
    setUser(userData);
    userStateSubscribe(setUser);
  }, []);

  return <HeaderPresenter user={user} onLogoutButtonClick={onLogoutButtonClick} onLogoClick={onLogoClick} />;
};

export default HeaderContainer;
