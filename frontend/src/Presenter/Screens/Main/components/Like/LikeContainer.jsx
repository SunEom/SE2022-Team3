import React, { useEffect, useState } from "react";
import { fetchFavList } from "../../../../../httpRequest";
import LikePresenter from "./LikePresenter";

const LikeContainer = ({ page, setMaxPage }) => {
  const [favClothList, setFavClothList] = useState([]);
  const [nowPageList, setNowPageList] = useState([]);

  useEffect(() => {
    fetchFavList().then((r) => {
      setFavClothList(r);
      setNowPageList(r.slice((page - 1) * 10, page * 10));

      // 마지막 페이지 번호 설정
      setMaxPage(Math.ceil(r.length / 10));
    });
  }, [page]);

  return <LikePresenter clothList={nowPageList} />;
};

export default LikeContainer;
