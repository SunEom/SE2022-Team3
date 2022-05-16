import React from "react";
import styled from "styled-components";
import headerLogo from "../../../images/ClesetHeaderLogo.png";
import headerLogoTitle from "../../../images/ClesetLogoTitle2.png";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Drawer from "../Drawer";

const HeaderTopContainer = styled.div`
  min-width: 1000px;
  display: flex;
  height: 50px;
  background-color: #fffefa;
  border: 1px solid rgba(20, 20, 20, 0.1);
  align-items: center;
  justify-content: space-between;
`;

const LogoImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLogoImage = styled.img`
  height: 50px;
  width: 50px;
`;

const HeaderLogoTitleImage = styled.img`
  height: 30px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
  height: 50px;
`;

const UserNicknameContainer = styled.div`
  margin-right: 10px;
  position: relative;
  top: 3px;
`;

const LogoutButton = styled(Button)`
  height: 30px;
`;

const LogoutTitle = styled.div`
  margin-right: 5px;
`;

const HeaderPresenter = ({ user, onLogoutButtonClick }) => {
  return (
    <HeaderTopContainer>
      <LogoImageContainer>
        <Drawer user={user} />
        <HeaderLogoImage src={headerLogo} />
        <HeaderLogoTitleImage src={headerLogoTitle} />
      </LogoImageContainer>
      {user && (
        <UserInfoContainer>
          <UserNicknameContainer>Hello {user.nickname}</UserNicknameContainer>
          <LogoutButton variant="outlined" color="success" onClick={onLogoutButtonClick}>
            <LogoutTitle>Logout</LogoutTitle>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </LogoutButton>
        </UserInfoContainer>
      )}
    </HeaderTopContainer>
  );
};

export default HeaderPresenter;
