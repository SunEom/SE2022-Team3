import React, { useEffect, useState } from "react";
import ClothFormPresenter from "./ClothFormPresenter";

const ClothFormContainer = ({ cloth = null, onModeToggleButtonClick = null, open, handleClose }) => {
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState(); // new: 의상 추가 , edit : 의상 수정
  const [name, setName] = useState(null);
  const [season, setSeason] = useState(null);
  const [size, setSize] = useState(null);
  const [brand, setBrand] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [category, setCategory] = useState(null);
  const [place, setPlace] = useState(null);
  const [clothBody, setClothBody] = useState(null);
  const [favorite, setFavorite] = useState(null);
  const [newImgFile, setNewImgFile] = useState(null);

  //onChangeFunction
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onBrandChange = (e) => {
    setBrand(e.target.value);
  };
  const onSizeChange = (e) => {
    setSize(e.target.value);
  };
  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const onSeasonChange = (e) => {
    const checkBoxes = document.getElementsByName("seasonCheckBox");

    // 계절 입력 값 포멧팅
    var temp = "";
    checkBoxes.forEach((c) => {
      if (c.checked) {
        temp += c.value;
        temp += ", ";
      }
    });
    temp = temp.slice(0, temp.length - 2);

    setSeason(temp);
  };
  const onClothBodyChange = (e) => {
    setClothBody(e.target.value);
  };
  const onPlaceChange = (e) => {
    setPlace(e.target.value);
  };

  const onImageFileChange = (e) => {
    // 업로드한 파일 미리보기 설정
    setFileName(URL.createObjectURL(e.target.files[0]));

    // 서버로 전송하기 위한 이미지 파일 저장
    setNewImgFile(e.target.files[0]);
  };

  const resetEditContents = () => {
    if (mode === "new") {
      setName(null);
      setSeason(null);
      setSize(null);
      setBrand(null);
      setFileName(null);
      setCategory(null);
      setPlace(null);
      setClothBody(null);
      setFavorite(null);
    } else if (mode === "edit") {
      setName(cloth.name);
      setSeason(cloth.season);
      setSize(cloth.size);
      setBrand(cloth.brand);
      setFileName(cloth.file_name);
      setCategory(cloth.genre);
      setPlace(cloth.place);
      setClothBody(cloth.cloth_body);
      setFavorite(cloth.favorite);
    }
  };

  // 수정하고자 하던 내용이 있는지 확인하는 함수
  const checkDifference = () => {
    if (mode === "new") {
      return name || brand || size || place || category || season || clothBody || fileName;
    } else if (mode === "edit") {
      return (
        cloth.name !== name ||
        cloth.brand !== brand ||
        cloth.size !== size ||
        cloth.place !== place ||
        cloth.category !== category ||
        cloth.season !== season ||
        cloth.cloth_body !== clothBody ||
        cloth.file_name !== fileName
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
    if (mode === "new") {
      handleClose();
    } else if (mode === "edit") {
      onModeToggleButtonClick();
    }
    resetEditContents();
  };

  useEffect(() => {
    // 의상 추가 화면
    if (cloth === null) {
      setMode("new");
    }
    // 의상 수정 화면
    else {
      setMode("edit");
      //입력 값 초기화
      setName(cloth.name);
      setSeason(cloth.season);
      setSize(cloth.size);
      setBrand(cloth.brand);
      setFileName(cloth.file_name);
      setCategory(cloth.category);
      setPlace(cloth.place);
      setClothBody(cloth.cloth_body);
      setFavorite(cloth.favorite);
    }

    setLoading(false);
  }, [open]);

  return (
    <ClothFormPresenter
      open={open}
      handleClose={closeHandler}
      name={name}
      season={season}
      size={size}
      brand={brand}
      fileName={fileName}
      category={category}
      place={place}
      clothBody={clothBody}
      favorite={favorite}
      newImgFile={newImgFile}
      onNameChange={onNameChange}
      onBrandChange={onBrandChange}
      onSizeChange={onSizeChange}
      onCategoryChange={onCategoryChange}
      onSeasonChange={onSeasonChange}
      onClothBodyChange={onClothBodyChange}
      onPlaceChange={onPlaceChange}
      onImageFileChange={onImageFileChange}
      cloth={cloth}
      loading={loading}
    />
  );
};

export default ClothFormContainer;
