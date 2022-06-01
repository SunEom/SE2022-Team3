import React, { useEffect, useState } from "react";
import { fetchCategoryList } from "../../../../../httpRequest";
import CategoryPresenter from "./CategoryPresenter";

const CategoryContainer = ({ secondFilter, page, setMaxPage }) => {
  const [categoryClothList, setCategoryClothList] = useState([]);
  const [nowPageList, setNowPageList] = useState([]);

  useEffect(() => {
    fetchCategoryList(secondFilter).then((r) => {
      setCategoryClothList(r);
      setNowPageList(r.slice((page - 1) * 10, page * 10));

      // 마지막 페이지 번호 설정
      setMaxPage(Math.ceil(r.length / 10));
    });
  }, [page, secondFilter]);

  return <CategoryPresenter clothList={nowPageList} />;
};

export default CategoryContainer;

// const SeasonContainer = ({ secondFilterIdx, page, setMaxPage }) => {
//   const [seasonClothList, setSeasonClothList] = useState([]);
//   const [nowPageList, setNowPageList] = useState([]);
//   const secondFilterList = ["봄", "여름", "가을", "겨울"];

//   useEffect(() => {
//     fetchSeasonList(secondFilterList[secondFilterIdx]).then((r) => {
//       setSeasonClothList(r);
//       setNowPageList(r.slice((page - 1) * 10, page * 10));

//       // 마지막 페이지 번호 설정
//       setMaxPage(Math.ceil(r.length / 10));
//     });
//   }, [page, secondFilterIdx]);

//   return <SeasonPresenter clothList={nowPageList} />;
// };
