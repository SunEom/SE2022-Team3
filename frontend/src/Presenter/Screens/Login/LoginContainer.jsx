import React, { useEffect } from "react";
import LoginPresenter from "./LoginPresenter";
import { authService } from "../../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setIdToken } from "../../../localStorageAccess";
import { getUserState, loginDispatch } from "../../../reduxAccess";
import { fetchUserData } from "../../../httpRequest";
import { accessControl } from "../../../util";

const LoginContainer = () => {
  let authProvider = new GoogleAuthProvider();
  let navigate = useNavigate();

  const onLoginButtonClick = (e) => {
    signInWithPopup(authService, authProvider)
      //로그인 성공
      .then((result) => {
        // Firebase로 부터 idToken을 전달 받음
        let idToken = result._tokenResponse.idToken;
        // IdToken을 localStorage에 저장
        setIdToken(idToken);

        fetchUserData().then((response) => {
          if (response.data === "") {
            navigate("/join", { replace: true });
          } else {
            loginDispatch(response.data);
            navigate("/", { replace: true });
          }
        });
      })
      // 로그인 실패시 처리과정
      .catch((error) => {
        // Handle Errors here.
        window.alert("Login에 실패하였습니다");
      });
  };

  useEffect(() => {}, []);

  return <LoginPresenter onLoginButtonClick={onLoginButtonClick} />;
};

export default LoginContainer;
