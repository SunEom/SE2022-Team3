import React, { useEffect, useState } from "react";
import { fetchMyData } from "../../../../../httpRequest";
import MyInfoPresenter from "./MyInfoPresenter";

const MyInfoContainer = () => {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]); // 테이블에 표시되도록 사용자의 정보를 가공한 배열

  useEffect(() => {
    fetchMyData().then((result) => {
      setRows([
        { key: "닉네임", value: result.nickname },
        { key: "성별", value: result.gender },
        { key: "나이", value: result.age },
      ]);
      setLoading(false);
    });
  }, []);

  return <MyInfoPresenter rows={rows} loading={loading} />;
};

export default MyInfoContainer;
