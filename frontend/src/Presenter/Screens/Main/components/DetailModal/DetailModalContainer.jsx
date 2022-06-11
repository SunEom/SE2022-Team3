import React, { useEffect, useState } from "react";
import {
  fetchClothDetail,
  fetchClothFolderList,
  requestChangeClothFavState,
  requestDeleteCloth,
  requestNewClothFolder,
} from "../../../../../httpRequest";
import DetailModalPresenter from "./DetailModalPresenter";

const DetailModalContainer = ({ open, handleClose, cloth, configurePresentData, refreshClothList }) => {
  const [loading, setLoading] = useState(true);
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
  const [clothData, setClothData] = useState(cloth);

  const [classificationList, setClassificationList] = useState();
  const [newClassification, setNewClassification] = useState("");

  //분류 버튼을 위한 Property
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    fetchClothFolderList().then((response) => {
      setClassificationList(response.data);
      setLoading(false);
    });
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const onClassificationAddButtonClick = () => {
    if (newClassification === "") {
      return window.alert("분류명을 입력해주세요");
    }

    for (var item of classificationList) {
      if (item.folder_name === newClassification) {
        return window.alert("이미 사용중인 분류명 입니다.");
      }
    }

    requestNewClothFolder({ folder_name: newClassification }).then((response) => {
      setClassificationList((current) => [...current, response.data]);
    });

    setNewClassification("");
  };

  const onNewClassificationInputChange = (e) => {
    setNewClassification(e.target.value);
  };

  //좋아요버튼 클릭시
  const onLikeButtonClick = () => {
    requestChangeClothFavState({ cloth_id: cloth.cloth_id, favorite }).then((response) => {
      setFavorite(response.data.favorite);

      //팝업 밖의 의상 목록에서도 좋아요가 반영되도록 설정
      configurePresentData({ ...cloth, favorite: response.data.favorite });
    });

    setFavorite((current) => !current);
  };

  // 상세보기-수정 화면 토글 버튼
  const onModeToggleButtonClick = () => {
    if (mode === "detail") {
      setMode("edit");
    } else if (mode === "edit") {
      setMode("detail");
    }
  };

  //의상 수정 이후 변경사항을 상세화면에 반영하기 위한 메서드
  const refreshClothDetail = () => {
    fetchClothDetail({ cloth_id: cloth.cloth_id }).then((response) => {
      configureClothDetail(response.data);
    });
    refreshClothList();
  };

  const configureClothDetail = (clothData) => {
    setName(clothData.name);
    setSeason(clothData.season);
    setSize(clothData.size);
    setBrand(clothData.brand);
    setFileName(clothData.file_name);
    setType(clothData.type);
    setPlace(clothData.place);
    setClothBody(clothData.cloth_body);
    setFavorite(clothData.favorite);
    setClothData(clothData);
  };

  const onDeleteButtonClick = () => {
    const doubleCheck = window.confirm("정말로 삭제하시겠습니까?");

    if (doubleCheck) {
      requestDeleteCloth({ cloth_id: cloth.cloth_id }).then((response) => {
        window.alert("삭제되었습니다!");
        handleClose();
        window.location.reload();
      });
    }
  };

  useEffect(() => {
    // 다음 페이지로 넘어갔을 때 Modal의 내용이 변경되지 않는 것을 방지하기 위한 코드
    fetchClothFolderList().then((response) => {
      setClassificationList(response.data);
      configureClothDetail(cloth);
      setLoading(false);
    });
  }, [cloth]);

  return (
    <DetailModalPresenter
      open={open}
      handleClose={handleClose}
      cloth={clothData}
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
      mode={mode}
      onModeToggleButtonClick={onModeToggleButtonClick}
      onLikeButtonClick={onLikeButtonClick}
      anchorEl={anchorEl}
      openMenu={openMenu}
      handleClick={handleClick}
      handleMenuClose={handleMenuClose}
      onClassificationAddButtonClick={onClassificationAddButtonClick}
      onNewClassificationInputChange={onNewClassificationInputChange}
      newClassification={newClassification}
      classificationList={classificationList}
      setClassificationList={setClassificationList}
      loading={loading}
      refreshClothDetail={refreshClothDetail}
    />
  );
};

export default DetailModalContainer;
