import React, { useEffect, useState } from "react";
import DetailModalPresenter from "./DetailModalPresenter";

const DetailModalContainer = ({ open, handleClose, cloth }) => {
  const [mode, setMode] = useState("detail");

  const [name, setName] = useState(cloth.name);
  const [season, setSeason] = useState(cloth.season);
  const [size, setSize] = useState(cloth.size);
  const [brand, setBrand] = useState(cloth.brand);
  const [fileName, setFileName] = useState(cloth.file_name);
  const [type, setType] = useState(cloth.type);
  const [place, setPlace] = useState(cloth.place);
  const [clothBody, setClothBody] = useState(cloth.cloth_body);
  const [favorite, setFavorite] = useState(cloth.favorite);

  const [editedName, setEditedName] = useState(cloth.name);
  const [editedSeason, setEditedSeason] = useState(cloth.season);
  const [editedSize, setEditedSize] = useState(cloth.size);
  const [editedBrand, setEditedBrand] = useState(cloth.brand);
  const [editedFileName, setEditedFileName] = useState(cloth.file_name);
  const [editedType, setEditedType] = useState(cloth.type);
  const [editedPlace, setEditedPlace] = useState(cloth.place);
  const [editedClothBody, setEditedClothBody] = useState(cloth.cloth_body);
  const [editedFavorite, setEditedFavorite] = useState(cloth.favorite);
  const [newImgFile, setNewImgFile] = useState(null);

  //분류 버튼을 위한 Property
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [classificationList, setClassificationList] = useState(["제주도 여행", "여름 휴가", "미국 여행"]);
  const [newClassification, setNewClassification] = useState("");
  const onClassificationAddButtonClick = () => {
    if (newClassification === "") {
      window.alert("분류 이름을 입력해주세요");
      return;
    }

    if (classificationList.includes(newClassification)) {
      window.alert("이미 존재하는 분류 이름입니다!");
      return;
    }

    //서버에 분류 추가 요청 (구현 예정)
    setClassificationList((current) => [...current, newClassification]);
    setNewClassification("");
  };
  const onNewClassificationInputChange = (e) => {
    setNewClassification(e.target.value);
  };

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
    console.log(e.target.value);
    setEditedType(e.target.value);
  };
  const onSeasonChange = (e) => {
    setEditedName(e.target.value);
  };
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

  const onLikeButtonClick = () => {
    //서버에 요청하는 코드가 들어갈 부분 (구현예정)

    setFavorite((current) => !current);
  };

  // 상세보기-수정 화면 토글 버튼
  const onModeToggleButtonClick = () => {
    if (mode === "detail") {
      setMode("edit");
    } else {
      // 변경한 내용 있는지 확인
      const isSomethingEdited = checkDifference();

      if (isSomethingEdited) {
        const doubleCheck = window.confirm("변경되지 않은 내용이 있습니다.\n저장하지 않고 나가시겠습니까?");
        if (!doubleCheck) {
          return;
        }
      }
      setMode("detail");
    }
  };

  //Modal이 종료될때 작동될 함수
  const closeHandler = () => {
    // 변경한 내용 있는지 확인
    const isSomethingEdited = checkDifference();

    if (isSomethingEdited) {
      const doubleCheck = window.confirm("변경되지 않은 내용이 있습니다.\n저장하지 않고 나가시겠습니까?");
      if (!doubleCheck) {
        return;
      }
    }
    setMode("detail");
    resetEditContents();
    handleClose();
  };

  const resetDetailContents = () => {
    setName(cloth.name);
    setSeason(cloth.season);
    setSize(cloth.size);
    setBrand(cloth.brand);
    setFileName(cloth.file_name);
    setType(cloth.type);
    setPlace(cloth.place);
    setClothBody(cloth.cloth_body);
    setFavorite(cloth.favorite);
  };

  const resetEditContents = () => {
    setEditedName(cloth.name);
    setEditedSeason(cloth.season);
    setEditedSize(cloth.size);
    setEditedBrand(cloth.brand);
    setEditedFileName(cloth.file_name);
    setEditedType(cloth.type);
    setEditedPlace(cloth.place);
    setEditedClothBody(cloth.cloth_body);
    setEditedFavorite(cloth.favorite);
  };

  // 수정하고자 하던 내용이 있는지 확인하는 함수
  const checkDifference = () => {
    return (
      name !== editedName ||
      brand !== editedBrand ||
      size !== editedSize ||
      place !== editedPlace ||
      type !== editedType ||
      season !== editedSeason ||
      clothBody !== editedClothBody ||
      fileName !== editedFileName
    );
  };

  const onDeleteButtonClick = () => {
    const doubleCheck = window.confirm("정말로 삭제하시겠습니까?");

    if (doubleCheck) {
      //서버에 의상 삭제 요청 보낼 부분 (구현예정)

      window.alert("삭제되었습니다!");
      handleClose();
    }
  };

  useEffect(() => {
    // 다음 페이지로 넘어갔을 때 Modal의 내용이 변경되지 않는 것을 방지하기 위한 코드
    resetDetailContents();
    resetEditContents();
  }, [cloth]);

  return (
    <DetailModalPresenter
      open={open}
      handleClose={closeHandler}
      cloth={cloth}
      name={name}
      season={season}
      brand={brand}
      fileName={fileName}
      type={type}
      place={place}
      clothBody={clothBody}
      favorite={favorite}
      size={size}
      onDeleteButtonClick={onDeleteButtonClick}
      editedName={editedName}
      editedSeason={editedSeason}
      editedSize={editedSize}
      editedBrand={editedBrand}
      editedFileName={editedFileName}
      editedType={editedType}
      editedPlace={editedPlace}
      editedClothBody={editedClothBody}
      editedFavorite={editedFavorite}
      mode={mode}
      onModeToggleButtonClick={onModeToggleButtonClick}
      onNameChange={onNameChange}
      onBrandChange={onBrandChange}
      onSizeChange={onSizeChange}
      onCategoryChange={onCategoryChange}
      onSeasonChange={onSeasonChange}
      onClothBodyChange={onClothBodyChange}
      onPlaceChange={onPlaceChange}
      onImageFileChange={onImageFileChange}
      onLikeButtonClick={onLikeButtonClick}
      anchorEl={anchorEl}
      openMenu={openMenu}
      handleClick={handleClick}
      handleMenuClose={handleMenuClose}
      onClassificationAddButtonClick={onClassificationAddButtonClick}
      onNewClassificationInputChange={onNewClassificationInputChange}
      newClassification={newClassification}
      classificationList={classificationList}
    />
  );
};

export default DetailModalContainer;
