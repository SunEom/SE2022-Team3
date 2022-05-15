import React from "react";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";
import logo from "../../images/ClesetLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const LoginBox = styled.div`
  min-widht: 1200px;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginCard = styled(Card)`
  width: 800px;
  heigth: 500px;
  display: flex;
`;

const LogoContainer = styled(CardMedia)`
  width: 500px;
  height: 500px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginTitleDiv = styled.div`
  width: 300px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 23px;
  margin-left: 20px;
  margin-bottom: 50px;
`;

const LoginButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const GoogleLoginButton = styled(Button)`
  position: relative;
  right: 10px;
  width: 270px;
  height: 50px;
`;

const LoginButtonContent = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
  align-items: center;
`;

const LoginPresenter = () => {
  return (
    <LoginBox>
      <LoginCard>
        <LogoContainer component="img" alt="cleset logo" image={logo} />
        <ContentContainer>
          <CardContent style={{ padding: 0 }}>
            <Typography gutterBottom variant="h6" component="div">
              <LoginTitleDiv>
                <div>나의 똑똑한 옷장</div>
                <div>CLSET 이용을 위해</div>
                <div>로그인을 해주세요!</div>
              </LoginTitleDiv>
            </Typography>
          </CardContent>
          <CardActions style={{ padding: 0 }}>
            <LoginButtonContainer>
              <GoogleLoginButton variant="outlined">
                <LoginButtonContent>
                  <FontAwesomeIcon icon={faGoogle} />
                  구글로 로그인하기
                </LoginButtonContent>
              </GoogleLoginButton>
            </LoginButtonContainer>
          </CardActions>
        </ContentContainer>
      </LoginCard>
    </LoginBox>
  );
};

export default LoginPresenter;
