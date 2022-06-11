import { getIdToken, removeIdToken } from "./localStorageAccess";
import axios from "axios";
import { logoutDispatch } from "./reduxAccess";

const axiosPostRequest = async (url, data = {}, headerOption = null, errorHandler = null) => {
  let idToken = getIdToken();

  return await axios.post(`${process.env.REACT_APP_SERVER_URL}${url}`, { ...data, idToken }, { headers: headerOption }).catch((err) => {
    if (err?.response?.data?.message === "EXPIRED_ID_TOKEN") {
      window.alert("사용자 세션이 만료되었습니다.\n다시 로그인해주세요.");
      logoutDispatch();
      removeIdToken();
      window.location.replace("/login");
    } else if (err?.response?.data?.message === "INVALID_ID_TOKEN") {
      window.alert("잘못된 사용자 정보입니다.\n다시 로그인해주세요.");
      logoutDispatch();
      removeIdToken();
      window.location.replace("/login");
    }
    errorHandler(err);
    return err;
  });
};

const axiosGetRequest = async (url) => {
  return await axios.get(`${process.env.REACT_APP_SERVER_URL}${url}`);
};

const axiosMultiPartRequeset = async (url, dataName, data = {}, img) => {
  let idToken = getIdToken();

  let formData = new FormData();
  formData.append("img", img);
  formData.append(dataName, new Blob([JSON.stringify({ ...data, idToken })], { type: "application/json" }));

  return await axios
    .post(`${process.env.REACT_APP_SERVER_URL}${url}`, formData, { headers: { "Content-Type": "multipart/form-data" } })
    .catch((err) => {
      if (err?.response?.data?.message === "EXPIRED_ID_TOKEN") {
        window.alert("사용자 세션이 만료되었습니다.\n다시 로그인해주세요.");
        logoutDispatch();
        removeIdToken();
        window.location.replace("/login");
      } else if (err?.response?.data?.message === "INVALID_ID_TOKEN") {
        window.alert("잘못된 사용자 정보입니다.\n다시 로그인해주세요.");
        logoutDispatch();
        removeIdToken();
        window.location.replace("/login");
      }
    });
};

//Router

//특정 idToken에 해당하는 사용자 정보 요청
export const fetchUserData = async () => {
  return axiosPostRequest("/user/userinfo");
};

//Join

//새로운 사용자 회원가입 요청
export const requestJoin = (userData) => {
  return axiosPostRequest("/user/register", userData);
};

//닉네임 중복확인 요청
export const requestCheckNickname = (nickname) => {
  return axiosPostRequest("/user/check_nickname", nickname);
};

//Main Page (의상 조회)

// 전체 의상 목록 요청
export const fetchClothList = async () => {
  return axiosPostRequest("/cloth");
};

// 특정 계절의 의상 목록 요청
export const fetchSeasonList = async (season) => {
  return axiosPostRequest("/cloth/season", season);
};

// 좋아요 누른 의상 목록 요청
export const fetchFavList = async () => {
  return axiosPostRequest("/cloth/favorite");
};

// 특정 카테고리 의상 목록 요청
export const fetchCategoryList = async (category) => {
  return axiosPostRequest("/cloth/category", category);
};

//특정 분류의 의상 목록 요청
export const fetchSomeClassificationList = async (data) => {
  return axiosPostRequest("/cloth/folder/detail", data);
};

//의상을 해당 의상 목록에서 제거 요청
export const requestClothFromClassificationList = async (data) => {
  return axiosPostRequest("/cloth/folder/remove", data);
};

//의상 분류명 수정 요청
export const requestUpdateFolderName = async (data) => {
  return axiosPostRequest("/cloth/folder/update", data);
};

//특정 분류 삭제 요청
export const requestDeleteClassification = async (data) => {
  return axiosPostRequest("/cloth/folder/delete", data);
};

//새로운 의상 추가 요청
export const requestNewCloth = (clothData, img) => {
  return axiosMultiPartRequeset("/cloth/create", "createClothReq", clothData, img);
};

//의상 정보 수정 요청
export const requestUpdateCloth = (clothData, img) => {
  return axiosMultiPartRequeset("/cloth/update", "updateClothReq", clothData, img);
};

//의상 정보 삭제 요청
export const requestDeleteCloth = (clothData) => {
  return axiosPostRequest("/cloth/delete", clothData);
};

// 특정 의상 상세정보 요청
export const fetchClothDetail = (clothData) => {
  return axiosGetRequest(`/cloth/${clothData.cloth_id}`);
};

//의상 좋아요 설정 및 해제 요청
export const requestChangeClothFavState = (clothData) => {
  return axiosPostRequest("/cloth/change_favorite", clothData);
};

//의상 분류 폴더 생성
export const requestNewClothFolder = (folderData) => {
  return axiosPostRequest("/cloth/folder/create", folderData);
};

//의상 분류 폴더 조회
export const fetchClothFolderList = () => {
  return axiosPostRequest("/cloth/folder");
};

//의상 분류 폴더 수정
export const requesUpdateClothFolder = (folderData) => {
  return axiosPostRequest("/cloth/folder/update", folderData);
};

//의상 분류 폴더 삭제
export const requestDeleteClothFolder = (folderData) => {
  return axiosPostRequest("/cloth/folder/delete", folderData);
};

// 특정 분류 폴더에 의상 추가
export const requestAddClothToFolder = (clothFolderData, errorHandler) => {
  return axiosPostRequest("/cloth/folder/insert", clothFolderData, null, errorHandler).then((response) => response);
};

// 특정 의상 분류 폴더의 의상 조회
export const fetchFolderClothList = (folderData) => {
  return axiosPostRequest("/cloth/folder/Detail", folderData);
};

// 특정 분류 폴더에 의상 삭제
export const requestRemoveClothToFolder = (clothFolderData) => {
  return axiosPostRequest("/cloth/folder/remove", clothFolderData);
};

// 계절별 의상 추천 요청
export const fetchSeasonalRecommnend = () => {
  return axiosGetRequest("/recommend/season");
};

// 카테고리별 의상 추천 요청
export const fetchCategoricalRecommnend = () => {
  return axiosPostRequest("/recommend/category");
};

//Board

// 특정 카테고리의 게시글 목록 요청
export const fetchPostings = async (data) => {
  return axiosGetRequest(`/post/${data.genre}`);
};

// 새로운 게시글 생성 요청
export const requestNewPosting = async (postData, img) => {
  return axiosMultiPartRequeset("/post/create", "createPostReq", postData, img);
};

// 게시글 수정 요청
export const requestUpdatePosting = async (postData, img) => {
  return axiosMultiPartRequeset("/post/update", "updatePostReq", postData, img);
};

// 게시글 삭제 요청
export const requestDeletePosting = async (postData) => {
  return axiosPostRequest("/post/delete", postData);
};

// 게시글 상세 내용 조회
export const fetchPostDetail = async (postData) => {
  return axiosPostRequest(`/post/${postData.post_id}`);
};

// 게시글 좋아요 상태 변경 요청
export const requestChangePostFavState = async (postData) => {
  return axiosPostRequest("/post/change_favorite", postData);
};

// 새로운 댓글 추가 요청
export const requestNewComment = async (commentData) => {
  return axiosPostRequest("/comment/create", commentData);
};

// 댓글 수정 요청
export const requestUpdateComment = async (commentData) => {
  return axiosPostRequest("/comment/update", commentData);
};

// 댓글 삭제 요청
export const requestDeleteComment = async (commentData) => {
  return axiosPostRequest("/comment/delete", commentData);
};

// 댓글 목록 요청
export const fetchComments = async (postData) => {
  return axiosGetRequest(`/comment/${postData.post_id}`);
};

//MyPage

// 사용자 정보 요청
export const fetchMyData = async () => {
  return axiosPostRequest("/user/userinfo");
};

//사용자의 정보를 수정하도록 요청
export const requestUpdateUserData = async (userData) => {
  return axiosPostRequest("/user/update", userData);
};

//사용자의 정보를 삭제하도록 요청
export const requestDeleteUserData = async () => {
  return axiosPostRequest("/user/signout");
};

// 본인이 작성한 글 목록 조회
export const fetchMyPosting = async () => {
  return axiosPostRequest("/mypage/post");
};

// 본인이 좋아요를 누른 글 목록 조회
export const fetchMyFavPosting = async () => {
  return axiosPostRequest("/mypage/favorite_post");
};
