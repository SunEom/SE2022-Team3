import React, { useState } from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Button } from "@mui/material";

const CommentBox = styled.div`
  border: solid #e9e9e9 2px;
  margin-bottom: 10px;
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

const CommentDetailIconBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CommentTime = styled.div`
  margin: 20px 0px 0px 10px;
  color: #b6b6b6;
`;

const CommentIcons = styled.div`
  display: flex;
`;

const CommentEditBtn = styled.div`
  color: #b6b6b6;
`;

const CommentDeleteBtn = styled.div`
  margin: 0px 0px 0px 3px;
  color: #b6b6b6;
`;

const EditCommentIcons = styled.div`
  display: flex;
  justify-content: right;
  padding-top: 20px;
`;
const Modifycommentbox = styled.input`
  height: 73px;
  width: 700px;
  border: 1px solid lightgrey;

  padding: 10px 0px 20px 0px;
  font-family: "Lato", sans-serif;
  &:focus {
    border: 1px solid grey;
  }
`;

const EditCommentDeleteBtn = styled.div`
  margin: 0px 0px 0px 10px;
  color: #b6b6b6;
`;

const CommentItemPresenter = ({
  comment,
  mode,
  onModeToggleButtonClick,
  onChange,
  contents,
}) => {
  return (
    <CommentBox>
      <CommentBoxArea>
        <CommentUser>{comment.user}</CommentUser>
        {
          //댓글 조회
          mode === "show" && (
            <UserCommentArea>
              {comment?.body}
              <CommentDetailIconBox>
                <CommentDetail>
                  <CommentDate>{comment.uploadDate}</CommentDate>
                  <CommentTime>{comment.uploadTime}</CommentTime>
                </CommentDetail>
                <CommentIcons>
                  <CommentEditBtn>
                    <IconButton
                      aria-label="edit"
                      size="large"
                      color="primary"
                      onClick={onModeToggleButtonClick}
                    >
                      <EditIcon />
                    </IconButton>
                  </CommentEditBtn>
                  <CommentDeleteBtn>
                    <IconButton aria-label="delete" size="large" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </CommentDeleteBtn>
                </CommentIcons>
              </CommentDetailIconBox>
            </UserCommentArea>
          )
        }
        {mode === "edit" && (
          <UserCommentArea>
            <Modifycommentbox
              type="text"
              value={contents}
              name="comment"
              onChange={onChange}
            ></Modifycommentbox>

            <EditCommentIcons>
              <Button variant="outlined" size="small" color="primary">
                수정
              </Button>

              <EditCommentDeleteBtn>
                <Button
                  variant="outlined"
                  size="small"
                  color="error"
                  onClick={onModeToggleButtonClick}
                >
                  취소
                </Button>
              </EditCommentDeleteBtn>
            </EditCommentIcons>
          </UserCommentArea>
        )}
      </CommentBoxArea>
    </CommentBox>
  );
};

export default CommentItemPresenter;
