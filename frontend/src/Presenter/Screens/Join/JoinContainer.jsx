import React, { useState, useEffect } from "react";
import JoinPresenter from "./JoinPresenter";
import store from "../../../store";
import { useNavigate } from "react-router-dom";
import { requestCheckNickname, requestJoin } from "../../../httpRequest";
import { loginDispatch } from "../../../reduxAccess";
//import { useHistory } from 'react-router-dom';

const JoinContainer = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState();
  const [isNicknamePassed, setIsNicknamePassed] = useState(false);
  const [age, setAge] = useState();
  const [gender, setGender] = React.useState("비공개");

  useEffect(() => {}, []);

  const onChange = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "nickname":
        setNickname(e.target.value);
        setIsNicknamePassed(false);
        break;
      case "age":
        setAge(e.target.value);
        break;
      case "gender":
        setGender(e.target.value);
        break;
      default:
        break;
    }
  };

  const onSubmitNicknameCheck = () => {
    if (nickname === "") {
      return window.alert("닉네임을 입력해주세요");
    }

    requestCheckNickname({ nickname }).then((response) => {
      let isAlreadyUsed = response.data;

      if (isAlreadyUsed) {
        window.alert("이미 사용중인 닉네임입니다");
      } else {
        setIsNicknamePassed(true);
        window.alert("사용 가능한 닉네임입니다.");
      }
    });
  };

  const onSubmitJoinButton = () => {
    //입력 값 검증
    if (!nickname) {
      return window.alert("닉네임을 입력해주세요");
    }
    if (isNicknamePassed === false) {
      return window.alert("닉네임 중복 확인을 해주세요.");
    }
    if (!age) {
      return window.alert("나이를 입력해주세요");
    }

    requestJoin({ nickname, age, gender }).then((response) => {
      window.alert("정상적으로 회원가입 되었습니다!");
      loginDispatch(response.data);
      navigate("/", { replace: true });
    });
  };

  return (
    <JoinPresenter
      onChange={onChange}
      onSubmitJoinButton={onSubmitJoinButton}
      onSubmitNicknameCheck={onSubmitNicknameCheck}
      nickname={nickname}
      age={age}
      gender={gender}
    />
  );
};

export default JoinContainer;
