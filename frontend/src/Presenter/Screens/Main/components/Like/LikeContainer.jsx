import React, { useEffect, useState } from "react";
import { fetchFavList } from "../../../../../httpRequest";
import LikePresenter from "./LikePresenter";

const LikeContainer = ({ page, setMaxPage }) => {
  const [favClothList, setFavClothList] = useState([]);
  const [nowPageList, setNowPageList] = useState([]);
  const [loading, setLoading] = useState([]);

  const refreshClothList = () => {
    setLoading(true);
    fetchFavList().then((response) => {
      setFavClothList(response.data);
      setNowPageList(response.data.slice((page - 1) * 10, page * 10));

      // 마지막 페이지 번호 설정
      setMaxPage(Math.ceil(response.data.length / 10));
      setLoading(false);
    });
  };

  useEffect(() => {
    refreshClothList();
  }, [page]);

  return <LikePresenter clothList={nowPageList} refreshClothList={refreshClothList} loading={loading} />;
};

export default LikeContainer;
