import React, { useEffect, useState } from "react";
import HeaderPresenter from "./HeaderPresenter";
import store from "../../../store";
import { signOut } from "firebase/auth";
import { authService } from "../../../firebase";
import { useNavigate } from "react-router-dom";

const HeaderContainer = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  store.subscribe(() => {
    let userData = store.getState().user;
    setUser(userData);
  });

  const onLogoutButtonClick = () => {
    window.localStorage.removeItem("idToken");
    store.dispatch({ type: "LOGOUT" });
    signOut(authService);
    navigate("/login", { replace: true });
  };

  return <HeaderPresenter user={user} onLogoutButtonClick={onLogoutButtonClick} />;
};

export default HeaderContainer;
