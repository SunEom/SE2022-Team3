import React from "react";
import styled from "styled-components";
import { Card, Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import CommentsList from "./Component/CommentsList";
import EditPosting from "../Posting";
import { dateFormatting } from "../../../util";

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
  justify-content: space-between;
  margin-top: 20px;
  color: gray;
  font-size: 16px;
`;

const WriterDiv = styled.div`
  display: flex;
  gap: 20px;
`;

const WriterName = styled.div``;

const WrittenDate = styled.div``;

const BoardType = styled.div`
  margin-left: 300px;
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
  align-items: center;
`;
const LikeIconArea = styled.div`
  display: flex;
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
  post,
  mode,
  onModeToggleButtonClick,
  favorite,
  favCount,
  onFavButtonClick,
  onDeleteButtonClick,
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
                      <WriterDiv>
                        <WriterName>작성자 : {nickname}</WriterName>
                        <WrittenDate>
                          작성 날짜 : {createdDate === updatedDate ? dateFormatting(createdDate) : dateFormatting(updatedDate)}
                        </WrittenDate>
                      </WriterDiv>
                      <BoardType>{genre === "fashion" ? "나만의 패션 코디" : "의상 관리 꿀팁"}</BoardType>
                    </PostDetailInfo>
                    {fileName && (
                      <ImageBoxArea>
                        <ImageBox src={`${process.env.REACT_APP_SERVER_URL}/img/${fileName}`} />
                      </ImageBoxArea>
                    )}
                    <TextArea>{postBody}</TextArea>
                    <ButtonContainer>
                      <PostIconArea>
                        <LikeIconArea>
                          <Button
                            variant="outlined"
                            startIcon={favorite === 0 ? <FavoriteBorderIcon /> : <FavoriteIcon />}
                            size="big"
                            color="error"
                            onClick={onFavButtonClick}
                          >
                            {favCount}
                          </Button>
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
                          <Button variant="outlined" startIcon={<DeleteIcon />} size="small" color="error" onClick={onDeleteButtonClick}>
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
            mode === "edit" && <EditPosting post={post} onModeToggleButtonClick={onModeToggleButtonClick} />
          }
        </>
      )}
    </>
  );
};

export default PostDetailPresenter;
