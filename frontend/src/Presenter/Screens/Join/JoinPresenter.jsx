import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography, TextField } from "@mui/material";
import styled from "styled-components";
import logo from "../../../images/ClesetLogo.png";
import MenuItem from "@mui/material/MenuItem";

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
  display: flex;
  flex-direction: column;
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
  color: green;
`;

const JoinPresenter = ({ onSubmitJoinButton, onSubmitNicknameCheck, onChange, gender, age, nickname }) => {
  return (
    <LoginBox>
      <LoginCard>
        <LogoContainer component="img" alt="cleset logo" image={logo} />
        <ContentContainer>
          <CardContent style={{ padding: 0 }}>
            <Typography gutterBottom variant="h6" component="div">
              <LoginTitleDiv>
                <div display="flex">
                  <TextField
                    label="닉네임"
                    name="nickname"
                    variant="standard"
                    inputProps={{ maxLength: 12 }}
                    sx={{ width: "12.5ch", marginBottom: "1.8ch" }}
                    color="success"
                    onChange={onChange}
                    value={nickname}
                  />
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    sx={{ top: "0.8ch", left: "1.5ch" }}
                    onClick={onSubmitNicknameCheck}
                  >
                    확인
                  </Button>
                </div>
                <TextField
                  name="age"
                  type="number"
                  label="나이"
                  variant="standard"
                  inputProps={{ max: 100, min: 0 }}
                  sx={{ width: "18ch", marginBottom: "2ch" }}
                  color="success"
                  onChange={onChange}
                  value={age}
                />
                <TextField
                  select
                  name="gender"
                  label="성별"
                  defaultValue={gender}
                  onChange={onChange}
                  variant="standard"
                  sx={{ width: "18ch" }}
                  color="success"
                >
                  <MenuItem key="비공개" value="비공개">
                    비공개
                  </MenuItem>
                  <MenuItem key="남자" value="남자">
                    남자
                  </MenuItem>
                  <MenuItem key="여자" value="여자">
                    여자
                  </MenuItem>
                </TextField>
              </LoginTitleDiv>
            </Typography>
          </CardContent>
          <CardActions style={{ padding: 0 }}>
            <LoginButtonContainer>
              <GoogleLoginButton variant="outlined" color="success" onClick={onSubmitJoinButton} type="submit" value="회원가입">
                <LoginButtonContent>회원가입</LoginButtonContent>
              </GoogleLoginButton>
            </LoginButtonContainer>
          </CardActions>
        </ContentContainer>
      </LoginCard>
    </LoginBox>
  );
};

export default JoinPresenter;
