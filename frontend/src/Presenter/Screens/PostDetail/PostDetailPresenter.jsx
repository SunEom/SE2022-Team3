import React from "react";
import styled from "styled-components";
import { Card, Typography, Button } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EditIcon from "@mui/icons-material/Edit";
import CommentsListPresenter from "./Component/CommentsList/CommentsListPresenter";

const PostDetailBox = styled.div`
  min-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Noto Sans KR", sans-serif;
`;

const PostDetailCard = styled(Card)`
  display: flex;
  width: 900px;
  margin: 100px 0px 100px 0px;
`;

const PostDetailContainer = styled.div`
  display: flex;
  width: 800px;
  flex-direction: column;
  margin: 50px;
`;

const PostDetailTitle = styled.div``;

const PostDetailInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  color: gray;
  font-size: 20px;
`;

const WriterName = styled.div``;

const WrittenDate = styled.div`
  margin-left: 30px;
`;

const BoardType = styled.div`
  margin-left: 300px;
  //align-self: flex-end;
`;

const ImageBoxArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 800px;
  height: 500px;
`;

const ImageBox = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const TextArea = styled.div`
  margin: 70px 0px 50px 0px;
`;

const ButtonContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const PostIconArea = styled.div`
  display: flex;
  margin-bottom: 100px;
`;
const LikeIconArea = styled.div`
  display: flex;
`;

const LikeNumCount = styled.div`
  margin-top: 8px;
`;

const EditDeletebtns = styled.div`
  display: flex;
`;
const PostEditBtn = styled.div``;
const PostDeleteBtn = styled.div`
  margin-left: 10px;
`;

const PostDetailPresenter = () => {
  return (
    <PostDetailBox>
      <PostDetailCard variant="outlined">
        <PostDetailContainer>
          <Typography gutterBottom variant="h4" component="div">
            <PostDetailTitle>TITLE</PostDetailTitle>
          </Typography>
          <PostDetailInfo>
            <WriterName>작성자 : USER1</WriterName>
            <WrittenDate>작성 날짜 : 2022.05.20</WrittenDate>
            <BoardType>나만의 패션 코디</BoardType>
          </PostDetailInfo>
          <ImageBoxArea>
            <ImageBox src="https://image.msscdn.net/images/goods_img/20220415/2493201/2493201_1_500.jpg" />
          </ImageBoxArea>
          <TextArea>
            이번 아식스 신상들 다 예쁘게 뽑은거 같아요ㅠㅠ 특히 이거
            앤트러사이트 앤티크 골드 색상이 개인적으로 마음에 듭니다! 젤
            카야노중에서 이게 착화감도 베스트라는 소문이 있네요ㅎ
          </TextArea>
          <ButtonContainer>
            <PostIconArea>
              <LikeIconArea>
                <Button
                  variant="text"
                  startIcon={<FavoriteBorderIcon />}
                  size="big"
                  color="error"
                >
                  좋아요
                </Button>
                <LikeNumCount>20</LikeNumCount>
              </LikeIconArea>
            </PostIconArea>
            <EditDeletebtns>
              <PostEditBtn>
                <Button
                  variant="outlined"
                  startIcon={<EditIcon />}
                  size="small"
                  color="primary"
                >
                  수정
                </Button>
              </PostEditBtn>
              <PostDeleteBtn>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  size="small"
                  color="error"
                >
                  삭제
                </Button>
              </PostDeleteBtn>
            </EditDeletebtns>
          </ButtonContainer>

          <CommentsListPresenter />
        </PostDetailContainer>
      </PostDetailCard>
    </PostDetailBox>
  );
};

export default PostDetailPresenter;
