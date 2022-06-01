import React from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

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

const CommentItemPresenter = ({ comment }) => {
  return (
    <CommentBox>
      <CommentBoxArea>
        <CommentUser>{comment?.user}</CommentUser>
        <UserCommentArea>
          {comment?.body}
          <CommentDetailIconBox>
            <CommentDetail>
              <CommentDate>{comment?.uploadDate}</CommentDate>
              <CommentTime>{comment?.uploadTime}</CommentTime>
            </CommentDetail>
            <CommentIcons>
              <CommentEditBtn>
                <IconButton aria-label="edit" size="large" color="primary">
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
      </CommentBoxArea>
    </CommentBox>
  );
};

export default CommentItemPresenter;
