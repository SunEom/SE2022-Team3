import React, { useEffect, useState } from "react";
import { fetchClothList } from "../../../../../httpRequest";
import TotalPresenter from "./TotalPresenter";

const TotalContainer = ({ page, setMaxPage }) => {
  const [clothList, setClothList] = useState([]); // 전체 의상 리스트
  const [nowPageList, setNowPageList] = useState([]); // 현재 보여지고 있는 페이지 리스트

  const refreshClothList = () => {
    fetchClothList().then((response) => {
      setClothList(response.data);
      setNowPageList(response.data.slice((page - 1) * 10, page * 10));

      // 마지막 페이지 번호 설정
      setMaxPage(Math.ceil(response.data.length / 10));
    });
  };
  useEffect(() => {
    refreshClothList();
  }, [page]);

  return <TotalPresenter clothList={nowPageList} refreshClothList={refreshClothList} />;
};

export default TotalContainer;
