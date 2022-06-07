import React, { useEffect, useState } from "react";
import { fetchSomeClassificationList } from "../../../../../httpRequest";
import ClassficationPresenter from "./ClassificationPresenter";

const ClassficationContainer = ({ secondFilter, page, setMaxPage }) => {
  const [classficationClothList, setClassficationClothList] = useState([]);
  const [nowPageList, setNowPageList] = useState([]);

  useEffect(() => {
    fetchSomeClassificationList({ folder_id: secondFilter }).then((response) => {
      setClassficationClothList(response.data);
      setNowPageList(response.data.slice((page - 1) * 10, page * 10));

      // 마지막 페이지 번호 설정
      setMaxPage(Math.ceil(response.data.length / 10));
    });
  }, [page, secondFilter]);
  return <ClassficationPresenter clothList={nowPageList} />;
};

export default ClassficationContainer;
