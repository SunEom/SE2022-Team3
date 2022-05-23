import React from "react";
import styled from "styled-components";
import CommentIcon from "@mui/icons-material/Comment";
import { TextField, Button, Pagination } from "@mui/material";
import CommentItem from "../CommentItem";

const NewCommentArea = styled.div`
  margin-top: 50px;
`;

const CommentSubmitIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const CommentsListArea = styled.div`
  margin-top: 25px;
`;

const PiginationArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const CommentIconArea = styled.div`
  margin: 0px 0px 15px 0px;
  display: flex;
`;

const CommentText = styled.div`
  margin: 4px 5px 0px 5px;
  font-size: 15px;
  color: #2e73ab;
`;
const CommentNumCount = styled.div`
  margin-top: 2px;
`;

const CommentsListPresenter = () => {
  return (
    <div>
      <CommentsListArea>
        <CommentIconArea>
          <CommentIcon fontsize="small" color="primary" />
          <CommentText>댓글</CommentText>
          <CommentNumCount>1</CommentNumCount>
        </CommentIconArea>
        <CommentItem />
        <PiginationArea>
          <Pagination count={1} color="primary" />
        </PiginationArea>
      </CommentsListArea>
      <NewCommentArea>
        <TextField
          fullWidth
          id="outlined-multiline-static"
          label="댓글"
          inputProps={{ maxLength: 400 }}
          multiline
          rows={7}
          defaultValue=""
        />
      </NewCommentArea>
      <CommentSubmitIcon>
        <Button variant="contained" size="small">
          등록
        </Button>
      </CommentSubmitIcon>
    </div>
  );
};

export default CommentsListPresenter;
