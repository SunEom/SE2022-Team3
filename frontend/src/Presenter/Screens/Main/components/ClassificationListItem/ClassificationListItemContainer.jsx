import React, { useState } from "react";
import { requestAddClothToFolder } from "../../../../../httpRequest";
import ClassificationListItemPresenter from "./ClassificationListItemPresenter";

const ClassificationListItemContainer = ({ classification, cloth, closeHandler }) => {
  const errorHandler = (err) => {
    if (err.response.data.message === "이미 분류에 추가 되어 있는 의상입니다!") {
      window.alert(err.response.data.message);
    }
  };

  const onClassificationClick = () => {
    requestAddClothToFolder({ folder_id: classification.folder_id, cloth_id: cloth.cloth_id }, errorHandler)
      .then(async (response) => {
        if (response?.status === 200) {
          window.alert(`${classification.folder_name}에 추가되었습니다.`);
        }
        closeHandler();
      })
      .catch((err) => console.log(err));
  };

  return <ClassificationListItemPresenter classification={classification} onClassificationClick={onClassificationClick} />;
};

export default ClassificationListItemContainer;
