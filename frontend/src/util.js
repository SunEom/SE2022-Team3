import { getUserState } from "./reduxAccess";

export const accessControl = (allowFor) => {
  if (allowFor === true && !getUserState()) {
    // 로그인된 경우에만 접근 허용
    window.location.replace("/login");
  } else if (allowFor === false && getUserState()) {
    // 로그인되지 않은 경우에만 접근 허용
    window.location.replace("/");
  }
};

export const dateFormatting = (date) => {
  return new Date(+new Date(date) + 3240 * 10000).toISOString().replace("T", " ").replace(/\..*/, "");
};

//내가 작성한 것인지 알려주는 함수
export const isMine = (id) => {
  return id === getUserState().id;
};
