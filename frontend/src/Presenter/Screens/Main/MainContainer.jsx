import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainPresenter from "./MainPresenter";
import { accessControl, isLogin } from "../../../util";

const MainContainer = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [filterIdx, setFilterIdx] = useState(0); // 현재 선택된 필터의 index : 전체(0) 계절별(1) 카테고리별(2)
  const [secondFilter, setSecondFilter] = useState(); // 봄,여름,가을,겨울 또는 상의, 하의 ...
  const [page, setPage] = useState(1); // 현재 보고있는 페이지
  const [maxPage, setMaxPage] = useState(1); // 마지막 페이지가 몇번째 페이지인가.

  //전체, 계절별, 카테고리별 버튼 선택시
  const onFilterButtonClick = (idx) => () => {
    setFilterIdx(idx);
    if (idx === 1) {
      // 계절별 화면 이동시
      setSecondFilter("봄");
    } else if (idx === 2) {
      // 카테고리별 화면 이동시
      setSecondFilter("상의");
    }
    setPage(1);
    setMaxPage(1);
  };

  // 본,여름,가을,겨울 또는 상의,하의... 선택시
  const onSecondFilterChange = (e) => {
    setSecondFilter(e.target.value);
    setPage(1);
    setMaxPage(1);
  };

  // 페이지 버튼 클릭시
  const onPageChange = (e, page) => {
    setPage(+page);
  };

  useEffect(() => {
    accessControl(true);
    setLoading(false);
  }, []);

  return (
    <MainPresenter
      filterIdx={filterIdx}
      onFilterButtonClick={onFilterButtonClick}
      onSecondFilterChange={onSecondFilterChange}
      secondFilter={secondFilter}
      onPageChange={onPageChange}
      page={page}
      setMaxPage={setMaxPage}
      maxPage={maxPage}
      loading={loading}
    />
  );
};

export default MainContainer;
