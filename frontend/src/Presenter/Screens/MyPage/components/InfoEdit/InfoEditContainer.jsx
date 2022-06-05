import React, { useEffect, useState } from "react";
import { fetchMyData, requestCheckNickname, requestUpdateUserData } from "../../../../../httpRequest";
import { loginDispatch } from "../../../../../reduxAccess";
import InfoEditPresenter from "./InfoEditPresenter";

const InfoEditContainer = () => {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]); // 테이블에 표시되도록 사용자의 정보를 가공한 배열
  const [gender, setGender] = React.useState("비공개");
  const [nickname, setNickname] = useState();
  const [age, setAge] = useState();
  const [isNickChecked, setIsNickChecked] = useState(true);

  // 닉네임 및 성별 변경시 작동하는 함수
  const onChange = (e) => {
    let id = e.target.id;
    var value = e.target.value;
    if (id === "nickname") {
      setNickname(value);
      setIsNickChecked(false);
    } else if (id === "age") {
      if (+value > 100) {
        setAge(100);
      } else if (+value < 0) {
        setAge(0);
      } else {
        setAge(+value);
      }
    }
  };

  // 닉네임 중복확인 버튼 클릭시 작동하는 함수
  const onNicknameCheckButtonClick = () => {
    requestCheckNickname({ nickname }).then((response) => {
      let isAlreadyUsed = response.data;

      if (isAlreadyUsed) {
        window.alert("이미 사용중인 닉네임입니다.\n다른 닉네임을 사용해주세요");
      } else {
        window.alert("사용가능한 닉네임입니다!");
        setIsNickChecked(true);
      }
    });
  };

  // 성별 정보 변경시 작동하는 함수
  const handleChange = (event) => {
    setGender(event.target.value);
  };

  //저장 버튼 클릭시 작동하는 함수
  const onSubmit = () => {
    if (!isNickChecked) {
      window.alert("닉네임 중복확인을 먼저 해주세요!");
      return;
    }
    requestUpdateUserData({ nickname, gender, age }).then((response) => {
      loginDispatch(response.data);
      window.alert("정상적으로 수정되었습니다!");
    });
  };

  useEffect(() => {
    fetchMyData().then((response) => {
      setNickname(response.data.nickname);
      setAge(response.data.age);
      setGender(response.data.gender);
      setRows([
        { key: "닉네임", value: response.data.nickname },
        { key: "성별", value: response.data.gender },
        { key: "나이", value: response.data.age },
      ]);
      setLoading(false);
    });
  }, []);

  return (
    <InfoEditPresenter
      rows={rows}
      gender={gender}
      nickname={nickname}
      age={age}
      handleChange={handleChange}
      onChange={onChange}
      onNicknameCheckButtonClick={onNicknameCheckButtonClick}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
};

export default InfoEditContainer;
