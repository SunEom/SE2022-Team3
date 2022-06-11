import React, { useEffect, useState } from "react";
import { fetchCategoryList } from "../../../../../httpRequest";
import CategoryPresenter from "./CategoryPresenter";

const CategoryContainer = ({ secondFilter, page, setMaxPage }) => {
  const [categoryClothList, setCategoryClothList] = useState([]);
  const [nowPageList, setNowPageList] = useState([]);
  const [loading, setLoading] = useState(true);

  const refreshClothList = () => {
    setLoading(true);
    fetchCategoryList({ category: secondFilter }).then((response) => {
      setCategoryClothList(response.data);
      setNowPageList(response.data.slice((page - 1) * 10, page * 10));

      // 마지막 페이지 번호 설정
      setMaxPage(Math.ceil(response.data.length / 10));
      setLoading(false);
    });
  };

  useEffect(() => {
    refreshClothList();
  }, [page, secondFilter]);

  return <CategoryPresenter clothList={nowPageList} refreshClothList={refreshClothList} loading={loading} />;
};

export default CategoryContainer;
