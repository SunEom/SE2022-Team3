import React, { useEffect, useState } from "react";
import { fetchSeasonList } from "../../../../../httpRequest";
import SeasonPresenter from "./SeasonPresenter";

const SeasonContainer = ({ secondFilter, page, setMaxPage }) => {
  const [seasonClothList, setSeasonClothList] = useState([]);
  const [nowPageList, setNowPageList] = useState([]);
  const [loading, setLoading] = useState(true);

  const refreshClothList = () => {
    setLoading(true);
    fetchSeasonList({ season: secondFilter }).then((response) => {
      setSeasonClothList(response.data);
      setNowPageList(response.data.slice((page - 1) * 10, page * 10));

      // 마지막 페이지 번호 설정
      setMaxPage(Math.ceil(response.data.length / 10));
      setLoading(false);
    });
  };
  useEffect(() => {
    refreshClothList();
  }, [page, secondFilter]);

  return <SeasonPresenter clothList={nowPageList} refreshClothList={refreshClothList} loading={loading} />;
};

export default SeasonContainer;
