import { getUserState } from "./reduxAccess";

export const isLogin = () => {
  let userData = getUserState();
  return userData !== undefined && userData !== null;
};

export const accessControl = (allowFor) => {
  let login = isLogin(); // 로그인 상태 받아옴

  console.log(login, allowFor);
  if (allowFor === true && login === false) {
    // 로그인된 경우에만 접근 허용
    window.location.replace("/login");
  } else if (allowFor === false && login === true) {
    // 로그인되지 않은 경우에만 접근 허용
    window.location.replace("/");
  }
};
