import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../../firebase";
import { removeIdToken } from "../../../localStorageAccess";
import { logoutDispatch } from "../../../reduxAccess";
import DrawerPresenter from "./DrawerPresenter";

const DrawerContainer = ({ user }) => {
  const navigate = useNavigate();

  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState(open);
  };

  const onListItemClick = (key) => (e) => {
    switch (key) {
      case "나의 정보":
        navigate("/mypage", { replace: false });
        break;

      case "나의 옷장":
        navigate("/", { replace: false });
        break;

      case "로그아웃":
        removeIdToken();
        logoutDispatch();
        signOut(authService);
        navigate("/login", { replace: true });
        break;

      case "의상 관리 꿀팁":
        navigate("/board/tip", { replace: false });
        break;

      case "나만의 패션 코디":
        navigate("/board/fashion", { replace: false });
        break;

      default:
        break;
    }
  };

  return <DrawerPresenter user={user} state={state} toggleDrawer={toggleDrawer} onListItemClick={onListItemClick} />;
};

export default DrawerContainer;
