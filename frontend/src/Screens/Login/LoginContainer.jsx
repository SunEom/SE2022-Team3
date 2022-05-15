import React from "react";
import LoginPresenter from "./LoginPresenter";
import { authService } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  let authProvider = new GoogleAuthProvider();
  let navigate = useNavigate();

  const onLoginButtonClick = (e) => {
    e.preventDefault();

    const provider = e.target.id;

    if (provider === "google") {
      signInWithPopup(authService, authProvider)
        //로그인 성공
        .then((result) => {
          let idToken = result._tokenResponse.idToken;
          // IdToken을 localStorage에 저장
          window.localStorage.setItem("idToken", idToken);
          console.log(idToken);

          /* 서버와 통신하는 부분을 우선 주석처리 해놓았습니다.
            
            // 로그인을 위해 IdToken을 서버에 전달
            axios
              .post("http://127.0.0.1:8000/login", { idToken })
              .then((response) => {
                // response.data로 유저정보를 전달받음
                // 전달받은 유저정보를 state에 저장
                setUser(response.data);
              })
              // 로그인 실패
              .catch((error) => console.error(error));
          */

          // 메인 화면으로 이동
          navigate("/", { replace: true });
        })
        // 로그인 실패시 처리과정
        .catch((error) => {
          // Handle Errors here.
          window.alert("Login에 실패하였습니다");
        });
    }
  };

  return <LoginPresenter onLoginButtonClick={onLoginButtonClick} />;
};

export default LoginContainer;
