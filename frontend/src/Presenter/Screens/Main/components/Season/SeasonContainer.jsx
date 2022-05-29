import React, { useEffect, useState } from "react";
import { fetchSeasonList } from "../../../../../httpRequest";
import SeasonPresenter from "./SeasonPresenter";

const SeasonContainer = ({ secondFilter, page, setMaxPage }) => {
  const [seasonClothList, setSeasonClothList] = useState([]);
  const [nowPageList, setNowPageList] = useState([]);

  useEffect(() => {
    fetchSeasonList(secondFilter).then((r) => {
      setSeasonClothList(r);
      setNowPageList(r.slice((page - 1) * 10, page * 10));

      // 마지막 페이지 번호 설정
      setMaxPage(Math.ceil(r.length / 10));
    });
  }, [page, secondFilter]);

  return <SeasonPresenter clothList={nowPageList} />;
};

export default SeasonContainer;
