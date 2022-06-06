import React, { useState } from "react";
import styled from "styled-components";
import { Card, Typography, Button, TextField, MenuItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EditIcon from "@mui/icons-material/Edit";
import CommentsList from "./Component/CommentsList";
import EditPosting from "../Posting";

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
  white-space: pre-line;
  line-height: 20px;
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

const PostDetailPresenter = ({
  loading,
  postId,
  title,
  genre,
  postBody,
  fileName,
  id,
  createdDate,
  updatedDate,
  nickname,
  cloth,
  mode,
  onModeToggleButtonClick,
}) => {
  return (
    <>
      {!loading && (
        <>
          {
            // 조회 화면
            mode === "show" && (
              <PostDetailBox>
                <PostDetailCard variant="outlined">
                  <PostDetailContainer>
                    <Typography gutterBottom variant="h4" component="div">
                      <PostDetailTitle>{title}</PostDetailTitle>
                    </Typography>
                    <PostDetailInfo>
                      <WriterName>작성자 : {nickname}</WriterName>
                      <WrittenDate>작성 날짜 : {createdDate}</WrittenDate>
                      <BoardType>{genre}</BoardType>
                    </PostDetailInfo>
                    <ImageBoxArea>
                      <ImageBox src={fileName} />
                    </ImageBoxArea>
                    <TextArea>{postBody}</TextArea>
                    <ButtonContainer>
                      <PostIconArea>
                        <LikeIconArea>
                          <Button variant="text" startIcon={<FavoriteBorderIcon />} size="big" color="error">
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
                            onClick={onModeToggleButtonClick}
                          >
                            수정
                          </Button>
                        </PostEditBtn>
                        <PostDeleteBtn>
                          <Button variant="outlined" startIcon={<DeleteIcon />} size="small" color="error">
                            삭제
                          </Button>
                        </PostDeleteBtn>
                      </EditDeletebtns>
                    </ButtonContainer>

                    <CommentsList />
                  </PostDetailContainer>
                </PostDetailCard>
              </PostDetailBox>
            )
          }
          {
            // 수정 화면
            mode === "edit" && <EditPosting cloth={cloth} setMode={onModeToggleButtonClick} />
          }
        </>
      )}
    </>
  );
};

export default PostDetailPresenter;
