import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import store from "../../store";
import RouterPresenter from "./RouterPresenter";

const RouterContainer = () => {
  const FetchUserData = () => {
    const idToken = window.localStorage.getItem("idToken");

    // 로그인 요청코드
    // axios...

    if (idToken) {
      // 사용자 정보 요청 코드
      //axios...
      // 사용자 정보가 있는 경우
      // 사용자 정보가 없는 경우
    } else {
      window.location.replace("/login");
    }

    //로그인 설정코드
    store.dispatch({ type: "LOGIN", user: { nickname: window.localStorage.getItem("nickname") } });
  };

  useEffect(() => {
    if (window.location.href.split("/").pop() !== "login") {
      FetchUserData();
    }
  }, []);

  return <RouterPresenter />;
};

export default RouterContainer;
