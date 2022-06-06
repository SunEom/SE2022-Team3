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
