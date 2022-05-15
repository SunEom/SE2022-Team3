import React, { useEffect } from "react";
import LoginPresenter from "./LoginPresenter";
import { authService } from "../../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getIdToken } from "./LoginMethod";
import { useNavigate } from "react-router-dom";
import store from "../../../store";

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
        window.localStorage.setItem("idToken", idToken);

        // Google 닉네임 가져오기 (추후 삭제예정)
        window.localStorage.setItem("nickname", result.user.displayName);

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

        // 임시 사용자 정보로 로그인처리
        store.dispatch({ type: "LOGIN", user: { nickname: result.user.displayName } });

        // 메인 화면으로 이동
        navigate("/", { replace: true });
      })
      // 로그인 실패시 처리과정
      .catch((error) => {
        // Handle Errors here.
        window.alert("Login에 실패하였습니다");
      });
  };

  useEffect(() => {
    let idToken = getIdToken();

    if (idToken) {
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

      // 임시 사용자 정보로 로그인처리
      store.dispatch({ type: "LOGIN", user: { nickname: window.localStorage.getItem("nickname") } });
      // 메인 화면으로 이동
      navigate("/", { replace: true });
    }
  }, []);

  return <LoginPresenter onLoginButtonClick={onLoginButtonClick} />;
};

export default LoginContainer;
