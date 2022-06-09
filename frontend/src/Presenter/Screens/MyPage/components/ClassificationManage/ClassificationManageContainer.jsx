import React, { useEffect, useState } from "react";
import { fetchClothFolderList, fetchSomeClassificationList, requestRemoveClothToFolder } from "../../../../../httpRequest";
import ClassificationManagePresenter from "./ClassificationManagePresenter";

const ClassificationManageContainer = () => {
  const [loading, setLoading] = useState(true);
  const [idx, setIdx] = useState(0); // 현재 선택한 탭의 인덱스 - 0: 분류 목록 관리, 1: 분류별 의상 관리
  const [classList, setClassList] = useState([]);
  const [selectedClassId, setSelectedClassId] = useState();
  const [clothList, setClothList] = useState();
  //탭의 인덱스 변경
  const handleTabChange = (event, newValue) => {
    setIdx(newValue);
  };

  //분류 변경시
  const handleChange = (event) => {
    setSelectedClassId(event.target.value);
  };

  //해당 의상을 분류에서 제외하기 버튼눌렀을 때
  const onRemoveClothButtonClick = (clothId) => (e) => {
    requestRemoveClothToFolder({ cloth_id: clothId, folder_id: selectedClassId }).then((response) => {
      fetchSomeClassificationList({ folder_id: selectedClassId }).then((response) => {
        setClothList(response.data);
      });
    });
  };

  const refreshClassList = () => {
    setLoading(true);
    fetchClothFolderList().then((response) => {
      setClassList(response.data);
      if (response.data.length > 0) {
        setSelectedClassId(response.data[0].folder_id);
        fetchSomeClassificationList({ folder_id: response.data[0].folder_id }).then((response) => {
          setClothList(response.data);
          setLoading(false);
        });
      } else {
        setClothList([]);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    refreshClassList();
  }, [idx]);

  useEffect(() => {
    fetchSomeClassificationList({ folder_id: selectedClassId }).then((response) => {
      setClothList(response.data);
    });
  }, [selectedClassId]);

  return (
    <ClassificationManagePresenter
      idx={idx}
      handleTabChange={handleTabChange}
      loading={loading}
      classList={classList}
      handleChange={handleChange}
      selectedClassId={selectedClassId}
      clothList={clothList}
      onRemoveClothButtonClick={onRemoveClothButtonClick}
      refreshClassList={refreshClassList}
    />
  );
};

export default ClassificationManageContainer;
