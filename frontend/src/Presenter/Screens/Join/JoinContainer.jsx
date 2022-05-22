import React, { useState, useEffect } from "react";
import JoinPresenter from "./JoinPresenter";
import store from "../../../store";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import { useHistory } from 'react-router-dom';

const JoinContainer = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState();
  const [isNicknamePassed, setIsNicknamePassed] = useState(false);
  const [age, setAge] = useState();
  const [gender, setGender] = React.useState("NONE");

  const props = { nickname, age, gender };

  useEffect(() => {
    if (store.getState("user").user !== null) {
      //history.push({pathname: "/"});
    }
  }, []);

  const onChange = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "nickname":
        setNickname(e.target.value);
        setIsNicknamePassed(false);
        //console.log(nickname);
        break;
      case "age":
        setAge(e.target.value);
        //console.log(age);
        break;
      case "gender":
        setGender(e.target.value);
        //console.log(gender);
        break;
    }
  };

  const onSubmitNicknameCheck = () => {
    if (nickname === "") {
      return window.alert("닉네임을 입력해주세요");
    }
    /*     axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}`,
        { nickname },
        { withCredentials: true }
      )
      .then((response) => {
        checkNicknameAvailable(response);
      }); */
  };

  /*   const checkNicknameAvailable = (already) => {
    if (already) {
      window.alert("이미 사용중인 닉네임입니다.");
    } else {
      setIsNicknamePassed(true);
      window.alert("사용 가능한 닉네임입니다.");
    }
  }; */

  const onSubmitJoinButton = () => {
    navigate("/", { replace: true });

    // 입력 값 검증
    // if (nickname === "") {
    //   return window.alert("닉네임을 입력해주세요");
    // }
    // if (age === "") {
    //   return window.alert("나이를 입력해주세요");
    // }
    /*     if (isNicknamePassed === false) {
      return window.alert("닉네임 중복 확인을 해주세요.");
    }

    if (isNicknamePassed) {
      axios
        .post(
          `${process.env.REACT_APP_SERVER_URL}/register`,
          { nickname, age, gender },
          { withCredentials: true }
        )
        .then((response) => {
          console.log(response);
          window.alert("회원가입이 완료되었습니다");
          history.push("/");
        });
    } */
  };

  return (
    <JoinPresenter onChange={onChange} onSubmitJoinButton={onSubmitJoinButton} onSubmitNicknameCheck={onSubmitNicknameCheck} {...props} />
  );
};

export default JoinContainer;
