import React, { useState } from "react";
import { requestAddClothToFolder } from "../../../../../httpRequest";
import ClassificationListItemPresenter from "./ClassificationListItemPresenter";

const ClassificationListItemContainer = ({ classification, cloth, closeHandler }) => {
  const onClassificationClick = () => {
    requestAddClothToFolder({ folder_id: classification.folder_id, cloth_id: cloth.cloth_id }).then(async () => {
      window.alert(`${classification.folder_name}에 추가되었습니다.`);
      closeHandler();
    });
  };

  return <ClassificationListItemPresenter classification={classification} onClassificationClick={onClassificationClick} />;
};

export default ClassificationListItemContainer;
