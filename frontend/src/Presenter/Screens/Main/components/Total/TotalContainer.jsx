import React, { useEffect, useState } from "react";
import { fetchClothList } from "../../../../../httpRequest";
import TotalPresenter from "./TotalPresenter";

const TotalContainer = ({ page, setMaxPage }) => {
  const [clothList, setClothList] = useState([]); // 전체 의상 리스트
  const [nowPageList, setNowPageList] = useState([]); // 현재 보여지고 있는 페이지 리스트
  const [loading, setLoading] = useState(true);

  const refreshClothList = () => {
    setLoading(true);
    fetchClothList().then((response) => {
      setClothList(response.data);
      setNowPageList(response.data.slice((page - 1) * 10, page * 10));

      // 마지막 페이지 번호 설정
      setMaxPage(Math.ceil(response.data.length / 10));
      setLoading(false);
    });
  };
  useEffect(() => {
    refreshClothList();
  }, [page]);

  return <TotalPresenter clothList={nowPageList} refreshClothList={refreshClothList} loading={loading} />;
};

export default TotalContainer;
