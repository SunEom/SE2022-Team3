import React from "react";
import { requestDeleteUserData } from "../../../../../httpRequest";
import AccountPresenter from "./AccountPresenter";

const AccountContainer = () => {
  const onDeleteButotnClick = () => {
    let answer = window.confirm("한번 삭제된 정보는 되돌릴 수 없습니다.\n정말로 회원탈퇴를 진행하시겠습니까?");

    if (answer) {
      // requestDeleteUserData();
      window.alert("정상적으로 탈퇴되었습니다.\n그동안 저희 서비스를 이용해주셔서 감사합니다.");
    }
  };
  return <AccountPresenter onDeleteButotnClick={onDeleteButotnClick} />;
};

export default AccountContainer;
