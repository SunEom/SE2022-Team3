import React, { useState } from "react";
import ClothFormPresenter from "./ClothFormPresenter";

const ClothFormContainer = ({ cloth = null, setMode = null, open, handleClose }) => {
  const [editedName, setEditedName] = useState(cloth?.name);
  const [editedSeason, setEditedSeason] = useState(cloth?.season);
  const [editedSize, setEditedSize] = useState(cloth?.size);
  const [editedBrand, setEditedBrand] = useState(cloth?.brand);
  const [editedFileName, setEditedFileName] = useState(cloth?.file_name);
  const [editedType, setEditedType] = useState(cloth?.type);
  const [editedPlace, setEditedPlace] = useState(cloth?.place);
  const [editedClothBody, setEditedClothBody] = useState(cloth?.cloth_body);
  const [editedFavorite, setEditedFavorite] = useState(cloth?.favorite);
  const [newImgFile, setNewImgFile] = useState(null);

  //onChangeFunction
  const onNameChange = (e) => {
    setEditedName(e.target.value);
  };
  const onBrandChange = (e) => {
    setEditedBrand(e.target.value);
  };
  const onSizeChange = (e) => {
    setEditedSize(e.target.value);
  };
  const onCategoryChange = (e) => {
    setEditedType(e.target.value);
  };
  const onSeasonChange = (e) => {};
  const onClothBodyChange = (e) => {
    setEditedClothBody(e.target.value);
  };
  const onPlaceChange = (e) => {
    setEditedPlace(e.target.value);
  };
  const onImageFileChange = (e) => {
    // 업로드한 파일 미리보기 설정
    setEditedFileName(URL.createObjectURL(e.target.files[0]));

    // 서버로 전송하기 위한 이미지 파일 저장
    setNewImgFile(e.target.files[0]);

    // axios
    //   .post(`${process.env.REACT_APP_SERVER_URL}/mypage/image`, formData, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   })
    //   .then((response) => {
    //     store.dispatch({ type: "LOGIN", user: { ...user, img: response.data.result } });
    //   });
  };

  const onModeToggleButtonClick = () => {
    // 변경한 내용 있는지 확인
    const isSomethingChanged = checkDifference();

    if (isSomethingChanged) {
      const doubleCheck = window.confirm("저장되지 않은 내용이 있습니다.\n저장하지 않고 나가시겠습니까?");
      if (!doubleCheck) {
        return;
      }
    }
    if (setMode) {
      setMode("detail");
    } else {
      handleClose();
    }
    resetEditContents();
  };

  const resetEditContents = () => {
    setEditedName(cloth ? cloth.name : null);
    setEditedSeason(cloth ? cloth.season : null);
    setEditedSize(cloth ? cloth.size : null);
    setEditedBrand(cloth ? cloth.brand : null);
    setEditedFileName(cloth ? cloth.file_name : null);
    setEditedType(cloth ? cloth.type : null);
    setEditedPlace(cloth ? cloth.place : null);
    setEditedClothBody(cloth ? cloth.cloth_body : null);
    setEditedFavorite(cloth ? cloth.favorite : null);
  };

  // 수정하고자 하던 내용이 있는지 확인하는 함수
  const checkDifference = () => {
    if (cloth === null) {
      return editedName || editedBrand || editedSize || editedPlace || editedType || editedSeason || editedClothBody || editedFileName;
    } else {
      const { name, brand, size, place, type, season, cloth_body, file_name } = cloth;

      return (
        name !== editedName ||
        brand !== editedBrand ||
        size !== editedSize ||
        place !== editedPlace ||
        type !== editedType ||
        season !== editedSeason ||
        cloth_body !== editedClothBody ||
        file_name !== editedFileName
      );
    }
  };

  //Modal이 종료될때 작동될 함수
  const closeHandler = () => {
    // 변경한 내용 있는지 확인
    const isSomethingChanged = checkDifference();

    if (isSomethingChanged) {
      const doubleCheck = window.confirm("저장되지 않은 내용이 있습니다.\n저장하지 않고 나가시겠습니까?");
      if (!doubleCheck) {
        return;
      }
    }
    if (setMode) {
      setMode("detail");
    }

    handleClose();
    resetEditContents();
  };

  return (
    <ClothFormPresenter
      open={open}
      handleClose={closeHandler}
      editedName={editedName}
      editedSeason={editedSeason}
      editedSize={editedSize}
      editedBrand={editedBrand}
      editedFileName={editedFileName}
      editedType={editedType}
      editedPlace={editedPlace}
      editedClothBody={editedClothBody}
      editedFavorite={editedFavorite}
      newImgFile={newImgFile}
      onNameChange={onNameChange}
      onBrandChange={onBrandChange}
      onSizeChange={onSizeChange}
      onCategoryChange={onCategoryChange}
      onSeasonChange={onSeasonChange}
      onClothBodyChange={onClothBodyChange}
      onPlaceChange={onPlaceChange}
      onImageFileChange={onImageFileChange}
      onModeToggleButtonClick={onModeToggleButtonClick}
      cloth={cloth}
    />
  );
};

export default ClothFormContainer;
