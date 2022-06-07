import React from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Button, TextField } from "@mui/material";
import { dateFormatting } from "../../../../../util";

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
  white-space: pre-line;
  line-height: 20px;
`;

const CommentDetail = styled.div`
  display: flex;
`;
const CommentDate = styled.div`
  font-size: 12px;
  margin-top: 20px;
  color: #b6b6b6;
`;

const CommentDetailIconBox = styled.div`
  display: flex;
  justify-content: space-between;
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

const EditCommentDeleteBtn = styled.div`
  margin: 0px 0px 0px 10px;
  color: #b6b6b6;
`;

const CommentItemPresenter = ({ comment, mode, onModeToggleButtonClick, onChange, contents, onDeleteButtonClick, onEditButtonClick }) => {
  return (
    <CommentBox>
      <CommentBoxArea>
        <CommentUser>{comment.user}</CommentUser>
        {
          //댓글 조회
          mode === "show" && (
            <UserCommentArea>
              {comment.comment_body}
              <CommentDetailIconBox>
                <CommentDetail>
                  <CommentDate>
                    {comment.created_date === comment.updated_date
                      ? dateFormatting(comment.created_date)
                      : `${dateFormatting(comment.updated_date)} (수정됨)`}
                  </CommentDate>
                </CommentDetail>
                <CommentIcons>
                  <CommentEditBtn>
                    <IconButton aria-label="edit" size="large" color="primary" onClick={onModeToggleButtonClick}>
                      <EditIcon />
                    </IconButton>
                  </CommentEditBtn>
                  <CommentDeleteBtn>
                    <IconButton aria-label="delete" size="large" color="error" onClick={onDeleteButtonClick}>
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
            <TextField type="text" value={contents} name="comment" onChange={onChange} fullWidth sx={{ fontSize: 1 }} multiline></TextField>

            <EditCommentIcons>
              <Button variant="outlined" size="small" color="primary" onClick={onEditButtonClick}>
                수정
              </Button>

              <EditCommentDeleteBtn>
                <Button variant="outlined" size="small" color="error" onClick={onModeToggleButtonClick}>
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
