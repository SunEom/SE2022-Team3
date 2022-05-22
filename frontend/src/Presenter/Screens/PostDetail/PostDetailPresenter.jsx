import React from "react";
import styled from "styled-components";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import { style } from "@mui/system";

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

const TextArea = styled.div``;

const ButtonContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const PostIconArea = styled.div`
  display: flex;
  margin-top: 25px;
`;
const LikeIconArea = styled.div`
  display: flex;
`;
const CommentIconArea = styled.div`
  margin-left: 15px;
  display: flex;
`;
const NewCommentArea = styled.div`
  margin-top: 20px;
`;
const CommentSubmitIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const CommentsListArea = styled.div`
  margin-top: 25px;
`;

const CommentBox = styled.div`
  border: solid #e9e9e9 2px;
`;

const CommentBoxArea = styled.div`
  margin: 20px;
`;

const CommentUser = styled.div`
  margin: 10px;
`;

const UserCommentArea = styled.div`
  margin: 15px 0px 0px 15px;
`;

const CommentDetail = styled.div`
  display: flex;
`;
const CommentDate = styled.div`
  margin-top: 20px;
  color: #b6b6b6;
`;

const CommentTime = styled.div`
  margin: 20px 0px 0px 10px;
  color: #b6b6b6;
`;

const ReplyBtn = styled.div`
  margin: 15px 0px 0px 10px;
  color: #b6b6b6;
`;

const PostDetailPresenter = () => {
  return (
    <PostDetailBox>
      <PostDetailCard variant="outlined">
        <PostDetailContainer>
          <Typography gutterBottom variant="h3" component="div">
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
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="본문"
              multiline
              rows={7}
              InputProps={{
                readOnly: true,
              }}
              defaultValue="이번 아식스 신상들 다 예쁘게 뽑은거 같아요ㅠㅠ 특히 이거 앤트러사이트 앤티크 골드 색상이 개인적으로 마음에 듭니다! 젤 카야노중에서 이게 착화감도 베스트라는 소문이 있네요ㅎ"
            />
          </TextArea>
          <ButtonContainer>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              size="small"
              color="primary"
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              size="small"
              color="error"
            >
              Delete
            </Button>
          </ButtonContainer>
          <PostIconArea>
            <LikeIconArea>
              <Button
                variant="text"
                startIcon={<FavoriteBorderIcon />}
                size="small"
                color="error"
              >
                좋아요
              </Button>
              <div>20</div>
            </LikeIconArea>
            <CommentIconArea>
              <Button
                variant="text"
                startIcon={<CommentIcon />}
                size="small"
                color="primary"
              >
                댓글
              </Button>
              <div>1</div>
            </CommentIconArea>
          </PostIconArea>
          <NewCommentArea>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="댓글"
              multiline
              rows={7}
              defaultValue=""
            />
          </NewCommentArea>
          <CommentSubmitIcon>
            <Button variant="text" size="small">
              등록
            </Button>
          </CommentSubmitIcon>
          <CommentsListArea>
            <CommentBox>
              <CommentBoxArea>
                <CommentUser>User2</CommentUser>
                <UserCommentArea>
                  저 이거 구매했는데 착화감 정말 좋습니다. 앤티크골드 색상으로
                  가세요!
                  <CommentDetail>
                    <CommentDate>2022.05.21</CommentDate>
                    <CommentTime>13:11</CommentTime>
                    <ReplyBtn>
                      <Button variant="text" size="small" color="primary">
                        답글쓰기
                      </Button>
                    </ReplyBtn>
                  </CommentDetail>
                </UserCommentArea>
              </CommentBoxArea>
            </CommentBox>
          </CommentsListArea>
        </PostDetailContainer>
      </PostDetailCard>
    </PostDetailBox>
  );
};

export default PostDetailPresenter;
