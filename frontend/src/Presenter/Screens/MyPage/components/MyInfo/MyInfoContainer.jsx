import React, { useEffect, useState } from "react";
import MyInfoPresenter from "./MyInfoPresenter";

const MyInfoContainer = () => {
  const [userInfo, setUserInfo] = useState({
    nickname: window.localStorage.getItem("nickname"),
    age: 25,
    gender: "비공개",
  }); // 사용자의 정보
  const [rows, setRows] = useState([]); // 테이블에 표시되도록 사용자의 정보를 가공한 배열

  const fetchUserInfo = async () => {
    // 서버에 사용자 정보 요청 (수정 예정)
    // await axios
    //   .post(`${process.env.REACT_APP_SERVER_URL}/user`, { idToken: window.localStorage.getItem("idToken") })
    //   .then((response) => setUserInfo(response.data.user))
    //   .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchUserInfo();
    setRows([
      { key: "닉네임", value: userInfo.nickname },
      { key: "성별", value: userInfo.gender },
      { key: "나이", value: userInfo.age },
    ]);
  }, []);

  return <MyInfoPresenter rows={rows} />;
};

export default MyInfoContainer;
