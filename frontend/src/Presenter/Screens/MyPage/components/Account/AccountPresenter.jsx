import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";

const AccountContainer = styled.div``;

const AccountHeader = styled(Box)`
  width: 1000px;
  padding-bottom: 10px;
`;

const AccountTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: rgb(220, 0, 0);
`;

const AccountBody = styled.div`
  margin-top: 20px;
`;

const DeleteButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const AccountPresenter = ({ onDeleteButotnClick }) => {
  return (
    <AccountContainer>
      <AccountHeader sx={{ borderBottom: 2 }}>
        <AccountTitle>회원 탈퇴</AccountTitle>
      </AccountHeader>
      <AccountBody>
        <div>회원 탈퇴를 진행하시면 더 이상 복구할 수 없습니다. 다시 한 번 확인하세요!</div>
        <DeleteButtonContainer>
          <Button sx={{ marginTop: 1 }} color="error" variant="contained" onClick={onDeleteButotnClick}>
            회원 탈퇴
          </Button>
        </DeleteButtonContainer>
      </AccountBody>
    </AccountContainer>
  );
};

export default AccountPresenter;
